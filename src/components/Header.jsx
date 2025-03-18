import React from "react";
import pfp from "../assets/pfp-informal.jpg";

function Header () {
    return(
        <>
            <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-5 my-auto scroll-mt-20 md:flex-row md:justify-around">
                <div className="max-w-2xs min-w-2xs md:max-w-xs lg:max-w-sm xl:max-w-md">
                    <img src={pfp} className="aspect-square object-cover w-full rounded-full" alt="Diego pfp"/>
                </div>
                <div className="space-y-5 text-center md:w-1/3">
                    <span className="inline-block font-black ">HELLO,<span className="text-orange"> MY NAME IS</span></span>
                    <h1 className="text-4xl font-bold drop-shadow-2xl"><span className="text-orange">DIEGO</span> QUIÑONES</h1>
                    <p className="text-lg text-justify">
                        I'm a <strong className="text-orange font-bold">Full stack web developer</strong> with passion
                        and knowledge to bring your webpage to life
                        if you want to start to bring your business
                        to the internet you can count with my help 😊
                    </p>
                    <div className="space-x-10 flex justify-center">
                        <a href="#contact" className="inline-block bg-orange py-4 px-8 rounded-xl font-bold hover:bg-orange-300 transition">Start Working!</a>
                        <a href="#" className="inline-block bg-slate-700 py-4 px-8 rounded-xl font-bold hover:bg-slate-300 transition">Download my CV</a>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Header;