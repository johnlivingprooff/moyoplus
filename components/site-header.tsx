import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About Us", href: "#about-us" },
  { label: "Our Focus Areas", href: "#focus-areas" },
  { label: "Our Approach", href: "#approach" },
  { label: "Our Commitment", href: "#commitment" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Stories", href: "#stories" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 mx-[2vw] mt-3">
      <nav
        aria-label="Main navigation"
        className="flex w-full items-center gap-3 rounded-2xl border border-black/10 bg-white/60 px-3 py-2 shadow-sm shadow-black/5 backdrop-blur-xl sm:px-4"
      >
        <Link href="#hero" aria-label="Moyo Plus home" className="shrink-0 px-1">
          <Image
            src="/images/moyo-plus-logo.png"
            alt="Moyo Plus — Improving Lives"
            width={180}
            height={42}
            priority
            className="h-auto w-28 sm:w-36"
          />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-lg px-3 py-2 font-inter text-[0.75rem] font-medium whitespace-nowrap text-zinc-600 transition-colors duration-300 hover:bg-brand-orange hover:text-brand-ink focus-visible:bg-brand-orange focus-visible:text-brand-ink focus-visible:outline-none sm:text-[0.8rem]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#get-involved"
          className="shrink-0 rounded-lg border border-brand-pink/30 px-4 py-2 font-inter text-[0.75rem] font-semibold whitespace-nowrap text-brand-ink transition-colors duration-300 hover:border-brand-pink hover:bg-brand-pink hover:text-white focus-visible:border-brand-pink focus-visible:bg-brand-pink focus-visible:text-white focus-visible:outline-none sm:text-[0.8rem]"
        >
          Support Us
        </Link>
      </nav>
    </header>
  );
}
