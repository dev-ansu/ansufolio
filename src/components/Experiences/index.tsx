import { Dot } from "../Dot"
import { Experience } from "./Experience"

export const Experiences = ()=>{
    return(
        <div id="experience" className="my-32 w-full">
            <div className="">
                <h1 className="roboto-bold text-4xl md:text-7xl text-white">
                    Experiências
                    <Dot classes="w-5 h-5" />
                </h1>
            </div>

            <div className="flex flex-col gap-8 md:flex-row mt-4 justify-start items-start">
              <Experience 
                empresa="Prepara Cursos"
                periodo="2016 - Atualmente"
                cargo="Educador de informática"
                cidade="Fortaleza"
                descricao="Auxílio a alunos em aulas de informática e programação. 
                Manutenção de computadores e gestão de infraestrutura. 
                Desenvolvimento de relatórios (evasão escolar, materiais, agendamento de reposições). 
                Desenvolvi AyASystem, sistema de gestão escolar com foco na comunicação automatizada com responsáveis, reduzindo a evasão escolar. Foi construído em PHP + NodeJS com integração ao WhatsAppWeb.js."
                tecnologies={[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'PHP',
                    'NodeJS',
                    'ReactJS',
                    'NextJS',
                    'PostgreSQL',
                    'MySQL',
                    'Prisma',
                    'TailwindCSS',
                    'Sass',
                    'Express',
                    'Firebase'
                ]}
              />

            </div>
        </div>
    )
}