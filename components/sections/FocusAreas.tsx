import Image from "next/image";
import Reveal from "@/components/reveal";

const services = [
  {
    label: "Youth Empowerment",
    text: "Leadership, mentorship, life skills and career guidance that help young people reach their full potential.",
    image: "/images/focus-youth.jpg",
    alt: "Smiling children celebrating together",
    number: "text-white",
  },
  {
    label: "Education & Skills",
    text: "Education, vocational training, digital literacy and practical skills for employment and self-reliance.",
    image: "/images/focus-education.jpg",
    alt: "Children learning together at computers",
    number: "text-white",
  },
  {
    label: "Economic Empowerment",
    text: "Entrepreneurship, financial literacy and business development for sustainable livelihoods.",
    image: "/images/focus-economic.jpg",
    alt: "Young people collaborating around laptops",
    number: "text-white",
  },
  {
    label: "Health & Well-being",
    text: "Health awareness, disease prevention, nutrition and mental well-being for healthier living.",
    image: "/images/focus-health.jpg",
    alt: "A group of young people together outdoors",
    number: "text-white",
  },
  {
    label: "Social Inclusion",
    text: "Support for vulnerable groups, gender equality, environmental care and stronger community participation.",
    image: "/images/focus-inclusion.jpg",
    alt: "Community members gathered at an event",
    number: "text-white",
  },
];

export default function FocusAreas() {
  return (
    <section
      id="focus-areas"
      aria-labelledby="focus-heading"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-orange/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="rise-item font-inter text-xs font-semibold tracking-[0.2em] text-brand-teal uppercase">
            What we do
          </p>
          <h2
            id="focus-heading"
            className="rise-item mt-4 text-4xl leading-tight font-bold tracking-tight text-brand-ink sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Our <span className="text-brand-pink">Focus Areas</span>
          </h2>
          <p
            className="rise-item mt-5 max-w-2xl text-lg leading-8 text-zinc-600"
            style={{ animationDelay: "160ms" }}
          >
            Five connected areas of work, one goal: self-reliant, thriving
            communities.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.label}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <article
                className="rise-item group relative h-full overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span
                    className={`absolute bottom-3 left-4 font-inter text-xs font-semibold ${service.number}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-inter text-base font-semibold text-brand-ink">
                    {service.label}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    {service.text}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 font-inter text-xs font-semibold text-brand-teal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
