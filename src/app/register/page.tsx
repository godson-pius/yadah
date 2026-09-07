"use client";

import { useMutation } from "convex/react";
import Link from "next/link";
import { api } from "../../../convex/_generated/api";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Register() {
  const insertUser = useMutation(api.users.insertUser);
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const url = "https://yadahconcert.vercel.app";

  const handleSubmit = async (formData: FormData) => {
    setSubmitting(true);
    setError("");
    const data = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      gender: formData.get("gender") as string,
      church: formData.get("church") as string,
      attendanceMode: formData.get("mode") as string,
      heardFrom: formData.get("heardfrom") as string,
      registrationType: formData.get("regType") as string,
      preferredUnit: formData.get("unit") as string,
      attendedBefore: formData.get("attendedBefore") as string,
      createdAt: new Date().toISOString(),
    };
    const name = formData.get("name") as string;
    const mailData = {
      email: formData.get("email") as string,
      message: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#111"><h1>Yadah MEGA Concert 2025</h1><p>Dear ${name},</p><p>Thank you for registering for the Yadah MEGA Concert. This is more than an event; it is a divine gathering where worship rises, burdens are lifted, and joy overflows.</p><div style="padding:16px;background:#f3f4f6;border-left:4px solid #d9ff43"><b>Theme:</b> Halal<br /><b>Date:</b> November 14th, 2025<br /><b>Venue:</b> Vee-I-Pee Event Centre, New Haven</div><p>Come expectant. Come ready. Come with a heart of worship!</p></div>`,
    };

    try {
      const res = await insertUser({ data });
      if (res !== null) throw new Error("Registration failed");
      setUser(name);
      await fetch(`${url}/api/send-email`, { method: "POST", body: JSON.stringify(mailData) });
    } catch {
      setError("We could not complete your registration. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return <main className="register-page"><Navbar /><div className="register-layout"><div className="register-panel"><div className={`register-message ${user ? "visible" : ""}`}>See you in Yadah 2025, <b>{user}</b> 😇</div><p className="eyebrow">Your place in the room</p><h1>Register for a night of pure praise.</h1><p>Fill in your details and come ready for an encounter. Physical and virtual attendance are welcome.</p>{error && <p style={{ color: "var(--orange)" }}>{error}</p>}<form action={handleSubmit} className="register-form">
    <div className="formgroup"><label htmlFor="name">Name</label><input id="name" type="text" name="name" required placeholder="Your full name" /></div>
    <div className="formgroup"><label htmlFor="gender">Gender</label><select id="gender" name="gender" required><option value="">Select gender</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select></div>
    <div className="formgroup"><label htmlFor="email">Email</label><input id="email" type="email" name="email" required placeholder="you@example.com" /></div>
    <div className="formgroup"><label htmlFor="phone">Phone number / WhatsApp</label><input id="phone" type="text" name="phone" required placeholder="Your phone number" /></div>
    <div className="formgroup"><label htmlFor="church">Church name</label><input id="church" type="text" name="church" required placeholder="Your church" /></div>
    <div className="formgroup"><label htmlFor="mode">Mode of attendance</label><select id="mode" name="mode" required><option value="">Select mode</option><option value="virtual">Virtual</option><option value="physical">Physical</option></select></div>
    <div className="formgroup"><label htmlFor="heardfrom">Where did you hear about Yadah?</label><select id="heardfrom" name="heardfrom" required><option value="">Select one</option><option value="friend">Friend</option><option value="socialmedia">Social media</option><option value="google">Google</option><option value="church">Church fellowship</option><option value="banner">Banner ads</option><option value="other">Other</option></select></div>
    <div className="formgroup"><label htmlFor="regType">Registration type</label><select id="regType" name="regType" required><option value="">Select type</option><option value="attendee">Attendee</option><option value="volunteer">Volunteer</option></select></div>
    <div className="formgroup"><label htmlFor="unit">Select unit (if volunteer)</label><select id="unit" name="unit" required><option value="">Select unit</option><option value="Media">Media</option><option value="Content Creation">Content creation</option><option value="Ushering">Ushering</option><option value="Prayer">Prayer</option><option value="Protocol">Protocol</option><option value="Welfare">Welfare</option><option value="Venue Management">Venue management</option><option value="Logistics and transportation">Logistics and transportation</option><option value="General Production">General Production</option><option value="Security">Security</option></select></div>
    <div className="formgroup"><label htmlFor="attendedBefore">Have you attended before?</label><select id="attendedBefore" name="attendedBefore" required><option value="">Select one</option><option value="No">No</option><option value="Yes">Yes</option></select></div>
    <div className="register-wide" style={{ display: "flex", alignItems: "center", gap: ".8rem", marginTop: ".75rem" }}><button type="submit" className="button-primary" disabled={submitting}>{submitting ? <><FiLoader className="animate-spin" /> Registering…</> : <>Register now ↗</>}</button><Link href="/" className="button-secondary">Return home</Link></div>
  </form></div><div className="register-art" /></div><Footer /></main>;
}
