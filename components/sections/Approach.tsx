import Image from "next/image";
import Reveal from "@/components/reveal";

const steps = [
  {
    label: "Partnerships",
    text: "Working alongside local groups and partners to reach those most in need.",
    marker: "bg-brand-pink",
  },
  {
    label: "Training",
    text: "Practical skills and mentorship that build confidence and self-reliance.",
    marker: "bg-brand-teal",
  },
  {
    label: "Awareness",
    text: "Campaigns that spark conversation on health, inclusion and opportunity.",
    marker: "bg-brand-orange",
  },
  {
    label: "Community programmes",
    text: "Local, sustainable initiatives that turn potential into opportunity.",
    marker: "bg-brand-teal",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="soft-float absolute top-16 right-[8%] h-32 w-32 rounded-full border-2 border-brand-teal/20"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 h-[32rem] w-[32rem] rounded-full bg-brand-teal/10 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <p className="rise-item font-inter text-xs font-semibold tracking-[0.2em] text-brand-teal uppercase">
            How we work
          </p>
          <h2
            id="approach-heading"
            className="rise-item mt-4 text-4xl leading-tight font-bold tracking-tight text-brand-ink sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Our <span className="text-brand-teal">Approach</span>
          </h2>
          <p
            className="rise-item mt-6 max-w-xl text-lg leading-8 text-zinc-600"
            style={{ animationDelay: "160ms" }}
          >
            We work with communities, not for them. Partnerships, practical
            training and local programmes turn potential into opportunity.
          </p>

          <div
            className="rise-item relative mt-8 h-64 overflow-hidden rounded-3xl border border-black/10 shadow-sm sm:h-80"
            style={{ animationDelay: "240ms" }}
          >
            <Image
              src="/images/approach-workshop.jpg"
              alt="Community members in a collaborative workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
            <p className="absolute right-5 bottom-5 left-5 font-inter text-sm font-semibold text-white">
              Built together, locally.
            </p>
          </div>

          <div
            className="rise-item mt-8 border-l-4 border-brand-orange pl-4"
            style={{ animationDelay: "320ms" }}
          >
            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              <span className="font-semibold text-brand-ink">The result:</span>{" "}
              people and communities developing their potential and achieving a
              better quality of life.
            </p>
          </div>
        </Reveal>

        <Reveal className="relative">
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-5 w-px bg-brand-teal/20"
          />
          <div
            aria-hidden="true"
            className="timeline-progress absolute top-3 bottom-3 left-5 w-px bg-brand-teal"
          />

          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li
                key={step.label}
                className="rise-item group relative pl-14"
                style={{ animationDelay: `${index * 140 + 100}ms` }}
              >
                <span
                  className={`absolute top-2 left-0 flex h-10 w-10 items-center justify-center rounded-full font-inter text-xs font-bold text-white shadow-md ring-4 ring-white/60 transition-transform duration-500 group-hover:scale-110 ${step.marker}`}
                >
                  {index + 1}
                </span>
                <article className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <h3 className="font-inter text-sm font-semibold text-brand-ink">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    {step.text}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
