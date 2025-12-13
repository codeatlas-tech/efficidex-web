import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const {
        name,
        email,
        phone,
        company,
        companySize,
        industry,
        challenge,
    } = req.body || {};

    if (!name || !email || !company) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        // YOU get this email
        await resend.emails.send({
            from: "Efficidex <support@efficidex.com>",
            to: ["support@efficidex.com"],
            subject: `🚀 Demo Request — ${company}`,
            html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Company Size:</b> ${companySize}</p>
        <p><b>Industry:</b> ${industry}</p>
        <p><b>Challenge:</b><br/>${challenge}</p>
      `,
        });

        // Auto-reply to user
        await resend.emails.send({
            from: "Efficidex <support@efficidex.com>",
            to: [email],
            subject: "We received your demo request",
            html: `
        <p>Hi ${name},</p>
        <p>Thanks for requesting a demo of <b>Efficidex</b>.</p>
        <p>Our team will contact you shortly.</p>
        <p>— Team Efficidex</p>
      `,
        });

        return res.json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Email failed" });
    }
}
