import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const values = [
  {
    title: "Pure Love",
    desc: "Every sweet is made with the same love our founder poured into his very first batch in 1948.",
  },
  {
    title: "No Compromises",
    desc: "100% pure ghee, premium ingredients, and honest craftsmanship — always.",
  },
  {
    title: "Family First",
    desc: "From our family to yours, we treat every order as part of your celebration.",
  },
  {
    title: "Heritage",
    desc: "Seven decades of tradition, perfected in every bite and passed on with care.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#0A2351] selection:bg-[#B8860B] selection:text-white">
      <NavBar />

      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-[#0A1931]">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B8860B]/50" />
              <span className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">Our Story</span>
              <div className="h-px w-8 bg-[#B8860B]/50" />
            </div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl text-white leading-tight">
            About <span className="italic text-[#B8860B]">Sri Krishna Sweets</span>
          </h1>
          <p className="mt-4 font-serif italic text-zinc-300 max-w-2xl mx-auto">
            "From a passion for purity and a reverence for tradition, we’ve been crafting happiness since 1948."
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-sm relative overflow-hidden rounded-2xl border border-black/10 bg-zinc-100 shadow-[0_30px_80px_-70px_rgba(0,0,0,0.75)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/mysurpa.jpg"
                    alt="Sri Krishna Sweets"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pl-10">
              <div className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">
                The Founder
              </div>
              <h2 className="mt-4 font-serif text-4xl text-[#0A2351] leading-tight">
                A Vision Born in a <span className="italic">Kitchen</span>
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-600">
                <p>
                  In 1948, in Coimbatore, our founder began with a simple belief: that the best
                  sweets are made with pure ghee, honest ingredients, and boundless love.
                </p>
                <p>
                  What started as a small family operation quickly became the talk of the town.
                  People didn’t just come for the sweets — they came for the experience, the
                  warmth, the feeling of being welcomed into a family.
                </p>
                <p>
                  Today, we remain committed to the same promise. Every batch is handcrafted
                  daily in our kitchens, and every order is packed with care.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h3 className="font-serif text-3xl text-[#0A2351]">Our Values</h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-zinc-200 bg-white/70 p-7 text-center shadow-[0_26px_70px_-55px_rgba(0,0,0,0.55)]"
              >
                <div className="mx-auto mb-4 grid h-10 w-10 place-items-center rounded-full bg-[#B8860B]/15 text-[#B8860B] ring-1 ring-[#B8860B]/25">
                  ✦
                </div>
                <div className="font-serif text-lg text-[#0A2351]">{v.title}</div>
                <div className="mt-3 text-xs leading-6 text-zinc-600">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
