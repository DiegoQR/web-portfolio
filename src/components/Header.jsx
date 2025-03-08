import React from "react";


function Header () {
    return(
        <>
            <section className="bg-linear-to-b from-cyan-500 to-blue-500 h-screen min-h-[600px px-20 flex flex-col items-center justify-center gap-10">
                <div>
                    <img src="../src/assets/pfp-informal.jpg" className="aspect-square object-cover w-full max-w-sm rounded-full" alt="Diego pfp"/>
                </div>
                <div className="text-white space-y-6 text-center">
                    <span className="inline-block font-black ">HELLO,<span className="text-orange-400"> MY NAME IS</span></span>
                    <h1 className="text-5xl font-bold drop-shadow-2xl"><span className="text-orange-400">DIEGO</span> QUIÑONES</h1>
                    <p>I'm a <strong className="text-orange-400 font-bold">Full stack web developer</strong> with passion
                    and knowledge to bring your webpage to life
                    if you want to start to bring your business
                    to the internet you can count with my help 😊</p>
                    <div className="space-x-10 flex justify-center">
                        <a href="#contact" className="inline-block bg-orange-400 py-4 px-8 rounded-xl font-bold hover:bg-orange-300 transition">Start Working!</a>
                        <a href="#" className="inline-block bg-slate-700 py-4 px-8 rounded-xl font-bold hover:bg-slate-300 transition">Download my CV</a>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Header;