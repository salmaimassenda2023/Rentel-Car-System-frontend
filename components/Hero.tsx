'use client';
import React from "react";
import { CustomButton, Navbar } from "@/components/index";

const handleScroll = () => {
};

const Hero = () => {
    return (
        <div className="hero">


            {/* Section principale */}
            <div className="hero__content">
                {/* Contenu texte */}
                <div className="flex-1 text-white">
                    <h1 className="hero__title">
                        Your Journey, Your Car, Your Way.
                    </h1>
                    <p className="hero__subtitle">
                        Choose the perfect car for your adventure, from city drives to road trips. Enjoy
                        flexibility, comfort, and safety with our reliable rental service.
                    </p>
                    <div className="mt-10 flex gap-5">
                        <CustomButton
                            title="Book Now"
                            containerStyles="text-white border border-white rounded-full px-3 py-1 hover:bg-white hover:text-black transition"
                            handleClick={handleScroll}
                        />
                        <CustomButton
                            title="See all Cars"
                            containerStyles="text-white border border-white rounded-full px-3 py-1 hover:bg-white hover:text-black transition"
                            handleClick={handleScroll}
                        />
                    </div>
                </div>

                {/* Contenu image */}
                <div className="hero__image-container">
                    <img
                        src="/mycar.png"
                        alt="Car Image"
                        className="hero__image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
