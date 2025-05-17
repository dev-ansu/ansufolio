import { Tecnology } from "@/components/About/Tecnology";

export interface ExperienceProps{
    empresa: string;
    periodo: string;
    cargo: string;
    cidade: string;
    descricao: string;
    tecnologies?: string[];
}

export const Experience = ({cargo,cidade,descricao,empresa,periodo, tecnologies}: ExperienceProps)=>{
    return(
        <div className="flex border-b-[1px] border-b-gray-500 py-16 flex-col gap-8 w-full">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl text-white">{empresa}</h1>
                <h2 className="font-thin text-white text-xl">{periodo}</h2>
            </div>
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-xl text-purple-300">{cargo}</h1>
                <h2 className="font-thin text-white text-xl">{cidade}</h2>
            </div>
            <div className="pr-12 text-white">
                <p>
                    {descricao}
                </p>
            </div>
        <div className="flex gap-2 flex-wrap max-w-2xl">
            {tecnologies && tecnologies?.map((tecnology, index) => (
                <Tecnology 
                    tecnology={tecnology}
                    key={index}
                />
            ))}
        </div>
    </div>
    )
}