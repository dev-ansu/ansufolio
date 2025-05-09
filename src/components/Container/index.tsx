import { ReactNode } from "react";

export const Container = ({children}: { children: ReactNode})=>{
    return(
        <div className="bg-[var(--main-bg-color)] min-h-screen">
            { children }
        </div>
    )
}