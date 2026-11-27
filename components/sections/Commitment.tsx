import Image from "next/image";
import Reveal from "@/components/reveal";

const promises = [
  {
    label: "Love & Care",
    text: "Compassion and a nurturing spirit for children and women.",
    accent: "border-brand-pink",
    dot: "bg-brand-pink",
  },
  {
    label: "Growth & Trust",
    text: "Renewal, progress and sustainable improvement for young people.",
    accent: "border-brand-teal",
    dot: "bg-brand-teal",
  },
  {
    label: "Hope & Opportunity",
    text: "Positive change and bright opportunities created through care and support.",
    accent: "border-brand-orange",
    dot: "bg-brand-orange",
  },
];

export default function Commitment() {
  return (
    <section
      id="commitment"
      aria-labelledby="commitment-heading"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="soft-float absolute top-16 right-[6%] h-28 w-28 rounded-full border-2 border-brand-pink/20"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="rise-item font-inter text-xs font-semibold tracking-[0.2em] text-brand-teal uppercase">
            What we stand for
          </p>
          <h2
            id="commitment-heading"
            className="rise-item mt-4 text-4xl leading-tight font-bold tracking-tight text-brand-ink sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Our <span className="text-brand-pink">Commitment</span>
          </h2>
          <p
            className="rise-item mt-6 max-w-xl text-lg leading-8 text-zinc-600"
            style={{ animationDelay: "160ms" }}
          >
            People at the heart of everything we do. We stand with children,
            young people and women — especially the vulnerable — with love,
            care and compassion.
          </p>

          <div
            className="rise-item relative mt-8 h-72 overflow-hidden rounded-3xl border border-black/10 shadow-sm sm:h-80"
            style={{ animationDelay: "240ms" }}
          >
            <Image
              src="/images/commitment-unity.jpg"
              alt="Hands joined together in unity"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/75 via-transparent to-transparent" />
            <p className="absolute right-6 bottom-6 left-6 font-inter text-sm font-semibold text-white">
              Support that goes beyond the ordinary.
            </p>
          </div>
        </Reveal>

        <Reveal className="flex flex-col justify-center gap-4">
          {promises.map((promise, index) => (
            <article
              key={promise.label}
              className={`rise-item rounded-2xl border border-black/10 border-l-4 bg-white/70 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${promise.accent}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className={`h-2.5 w-2.5 rounded-full ${promise.dot}`} />
                <h3 className="font-inter text-sm font-semibold tracking-wide text-brand-ink uppercase">
                  {promise.label}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {promise.text}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
