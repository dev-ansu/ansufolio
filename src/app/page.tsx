import { About } from "@/components/About";
import { Header, SubHeader } from "@/components/Header";
import { Hero } from "@/components/Hero";



export default function Home() {
  return (
    <main className="m-0 p-0 min-h-screen flex">
        <div className="w-20 fixed top-0 left-0 h-screen">
          <Header />
        </div>

      <div className="ml-16 md:ml-24 p-6 flex-1">
        <SubHeader />
        <Hero />
        <About />

      </div>

    </main>
  );
}
