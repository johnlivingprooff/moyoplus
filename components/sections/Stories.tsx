import Image from "next/image";
import Reveal from "@/components/reveal";

const stories = [
  {
    label: "Every child",
    title: "A child, seen.",
    text: "Every child deserves a caring environment where they can simply be a child — and dream a little bigger.",
    image: "/images/little-girl.jpg",
    alt: "A smiling child making a heart shape with her hands",
  },
  {
    label: "Every skill",
    title: "Skills that open doors.",
    text: "Practical learning turns curiosity into confidence, and confidence into self-reliance.",
    image: "/images/focus-education.jpg",
    alt: "Children learning together at computers",
  },
  {
    label: "Every community",
    title: "Communities that care.",
    text: "When people come together, support becomes opportunity and opportunity becomes progress.",
    image: "/images/approach-team.jpg",
    alt: "Young people collaborating around laptops",
  },
];

export default function Stories() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-pink/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="rise-item font-inter text-xs font-semibold tracking-[0.2em] text-brand-teal uppercase">
            Moments that matter
          </p>
          <h2
            id="stories-heading"
            className="rise-item mt-4 text-4xl leading-tight font-bold tracking-tight text-brand-ink sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            <span className="text-brand-pink">Stories</span> of change
          </h2>
          <p
            className="rise-item mt-5 max-w-2xl text-lg leading-8 text-zinc-600"
            style={{ animationDelay: "160ms" }}
          >
            Behind every programme is a person, a family, a community finding
            new possibility.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {stories.map((story, index) => (
            <Reveal key={story.label} className={index === 0 ? "md:row-span-2" : ""}>
              <article
                className="rise-item group relative h-full min-h-80 overflow-hidden rounded-3xl border border-black/10 shadow-sm"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="font-inter text-xs font-semibold tracking-[0.2em] text-brand-orange uppercase">
                    {story.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    {story.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/85">
                    {story.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <blockquote className="rise-item rounded-3xl border-l-4 border-brand-orange bg-white/70 p-8 shadow-sm sm:p-10">
            <p className="max-w-3xl text-xl leading-9 font-semibold text-brand-ink sm:text-2xl">
              “A future where every individual is empowered to reach their full
              potential and every community thrives.”
            </p>
            <footer className="mt-5 font-inter text-xs font-semibold tracking-wide text-brand-teal uppercase">
              Our vision — Moyo Plus Malawi
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
