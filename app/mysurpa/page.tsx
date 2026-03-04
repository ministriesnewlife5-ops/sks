"use client";

import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

const slides = [
  { src: "/mysurpa.jpg", alt: "Classic Mysurpa" },
  { src: "/badusha.webp", alt: "Mysurpa close-up" },
  { src: "/jamun.webp", alt: "Serving suggestion" },
  { src: "/mysurpa.jpg", alt: "Classic Mysurpa" },
];

export default function MysurpaPage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const userInteractedAtRef = useRef<number>(0);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      const msSinceInteraction = Date.now() - userInteractedAtRef.current;
      if (msSinceInteraction < 8000) return;
      next();
    }, 4500);

    return () => window.clearInterval(interval);
  }, [paused]);

  const markInteracted = () => {
    userInteractedAtRef.current = Date.now();
  };

  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#14203A]">
      <NavBar />

      {/* Top Hero Bar */}
      <section className="bg-[#08244D]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E7C55B] ring-1 ring-white/10">
            Signature since 1948
          </div>
          <h1 className="mt-6 font-[ui-serif] text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            The Legendary <span className="italic text-[#E7C55B]">Mysurpa</span>
          </h1>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-[#FBF8EF] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Gallery */}
            <div className="lg:col-span-7">
              <div className="grid gap-5">
                <div
                  className="relative overflow-hidden rounded-2xl border border-black/10 bg-zinc-100 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.75)]"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onFocusCapture={() => setPaused(true)}
                  onBlurCapture={() => setPaused(false)}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      key={slides[index].src}
                      src={slides[index].src}
                      alt={slides[index].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="absolute inset-y-0 left-0 flex items-center p-4">
                    <button
                      type="button"
                      onClick={() => {
                        markInteracted();
                        prev();
                      }}
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-[#14203A] shadow-lg ring-1 ring-black/10 transition hover:bg-white"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center p-4">
                    <button
                      type="button"
                      onClick={() => {
                        markInteracted();
                        next();
                      }}
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-[#14203A] shadow-lg ring-1 ring-black/10 transition hover:bg-white"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {slides.map((s, i) => (
                    <button
                      key={`${s.src}-${i}`}
                      type="button"
                      onClick={() => {
                        markInteracted();
                        setIndex(i);
                      }}
                      className={
                        i === index
                          ? "relative aspect-square overflow-hidden rounded-xl border-2 border-[#E7C55B] bg-zinc-100 shadow-md"
                          : "relative aspect-square overflow-hidden rounded-xl border border-black/10 bg-zinc-100 transition hover:shadow-md"
                      }
                      aria-label={`Thumbnail ${i + 1}`}
                    >
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#FBF8EF]">
                <h2 className="font-[ui-serif] text-2xl font-semibold text-[#14203A]">
                  Classic Mysurpa
                </h2>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex text-sm text-[#E7C55B]">★★★★★</div>
                  <div className="text-xs text-[#14203A]/60">4.9 (2,847 reviews)</div>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#14203A]/70">
                  Our legendary Mysurpa, handcrafted with pure ghee and the finest gram flour.
                  A recipe perfected since 1948.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-[#14203A]/70">
                  <div className="flex items-center gap-2">
                    <span className="text-[#E7C55B]">●</span>
                    100% Pure Ghee
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E7C55B]">●</span>
                    No Preservatives
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E7C55B]">●</span>
                    Handcrafted Daily
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#E7C55B]">●</span>
                    Since 1948
                  </div>
                </div>

                <div className="mt-7 overflow-hidden rounded-xl border border-black/10 bg-white">
                  <div className="grid grid-cols-2 gap-px bg-black/10">
                    <div className="bg-white p-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#14203A]/45">
                        Weight
                      </div>
                      <div className="mt-2 text-xs font-semibold text-[#14203A]">500g</div>
                    </div>
                    <div className="bg-white p-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#14203A]/45">
                        Shelf life
                      </div>
                      <div className="mt-2 text-xs font-semibold text-[#14203A]">30 days</div>
                    </div>
                    <div className="col-span-2 bg-white p-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#14203A]/45">
                        Ingredients
                      </div>
                      <div className="mt-2 text-xs font-semibold text-[#14203A]">
                        Pure Ghee, Gram Flour, Sugar, Cardamom, Cashews
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-end gap-3">
                  <div className="font-[ui-serif] text-3xl font-semibold text-[#14203A]">₹450</div>
                  <div className="pb-1 text-sm text-[#14203A]/35 line-through">₹500</div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex h-11 items-center justify-center gap-3 rounded-lg bg-[#E7C55B] px-6 text-xs font-bold uppercase tracking-[0.22em] text-[#14203A] shadow-[0_18px_40px_-28px_rgba(231,197,91,0.9)] transition hover:brightness-105"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-md bg-[#14203A]/10">+</span>
                    Add to Box — ₹450
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
