"use client";
import { useMutation } from "convex/react";
import Link from "next/link";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";

export default function Register() {
  const insertUser = useMutation(api.users.insertUser);
  const [anim, setAnim] = useState<string>("-translate-y-full top-0");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [loading, setLoading] = useState<string>("-translate-y-full top-0");
  const [user, setUser] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    // const data = Object.fromEntries(formData.entries());

    setTimeout(() => {
      setLoading("top-3 lg:top-5 -translate-y-0");
      setAnim("-translate-y-full top-0");
      setSubmitting(true);
    }, 100);

    const data = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      church: formData.get("church") as string,
      createdAt: new Date().toISOString() as string,
    };

    const mailData = {
      email: formData.get("email") as string,
      message: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Yadah Mega Concert Registration</title>
        </head>
        <body style="background-color:#f3f4f6; margin:0; padding:20px; font-family: "Helvetica", "Arial", "Segoe UI", "Trebuchet MS", sans-serif;">
          <div style="max-width:600px; margin:0 auto; background:#f3f4f6; border-radius:16px; padding:32px; box-shadow:0 10px 25px rgba(0,0,0,0.1);">

            <!-- Header -->
            <h1 style="font-size:24px; font-weight:bold; margin:0; color:#000000; text-align:center;">
              Yadah MEGA Concert 2025
            </h1>
            <p style="color:#4b5563; font-size:16px; margin:8px 0 24px; text-align:center;">
              Theme: <b>Halal</b>
            </p>

            <!-- Body -->
            <div style="color:#374151; font-size:16px; line-height:1.6;">
              <p>Dear ${formData.get("name") as string},</p>
              <p>
                Thank you for registering for the
                <span style="font-weight:bold; color:#ea580c;">Yadah MEGA Concert</span>.
                This is more than just an event, it’s a divine gathering, a holy encounter
                where worship rises, burdens are lifted, and joy overflows. <br />
                With the theme <span style="font-style:italic; font-weight:600;">“Halal”</span>,
                we will lift up pure praise, thanksgiving, and surrender to the Lord.
              </p>

              <!-- Event Info -->
              <div style="margin-top:20px; padding:16px; background:white; border-radius:8px; border-left:4px solid #ea580c;">
                <p style="margin:0; font-size:16px; color:#111827; font-weight:500;">
                  📅 Date: <span style="color:#ea580c;">November 14th, 2025</span><br />
                  📍 Venue: <span style="color:#ea580c;">Vee-I-Pee Event Centre, New Haven</span>
                </p>
              </div>

              <p style="margin-top:16px;">
                Come expectant. Come ready. Come with a heart of worship!
              </p>
            </div>

            <!-- CTA -->
            <div style="text-align:center; margin-top:32px;">
              <a href="[Insert Link Here]"
                 style="display:inline-block; background:#000000; color:#ffffff; text-decoration:none; font-size:16px; font-weight:600; padding:12px 40px; border-radius:6px;">
                View Event Details
              </a>
            </div>

            <!-- Footer -->
            <div style="margin-top:40px; text-align:center; color:#9ca3af; font-size:14px;">
              <p style="margin:0;">
                Follow us on socials:
                <a href="https://web.facebook.com/profile.php?id=61580494344252" style="color:#0284c7; text-decoration:none; margin-left:6px;">Facebook</a> ·
                <a href="" style="color:#0284c7; text-decoration:none; margin-left:6px;">Instagram</a> ·
                <a href="" style="color:#0284c7; text-decoration:none; margin-left:6px;">TikTok</a>
              </p>
              <p style="margin-top:8px;">— The Yadah MEGA Concert Team</p>
            </div>
          </div>
        </body>
      </html>
      `,
    };

    const res = await insertUser({ data });
    if (res === null) {
      setUser(formData.get("name") as string);
      setSubmitting(false);
      setAnim("top-3 -translate-y-0");
      setLoading("-translate-y-full top-0");

      // Send email
      await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        body: JSON.stringify(mailData),
      });
    } else {
      alert("Failed to register. Please try again");
    }
  };
  return (
    <main className="w-full h-screen">
      {/*<Navbar />*/}
      <section className="w-full flex justify-between">
        <div className="w-full h-screen lg:w-[60%] flex flex-col px-7 py-20 lg:px-72 lg:py-20 bg-[url('/white4.jpg')] bg-cover bg-center relative">
          <h2 className="text-2xl font-bold">Yadah Mega Concert</h2>
          <p className="text-xs text-gray-500">
            Register your presence via this form.
          </p>
          <form
            action={handleSubmit}
            className="flex flex-col gap-4 lg:gap-5 mt-6"
          >
            <div className="flex flex-col formgroup">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="bg-gray-100 border-[1.5px] border-gray-200 text-base rounded-lg placeholder:text-sm px-3 py-2 w-full lg:w-96"
              />
            </div>

            <div className="flex flex-col formgroup">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="bg-gray-100 border-[1.5px] border-gray-200 text-base rounded-lg placeholder:text-sm px-3 py-2 w-full lg:w-96"
              />
            </div>

            <div className="flex flex-col formgroup">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number (Whatsapp Preferably)
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="bg-gray-100 border-[1.5px] border-gray-200 text-base rounded-lg placeholder:text-sm px-3 py-2 w-full lg:w-96"
              />
            </div>

            <div className="flex flex-col formgroup">
              <label htmlFor="church" className="text-sm font-medium">
                Church name
              </label>
              <input
                id="church"
                type="text"
                name="church"
                required
                placeholder="Enter your church"
                className="bg-gray-100 border-[1.5px] border-gray-200 text-base rounded-lg placeholder:text-sm px-3 py-2 w-full lg:w-96"
              />
            </div>
            <div className="flex items-center mt-2 gap-3">
              <button
                type="submit"
                className={
                  "bg-black glass to-black w-max font-medium text-white rounded-lg justify-center items-center gap-1 px-16 py-2 flex"
                }
              >
                Register
                {submitting ? (
                  <FiLoader className="animate-spin text-lg" />
                ) : null}
              </button>
              <Link
                href={"/"}
                className="text-xs text-orange-500 font-bold duration-500 hover:scale-x-110"
              >
                Return to home
              </Link>
            </div>
          </form>
          <div
            className={`absolute flex justify-center items-center rounded-full lg:left-56 bg-[url('/dark-grudge.jpg')] bg-center px-5 lg:px-20 glass py-3 font-medium text-white transition-transform duration-500 text-center ${anim}`}
          >
            <small>
              See you in Yadah 2025, <b>{user && user}</b> 😇
            </small>
          </div>

          <div
            className={`absolute flex justify-center items-center rounded-full lg:left-72 bg-[url('/dark-grudge.jpg')] bg-center px-5 lg:px-20 glass py-3 font-medium text-white transition-transform duration-500 text-center ${loading}`}
          >
            <FiLoader className="animate-spin text-lg" />
          </div>
        </div>

        <div className="w-[49%] bg-[url('/banner.jpeg')] bg-cover bg-center hidden lg:block"></div>
      </section>
    </main>
  );
}
