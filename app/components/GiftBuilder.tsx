"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types remain the same as your logic
type Phase = "idle" | "grid" | "sweets" | "message";
type LayoutOption = 4 | 6 | 8;
type Sweet = { id: string; name: string; price: number; category: "Classic" | "Milk" | "Nut" | "Festive"; };

const SWEETS: Sweet[] = [
  { id: "mysurpa", name: "Classic Mysurpa", price: 450, category: "Classic" },
  { id: "badam-halwa", name: "Badam Halwa", price: 550, category: "Nut" },
  { id: "kajukatli", name: "Kaju Katli", price: 600, category: "Nut" },
  { id: "milk-peda", name: "Milk Peda", price: 350, category: "Milk" },
  { id: "gulab-jamun", name: "Gulab Jamun", price: 320, category: "Festive" },
  { id: "coconut-burfi", name: "Coconut Burfi", price: 250, category: "Classic" },
  { id: "rasgulla", name: "Rasgulla", price: 300, category: "Festive" },
  { id: "pista-roll", name: "Pista Roll", price: 500, category: "Nut" },
  { id: "kalakand", name: "Kalakand", price: 380, category: "Milk" },
  { id: "laddu", name: "Besan Laddu", price: 280, category: "Classic" },
];

const CATEGORIES: Sweet["category"][] = ["Classic", "Milk", "Nut", "Festive"];

