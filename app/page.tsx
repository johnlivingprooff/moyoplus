import SiteHeader from "@/components/site-header";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import FocusAreas from "@/components/sections/FocusAreas";
import Approach from "@/components/sections/Approach";
import Commitment from "@/components/sections/Commitment";
import GetInvolved from "@/components/sections/GetInvolved";
import Stories from "@/components/sections/Stories";
import SiteFooter from "@/components/site-footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex-1">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-brand-teal/15 blur-[100px]" />
        <div className="absolute -top-32 -right-40 h-[36rem] w-[36rem] rounded-full bg-brand-pink/15 blur-[100px]" />
      </div>

      <SiteHeader />
      <main className="relative flex-1">
        <Hero />
        <AboutUs />
        <FocusAreas />
        <Approach />
        <Commitment />
        <GetInvolved />
        <Stories />
      </main>
      <SiteFooter />
    </div>
  );
}
