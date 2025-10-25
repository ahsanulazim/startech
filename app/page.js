import Hero from "@/components/home/Hero";
import Tool from "@/components/home/Tool";
import NewMarquee from "@/components/ui/NewMarquee";

export default function Home() {
  return (
    <main className="bg-base-300">
      <Hero />
      <NewMarquee />
      <Tool />
    </main>
  );
}
