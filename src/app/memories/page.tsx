"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

const images = Array.from({ length: 35 }, (_, index) => index === 0 ? "gallery.jpg" : `gallery${index + 1}.jpg`);

export default function Memories() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const showNext = () => setActiveIndex((current) => current === null ? 0 : (current + 1) % images.length);
  const showPrevious = () => setActiveIndex((current) => current === null ? images.length - 1 : (current - 1 + images.length) % images.length);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return <main className="site-shell"><Navbar /><section className="page-hero"><p className="eyebrow">Archive / The moments that stay</p><h1>Yadah memories.</h1><p>Testimonies of joy, encounters of worship, and lives touched by the presence of God. Click any image to view it fully.</p></section><section className="section"><div className="memory-grid">{images.map((image, index) => <button key={image} className="memory-card" style={{ backgroundImage: `url('/memories/${image}')` }} aria-label={`View Yadah memory ${index + 1}`} onClick={() => setActiveIndex(index)} />)}</div></section><Footer />{activeImage && activeIndex !== null && <div className="memory-lightbox" role="dialog" aria-modal="true" aria-label={`Yadah memory ${activeIndex + 1} of ${images.length}`} onClick={() => setActiveIndex(null)}><div className="memory-lightbox-frame" onClick={(event) => event.stopPropagation()}><Image src={`/memories/${activeImage}`} alt={`Yadah memory ${activeIndex + 1}`} fill sizes="90vw" className="memory-modal-image" priority /><button className="memory-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close image viewer">×</button><button className="memory-prev" type="button" onClick={showPrevious} aria-label="View previous image">←</button><button className="memory-next" type="button" onClick={showNext} aria-label="View next image">Next image <span>→</span></button><p className="memory-counter">{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</p></div></div>}</main>;
}
