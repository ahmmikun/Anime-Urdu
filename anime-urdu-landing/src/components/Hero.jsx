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

            <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 max-w-5xl w-full">

                {/* Logo Section */}
                <div className="relative group animate-float">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-evaGreen to-evaPurple rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-1000"></div>
                    <img
                        src={logo}
                        alt="Anime Urdu Logo"
                        className="relative w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-evaGreen object-cover bg-black shadow-2xl z-10"
                    />
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-evaGreen via-white to-evaPurple drop-shadow-[0_0_10px_rgba(57,255,20,0.8)] pb-4 leading-none">
                        ANIME <span className="font-sans tracking-normal inline-block text-white ml-2">اُردو</span>
                    </h1>
                    <p className="text-sm md:text-2xl text-gray-300 tracking-widest uppercase border-l-0 md:border-l-4 border-evaPurple pl-0 md:pl-4 bg-black/50 backdrop-blur-sm p-4 inline-block rounded-md md:rounded-none">
                        Neon Genesis Evangelion <br className="md:hidden" /> WhatsApp Community
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto mt-8">
                    <a href="#whatsapp" className="w-full md:w-auto px-10 py-4 bg-evaGreen text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] text-center clip-path-slant-left">
                        Join Unit 01
                    </a>
                    <a href="#members" className="w-full md:w-auto px-10 py-4 border border-evaPurple text-evaPurple font-bold uppercase tracking-widest hover:bg-evaPurple hover:text-white transition-all duration-300 text-center clip-path-slant-right">
                        View Pilots
                    </a>
                </div>
            </div>

            {/* Decorative Corners (Responsive) */}
            <div className="absolute top-4 left-4 w-12 h-12 md:w-24 md:h-24 border-t-4 border-l-4 border-evaGreen opacity-50"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 md:w-24 md:h-24 border-b-4 border-r-4 border-evaPurple opacity-50"></div>
            <div className="absolute top-4 right-4 w-12 h-12 md:w-24 md:h-24 border-t-4 border-r-4 border-evaPurple opacity-50"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 md:w-24 md:h-24 border-b-4 border-l-4 border-evaGreen opacity-50"></div>
        </section>
    );
};

export default Hero;
