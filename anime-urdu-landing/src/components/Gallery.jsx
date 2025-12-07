import React from 'react';
import imgEva from '../assets/Web-Asthetics/image-eva.png';
import imgEva2 from '../assets/Web-Asthetics/image-eva-2.png';
import imgEva3 from '../assets/Web-Asthetics/image-eva-3.png';
import imgEva4 from '../assets/Web-Asthetics/image-eva-4.png';
import imgEva5 from '../assets/Web-Asthetics/image-eva-5.png';
import imgEva6 from '../assets/Web-Asthetics/image-eva-6.png';

const images = [
    imgEva,
    imgEva2,
    imgEva3,
    imgEva4,
    imgEva5,
    imgEva6
];

const Gallery = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-white uppercase tracking-widest">
                    <span className="text-evaPurple">Visual</span> Archive
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((src, idx) => (
                        <div key={idx} className="relative group overflow-hidden border-2 border-transparent hover:border-evaGreen cursor-pointer transition-colors duration-300">
                            <img src={src} alt={`Gallery ${idx}`} className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-evaPurple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            {/* Text overlay on hover */}
                            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono tracking-widest text-sm">
                                FIG. 0{idx + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
