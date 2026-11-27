const pillars = [
  {
    label: "Vision",
    text: "A future where every individual reaches their full potential and every community thrives.",
    accent: "border-brand-pink",
  },
  {
    label: "Mission",
    text: "Sustainable programmes in education, skills, health, entrepreneurship and social inclusion that empower individuals and communities.",
    accent: "border-brand-teal",
  },
  {
    label: "Values",
    text: "Love, care, unity and inclusion — with hope, growth and opportunity for all.",
    accent: "border-brand-orange",
  },
];

const heartFade = {
  maskImage: "linear-gradient(to top, transparent 0%, transparent 45%, black 55%)",
  WebkitMaskImage: "linear-gradient(to top, transparent 0%, transparent 45%, black 55%)",
} as const;

export default function AboutUs() {
  return (
    <section
      id="about-us"
      aria-labelledby="about-heading"
      className="rise-item relative overflow-hidden py-24 lg:py-32"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.65"
        style={heartFade}
        className="absolute top-[calc(50%-10px)] -left-24 h-[45rem] w-[45rem] translate-x-[10px] -translate-y-1/2 -rotate-[5deg] text-brand-pink/20 sm:-left-12"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l8.84 8.84 8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="font-inter text-xs font-semibold tracking-[0.2em] text-brand-teal uppercase">
            Who we are
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-4xl leading-tight font-bold tracking-tight text-brand-ink sm:text-5xl"
          >
            About <span className="text-brand-pink">Moyo Plus</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
            Moyo Plus Malawi is a non-profit organisation empowering young
            people and strengthening communities through{" "}
            <span className="font-semibold text-brand-teal">
              education, skills, mentorship and sustainable livelihoods
            </span>
            . We champion equal opportunities and self-reliance for vulnerable
            groups.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.label}
              className={`rounded-2xl border border-black/10 border-l-4 bg-white/70 p-6 shadow-sm backdrop-blur-sm ${pillar.accent}`}
            >
              <h3 className="font-inter text-sm font-semibold tracking-wide text-brand-ink uppercase">
                {pillar.label}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
