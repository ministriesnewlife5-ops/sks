import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1931]">
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,50,100,1)_0%,rgba(10,25,49,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 12px 12px, rgba(231,197,91,0.50) 0 1px, transparent 1px 16px), repeating-radial-gradient(circle at 36px 36px, rgba(231,197,91,0.18) 0 1px, transparent 1px 22px), radial-gradient(closest-side at 20% 25%, rgba(231,197,91,0.14), transparent 60%), radial-gradient(closest-side at 85% 35%, rgba(231,197,91,0.10), transparent 55%)",
            backgroundSize: "64px 64px, 72px 72px, 100% 100%, 100% 100%",
          }}
        />
      </div>

      {/* Reduced vertical padding: py-20 on mobile, py-28 on desktop */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        
        {/* Compact Tagline */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-[1px] w-6 bg-yellow-600/40" />
          <span className="text-[10px] font-bold tracking-[0.4em] text-yellow-500/90 uppercase">
            Est. 1948 • Coimbatore
          </span>
          <div className="h-[1px] w-6 bg-yellow-600/40" />
        </div>

        {/* Main Heading - Adjusted sizes for better fit */}
        <h1 className="mx-auto max-w-4xl text-4xl font-serif leading-tight text-white md:text-7xl">
          A Tradition <span className="font-light italic">Melted</span>{" "}
          <span className="relative inline-block mt-1">
            <span className="relative z-10 italic text-[#FFD700]">in Pure Ghee</span>
            <svg className="absolute -bottom-1 left-0 w-full opacity-40" viewBox="0 0 300 20" fill="none">
              <path d="M5 15C50 5 150 5 295 15" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-zinc-300/80 font-serif italic">
          Crafting memories that dissolve in your mouth since 1948.
        </p>

        {/* Interactive Buttons - More compact spacing */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="group relative overflow-hidden rounded-full border border-yellow-500/30 bg-transparent px-8 py-3 text-[12px] font-bold uppercase tracking-widest text-yellow-500 transition-all duration-500">
            <span className="absolute inset-0 translate-y-full bg-yellow-500 transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-blue-900">
              Explore Sweets
            </span>
          </button>

          <button className="group relative overflow-hidden rounded-full bg-[#8B0000] px-8 py-3 text-[12px] font-bold uppercase tracking-widest text-white shadow-xl transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Gift Happiness</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>
        </div>

        {/* Compact Stats */}
        <div className="mt-12 flex justify-center gap-8 opacity-50 md:gap-16">
           {heroStat("100%", "Ghee")}
           <div className="w-[1px] h-8 bg-white/10 self-center" />
           {heroStat("75+", "Years")}
           <div className="w-[1px] h-8 bg-white/10 self-center" />
           {heroStat("Global", "Direct")}
        </div>
      </div>

      {/* Tighter Transition Wave */}
      <div className="absolute bottom-0 left-0 w-full leading-[0]">
        <svg className="relative block h-[40px] w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#FDFCF0" />
        </svg>
      </div>
    </section>
  );
}

function heroStat(title: string, label: string): React.ReactNode {
  return (
    <div className="text-center">
      <div className="text-xl font-serif text-white">{title}</div>
      <div className="text-[10px] uppercase tracking-tighter text-yellow-500/80">{label}</div>
    </div>
  );
}
