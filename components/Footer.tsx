import React from "react";
import Image from "next/image";
const Footer =()=>{
    return(
        <div className="hero flex flex-col justify-start items-start mb-0">
            <Image
                src="/isRent.png" // Remplacez par votre chemin d'image
                alt="Logo"
                width={100} // Ajustez la taille
                height={50}
                className="object-contain"
            />
        </div>
    )
}
export default Footer