"use client";

import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const links = [["Home", "/"], ["About Yadah", "/about-yadah"], ["Memories", "/memories"]];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">
          <Image src="/yadahf.png" alt="Yadah Mega Concert 2025 poster" className="brand-mark" width={32} height={32} />
        </span><span>Yadah / 2026</span>
      </Link>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([label, href]) => <Link key={href} href={href} className={`nav-link ${pathname === href ? "active" : ""}`} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/register" className="nav-cta" onClick={() => setOpen(false)}>Register now ↗</Link>
      </nav>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <RiCloseLine size={25} /> : <HiMenuAlt3 size={25} />}
      </button>
    </header>
  );
}
