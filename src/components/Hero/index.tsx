
import { TypingText } from "./components"

export const Hero = ()=>{
   
    return(
        <div className="my-16 w-full md:max-w-1/2">
            <div className="">
                <h1 className="roboto-bold text-4xl md:text-7xl text-white">
                    <TypingText 
                        fullText="Aoba, meu nome é Anderson."
                    />
                </h1>
            </div>
            <div className="mt-4">
                <h2 className="text-white text-xl md:text-2xl"><span className="font-thin">Eu sou um</span> <span className="roboto-bold text-purple-300">Desenvolvedor <TypingText fullText="FullStack" />
                </span></h2>
            </div>

            <div className="mt-4">
                <p className="font-thin text-white text-lg">
                    Eu tenho investido cinco anos estudando e aprendendo sobre Desenvolvimento Web nas mais diversas tecnologias. Além disso, tenho experiência como educador de informática, ensinando jovens e adultos desde o pacote Office a programação.
                </p>
            </div>
        </div>
    )
}