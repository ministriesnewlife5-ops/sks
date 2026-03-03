"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Slide = {
  id: number;
  label: string;
  price: string;
  oldPrice: string;
  desc: string;
  bg: string;
  image: string; // Add your image paths here
};

const SLIDES: Slide[] = [
  { 
    id: 1, 
    label: "Legendary Mysurpa", 
    price: "450", 
    oldPrice: "580",
    desc: "Our crown jewel, handcrafted with 100% pure ghee and the finest gram flour. A recipe perfected over seven decades that melts the moment it touches your tongue.",
    bg: "bg-[#FDFCF0]",
    image: "/mysurpa.jpg" 
  },
  { 
    id: 2, 
    label: "Royal Badusha", 
    price: "380", 
    oldPrice: "450",
    desc: "A flaky, layered delicacy glazed in saffron-infused syrup. Each bite offers a crunch that gives way to a soft, melt-in-the-mouth heart.",
    bg: "bg-[#FFF9E6]",
    image: "/badusha.webp" 
  },
  { 
    id: 3, 
    label: "Gulab Jamun", 
    price: "420", 
    oldPrice: "500",
    desc: "Golden spheres of khoya, deep-fried to perfection and soaked in a fragrant rose and cardamom syrup. The ultimate comfort sweet.",
    bg: "bg-[#FFF0F0]",
    image: "/jamun.webp" 
  },
];

export default function SignatureProduct() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);
  const userInteractedAtRef = useRef<number>(0);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % SLIDES.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  };

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
    <section
      className="relative bg-[#FDFCF0] overflow-hidden py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 200 200"><path fill="#B8860B" d="M100 0 A100 100 0 1 1 100 200 A100 100 0 1 1 100 0 M100 20 L100 180 M20 100 L180 100"/></svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          
          {/* LEFT: The Interactive Carousel Stage */}
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              {/* Traditional Ornate Border Overlay */}
              <div className="absolute inset-0 border-[12px] border-[#B8860B]/10 rounded-full animate-pulse" />
              <div className="absolute inset-4 border border-[#B8860B]/20 rounded-full border-dashed" />
              
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.8, rotate: direction * 10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: -direction * 10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`absolute inset-10 rounded-full shadow-2xl flex items-center justify-center ${SLIDES[index].bg}`}
                >
                  <div className="relative h-94 w-94 rounded-full border-4 border-white shadow-inner overflow-hidden">
                    <Image
                      src={SLIDES[index].image}
                      alt={SLIDES[index].label}
                      fill
                      sizes="(max-width: 768px) 224px, 224px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Custom Traditional Nav Buttons */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 z-20">
                <button
                  onClick={() => {
                    markInteracted();
                    prev();
                  }}
                  className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0A2351] hover:bg-[#B8860B] hover:text-white transition-all border border-zinc-100"
                >
                  <span className="text-xl">←</span>
                </button>
                <button
                  onClick={() => {
                    markInteracted();
                    next();
                  }}
                  className="h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0A2351] hover:bg-[#B8860B] hover:text-white transition-all border border-zinc-100"
                >
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="mt-12 flex justify-center gap-4">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    markInteracted();
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`relative h-20 w-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    i === index ? "border-[#B8860B] scale-110 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className={`absolute inset-0 ${s.bg}`} />
                  <Image
                    src={s.image}
                    alt={s.label}
                    fill
                    sizes="90px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Content Area */}
          <div className="flex flex-col justify-center order-1 md:order-2">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-[#B8860B]/40" />
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#B8860B]">
                  Signature Selection
                </div>
              </div>

              <h3 className="text-4xl md:text-6xl font-serif text-[#0A2351] leading-tight">
                {SLIDES[index].label.split(' ')[0]} <br />
                <span className="italic text-[#8B0000]">{SLIDES[index].label.split(' ')[1]}</span>
              </h3>

              <div className="mt-4 flex items-center gap-4">
                <div className="flex text-yellow-500 text-sm">★★★★★</div>
                <div className="text-xs text-zinc-500 tracking-widest uppercase">2,847 Verified Reviews</div>
              </div>

              <p className="mt-6 text-zinc-600 leading-relaxed font-light">
                {SLIDES[index].desc}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <Feature text="Pure Desi Ghee" />
                <Feature text="Heritage Recipe" />
                <Feature text="No Added Colors" />
                <Feature text="Freshly Packed" />
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-[#0A2351]">₹{SLIDES[index].price}</span>
                  <span className="text-sm text-zinc-400 line-through">₹{SLIDES[index].oldPrice}</span>
                  <span className="text-xs text-zinc-500 tracking-tighter">/ 500g box</span>
                </div>
                
                <button className="relative group overflow-hidden rounded-full bg-[#0A2351] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:shadow-2xl">
                  <span className="relative z-10">Add to Box</span>
                  <div className="absolute inset-0 translate-y-full bg-[#8B0000] transition-transform duration-300 group-hover:translate-y-0" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="h-1.5 w-1.5 rounded-full bg-[#B8860B]" />
      <span className="text-xs font-medium uppercase tracking-wider text-zinc-700">{text}</span>
    </div>
  );
}