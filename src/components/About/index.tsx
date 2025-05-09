import { Terminal } from "lucide-react"
import { Dot } from "../Dot"
import { Tecnology } from "./Tecnology"

export const About = async ()=>{
    const tecnologies = [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "NextJS",
        "NodeJS",
        "Express",
        "Postgres",
        "Github",
        "PHP",
        "TailwindCSS",
        "Bootstrap"
    ]
    return(
        <div id="about" className="my-32 w-full">
            <div className="">
                <h1 className="roboto-bold text-4xl md:text-7xl text-white">
                    Sobre mim
                    <Dot classes="w-5 h-5" />
                </h1>
            </div>

            <div className="flex flex-col gap-8 md:flex-row mt-4 justify-start items-start">
                <div className="w-full md:max-w-1/2">
                    <p className="font-thin text-white text-lg">
                        Eu tenho investido cinco anos estudando e aprendendo sobre Desenvolvimento Web nas mais diversas tecnologias. Além disso, tenho experiência como educador de informática, ensinando jovens e adultos desde o pacote Office a programação.
                    </p>
                </div>

                <div className="flex flex-col w-full md:max-w-80">

                    <p className="flex gap-4 font-thin text-white text-lg">
                        <Terminal className="text-black bg-purple-300 rounded" />
                        Minhas tecnologias
                    </p>

                    <div className="flex mt-4 flex-row flex-wrap gap-2">
                        {tecnologies.map( tecnology => (
                            <Tecnology key={tecnology} tecnology={tecnology} />                    
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}