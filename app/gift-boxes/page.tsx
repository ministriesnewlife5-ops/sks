"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const BOXES = [
  {
    id: "festive-delight",
    title: "Festive Delight",
    subtitle: "A Curated Quartet of Joy",
    tags: ["Classic Mysurpa", "Badam Halwa", "Kaju Katli", "Motichoor Ladoo"],
    price: "1840",
    color: "bg-[#FDFCF0]"
  },
  {
    id: "wedding-special",
    title: "Wedding Special",
    subtitle: "The Grand Six-Piece Ensemble",
    tags: ["Classic Mysurpa", "Kaju Katli", "Milk Peda", "Gulab Jamun", "Coconut Burfi", "Ladoo"],
    price: "2530",
    color: "bg-[#FFF9E6]"
  },
  {
    id: "classic-trio",
    title: "Classic Trio",
    subtitle: "The Heritage Selection",
    tags: ["Classic Mysurpa", "Badam Halwa", "Kaju Katli"],
    price: "1680",
    color: "bg-[#FFF0F0]"
  },
];

export default function GiftBoxesPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#0A2351] selection:bg-[#B8860B] selection:text-white">
      <NavBar />

      {/* --- ELITE HERO SECTION --- */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-[#0A1931]">
        {/* Background Texture & Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B8860B]/50" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">Premium Curation</span>
              <div className="h-px w-8 bg-[#B8860B]/50" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
              Gift <span className="italic text-[#B8860B]">Boxes</span>
            </h1>
            <p className="mt-4 font-serif italic text-zinc-300 max-w-lg mx-auto">
              "Every celebration deserves a hallmark of sweetness."
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- PRE-CURATED GALLERY --- */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl text-[#0A2351]">Pre-Curated <span className="italic">Gifts</span></h2>
              <p className="mt-2 text-sm text-zinc-500 uppercase tracking-widest font-bold">Ready to ship nationwide</p>
            </div>
            <div className="h-px flex-1 bg-zinc-200 mx-8 hidden md:block" />
            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">3 Collections Available</div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {BOXES.map((box, i) => (
              <motion.article
                key={box.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                {/* Elite Card Container */}
                <div className="relative overflow-hidden rounded-3xl bg-gray-300 border border-zinc-100 p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-20px_rgba(184,134,11,0.15)] group-hover:-translate-y-2">
                  
                  {/* Internal "Silk" Background Color */}
                  <div className={`absolute top-0 left-0 w-full h-2 transition-all duration-500 group-hover:h-full opacity-10 ${box.color}`} />

                  {/* Icon/Seal 
                  <div className="relative z-10 mx-auto mb-6 h-14 w-14 rounded-full border border-[#B8860B]/20 flex items-center justify-center text-[#B8860B] group-hover:bg-[#B8860B] group-hover:text-white transition-all duration-500">
                    <span className="text-xl">✨</span>
                  </div> */}

                  <div className="relative z-10 text-center">
                    <h3 className="font-serif text-2xl text-[#0A2351] mb-1">{box.title}</h3>
                    <p className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase mb-6">{box.subtitle}</p>

                    {/* Tag Cloud */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {box.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-zinc-50 border border-zinc-100 text-zinc-500 group-hover:border-[#B8860B]/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="font-sanserif text-3xl text-[#0A2351] mb-6">₹{box.price}</div>

                    {/* Elite Button */}
                    <button className="relative w-full overflow-hidden rounded-full bg-[#0A2351] py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500">
                      <span className="absolute inset-0 translate-y-full bg-[#8B0000] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Add to Selection <span>+</span>
                      </span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* --- CUSTOM CTA SECTION --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-24 relative rounded-[40px] bg-[#0A1931] p-12 text-center overflow-hidden"
          >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #B8860B 1px, transparent 0)", backgroundSize: "24px 24px" }} />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase mb-6 block">Bespoke Experience</span>
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
                Want to <span className="italic text-[#B8860B]">Build</span> Your Own?
              </h3>
              <p className="font-serif italic text-zinc-400 mb-10">
                Tailor a personalized casket of sweetness with our most iconic signatures.
              </p>

              <Link
                href="/#giftbox-builder"
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#B8860B] px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A1931] shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10">Build Custom Gift Box</span>
                <span className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}