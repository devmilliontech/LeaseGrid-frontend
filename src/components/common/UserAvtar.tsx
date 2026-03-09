import { UserIcon } from "lucide-react"

export const UserAvatar=({img,className}: {img?:string,className?:string} )=>{

    return(
        <div className={`rounded-full  flex items-center justify-center ${className}`}
        >
            {img ? <img src={img} alt="" className="rounded-full w-full h-full " />
                : <UserIcon className="w-full h-full p-2 rounded-full bg-gray-200" />
            }
        </div>
    )
}