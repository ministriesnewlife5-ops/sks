import Link from "next/link";
import Image from "next/image";

const linkCols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "The Collections", // Updated title for more prestige
    links: [
      { label: "Our Mysurpa", href: "#mysurpa" }, // More brand focus
      { label: "Premium Ghee Sweets", href: "#collections" },
      { label: "Bespoke Gift Boxes", href: "#gift" },
      { label: "Corporate Gifting", href: "#corporate" },
    ],
  },
  {
    title: "Heritage", // Updated title for tradition
    links: [
      { label: "Our Founder", href: "#about" },
      { label: "Since 1948 Story", href: "#about" },
      { label: "The Journal (Blog)", href: "#blog" },
      { label: "Visit Coimbatore", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping Policy", href: "#" },
      { label: "Bulk Inquiry", href: "#" }, // More business-focused
      { label: "FAQs", href: "#" },
      { label: "Track Your Order", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    // Updated bg to a very dark Indigo (#061633) to feel more "deep-dyed traditional"
    <footer className="relative bg-[#061633] text-[#FDFCF0] overflow-hidden">
      
      {/* --- ELITE TRADITIONAL OVERLAYS --- */}
      <div className="pointer-events-none absolute inset-0">
        
        {/* Layer 1: Traditional Textile Texture (Subtle Ikat/Pochampally pattern watermark) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')]" />

        {/* Layer 2: Massive Traditional Watermark Motif (Large, low-opacity mandala in the center) */}
        <div className="absolute -bottom-48 -right-48 h-[600px] w-[600px] opacity-[0.02] pointer-events-none select-none text-[#B8860B]">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#B8860B" d="M100 0 A100 100 0 1 1 100 200 A100 100 0 1 1 100 0 M100 20 L100 180 M20 100 L180 100 M43 43 L157 157 M43 157 L157 43" stroke="currentColor" strokeWidth="1"/>
            </svg>
        </div>

        {/* Layer 3: Soft Vignette (Deepening the edges) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#041026_100%)]" />

        {/* Layer 4: Elite Gold Top Border */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      </div>
      {/* --- END OVERLAYS --- */}

      <div className="relative mx-auto max-w-7xl px-8 py-20 z-10">
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Elite Brand Section */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="#home" className="flex items-center gap-4 cursor-pointer group" aria-label="Go to home">
              <span className="relative h-12 w-12 overflow-hidden rounded-full bg-[#FDFCF0] shadow-md ring-1 ring-black/10 transition-transform group-hover:scale-105">
                <Image src="/logo.png" alt="Sri Krishna Sweets" fill sizes="48px" className="object-contain p-2" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-serif font-bold tracking-tight text-[#FDFCF0]">Sri Krishna</span>
                <span className="text-[10px] font-sans font-bold tracking-[0.3em] text-[#B8860B] uppercase mt-0.5">Sweets</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm font-serif italic text-sm leading-relaxed text-[#FDFCF0]/70">
              "Crafting memories that dissolve in your mouth since 1948. Handcrafted daily with 100% pure ghee and seven decades of devotion."
            </p>

            <div className="mt-8 space-y-2.5 text-xs text-[#FDFCF0]/60 tracking-wider">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-[#B8860B]">📍</span> Coimbatore, Tamil Nadu
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-[#B8860B]">📞</span> +91 98765 43210
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-[#B8860B]">✉️</span> support@srikrishnasweets.com
              </div>
            </div>
          </div>

          {/* Links Section - Enhanced Spacing */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5 text-center lg:text-left pt-6 lg:pt-0">
            {linkCols.map((c) => (
              <div key={c.title}>
                <div className="flex justify-center lg:justify-start items-center gap-2 text-[11px] font-bold tracking-[0.3em] text-[#B8860B] uppercase mb-5">
                   {c.title}
                </div>
                <ul className="space-y-4 font-light text-sm text-[#FDFCF0]/70">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="transition-colors hover:text-[#B8860B]"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Elite Newsletter */}
          <div className="lg:col-span-3 text-center lg:text-left pt-8 lg:pt-0">
            <div className="text-[11px] font-bold tracking-[0.3em] text-[#B8860B] uppercase mb-5">
              Newsletter
            </div>
            <p className="text-sm font-serif italic leading-relaxed text-[#FDFCF0]/70">
              Join our list to receive news of limited-edition drops, festival offerings, and heritage insights.
            </p>

            <form className="mt-6 space-y-3 max-w-sm mx-auto lg:mx-0" action="#">
              <input
                type="email"
                placeholder="Ex. arjun@parampara.in"
                className="h-11 w-full rounded-md border border-white/10 bg-white/5 px-4 text-xs text-white placeholder:text-white/30 placeholder:italic font-serif outline-none ring-0 transition focus:border-[#B8860B]"
              />
              <button
              type="submit"
              className="group relative h-12 w-full overflow-hidden rounded-md bg-[#8B0000] px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-500"
            >
              {/* 1. The "Gold Leaf" Fill Layer */}
              <span className="absolute inset-0 z-0 h-full w-full -translate-x-full bg-[#B8860B] transition-transform duration-500 ease-out group-hover:translate-x-0" />

              {/* 2. The Interaction Text */}
              <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-500 group-hover:tracking-[0.3em] group-hover:text-[#061633]">
                Request Access
                {/* 3. The Animated Decorative Icon */}
                <svg 
                  className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>

              {/* 4. Subtle "Shine" Overlay */}
              <span className="absolute inset-0 z-20 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </button>
            </form>
          </div>
        </div>

        {/* Traditional Divider */}
        <div className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Subtle Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 text-[10px] tracking-wider font-light text-[#FDFCF0]/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Sri Krishna Sweets. A Legacy Dissolved in Purity.</div>
          <div className="flex gap-6 uppercase justify-center">
            {["Privacy", "Terms", "Cookies"].map(item => (
                <a key={item} href="#" className="transition hover:text-[#B8860B]">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
