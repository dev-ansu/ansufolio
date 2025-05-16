"use client";

import { useEffect, useState } from "react";
import { Project, ReposProps } from "../Project";
import { api } from "@/services/api";

export const Repositories = ()=>{
    const [repos, setRepos] = useState<ReposProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    // https://api.github.com/repos/dev-ansu/ansulinks
    const repositorios = [
        'ansulinks',
        'devcontrole',
        'encurtadim',
        'pizzariaweb',
        'escolaitep',
        'tarefasplus',
        'webcarros'
    ]
    useEffect(()=>{
        const getRepos = ()=>{
            repositorios.forEach(async(repo)=>{
                const response = await api.get(`/repos/dev-ansu/${repo}`)

                setRepos((oldRepo)=> [...oldRepo,
                {
                    name: response.data.name,
                    homepage: response.data.homepage,
                    html_url: response.data.html_url,
                }]);
                setIsLoading(false);
            })
        }
        getRepos();
    },[])
    return(
        <section className="w-full my-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            {repos.map( repo => (
                <>
                    {isLoading && <Project isLoading={isLoading} />}
                    {!isLoading && <Project project={repo} key={repo.name} isLoading={isLoading} />}
                </>
            ))}
        </section>
    )
}