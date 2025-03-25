import About from "@/sections/About";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="bg-primary w-full overflow-hidden">
      <Hero />
      <About />
    </main>
  );
}
