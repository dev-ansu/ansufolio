import { Loader2 } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export type ReposProps = {
    html_url: string;
    homepage: string;
    name: string;
}

type ProjectProps = {
    project?: ReposProps;
    isLoading: boolean;
}

export const Project = ({project, isLoading}: ProjectProps)=>{
    return(
        <div className={`w-full flex flex-col ${!isLoading ? "p-4":""} rounded-xl bg-gray-800 h-64`}>
            {!isLoading ? (
            <>
                <div className="w-full flex justify-around items-center gap-4">
                    <h1 className="text-white text-2xl font-bold">{project?.name}</h1>
                    <div className="h-[0.4px] bg-purple-500 w-full border-300-500"></div>
                    <div>
                        <a target="_blank" href={project?.html_url}>
                            <FiGithub size={18} color="#fff" />
                        </a>
                    </div>
                </div>
                <div className="flex mt-4 text-purple-300 gap-2 flex-wrap">
                    <p>Typescript</p>
                </div>
                <div className="flex mt-4  text-green-400 gap-2 flex-wrap">
                    <a target="_blank" href={project?.homepage}> Veja em produção </a>
                </div>
            </>
            ):
            <div 
            
            className=" text-white rounded-xl bg-white/30 backdrop-blur-sm  w-full h-full justify-center flex items-center">
                <Loader2 className="animate-spin" size={64} />
            </div>
            }
        </div>
    )
}