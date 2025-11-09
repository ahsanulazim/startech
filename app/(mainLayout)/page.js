import Accordion from "@/components/home/Accordion";
import Comparison from "@/components/home/Comparison";
import Featured from "@/components/home/Featured";
import FrdProducts from "@/components/home/FrdProducts";
import Hero from "@/components/home/Hero";
import Location from "@/components/home/Location";
import Tool from "@/components/home/Tool";
import NewMarquee from "@/components/ui/NewMarquee";

export default function Home() {
  return (
    <main className="bg-base-300">
      <Hero />
      <NewMarquee />
      <Tool />
      <Featured />
      <Comparison />
      <Location />
      {/* <FrdProducts /> */}
      <Accordion />
    </main>
  );
}
