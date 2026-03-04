import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#0A2351] selection:bg-[#B8860B] selection:text-white">
      <NavBar />

      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-[#0A1931]">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        <div className="relative z-10 text-center px-6">
          <div className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">Contact</div>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl text-white leading-tight">
            Contact <span className="italic text-[#B8860B]">Us</span>
          </h1>
          <p className="mt-4 font-serif italic text-zinc-300 max-w-xl mx-auto">
            We’d love to help — orders, corporate enquiries, or a sweet hello.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-black/10 bg-white/70 p-7 shadow-[0_26px_70px_-55px_rgba(0,0,0,0.55)]">
                <div className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">Call</div>
                <div className="mt-3 font-serif text-xl text-[#0A2351]">Customer Care</div>
                <div className="mt-2 text-sm leading-7 text-[#0A2351]/70">
                  +91 98765 43210
                  <br />
                  Mon – Sat: 9:00 AM – 8:00 PM
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/70 p-7 shadow-[0_26px_70px_-55px_rgba(0,0,0,0.55)]">
                <div className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">Email</div>
                <div className="mt-3 font-serif text-xl text-[#0A2351]">Support</div>
                <div className="mt-2 text-sm leading-7 text-[#0A2351]/70">
                  support@srikrishnasweets.com
                  <br />
                  corporate@srikrishnasweets.com
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/70 p-7 shadow-[0_26px_70px_-55px_rgba(0,0,0,0.55)]">
                <div className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">Visit</div>
                <div className="mt-3 font-serif text-xl text-[#0A2351]">Head Office</div>
                <div className="mt-2 text-sm leading-7 text-[#0A2351]/70">
                  Sri Krishna Sweets
                  <br />
                  Coimbatore, Tamil Nadu
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-[0_26px_70px_-55px_rgba(0,0,0,0.55)]">
                <div className="text-[10px] font-bold tracking-[0.5em] text-[#B8860B] uppercase">Send a Message</div>
                <h2 className="mt-4 font-serif text-3xl text-[#0A2351] leading-tight">
                  Let’s make your occasion <span className="italic">sweeter</span>
                </h2>

                <form className="mt-8 grid gap-5" action="#">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="grid gap-2 text-xs font-semibold text-[#0A2351]">
                      Name
                      <input
                        className="h-11 w-full rounded-md border border-zinc-200 bg-[#FBF8EF] px-4 text-sm text-[#0A2351] outline-none ring-0 transition focus:border-[#B8860B]/60"
                        placeholder="Your name"
                        name="name"
                      />
                    </label>

                    <label className="grid gap-2 text-xs font-semibold text-[#0A2351]">
                      Phone
                      <input
                        className="h-11 w-full rounded-md border border-zinc-200 bg-[#FBF8EF] px-4 text-sm text-[#0A2351] outline-none ring-0 transition focus:border-[#B8860B]/60"
                        placeholder="Your phone number"
                        name="phone"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-xs font-semibold text-[#0A2351]">
                    Email
                    <input
                      className="h-11 w-full rounded-md border border-zinc-200 bg-[#FBF8EF] px-4 text-sm text-[#0A2351] outline-none ring-0 transition focus:border-[#B8860B]/60"
                      placeholder="you@example.com"
                      name="email"
                      type="email"
                    />
                  </label>

                  <label className="grid gap-2 text-xs font-semibold text-[#0A2351]">
                    Message
                    <textarea
                      className="min-h-36 w-full rounded-md border border-zinc-200 bg-[#FBF8EF] px-4 py-3 text-sm text-[#0A2351] outline-none ring-0 transition focus:border-[#B8860B]/60"
                      placeholder="Tell us what you need…"
                      name="message"
                    />
                  </label>

                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="text-xs text-[#0A2351]/60">
                      By submitting, you agree we may contact you back.
                    </div>
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center rounded-md bg-[#0A2351] px-6 text-[10px] font-bold uppercase tracking-[0.28em] text-white transition hover:brightness-110"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
