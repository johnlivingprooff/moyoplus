import Image from "next/image";
import Link from "next/link";

const fade = {
  maskImage:
    "linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to left, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to left, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
} as const;

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="rise-item relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-full lg:w-[58%]"
      >
        <Image
          src="/images/little-girl.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="-translate-y-20 object-cover object-center lg:translate-y-0"
          style={fade}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center px-6 py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center text-center lg:-ml-12 lg:items-start lg:text-left">
          <h1
            id="hero-heading"
            className="max-w-3xl text-5xl leading-[1.08] font-bold tracking-tight text-brand-ink sm:text-6xl lg:text-7xl"
          >
            Improving lives through{" "}
            <span className="text-brand-pink">Love</span>,{" "}
            <span className="text-brand-teal">Care</span>, Advocacy, Capacity
            Building & <span className="text-brand-orange">Support</span>.
          </h1>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="#get-involved"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand-pink px-7 text-sm font-semibold text-white shadow-lg shadow-brand-pink/20 transition-colors hover:bg-[#c81460] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-pink"
            >
              Get Involved
            </Link>
            <Link
              href="#focus-areas"
              className="inline-flex h-12 items-center justify-center rounded-full border border-brand-teal/30 px-7 text-sm font-semibold text-brand-teal transition-colors hover:bg-brand-teal/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
            >
              Discover Our Work
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-4 border-l-4 border-brand-orange pl-4 text-left">
            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              <span className="font-semibold text-brand-ink">
                People at the heart of everything we do.
              </span>{" "}
              Unity, inclusion and the value of every individual.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-[4vw] bottom-8 hidden rounded-2xl bg-brand-teal px-5 py-3 text-white shadow-lg transition-transform duration-500 hover:scale-110 lg:right-[6vw] lg:bottom-16 lg:block">
        <p className="text-xs font-medium opacity-90">Moyo Plus</p>
        <p className="text-sm font-semibold">Improving Lives</p>
      </div>
    </section>
  );
}
