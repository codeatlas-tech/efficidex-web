import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot, Copy } from "lucide-react";

import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Types & Internal Context                                                   */
/* -------------------------------------------------------------------------- */

type InputOTPProps = Omit<
    React.ComponentPropsWithoutRef<typeof OTPInput>,
    "value" | "onChange" | "maxLength"
> & {
    /** Total number of OTP digits */
    length: number;
    /** Mask digits with ● but show the last typed digit briefly */
    masked?: boolean;
    /** Called when all digits are filled */
    onComplete?: (code: string) => void;
    /** Error state (triggers shake + haptic) */
    error?: boolean;
    /** Enable WebOTP / SMS autofill (Chrome Android only) */
    enableWebOTP?: boolean;
    /** Optional ARIA label for the group */
    ariaLabel?: string;
};

type OTPUIContextValue = {
    masked: boolean;
    length: number;
    lastVisibleIndex: number | null;
    lastVisibleChar: string | null;
    error: boolean;
};

const OTPUIContext = React.createContext<OTPUIContextValue | null>(null);

function useOTPUIContext() {
    const ctx = React.useContext(OTPUIContext);
    if (!ctx) {
        throw new Error("InputOTPSlot must be used inside <InputOTP>.");
    }
    return ctx;
}

/* -------------------------------------------------------------------------- */
/* HAPTIC UTILITY                                                             */
/* -------------------------------------------------------------------------- */

const vibrate = (duration = 20) => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        // best-effort; ignore failures
        (navigator as any).vibrate(duration);
    }
};

/* -------------------------------------------------------------------------- */
/* WEB OTP (Chrome Android only, best-effort)                                 */
/* -------------------------------------------------------------------------- */

function useWebOTP(enabled: boolean | undefined, onCode: (code: string) => void) {
    React.useEffect(() => {
        if (!enabled) return;
        if (typeof window === "undefined") return;
        if (!("OTPCredential" in window)) return;

        const ac = new AbortController();

        (async () => {
            try {
                const otp: any = await (navigator as any).credentials.get({
                    otp: { transport: ["sms"] },
                    signal: ac.signal,
                });
                if (otp?.code) {
                    onCode(String(otp.code));
                }
            } catch {
                // ignore – user may cancel or browser may not support fully
            }
        })();

        return () => ac.abort();
    }, [enabled, onCode]);
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

const InputOTP = React.forwardRef<
    React.ElementRef<typeof OTPInput>,
    InputOTPProps
>(
    (
        {
            className,
            containerClassName,
            length,
            masked = true,
            onComplete,
            error = false,
            enableWebOTP = false,
            ariaLabel = "One-time password",
            ...props
        },
        ref
    ) => {
        const [value, setValue] = React.useState("");
        const [lastVisibleIndex, setLastVisibleIndex] =
            React.useState<number | null>(null);
        const [lastVisibleChar, setLastVisibleChar] =
            React.useState<string | null>(null);

        // brief reveal timeout
        const revealTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
            null
        );

        const setReveal = React.useCallback((index: number, char: string) => {
            if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);
            setLastVisibleIndex(index);
            setLastVisibleChar(char);
            revealTimeoutRef.current = setTimeout(() => {
                setLastVisibleIndex(null);
                setLastVisibleChar(null);
            }, 400);
        }, []);

        const handleChange = React.useCallback(
            (raw: string) => {
                const cleaned = raw.replace(/\D/g, "").slice(0, length);

                // Haptics: light tick on input
                if (cleaned.length > value.length) {
                    vibrate(10);
                    const idx = cleaned.length - 1;
                    const ch = cleaned[idx];
                    if (ch) setReveal(idx, ch);
                }

                setValue(cleaned);

                if (cleaned.length === length) {
                    vibrate(30); // stronger confirm
                    onComplete?.(cleaned);
                }
            },
            [length, onComplete, setReveal, value.length]
        );

        // WebOTP autofill
        useWebOTP(enableWebOTP, (code) => {
            const cleaned = String(code).replace(/\D/g, "").slice(0, length);
            if (!cleaned) return;
            setValue(cleaned);
            if (cleaned.length === length) {
                vibrate(30);
                onComplete?.(cleaned);
            }
        });

        // Haptic + shake on error
        React.useEffect(() => {
            if (error) vibrate(50);
        }, [error]);

        React.useEffect(
            () => () => {
                if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);
            },
            []
        );

        return (
            <OTPUIContext.Provider
                value={{
                    masked,
                    length,
                    lastVisibleIndex,
                    lastVisibleChar,
                    error,
                }}
            >
                <div
                    role="group"
                    aria-label={ariaLabel}
                    aria-invalid={error || undefined}
                    className={cn(
                        "flex items-center gap-3",
                        error && "otp-error" // you define this animation in global CSS
                    )}
                >
                    <OTPInput
                        ref={ref}
                        maxLength={length}
                        value={value}
                        onChange={handleChange}
                        containerClassName={cn(
                            "flex items-center gap-2 has-[:disabled]:opacity-50",
                            containerClassName
                        )}
                        className={cn("disabled:cursor-not-allowed", className)}
                        // Paste handler – full OTP paste support
                        onPaste={(e) => {
                            const pasted = e.clipboardData.getData("text");
                            const numbers = pasted.replace(/\D/g, "").slice(0, length);
                            if (numbers.length > 0) {
                                e.preventDefault();
                                handleChange(numbers);
                            }
                        }}
                        {...props}
                    />

                    {/* Copy all – only when full */}
                    {value.length === length && (
                        <button
                            type="button"
                            onClick={() => navigator.clipboard.writeText(value)}
                            className="p-2 rounded border text-muted-foreground hover:bg-muted transition"
                            aria-label="Copy one-time password"
                        >
                            <Copy className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </OTPUIContext.Provider>
        );
    }
);
InputOTP.displayName = "InputOTP";

