'use client';

import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
       <div className="hero__nav">
           <nav className="flex justify-between items-center p-4 bg-transparent absolute top-0 left-0 w-full z-10 mb-4">
               {/* Menu Hamburger */}
               <div className="flex items-center">
                   <button className="text-white text-2xl">
                       ☰
                   </button>
               </div>

               {/* Logo */}
               <div className="flex justify-center items-center">
                   <Image
                       src="/isRent.png" // Remplacez par votre chemin d'image
                       alt="Logo"
                       width={100} // Ajustez la taille
                       height={50}
                       className="object-contain"
                   />
               </div>

               {/* Login/Register */}
               <div>
                   <button className="text-white border border-white rounded-full px-3 py-1 hover:bg-white hover:text-black transition">
                       Login / Register
                   </button>
               </div>
           </nav>
       </div>
    );
};

export default Navbar;