export default function GiftBuilder() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [layout, setLayout] = useState<LayoutOption | null>(null);
  const [selected, setSelected] = useState<Sweet[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Sweet["category"] | "All">("All");
  const [message, setMessage] = useState("");
  const maxChars = 120;

  const filtered = useMemo(() => {
    return SWEETS.filter((s) => {
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" ? true : s.category === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  const gridSpec = useMemo(() => {
    if (!layout) return { cols: 0, rows: 0 };
    if (layout === 4) return { cols: 2, rows: 2 };
    if (layout === 6) return { cols: 3, rows: 2 };
    return { cols: 4, rows: 2 };
  }, [layout]);

  const total = selected.reduce((sum, s) => sum + s.price, 0);

  return (
    <section className="relative bg-[#FDFCF0] py-24 overflow-hidden">
      {/* Heritage Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.03] pointer-events-none text-[#B8860B]">
        <svg viewBox="0 0 100 100" fill="currentColor"><path d="M0 0 L100 0 L100 100 Z" /></svg>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B8860B]/40" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#B8860B]">Bespoke Gifting</span>
            <div className="h-px w-8 bg-[#B8860B]/40" />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0A2351]">
            Build Your <span className="italic text-[#8B0000]">Gift Box</span>
          </h2>
          
          {/* Elite Stepper */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <Step number="1" label="Size" active={phase === "idle"} completed={phase !== "idle"} />
            <div className="h-px w-12 bg-zinc-200" />
            <Step number="2" label="Curation" active={phase === "grid" || phase === "sweets"} completed={phase === "message"} />
            <div className="h-px w-12 bg-zinc-200" />
            <Step number="3" label="Message" active={phase === "message"} completed={false} />
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Main Interaction Area */}
          <div className="lg:col-span-8 bg-white/50 border border-[#B8860B]/10 rounded-3xl p-8 backdrop-blur-sm min-h-[500px]">
            <AnimatePresence mode="wait">
              {phase === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h3 className="font-serif text-2xl text-[#0A2351]">Select Your Canvas</h3>
                    <p className="text-sm text-zinc-500 mt-2 italic">Choose the perfect size for your celebration</p>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-3">
                    {[4, 6, 8].map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLayout(l as LayoutOption); setPhase("grid"); }}
                        className="group relative rounded-2xl bg-white border border-zinc-100 p-6 text-center transition-all hover:border-[#B8860B] hover:shadow-2xl hover:shadow-[#B8860B]/10"
                      >
                        <div className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase group-hover:text-[#B8860B]">Classic Collection</div>
                        <div className="text-2xl font-serif text-[#0A2351] my-2">{l} Pieces</div>
                        <div className="mt-4 aspect-square rounded-full bg-[#0A2351] flex items-center justify-center text-[#FDFCF0] overflow-hidden relative">
                           <div className="absolute inset-2 border border-dashed border-[#FDFCF0]/30 rounded-full" />
                           <span className="font-serif italic text-lg opacity-40">SK</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {(phase === "grid" || phase === "sweets") && (
                <motion.div
                  key="sweets"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                     <div className="relative w-full max-w-xs">
                        <input
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          placeholder="Search our heritage sweets..."
                          className="w-full bg-white rounded-full border border-zinc-200 px-10 py-3 text-sm focus:outline-none focus:border-[#B8860B]"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">🔍</span>
                     </div>
                     <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
                        {["All", ...CATEGORIES].map((c) => (
                          <button
                            key={c}
                            onClick={() => setCategory(c as any)}
                            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${category === c ? "bg-[#0A2351] text-white" : "text-zinc-500 border border-zinc-200 hover:border-[#B8860B]"}`}
                          >
                            {c}
                          </button>
                        ))}
                     </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {filtered.map((s) => {
                      const isActive = !!selected.find(k => k.id === s.id);
                      return (
                        <button
                          key={s.id}
                          onClick={() => {
                            if (isActive) setSelected(selected.filter(k => k.id !== s.id));
                            else if (selected.length < (layout || 0)) setSelected([...selected, s]);
                          }}
                          className={`relative flex flex-col p-4 rounded-2xl border transition-all text-left ${isActive ? 'bg-[#FDFCF0] border-[#B8860B] ring-1 ring-[#B8860B]' : 'bg-white border-zinc-100'}`}
                        >
                          <div className="h-24 bg-zinc-100 rounded-xl mb-3 overflow-hidden relative">
                             <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5" />
                          </div>
                          <div className="text-sm font-serif text-[#0A2351]">{s.name}</div>
                          <div className="text-[10px] font-bold text-[#B8860B] mt-1 tracking-widest uppercase">₹{s.price}</div>
                          {isActive && <div className="absolute top-2 right-2 text-[#8B0000]">✓</div>}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-zinc-100">
                    <button onClick={() => setPhase("idle")} className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-[#0A2351]">Back</button>
                    <button 
                      onClick={() => setPhase("message")}
                      disabled={selected.length !== layout}
                      className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${selected.length === layout ? 'bg-[#0A2351] text-white' : 'bg-zinc-100 text-zinc-300'}`}
                    >
                      Personalize Message
                    </button>
                  </div>
                </motion.div>
              )}

              {phase === "message" && (
                <motion.div key="message" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6">
                  <h3 className="font-serif text-2xl text-[#0A2351]">Add Your Sentiment</h3>
                  <div className="relative max-w-md mx-auto">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value.slice(0, maxChars))}
                      className="w-full h-40 bg-white border border-[#B8860B]/20 rounded-3xl p-6 text-zinc-600 font-serif italic focus:outline-none focus:border-[#B8860B] shadow-inner"
                      placeholder="Write your heartfelt note here..."
                    />
                    <div className="absolute bottom-4 right-6 text-[10px] text-zinc-400 font-bold">{message.length}/{maxChars}</div>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button onClick={() => setPhase("sweets")} className="px-8 py-3 text-xs font-bold uppercase tracking-widest border border-zinc-200 rounded-full">Back</button>
                    <button className="px-10 py-3 bg-[#8B0000] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-xl hover:shadow-2xl">Confirm Selection</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Luxury Preview Area (Right Side) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-[#0A2351] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
               {/* Box Pattern Overlay */}
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
               
               <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                     <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">Box Preview</span>
                     <span className="text-[10px] font-bold text-[#B8860B]">{selected.length}/{layout || 0} Filled</span>
                  </div>

                  {layout ? (
                    <div
                      className="grid gap-3"
                      style={{ gridTemplateColumns: `repeat(${gridSpec.cols}, minmax(0, 1fr))` }}
                    >
                      {Array.from({ length: layout }).map((_, i) => (
                        <div key={i} className="aspect-square rounded-lg border border-white/10 bg-white/5 flex items-center justify-center p-2 text-center overflow-hidden">
                          {selected[i] ? (
                            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[8px] font-serif italic leading-tight">
                              {selected[i].name}
                            </motion.span>
                          ) : (
                            <div className="h-1 w-1 bg-white/20 rounded-full" />
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <div className="text-xs font-semibold tracking-widest text-white/70 uppercase">Choose a size to preview</div>
                      <div className="mt-3 grid grid-cols-3 gap-3">
                        {[4, 6, 8].map((n) => (
                          <div key={n} className="aspect-square rounded-xl border border-white/10 bg-white/5 grid place-items-center">
                            <span className="text-[11px] font-bold text-white/70">{n}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                    <div className="flex justify-between text-xs opacity-60">
                      <span>Curated Selection</span>
                      <span>₹{total}</span>
                    </div>
                    <div className="flex justify-between text-xs opacity-60">
                      <span>Gift Box & Packaging</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-serif pt-2">
                      <span>Total Value</span>
                      <span className="text-[#B8860B]">₹{total}</span>
                    </div>
                  </div>
               </div>
            </div>
            
            <p className="mt-4 text-[10px] text-center text-zinc-400 uppercase tracking-widest leading-relaxed px-4">
              Hand-packed with care in our signature <br /> Sri Krishna heritage box.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ number, label, active, completed }: { number: string; label: string; active: boolean; completed: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${
        active ? "bg-[#B8860B] text-white scale-110" : 
        completed ? "bg-[#0A2351] text-white" : "border border-zinc-200 text-zinc-300"
      }`}>
        {completed ? "✓" : number}
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? "text-[#0A2351]" : "text-zinc-300"}`}>
        {label}
      </span>
    </div>
  );
}