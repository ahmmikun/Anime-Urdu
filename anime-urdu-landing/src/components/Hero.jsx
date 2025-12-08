import React from 'react';
import logo from '../assets/Group-Image/image.png';
import bgImage from '../assets/Web-Asthetics/image-eva.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 border-b-2 border-evaGreen overflow-hidden">
            {/* Background Grid & Effects */}
            <div className="absolute inset-0 z-0 bg-evaDark">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-4xl w-full">
                {/* Logo with Glow */}
                <div className="relative group animate-pulse-slow">
                    <div className="absolute -inset-1 bg-gradient-to-r from-evaGreen to-evaPurple rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src={logo}
                        alt="Anime Urdu Logo"
                        className="relative w-40 h-40 rounded-full border-2 border-evaGreen object-cover bg-black"
                    />
                </div>

                {/* Title & Subtitle */}
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-evaGreen via-white to-evaPurple drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]">
                    ANIME <span className="font-sans tracking-normal inline-block align-middle transform -translate-y-1">اُردو</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 tracking-widest uppercase border-l-4 border-evaPurple pl-4 bg-black/50 backdrop-blur-sm p-2">
                    Neon Evangelion Themed WhatsApp Anime Community
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8">
                    <a href="#whatsapp" className="px-8 py-3 bg-evaGreen/10 border border-evaGreen text-evaGreen hover:bg-evaGreen hover:text-black transition-all duration-300 uppercase tracking-widest font-bold hover:shadow-neon-green backdrop-blur-sm">
                        Join Group
                    </a>
                    <a href="#members" className="px-8 py-3 bg-evaPurple/10 border border-evaPurple text-evaPurple hover:bg-evaPurple hover:text-white transition-all duration-300 uppercase tracking-widest font-bold hover:shadow-neon-purple backdrop-blur-sm">
                        View Members
                    </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-16 h-16 border-t-4 border-l-4 border-evaGreen opacity-70"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border-b-4 border-r-4 border-evaPurple opacity-70"></div>
                <div className="absolute top-10 right-10 w-16 h-16 border-t-4 border-r-4 border-evaPurple opacity-70"></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 border-b-4 border-l-4 border-evaGreen opacity-70"></div>
            </div>
        </section>
    );
};

export default Hero;
