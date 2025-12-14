import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: Request) {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    const { name, email, message, phone, company, industry } = await req.json();

    if (!name || !email || !message) {
        return new Response("Missing fields", { status: 400 });
    }

    await resend.emails.send({
        from: "Efficidex <support@efficidex.com>",
        to: ["support@efficidex.com"],
        subject: `New Contact — ${name}`,
        html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Company:</b> ${company || "-"}</p>
      <p><b>Industry:</b> ${industry || "-"}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
    });

    return Response.json({ success: true });
}
