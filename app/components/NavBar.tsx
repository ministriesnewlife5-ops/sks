"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isMysurpa = pathname?.startsWith("/mysurpa");
  const isSweets = pathname?.startsWith("/sweets");
  const isGiftBoxes = pathname?.startsWith("/gift-boxes");

  return (
    // Changed bg to a warm ivory (#FDFCF0) to feel more "premium/traditional"
    <header className="sticky top-0 z-50 w-full bg-[#FDFCF0] border-b border-zinc-200/50 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        
        {/* Elite Logo Section */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer group">
          <div className="relative h-11 w-11 overflow-hidden rounded-full bg-white shadow-md ring-1 ring-black/5 transition-transform group-hover:scale-105">
            <Image src="/logo.png" alt="Sri Krishna Sweets" fill sizes="44px" className="object-contain p-1.5" priority />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-serif font-bold tracking-tight text-[#0A2351]">
              Sri Krishna
            </span>
            <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-[#B8860B] uppercase mt-0.5">
              Sweets
            </span>
          </div>
        </Link>

        {/* Traditional Navigation - Focused on Typography */}
        <nav className="hidden gap-8 text-[13px] font-semibold uppercase tracking-widest text-[#0A2351]/80 md:flex items-center">
          <Link
            href="/"
            className={
              isHome
                ? "relative py-2 text-[#0A2351] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B8860B] rounded-sm"
                : "relative py-2 transition-colors hover:text-[#B8860B]"
            }
          >
            Home
          </Link>
          <Link
            href="/mysurpa"
            className={
              isMysurpa
                ? "relative py-2 text-[#0A2351] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B8860B] rounded-sm"
                : "transition-colors hover:text-[#B8860B]"
            }
          >
            Our Mysurpa
          </Link>
          <Link
            href="/sweets"
            className={
              isSweets
                ? "relative py-2 text-[#0A2351] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B8860B] rounded-sm"
                : "transition-colors hover:text-[#B8860B]"
            }
          >
            All Sweets
          </Link>
          <Link
            href="/gift-boxes"
            className={
              isGiftBoxes
                ? "relative py-2 text-[#0A2351] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#B8860B] rounded-sm"
                : "transition-colors hover:text-[#B8860B]"
            }
          >
            Gift Boxes
          </Link>
          {["Corporate", "About", "Blog", "Contact"].map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-[#B8860B]">
              {item}
            </a>
          ))}
        </nav>

        {/* Action Icons - Replacing text with elegant strokes */}
        <div className="flex items-center gap-5">
          <button className="text-[#0A2351] hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          
          <button className="relative text-[#0A2351] hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#B8860B] text-[10px] text-white">0</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Menu"
            className="md:hidden p-1 text-[#0A2351]"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Traditional Mobile Menu Overlay */}
      {open && (
        <div className="md:hidden absolute w-full bg-[#FDFCF0] border-b border-zinc-200 shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-6 gap-4 text-center font-serif text-lg text-[#0A2351]">
            <Link href="/" className="border-b border-zinc-100 pb-2 hover:text-[#B8860B]">
              Home
            </Link>
            <Link href="/mysurpa" className="border-b border-zinc-100 pb-2 hover:text-[#B8860B]">
              Our Mysurpa
            </Link>
            <Link href="/sweets" className="border-b border-zinc-100 pb-2 hover:text-[#B8860B]">
              All Sweets
            </Link>
            <Link href="/gift-boxes" className="border-b border-zinc-100 pb-2 hover:text-[#B8860B]">
              Gift Boxes
            </Link>
            {["Corporate", "About", "Blog", "Contact"].map((item) => (
              <a key={item} href="#" className="border-b border-zinc-100 pb-2 hover:text-[#B8860B]">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}