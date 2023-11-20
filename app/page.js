import Image from "next/image";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
