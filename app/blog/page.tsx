"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

type Post = {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
};

const POSTS: Post[] = [
  {
    id: "diwali-sweet-traditions",
    category: "Festivals",
    date: "Oct 15, 2025",
    title: "Diwali Sweet Traditions Across India",
    excerpt:
      "Discover how different regions celebrate with their signature sweets…",
    content:
      "Diwali is celebrated with an extraordinary spread of sweets across India — from ghee-rich halwas in the south to syrup-soaked delights in the east. At Sri Krishna Sweets, we craft festival assortments that honor each tradition while maintaining our promise of purity and taste.\n\nFrom welcoming guests with a classic Mysurpa to gifting curated boxes for colleagues and family, the spirit of Diwali lives in generosity. This season, explore region-inspired pairings, serving suggestions, and how to choose the right assortment for every gathering.",
    image: "/mysurpa.jpg",
  },
  {
    id: "art-of-mysurpa",
    category: "Recipes",
    date: "Sep 28, 2025",
    title: "The Art of Making Perfect Mysurpa",
    excerpt:
      "A behind-the-scenes look at our 30-year-old recipe and process…",
    content:
      "Perfect Mysurpa is a balance of patience, temperature, and tradition. From slow-roasting gram flour to folding in aromatic cardamom and generous pure ghee, every step influences the final melt-in-mouth texture.\n\nIn this story, we share how we maintain consistency batch after batch, why ingredients matter, and how our kitchen team preserves a process refined over decades — without shortcuts.",
    image: "/halwa.jpg",
  },
  {
    id: "corporate-gifts",
    category: "Gifting",
    date: "Sep 10, 2025",
    title: "Why Sweets Make the Best Corporate Gifts",
    excerpt:
      "Move beyond generic hampers — make a lasting impression with tradition…",
    content:
      "Corporate gifting is about relationships. A thoughtfully curated sweet box feels personal, premium, and culturally meaningful — ideal for festivals, milestones, and client appreciation.\n\nWe offer branding on packaging, bulk pricing, and nationwide delivery so your team can gift with confidence. Choose pre-curated assortments or create custom boxes based on preferences, dietary needs, and event themes.",
    image: "/kaju.webp",
  },
  {
    id: "wedding-planning",
    category: "Weddings",
    date: "Aug 22, 2025",
    title: "Sweet Planning for Your Wedding",
    excerpt:
      "How to choose the perfect sweets for each wedding ceremony…",
    content:
      "From engagement to reception, each ceremony carries its own mood — and sweets can match it beautifully. Consider lighter milk sweets for daytime events, richer ghee sweets for evening gatherings, and premium nut-based selections for gifting elders and VIP guests.\n\nWe’ll help you plan quantities, mix-and-match varieties, and build wedding boxes that look as grand as they taste.",
    image: "/jamun.webp",
  },
];

function BlogModal({ post, onClose }: { post: Post; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        className="absolute inset-0 bg-black/55"
        aria-label="Close"
        onClick={onClose}
      />

      <div className="relative mx-auto mt-10 w-[min(920px,calc(100%-2.5rem))] overflow-hidden rounded-2xl border border-white/10 bg-[#FDFCF0] shadow-2xl">
        <div className="relative h-56 bg-zinc-100">
          <Image src={post.image} alt={post.title} fill sizes="920px" className="object-cover" />
          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute right-4 top-4">
            <button
              type="button"
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/85 text-[#0A2351] ring-1 ring-black/10 transition hover:bg-white"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em]">
              <span className="text-[#F5C84B]">{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-[#F5C84B]/70" />
              <span className="text-white/80">{post.date}</span>
            </div>
            <div className="mt-3 font-serif text-2xl text-white">{post.title}</div>
          </div>
        </div>

        <div className="p-7">
          <div className="text-sm leading-7 text-[#0A2351]/75 whitespace-pre-line">
            {post.content}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#0A2351] px-5 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition hover:brightness-110"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const openPost = useMemo(() => {
    if (!openId) return null;
    return POSTS.find((p) => p.id === openId) || null;
  }, [openId]);

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#0A2351] selection:bg-[#B8860B] selection:text-white">
      <NavBar />

      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-[#0A1931]">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
            Sweet <span className="italic text-[#B8860B]">Stories</span>
          </h1>
          <p className="mt-4 font-serif italic text-zinc-300 max-w-xl mx-auto">
            Festival traditions, recipes, and the stories behind our sweets
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {POSTS.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_26px_70px_-55px_rgba(0,0,0,0.55)]"
              >
                <div className="relative h-44 bg-zinc-100">
                  <Image src={p.image} alt={p.title} fill sizes="600px" className="object-cover" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>

                <div className="bg-[#FBF8EF] p-6">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                    <span className="text-[#B8860B]">{p.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[#B8860B]/50" />
                    <span className="text-[#0A2351]/55">{p.date}</span>
                  </div>

                  <h2 className="mt-4 font-serif text-xl text-[#0A2351]">{p.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#0A2351]/65">{p.excerpt}</p>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => setOpenId(p.id)}
                      className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#B8860B] transition hover:brightness-110"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {openPost ? <BlogModal post={openPost} onClose={() => setOpenId(null)} /> : null}
    </div>
  );
}
