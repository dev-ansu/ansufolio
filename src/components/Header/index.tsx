import Link from "next/link"
import { SocialMedias } from "../SocialMedias";
import { Dot } from "../Dot";


export const Header = ()=>{
    return(
        <header className="bg-black h-full w-full flex flex-col items-center py-8 space-y-10">
        {/* Logo */}
        <Link href="/" className="w-10 h-10 rounded flex items-center justify-center">
          {/* Substitua com sua imagem ou ícone */}
          <span className="font-bold text-white text-lg">A<Dot /></span>
        </Link>
      
        {/* Navegação */}
        <nav className="flex flex-col items-center space-y-6">
          <Link href="/#about" className="text-gray-400 border-b-[1px] w-full text-center border-b-transparent hover:border-b-purple-500 hover:text-white transition-all uppercase text-sm tracking-wide">
            About
          </Link>
          <Link href="/#projects" className="text-gray-400 border-b-[1px] w-full text-center border-b-transparent hover:border-b-purple-500 hover:text-white transition-all uppercase text-sm tracking-wide">
            Projects
          </Link>
          <Link href="/#experience" className="text-gray-400 border-b-[1px] w-full text-center border-b-transparent hover:border-b-purple-500 hover:text-white transition-all uppercase text-sm tracking-wide">
            Exp.
          </Link>
          <Link href="/#contact" className="text-gray-400 border-b-[1px] w-full text-center border-b-transparent hover:border-b-purple-500 hover:text-white transition-all uppercase text-sm tracking-wide">
            Contact
          </Link>
        </nav>
      </header>
    )
}

export const SubHeader = ()=>{
    return(
        <div className="flex m-0 p-0 items-center gap-4 justify-between">
            <SocialMedias />       
            <div>
                <button className="h-12 transition-all roboto-semi-bold hover:bg-purple-300 hover:text-black rounded cursor-pointer w-40 text-lg px-2 py-1 text-purple-300 border-[1px] border-purple-700">
                    Currículo
                </button>
            </div>            
        </div>
    )
}