/* -------------------------------------------------------------------------- */
/* GROUP                                                                      */
/* -------------------------------------------------------------------------- */

const InputOTPGroup = React.forwardRef<
    React.ElementRef<"div">,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

/* -------------------------------------------------------------------------- */
/* SLOT (masked + last-digit reveal + caret)                                  */
/* -------------------------------------------------------------------------- */

const InputOTPSlot = React.forwardRef<
    React.ElementRef<"div">,
    React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
    const ctx = React.useContext(OTPInputContext);
    const ui = useOTPUIContext();

    const slot = ctx?.slots?.[index];
    const char = slot?.char ?? "";
    const hasFakeCaret = slot?.hasFakeCaret ?? false;
    const isActive = slot?.isActive ?? false;

    const showChar =
        !ui.masked || !char
            ? char
            : ui.lastVisibleIndex === index && ui.lastVisibleChar
                ? ui.lastVisibleChar
                : "●";

    return (
        <div
            ref={ref}
            className={cn(
                "relative flex h-12 w-12 items-center justify-center border-y border-r border-input " +
                "text-lg font-medium transition-all first:rounded-l-md first:border-l last:rounded-r-md",
                isActive && "z-10 ring-2 ring-ring ring-offset-background",
                className
            )}
            aria-label={`Digit ${index + 1} of ${ui.length}`}
            {...props}
        >
            {showChar}

            {hasFakeCaret && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="animate-caret-blink h-5 w-px bg-foreground" />
                </div>
            )}
        </div>
    );
});
InputOTPSlot.displayName = "InputOTPSlot";

/* -------------------------------------------------------------------------- */
/* SEPARATOR                                                                  */
/* -------------------------------------------------------------------------- */

const InputOTPSeparator = React.forwardRef<
    React.ElementRef<"div">,
    React.ComponentPropsWithoutRef<"div">
>((props, ref) => (
    <div
        ref={ref}
        role="separator"
        className="mx-2 flex items-center justify-center text-muted-foreground"
        {...props}
    >
        <Dot />
    </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

/* -------------------------------------------------------------------------- */
/* TIMER + RESEND                                                             */
/* -------------------------------------------------------------------------- */

function useOTPTimer(seconds: number) {
    const [time, setTime] = React.useState(seconds);

    React.useEffect(() => {
        if (time === 0) return;
        const id = setTimeout(() => setTime((t) => t - 1), 1000);
        return () => clearTimeout(id);
    }, [time]);

    const reset = React.useCallback(() => setTime(seconds), [seconds]);

    return { time, reset };
}

type OTPTimerResendProps = {
    initialSeconds?: number;
    onResend: () => void;
};

const OTPTimerResend: React.FC<OTPTimerResendProps> = ({
    initialSeconds = 30,
    onResend,
}) => {
    const { time, reset } = useOTPTimer(initialSeconds);

    const handleResend = () => {
        reset();
        onResend();
    };

    return (
        <div className="mt-3 text-sm text-muted-foreground">
            {time > 0 ? (
                <>Resend code in <span className="font-mono">{time}s</span></>
            ) : (
                <button
                    type="button"
                    onClick={handleResend}
                    className="text-primary font-medium hover:underline"
                >
                    Resend OTP
                </button>
            )}
        </div>
    );
};

/* -------------------------------------------------------------------------- */

export {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
    OTPTimerResend,
};
