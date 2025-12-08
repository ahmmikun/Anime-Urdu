import React from 'react';
import logo from '../assets/Group-Image/image.png';
import bgImage from '../assets/Web-Asthetics/image-eva.png';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center p-6 border-b-2 border-evaGreen overflow-hidden">
            {/* Background Grid & Effects */}
            <div className="absolute inset-0 z-0 bg-evaDark">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-12">

                {/* Text Content (Left on Desktop, Bottom on Mobile) */}
                <div className="flex-1 text-center md:text-left order-2 md:order-1 space-y-6">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-evaGreen via-white to-evaPurple drop-shadow-[0_0_10px_rgba(57,255,20,0.8)] pb-2 leading-tight">
                        ANIME <br className="hidden md:block" />
                        <span className="font-sans tracking-normal inline-block transform -translate-y-1 md:-translate-y-2 text-4xl md:text-7xl text-white">اُردو</span>
                    </h1>
                    <p className="text-base md:text-2xl text-gray-300 tracking-widest uppercase border-l-4 border-evaPurple pl-4 bg-black/50 backdrop-blur-sm p-4 inline-block">
                        Neon Genesis Evangelion <br /> WhatsApp Community
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <a href="#whatsapp" className="px-8 py-4 bg-evaGreen text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] text-center">
                            Join Unit 01
                        </a>
                        <a href="#members" className="px-8 py-4 border border-evaPurple text-evaPurple font-bold uppercase tracking-widest hover:bg-evaPurple hover:text-white transition-all duration-300 text-center">
                            Pilots
                        </a>
                    </div>
                </div>

                {/* Image/Logo Content (Right on Desktop, Top on Mobile) */}
                <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2 relative">
                    <div className="relative w-64 h-64 md:w-96 md:h-96 group animate-float">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-evaGreen to-evaPurple rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
                        <img
                            src={logo}
                            alt="Anime Urdu Logo"
                            className="relative w-full h-full rounded-full border-4 border-evaGreen object-cover bg-black shadow-2xl"
                        />
                        {/* Orbiting Elements */}
                        <div className="absolute inset-0 rounded-full border border-evaPurple/30 animate-spin-slow"></div>
                        <div className="absolute -inset-8 rounded-full border border-evaGreen/20 animate-spin-reverse-slow"></div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 border-t-2 border-l-2 border-evaGreen opacity-50 pointer-events-none hidden md:block"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-b-2 border-r-2 border-evaPurple opacity-50 pointer-events-none hidden md:block"></div>
        </section>
    );
};

export default Hero;
