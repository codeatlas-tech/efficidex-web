import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, phone, company, industry, message } = req.body || {};

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        await resend.emails.send({
            from: "Efficidex <support@efficidex.com>",
            to: ["support@efficidex.com"],
            subject: `📩 New Contact — ${name}`,
            html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Industry:</b> ${industry}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
        });

        await resend.emails.send({
            from: "Efficidex <support@efficidex.com>",
            to: [email],
            subject: "We received your message",
            html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting Efficidex.</p>
        <p>We’ll get back to you shortly.</p>
        <p>— Team Efficidex</p>
      `,
        });

        return res.json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Email failed" });
    }
}
