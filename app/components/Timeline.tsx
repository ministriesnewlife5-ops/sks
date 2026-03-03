type TimelineItem = {
  year: string;
  title: string;
  desc: string;
};

const TIMELINE: TimelineItem[] = [
  {
    year: "1948",
    title: "The Beginning",
    desc: "Founded in Coimbatore with a single vision—to craft the purest sweets with nothing but love and ghee.",
  },
  {
    year: "1972",
    title: "First Sweet Shop",
    desc: "Our first dedicated shop opened in R.S. Puram, Coimbatore, quickly becoming a local landmark.",
  },
  {
    year: "1991",
    title: "Citywide Presence",
    desc: "Multiple branches across Coimbatore cemented our reputation as the city’s most trusted sweet brand.",
  },
  {
    year: "1996",
    title: "South India Expansion",
    desc: "Chennai, Bangalore, and beyond—families across South India embraced Sri Krishna Sweets.",
  },
  {
    year: "Today",
    title: "75+ Outlets & Growing",
    desc: "75+ stores across India, 3 in UAE, and a nationwide delivery network—the same recipe, the same purity.",
  },
];

export default function Timeline() {
  return (
    <section className="relative bg-[#FDFCF0]">
      <div className="absolute inset-0 opacity-[0.5] bg-[radial-gradient(circle_at_8px_8px,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-700/70">
            Our Heritage
          </div>
          <h2 className="mt-3 text-3xl font-serif text-[#0b2a5a] md:text-5xl">
            Seven Decades of <span className="italic text-blue-900">Pure Sweetness</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-yellow-700/30" />
          {TIMELINE.map((item, idx) => (
            <div
              key={item.year}
              className="relative md:grid md:grid-cols-2 gap-20 py-10 group"
            >
              {idx % 2 === 0 ? (
                <>
                  <div className="text-right">
                    <div className="relative inline-block rounded-xl px-4 py-3 transition-all group-hover:bg-white/60 group-hover:shadow-sm">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-700 transition-colors group-hover:text-yellow-800">
                        {item.year}
                      </div>
                      <div className="mt-1 text-lg font-serif text-[#0b2a5a] transition-colors group-hover:text-blue-900">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div>
                    <div className="relative inline-block rounded-xl px-4 py-3 transition-all group-hover:bg-white/60 group-hover:shadow-sm">
                      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-700 transition-colors group-hover:text-yellow-800">
                        {item.year}
                      </div>
                      <div className="mt-1 text-lg font-serif text-[#0b2a5a] transition-colors group-hover:text-blue-900">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
                    </div>
                  </div>
                </>
              )}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-2 w-2 rounded-full bg-yellow-600 shadow ring-4 ring-yellow-600/20 transition-all group-hover:scale-125 group-hover:ring-yellow-600/40 group-hover:shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
