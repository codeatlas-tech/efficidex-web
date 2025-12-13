"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const query = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;
        const mql = window.matchMedia(query);

        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

        // initial state
        setIsMobile(mql.matches);

        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    return isMobile;
}
