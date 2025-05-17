import { About } from "@/components/About";
import { Experiences } from "@/components/Experiences";
import { Header, SubHeader } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import * as motion from "motion/react-client"


export default function Home() {
  return (
    <main className="grid grid-cols-[auto_1fr] m-0 p-0 min-h-screen">
        <Header />
  
        <div className="max-w-6xl m-auto p-6">
            <SubHeader />
          <motion.div
            style={{
              translateX: -500,
              opacity: 0
            }}
            animate={{
                translateX: 0,
                opacity: 1,
            }}
          >
            <Hero />
          </motion.div>
          <About />
          <Projects />
          <Experiences />
        </div>

    </main>
  );
}
