import { FaGithub, FaLinkedin } from "react-icons/fa";


export const SocialMedias = ()=>{
    return(
        <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank">
                <FaLinkedin size={22} color="#fff" />
            </a>            
            <a href="https://github.com/dev-ansu" target="_blank">
                <FaGithub size={22} color="#fff" />
            </a>            
        </div>     
    )
}