import Hero from "@/components/Hero";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
