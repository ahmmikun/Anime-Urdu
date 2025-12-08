import React from 'react';
import taimoorImg from '../assets/admin-images/taimoor-hussain.png';
import xenoImg from '../assets/admin-images/xenoblade.png';
import salmanImg from '../assets/admin-images/salman-ahmad.png';

const admins = [
    { id: 1, name: "Taimoor Hussain", role: "Founder", desc: "The Creator", img: taimoorImg },
    { id: 2, name: "XenoBlade", role: "Co-Founder", desc: "System Architect", img: xenoImg },
    { id: 3, name: "Salman Ahmad", role: "Moderator", desc: "Community Enforcer", img: salmanImg },
];

const AdminList = () => {
    return (
        <section id="admins" className="py-20 bg-evaDark relative border-b border-evaPurple/30">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 text-evaGreen uppercase tracking-widest drop-shadow-[0_0_5px_rgba(57,255,20,0.8)]">
                    &lt; Human Instrumentality Committee /&gt;
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {admins.map((admin) => (
                        <div key={admin.id} className="group relative bg-evaGray p-6 border border-evaPurple/50 hover:border-evaGreen transition-all duration-300">
                            <div className="absolute inset-0 bg-evaPurple/5 group-hover:bg-evaGreen/5 transition-colors duration-300"></div>
                            {/* Skewed decorative background */}
                            <div className="absolute top-0 right-0 w-full h-full bg-repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(157, 0, 255, 0.05) 10px, rgba(157, 0, 255, 0.05) 20px) opacity-50"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-32 h-32 rounded-full border-4 border-evaPurple group-hover:border-evaGreen p-1 transition-colors duration-300 mb-4 overflow-hidden shadow-[0_0_15px_rgba(157,0,255,0.4)] group-hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                                    <img src={admin.img} alt={admin.name} className="w-full h-full object-cover rounded-full bg-black" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-evaGreen transition-colors">{admin.name}</h3>
                                <span className="text-sm text-evaPurple uppercase tracking-wider mb-2 font-mono bg-black/50 px-2 py-1 border border-evaPurple/30">{admin.role}</span>
                                <p className="text-gray-400 text-center text-sm font-mono border-t border-gray-700 pt-2 w-full mt-2">
                                    "{admin.desc}"
                                </p>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-evaPurple group-hover:border-evaGreen transition-colors"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-evaPurple group-hover:border-evaGreen transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default AdminList;
