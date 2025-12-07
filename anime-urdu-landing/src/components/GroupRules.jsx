import React from 'react';

const rules = [
    "Be respectful to all members. Toxic behavior leads to immediate ejection.",
    "No spoilers without proper warnings. Respect the viewing experience.",
    "Keep discussions relevant to Anime/Manga/Japanese Culture.",
    "No spam or self-promotion without admin approval.",
    "What happens in Anime Urdu stays in Anime Urdu."
];

const GroupRules = () => {
    return (
        <section className="py-20 bg-evaDark border-b border-evaGreen/20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-16 text-white uppercase tracking-widest">
                    <span className="text-evaGreen">Protocols</span> & Guidelines
                </h2>
                <div className="space-y-6">
                    {rules.map((rule, idx) => (
                        <div key={idx} className="flex items-start group">
                            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-evaGreen text-evaGreen font-bold text-xl mr-6 group-hover:bg-evaGreen group-hover:text-black transition-all duration-300 font-mono">
                                {String(idx + 1).padStart(2, '0')}
                            </div>
                            <div className="flex-grow bg-evaGray p-4 border-l-2 border-evaPurple group-hover:border-evaGreen transition-all duration-300 shadow-sm group-hover:shadow-[0_0_10px_rgba(57,255,20,0.1)]">
                                <p className="text-gray-300 font-mono text-lg">{rule}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupRules;
