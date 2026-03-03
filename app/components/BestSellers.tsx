"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Item = {
  id: string;
  badge: string;
  title: string;
  weight: string;
  price: string;
  reviews: string;
  rating: number; // 0-5
  image?: string;
};

const ITEMS: Item[] = [
  {
    id: "classic-mysurpa",
    badge: "Bestseller",
    title: "Classic Mysurpa",
    weight: "500g",
    price: "₹450",
    reviews: "(2847)",
    rating: 5,
    image: "/mysurpa.jpg",
  },
  {
    id: "badam-halwa",
    badge: "Popular",
    title: "Badam Halwa",
    weight: "500g",
    price: "₹550",
    reviews: "(1923)",
    rating: 5,
    image: "/halwa.jpg",
  },
  {
    id: "kaju-katli",
    badge: "Chef's Pick",
    title: "Kaju Katli",
    weight: "500g",
    price: "₹680",
    reviews: "(1567)",
    rating: 5,
    image: "/kaju.webp",
  },
  {
    id: "milk-peda",
    badge: "Most Loved",
    title: "Milk Peda",
    weight: "500g",
    price: "₹380",
    reviews: "(1234)",
    rating: 5,
    image: "/peda.webp",
  },
  {
    id: "gulab-jamun",
    badge: "Festival Favorite",
    title: "Gulab Jamun",
    weight: "500g (12 pcs)",
    price: "₹320",
    reviews: "(2100)",
    rating: 5,
    image: "/jamun.webp",
  },
  {
    id: "laddu",
    badge: "Top Rated",
    title: "Ghee Laddu",
    weight: "500g",
    price: "₹420",
    reviews: "(1650)",
    rating: 5,
    image: "/ladoo.jfif",
  },
];

function Stars({ value }: { value: number }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < full ? "text-[#E7C55B]" : "text-[#E7C55B]/25"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function BestSellers() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setProgress(0);
      return;
    }
    setProgress(el.scrollLeft / max);
  };

  useEffect(() => {
    updateProgress();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateProgress();
    el.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => updateProgress();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card='best-seller']");
    const cardW = card ? card.offsetWidth : 320;
    const gap = 16;
    el.scrollBy({ left: dir * (cardW + gap) * 2, behavior: "smooth" });
  };

  return (
    <section className="bg-[#FBF8EF] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.45em] text-[#E7C55B] uppercase">
              Loved by Thousands
            </div>
            <h2 className="mt-3 font-[ui-serif] text-4xl font-semibold tracking-tight text-[#14203A]">
              Our <span className="italic">Best Sellers</span>
            </h2>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/70 text-[#14203A] shadow-[0_18px_40px_-30px_rgba(0,0,0,0.25)] transition hover:bg-white"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/70 text-[#14203A] shadow-[0_18px_40px_-30px_rgba(0,0,0,0.25)] transition hover:bg-white"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex gap-6 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {ITEMS.map((p) => (
            <article
              key={p.id}
              data-card="best-seller"
              className="min-w-[280px] max-w-[280px] flex-shrink-0 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_26px_70px_-55px_rgba(0,0,0,0.55)]"
            >
              <div className="relative h-44 bg-zinc-100">
                <div className="absolute left-4 top-4 z-10 rounded-full bg-[#E7C55B] px-3 py-1 text-[11px] font-semibold text-[#14203A]">
                  {p.badge}
                </div>

                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-zinc-400">
                    <span className="text-sm">No image</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/5" />
              </div>

              <div className="p-5">
                <div className="font-[ui-serif] text-lg font-semibold text-[#14203A]">
                  {p.title}
                </div>
                <div className="mt-1 text-[11px] tracking-wide text-[#14203A]/55">
                  {p.weight}
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs">
                  <Stars value={p.rating} />
                  <span className="text-[#14203A]/50">{p.reviews}</span>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-semibold text-[#14203A]">{p.price}</div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md bg-[#0F2B5B] px-4 py-2 text-xs font-semibold text-white shadow-[0_18px_40px_-28px_rgba(15,43,91,0.65)] transition hover:brightness-110"
                  >
                    <span className="grid h-5 w-5 place-items-center rounded-md border border-white/15 bg-white/10">
                      +
                    </span>
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full rounded-full bg-[#14203A]/50"
            style={{ width: "28%", transform: `translateX(${progress * 260}%)` }}
          />
        </div>
      </div>
    </section>
  );
}
