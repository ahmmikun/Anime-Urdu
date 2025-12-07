import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-evaGray text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-evaPurple to-transparent"></div>
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest relative z-10 hover:text-white transition-colors cursor-default">
                Made by <a href="https://github.com/ahmmikun" target="_blank" rel="noopener noreferrer" className="text-evaGreen drop-shadow-[0_0_5px_rgba(57,255,20,0.8)] hover:underline">Salman Ahmad</a> - CNS - 2025
            </p>
        </footer>
    );
};
export default Footer;
