import { createTransport } from "nodemailer";

export async function POST(request: Request) {
  const body: sendData = await request.json();
  // const data = await getData(body);

  type sendData = {
    company: string;
    name: string;
    email: string;
    message: string;
  };

  const transporter = createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: "ポートフォリオからのお問い合わせ",
    text: JSON.stringify(body), // req.bodyをString型に変換する,
  });

  return new Response("Hello, Next.js!");
}
