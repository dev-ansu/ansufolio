import { SocialMedias } from "@/components/SocialMedias"
import { ArrowRightIcon } from "lucide-react"

export const AboutMe = ()=>{
    return(
        
        <section className="w-full md:max-w-1/2">
            <p className="font-thin text-white text-lg">
                Eu busco minha primeira oportunidade como estagiário em Desenvolvimento FullStack ou Análise de Dados.
                Tenho sólida base em programação e desenvolvimento web e venho aprofundando meus conhecimentos em tecnologias voltadas
                para análise de dados, banco de dados, visualização e desenvolvimento de aplicações. Sou graduado em <b>Gestão de TI</b> pelo Centro Universitário DomBosco e pós-graduado em <b>Desenvolvimento FullStack e Cloud Computing</b> pela Gran Faculdade.
            </p>
            <div className="mt-4 flex gap-3 items-center">
                <span className="text-green-500 flex items-center justify-center gap-1 font-bold">
                    Meus links
                    <ArrowRightIcon size={24} />                
                </span>
                <div>
                    <SocialMedias />
                </div>
            </div>
        </section>
    )
}