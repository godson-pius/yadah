import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Navbar from "./Nav";

export default function Hero() {
  return (
    <div className="site-shell">
      <Navbar />
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">A night of pure praise / Enugu</p>
            <h1 className="hero-title">Come ready. <span>Come alive.</span></h1>
            <p className="hero-description">Yadah Mega Concert is a divine gathering where worship rises, burdens lift, and joy overflows. One night. One sound. Every heart turned toward God.</p>
            <div className="hero-actions">
              <Link href="/register" className="button-primary">Reserve your place <BsArrowUpRight /></Link>
              <Link href="/about-yadah" className="button-secondary">Explore Yadah</Link>
            </div>
          </div>
          <div className="hero-poster-wrap">
            <Image src="/yadahf.png" alt="Yadah Mega Concert 2025 poster" className="hero-poster" width={1024} height={1280} priority />
            <div className="hero-stamp">The<br /> Glory of<br />God</div>
          </div>
        </div>
        <div className="hero-meta mt-10"><span>20 / 11 / 26</span><span>Vee-I-Pee Event Centre, New Haven</span><span>8 PM till dawn</span></div>
      </section>
      {/* <div className="ticker"><div className="ticker-track"><span>Yadah Mega Concert 2025</span><span>Theme: Halal</span><span>Come expectant</span><span>Yadah Mega Concert 2025</span><span>Theme: Halal</span></div></div> */}
    </div>
  );
}
