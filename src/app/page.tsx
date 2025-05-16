import { About } from "@/components/About";
import { Header, SubHeader } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";



export default function Home() {
  return (
    <main className="grid grid-cols-[auto_1fr] m-0 p-0 min-h-screen">
        <Header />
  
        <div className="max-w-6xl m-auto p-6">
          <SubHeader />
          <Hero />
          <About />
          <Projects />
        </div>

    </main>
  );
}
