import React from 'react';
import qrCode from '../assets/Group-Image/image-1.png';

const WhatsAppSection = () => {
    return (
        <section id="whatsapp" className="py-20 bg-evaDark relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
                JOIN US
            </div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">

                {/* QR Code Box */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-evaGreen to-evaPurple blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative bg-black p-4 border border-white/10">
                        <div className="w-64 h-64 bg-white p-2">
                            <img src={qrCode} alt="WhatsApp QR" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-center text-evaGreen font-mono mt-2 text-sm tracking-widest animate-pulse">SCAN TO JOIN</p>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-evaGreen"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-evaPurple"></div>
                </div>

                {/* Text & Button */}
                <div className="text-center md:text-left max-w-lg">
                    <h2 className="text-4xl font-bold text-white mb-6 uppercase">
                        Sync Rate <span className="text-evaGreen">100%</span>
                    </h2>
                    <p className="text-gray-400 mb-8 font-mono">
                        Connect with fellow pilots. Discuss theories, share art, and be part of the most aesthetic anime community on WhatsApp.
                    </p>
                    <a href="https://chat.whatsapp.com/GPmORubCFDhEVcR44v4hWO" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-evaGreen text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]">
                        Initiate Link
                    </a>
                </div>

            </div>
        </section>
    );
};
export default WhatsAppSection;
