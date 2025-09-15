import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yadah Mega Concert",
  description:
    "The Yadah MEGA Concert is more than just an event; it is a divine gathering, a spiritual encounter where hearts unite to glorify God, burdens are lifted, and joy overflows. With the theme “Halal”, this night will be a holy expression of worship, thanksgiving, and surrender to the Lord. Come expectant. Come ready. Come with a heart of worship!",
  keywords: [
    "Yadah MEGA Concert 2025",
    "Halal concert Enugu",
    "Christian worship concert Nigeria",
    "Praise and worship event 2025",
    "Gospel concert Enugu 2025",
    "Prayer and worship night",
    "Elshaddai concert 2025",
    "Mega gospel event Nigeria",
    "Worship experience Enugu",
    "Christian events November 2025",
    "Night of praise and prayer",
    "Hallelujah worship night",
    "Youth gospel concert Enugu",
    "Spiritual revival concert 2025",
    "Vee-I-Pee Event Centre events",
  ],
  openGraph: {
    title: "Yadah Mega Concert",
    description:
      "The Yadah MEGA Concert is more than just an event; it is a divine gathering, a spiritual encounter where hearts unite to glorify God, burdens are lifted, and joy overflows. With the theme “Halal”, this night will be a holy expression of worship, thanksgiving, and surrender to the Lord. Come expectant. Come ready. Come with a heart of worship!",
    type: "website",
    siteName: "Yadah Mega Concert",
    locale: "en_NG",
    images: [
      {
        url: "https://yadahconcert.vercel.app",
        width: 1200,
        height: 630,
        alt: "Yadah Mega Concert",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.className} antialiased`}>{children}</body>
    </html>
  );
}
