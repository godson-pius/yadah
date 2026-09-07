import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  const body = await req.json();

  const message = {
    from: `The Yadah Concert`,
    to: body.email,
    subject:
      body.subject || "You’re Registered for Yadah MEGA Concert – HALAL!",
    html: body.message,
    headers: {
      "X-Entity-Ref-ID": "newmail",
    },
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_MAIL_FROM,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
    tls: {
      // Remove on production
      rejectUnauthorized: true,
    },
  });

  try {
    await transporter.sendMail(message);
    return NextResponse.json(
      { message: "Email sent successfully", success: true },
      { status: 200 },
    );
    // await resend.emails.send({
    //   from: "Yadah Concert Media <onboarding@resend.dev>",
    //   to: body.email,
    //   subject:
    //     body.subject || "You’re Registered for Yadah MEGA Concert – HALAL!",
    //   html: body.message,
    // });
    // return NextResponse.json(
    //   { message: "Email sent successfully", success: true },
    //   { status: 200 },
    // );
  } catch (e) {
    console.log("Error sending email:", e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
