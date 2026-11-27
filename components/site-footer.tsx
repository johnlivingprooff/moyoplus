import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "About Us", href: "#about-us" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Approach", href: "#approach" },
  { label: "Commitment", href: "#commitment" },
  { label: "Stories", href: "#stories" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand-teal-dark text-white">
      <Image
        aria-hidden="true"
        src="/images/moyo-plus-mark.png"
        alt=""
        width={420}
        height={336}
        className="absolute -right-16 -bottom-24 w-[26rem] -rotate-12 opacity-10 brightness-0 invert sm:-right-8 lg:w-[32rem]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link href="#hero" aria-label="Moyo Plus home">
              <Image
                src="/images/moyo-plus-logo.png"
                alt="Moyo Plus — Improving Lives"
                width={180}
                height={42}
                className="h-auto w-48 brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-sm leading-7 text-white/75">
              Improving lives through love, care, advocacy, capacity building
              and support.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-inter text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-white/20 pt-6 text-xs text-white/60">
          <p>© 2026 Moyo Plus Malawi. Improving Lives.</p>
        </div>
      </div>
    </footer>
  );
}
