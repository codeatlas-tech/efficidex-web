import { Router } from "express";
import { Resend } from "resend";
import { env } from "../config/env";

const router = Router();
const resend = new Resend(env.RESEND_API_KEY);

router.post("/", async (req, res) => {
    const {
        name,
        email,
        phone,
        company,
        companySize,
        industry,
        challenge,
    } = req.body;

    try {
        // 1️⃣ Internal notification
        await resend.emails.send({
            from: "Efficidex <support@efficidex.com>",
            to: ["support@efficidex.com"],
            subject: `🚀 Demo Request — ${company}`,
            html: `
        <h2>New Demo Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Company Size:</b> ${companySize}</p>
        <p><b>Industry:</b> ${industry}</p>
        <p><b>Challenge:</b><br/>${challenge}</p>
      `,
        });

        // 2️⃣ Auto-reply to user
        await resend.emails.send({
            from: "Efficidex <support@efficidex.com>",
            to: [email],
            subject: "We received your demo request",
            html: `
        <p>Hi ${name},</p>

        <p>Thanks for requesting a demo of <strong>Efficidex</strong>.</p>

        <p>Our team has received your request and will reach out shortly
        to schedule a personalized walkthrough.</p>

        <p><strong>What happens next:</strong></p>
        <ul>
          <li>We review your use case</li>
          <li>We contact you within 24 hours</li>
          <li>We tailor the demo to your workflows</li>
        </ul>

        <p>If anything is urgent, just reply to this email.</p>

        <p>— Team Efficidex</p>
      `,
        });

        res.json({ success: true });
    } catch (err) {
        console.error("Demo email failed", err);
        res.status(500).json({ error: "Failed to send demo request" });
    }
});

export default router;
