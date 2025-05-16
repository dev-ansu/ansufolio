import { Dot } from "../Dot"
import { Project } from "./Project"
import { Repositories } from "./Repositories"

export const Projects = ()=>{
 
    
    return(
        <div id="projects" className="my-32 flex flex-column flex-wrap  w-full">
            <h1 className="roboto-bold w-full text-4xl md:text-7xl text-white text-right">
                Meus projetos
                <Dot classes="w-5 h-5" />
            </h1>
            <Repositories />

        </div>

    )
}