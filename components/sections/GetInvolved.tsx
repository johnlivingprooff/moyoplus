import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";

const actions = [
  {
    label: "Partner with us",
    text: "Join forces with local organisations and institutions to extend our reach.",
    image: "/images/approach-team.jpg",
    alt: "Young people working together around laptops",
  },
  {
    label: "Volunteer your time",
    text: "Share your skills as a mentor, trainer or community champion.",
    image: "/images/involve-volunteer.jpg",
    alt: "A volunteer ready to help at a community event",
  },
  {
    label: "Support a programme",
    text: "Help fund education, skills and livelihoods work in communities.",
    image: "/images/involve-volunteers.jpg",
    alt: "Volunteers sorting donations",
  },
  {
    label: "Spread the word",
    text: "Start conversations about inclusion, health and opportunity.",
    image: "/images/commitment-hand.jpg",
    alt: "One person reaching out to help another",
  },
];

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      aria-labelledby="involved-heading"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-orange/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="rise-item font-inter text-xs font-semibold tracking-[0.2em] text-brand-teal uppercase">
            Take action
          </p>
          <h2
            id="involved-heading"
            className="rise-item mt-4 text-4xl leading-tight font-bold tracking-tight text-brand-ink sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Get <span className="text-brand-orange">Involved</span>
          </h2>
          <p
            className="rise-item mt-5 max-w-2xl text-lg leading-8 text-zinc-600"
            style={{ animationDelay: "160ms" }}
          >
            Change starts with showing up. Partner with us, give your time, or
            help amplify the work already happening in communities.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {actions.map((action, index) => (
            <Reveal key={action.label}>
              <article
                className="rise-item group h-full overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={action.image}
                    alt={action.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-inter text-sm font-semibold text-brand-ink">
                    {action.label}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    {action.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="rise-item relative overflow-hidden rounded-3xl bg-brand-teal px-8 py-10 text-white shadow-lg sm:px-12">
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-16 h-64 w-64 rounded-full border-2 border-white/20"
            />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">
                  Ready to make a difference?
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-white/85">
                  Every partnership, hour and contribution adds another
                  opportunity for someone to thrive.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#stories"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 font-inter text-sm font-semibold text-brand-teal transition-transform duration-300 hover:scale-105"
                >
                  See the impact
                </Link>
                <Link
                  href="#focus-areas"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/60 px-6 font-inter text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Explore our work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
