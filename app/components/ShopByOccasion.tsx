"use client";
import { motion } from "framer-motion";

const occasions = [
  { title: "Weddings", subtitle: "Sweeten the Sacred Bond", slug: "weddings", color: "#C71585" },
  { title: "Diwali", subtitle: "Light Up with Sweetness", slug: "diwali", color: "#FF6B35" },
  { title: "Corporate Gifting", subtitle: "Impress with Tradition", slug: "corporate", color: "#2E5C8A" },
  { title: "Birthdays", subtitle: "Celebrate with Sweetness", slug: "birthdays", color: "#9B59B6" },
  { title: "Housewarming", subtitle: "A Sweet New Beginning", slug: "housewarming", color: "#27AE60" },
  { title: "Festivals", subtitle: "Tradition in Every Bite", slug: "festivals", color: "#C0392B" },
];

// A unique, traditional seal for each card with custom accent color
const HeritageSeal = ({ color }: { color: string }) => (
  <div className="relative h-16 w-16 mb-6 flex items-center justify-center">
    {/* Outer rotating ring */}
    <div className="absolute inset-0 border rounded-full group-hover:rotate-180 transition-transform duration-1000 ease-in-out" style={{ borderColor: `${color}30` }} />
    {/* Inner dashed ring */}
    <div className="absolute inset-2 border border-dashed rounded-full group-hover:-rotate-180 transition-transform duration-1000 ease-in-out" style={{ borderColor: `${color}60` }} />
    {/* The Center "Seal" (Abstract flower/mandala) */}
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color }}>
      <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  </div>
);

export default function ShopByOccasion() {
  return (
    <section className="relative bg-[#FDFCF0] overflow-hidden py-24">
      {/* Heritage Background Detail */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] pointer-events-none text-[#B8860B]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <circle cx="100" cy="0" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <circle cx="100" cy="0" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#B8860B]/30" />
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">The Occasion Gallery</span>
            <div className="h-[1px] w-8 bg-[#B8860B]/30" />
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-[#0A2351]">
            Curated for your <span className="italic text-[#8B0000]">Milestones</span>
          </h2>
        </div>

        {/* The Elite Grid */}
        <div className="grid gap-px bg-zinc-200/50 border border-zinc-200/50 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((item, i) => (
            <motion.a
              key={item.title}
              href={`/occasions/${item.slug}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative flex flex-col items-center bg-[#FDFCF0] p-12 text-center overflow-hidden transition-all duration-700"
            >
              {/* Animated Background Shimmer on Hover */}
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out opacity-10" style={{ backgroundColor: item.color }} />
              
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" style={{ backgroundColor: item.color }} />
              
              <HeritageSeal color={item.color} />

              <div className="relative z-10">
                <h3 className="font-serif text-2xl tracking-tight text-[#0A2351] transition-colors duration-500" style={{ color: item.color }}>
                  {item.title}
                </h3>
                
                <div className="mx-auto my-5 h-px w-6 transition-all duration-700 group-hover:w-20" style={{ backgroundColor: `${item.color}40` }} />
                
                <p className="text-[12px] tracking-[0.1em] uppercase font-light leading-relaxed px-4" style={{ color: `${item.color}99` }}>
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{ background: `linear-gradient(to right, transparent, ${item.color}40, transparent)` }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
