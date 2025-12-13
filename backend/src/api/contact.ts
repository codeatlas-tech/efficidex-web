import { Router } from "express";
import { Resend } from "resend";
import { env } from "../config/env";

const router = Router();
const resend = new Resend(env.RESEND_API_KEY);

router.post("/", async (req, res) => {
    const { name, email, phone, company, industry, message } = req.body;

    try {
        // 1️⃣ Internal notification
        await resend.emails.send({
            from: "Efficidex <support@efficidex.com>",
            to: ["support@efficidex.com"],
            subject: `New Contact: ${name}`,
            html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Industry:</b> ${industry}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
        });

        // 2️⃣ Auto-reply to user
        await resend.emails.send({
            from: "Efficidex <support@efficidex.com>",
            to: [email],
            subject: "We’ve received your message",
            html: `
        <p>Hi ${name},</p>

        <p>Thanks for reaching out to <strong>Efficidex</strong>.</p>

        <p>Your message has been received and our team will get back to you shortly.</p>

        <p>If your request is urgent, feel free to reply to this email.</p>

        <p>— Team Efficidex</p>
      `,
        });

        res.json({ success: true });
    } catch (err) {
        console.error("Contact email failed:", err);
        res.status(500).json({ error: "Failed to send email" });
    }
});

export default router;
