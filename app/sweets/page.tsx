"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

type Category = "All" | "Mysurpa" | "Halwa" | "Katli" | "Peda" | "Jamun" | "Ladoo";

type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  price: number;
  weight: string;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
};

const CATEGORIES: Category[] = [
  "All",
  "Mysurpa",
  "Halwa",
  "Katli",
  "Peda",
  "Jamun",
  "Ladoo",
];

const PRODUCTS: Product[] = [
  {
    id: "classic-mysurpa",
    name: "Classic Mysurpa",
    category: "Mysurpa",
    price: 450,
    weight: "500g",
    rating: 4.9,
    reviews: 2847,
    badge: "Bestseller",
    image: "/mysurpa.jpg",
  },
  {
    id: "badam-halwa",
    name: "Badam Halwa",
    category: "Halwa",
    price: 550,
    weight: "500g",
    rating: 4.8,
    reviews: 1923,
    badge: "Popular",
    image: "/halwa.jpg",
  },
  {
    id: "kaju-katli",
    name: "Kaju Katli",
    category: "Katli",
    price: 680,
    weight: "500g",
    rating: 4.7,
    reviews: 1567,
    image: "/kaju.webp",
  },
  {
    id: "milk-peda",
    name: "Milk Peda",
    category: "Peda",
    price: 380,
    weight: "500g",
    rating: 4.7,
    reviews: 1234,
    image: "/peda.webp",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "Jamun",
    price: 320,
    weight: "500g (12 pcs)",
    rating: 4.9,
    reviews: 2100,
    badge: "Festival Favorite",
    image: "/jamun.webp",
  },
  {
    id: "motichoor-ladoo",
    name: "Motichoor Ladoo",
    category: "Ladoo",
    price: 340,
    weight: "500g",
    rating: 4.6,
    reviews: 980,
    image: "/ladoo.jfif",
  },
  {
    id: "wheat-halwa",
    name: "Wheat Halwa",
    category: "Halwa",
    price: 360,
    weight: "500g",
    rating: 4.7,
    reviews: 1354,
    image: "/halwa.jpg",
  },
  {
    id: "classic-rasgulla",
    name: "Classic Rasgulla",
    category: "Jamun",
    price: 300,
    weight: "500g",
    rating: 4.5,
    reviews: 1114,
    badge: "Original Special",
    image: "/jamun.webp",
  },
];

function Stars({ value }: { value: number }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "text-[#E7C55B]" : "text-[#E7C55B]/25"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function SweetsPage() {
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (category === "All") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === category);
  }, [category]);

  return (
    <div className="min-h-screen bg-[#FBF8EF] text-[#14203A]">
      <NavBar />

      {/* Hero */}
      <section className="bg-[#08244D]">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
          <h1 className="font-[ui-serif] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Our <span className="italic text-[#E7C55B]">Sweets</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-xs tracking-wide text-white/70">
            Handcrafted with love, tradition, and pure ghee since 1948.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={
                    active
                      ? "rounded-full bg-[#0A2351] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white shadow-[0_18px_40px_-28px_rgba(10,35,81,0.75)]"
                      : "rounded-full border border-black/10 bg-white/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#14203A]/70 transition hover:border-[#E7C55B]/60"
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_26px_70px_-55px_rgba(0,0,0,0.55)]"
              >
                <div className="relative h-40 bg-zinc-100">
                  {p.badge ? (
                    <div className="absolute left-3 top-3 z-10 rounded-full bg-[#E24B3A] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {p.badge}
                    </div>
                  ) : null}

                  <Image src={p.image} alt={p.name} fill sizes="260px" className="object-cover" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>

                <div className="p-4">
                  <div className="font-[ui-serif] text-[15px] font-semibold text-[#14203A]">{p.name}</div>
                  <div className="mt-1 text-[11px] text-[#14203A]/55">{p.weight}</div>

                  <div className="mt-3 flex items-center gap-2 text-[11px]">
                    <Stars value={p.rating} />
                    <span className="text-[#14203A]/50">({p.reviews})</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-base font-semibold text-[#14203A]">₹{p.price}</div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-md bg-[#0F2B5B] px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_18px_40px_-28px_rgba(15,43,91,0.65)] transition hover:brightness-110"
                    >
                      <span className="grid h-5 w-5 place-items-center rounded-md border border-white/15 bg-white/10">+</span>
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
