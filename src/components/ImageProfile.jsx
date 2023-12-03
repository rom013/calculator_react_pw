import { twMerge } from "tailwind-merge"

export default function ImageProfile({urlImg, nameUser, className: style, link}){
    return(
        <a
            className={twMerge("w-10 h-10 border-2 border-white rounded-full overflow-hidden sticky hover:z-10 hover:scale-110 cursor-pointer transition-all duration-300", style)}
            title={`@${nameUser}`}
            target="_blank"
            href={link ? link : "#"}
        >
            <img 
                className="w-full h-full object-cover"
                src={urlImg} 
                alt={`@${nameUser}`} 
            />
        </a>
    )
}