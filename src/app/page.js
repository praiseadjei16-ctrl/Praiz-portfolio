import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import LocationCards from "@/components/LocationCards";
import Works from "@/components/Works";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <LocationCards />
        <About />
        <Works />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
