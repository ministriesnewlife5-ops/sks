"use client";

import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#0A2351] selection:bg-[#B8860B] selection:text-white">
      <NavBar />

      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-[#0A1931]">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        <div className="relative z-10 text-center px-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B8860B]/50" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">Corporate Gifting</span>
              <div className="h-px w-8 bg-[#B8860B]/50" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
              Corporate <span className="italic text-[#B8860B]">Orders</span>
            </h1>
            <p className="mt-4 font-serif italic text-zinc-300 max-w-lg mx-auto">
              "Impress clients & teams with the gift of tradition."
            </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-4xl text-[#0A2351] leading-tight">
                  Why Choose Us for <span className="italic">Corporate</span> Gifting?
                </h2>
                <p className="mt-4 text-sm text-zinc-600 max-w-xl leading-7">
                  Make every celebration memorable. From Diwali hampers to client appreciation
                  gifts, our premium sweets leave a lasting impression.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-zinc-700">
                  {[
                    "Custom branding on packaging",
                    "Bulk order discounts",
                    "Dedicated account manager",
                    "Pan-India delivery",
                    "Flexible payment options",
                    "Assorted or custom assortments",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-[#B8860B]/15 text-[#B8860B] ring-1 ring-[#B8860B]/25">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    { k: "500+", v: "Companies" },
                    { k: "50K+", v: "Orders" },
                    { k: "Custom", v: "Gift Boxes" },
                  ].map((s) => (
                    <div
                      key={s.v}
                      className="rounded-2xl border border-zinc-200 bg-white/70 p-5 text-center shadow-[0_26px_70px_-55px_rgba(0,0,0,0.55)]"
                    >
                      <div className="text-lg font-serif text-[#0A2351]">{s.k}</div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-2xl border border-zinc-200 bg-white/70 p-7 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.75)]"
              >
                <div className="font-serif text-xl text-[#0A2351]">Request a Quote</div>

                <form className="mt-6 space-y-4" action="#">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      placeholder="Full Name"
                      className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-[#B8860B]"
                    />
                    <input
                      placeholder="Company Name"
                      className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-[#B8860B]"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-[#B8860B]"
                  />

                  <input
                    placeholder="Phone Number"
                    className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-[#B8860B]"
                  />

                  <input
                    placeholder="Estimated Quantity (e.g. 100 boxes)"
                    className="h-11 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm outline-none transition focus:border-[#B8860B]"
                  />

                  <textarea
                    placeholder="Tell us about your requirements..."
                    className="h-28 w-full resize-none rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#B8860B]"
                  />

                  <button
                    type="submit"
                    className="h-11 w-full rounded-lg bg-[#F5C84B] text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A2351] shadow-[0_18px_40px_-28px_rgba(184,134,11,0.55)] transition hover:brightness-105"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
