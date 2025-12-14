import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: Request) {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    const {
        name,
        email,
        phone,
        company,
        companySize,
        industry,
        challenge,
    } = await req.json();

    if (!name || !email || !company) {
        return new Response("Missing fields", { status: 400 });
    }

    await resend.emails.send({
        from: "Efficidex <support@efficidex.com>",
        to: ["support@efficidex.com"],
        subject: `Demo Request — ${company}`,
        html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Company:</b> ${company}</p>
      <p><b>Company Size:</b> ${companySize || "-"}</p>
      <p><b>Industry:</b> ${industry || "-"}</p>
      <p><b>Challenge:</b><br/>${challenge || "-"}</p>
    `,
    });

    return Response.json({ success: true });
}
