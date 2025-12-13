import React from 'react';
import saifImg from '../assets/member-images/Saif-ul-Islam.png';
import fukieImg from '../assets/member-images/Mister-Fukie.png';
import raheebImg from '../assets/member-images/Raheeb.png';
import hassanImg from '../assets/member-images/Hassan-Saeed.png';
import maniacImg from '../assets/member-images/Maniac.png';
import asadImg from '../assets/member-images/Asad.png';
import noumanImg from '../assets/member-images/Nouman.png';
import hashimImg from '../assets/member-images/Hashim.png';

import placeholderImg from '../assets/member-images/sample-profile.png';

const members = [
    { id: 1, name: "Saif-ul-Islam", username: "Safina Chan 💗", img: saifImg },
    { id: 2, name: "Mister Fukie", username: "At the Movies", img: fukieImg },
    { id: 3, name: "Raheeb", username: "The Psychopath", img: raheebImg },
    { id: 4, name: "Hassan Saeed", username: "Negamonce Monke", img: hassanImg },
    { id: 5, name: "Maniac", username: "Shutup Maniac", img: maniacImg },
    { id: 6, name: "Asad", username: "The Edits Freak", img: asadImg },
    { id: 7, name: "Nouman", username: "Cristiano Ronaldo Fan", img: noumanImg },
    { id: 8, name: "Hashim", username: "The SpongeBob", img: hashimImg },
    { id: 9, name: "Qami", username: "BUB🦇", img: placeholderImg },
    { id: 10, name: "Shameel", username: "گمبارے گمبارے سینپائی", img: placeholderImg },
    { id: 11, name: "Abdul Haseeb", username: "Blender", img: placeholderImg },
    { id: 12, name: "Ahmad Memon", username: "One Piece Fan", img: placeholderImg },
    { id: 13, name: "Shayan", username: "The only New Member", img: placeholderImg },
    { id: 14, name: "Zuhaz", username: "Pro Codder", img: placeholderImg },
    { id: 15, name: "Lamama Derzin", username: "The Frieren Slayer", img: placeholderImg },
    { id: 16, name: "Shaheer", username: "Eren Yeager", img: placeholderImg },
];

const MembersPortfolio = () => {
    return (
        <section id="members" className="py-20 bg-black relative">
            {/* Background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-evaPurple/20 via-transparent to-transparent opacity-30"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-16 text-white uppercase tracking-widest">
                    <span className="text-evaPurple">Active</span> Pilots
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {members.map(member => (
                        <div key={member.id} className="group relative bg-evaGray/50 border border-gray-800 hover:border-evaPurple hover:shadow-neon-purple transition-all duration-300 overflow-hidden cursor-pointer">
                            <div className="aspect-square relative overflow-hidden">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-white font-bold text-lg leading-none mb-1">{member.name}</h4>
                                    <p className="text-evaGreen text-xs font-mono">{member.username}</p>
                                </div>
                                {/* Scanning line effect */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-evaGreen/50 opacity-0 group-hover:opacity-100 group-hover:animate-scan"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="px-8 py-2 border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors uppercase text-sm tracking-widest font-mono">Load More Data...</button>
                </div>
            </div>
        </section>
    )
}
export default MembersPortfolio;
