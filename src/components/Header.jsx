import React from "react";
import pfp from "../assets/pfp-informal.jpg";
import cv from "../assets/CV-DiegoQuinones.pdf";
import bg1 from "../assets/bg-1.webp";
import bg2 from "../assets/bg-2.webp";

function Header () {
    return(
        <>
            <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-5 my-auto scroll-mt-20 md:flex-row md:justify-around motion-preset-slide-left overflow-hidden">
                <div className="max-w-2xs min-w-3xs md:max-w-xs lg:max-w-sm xl:max-w-md relative">
                    <p className="absolute bottom-0 left-0 text-7xl motion-translate-x-in-100 motion-opacity-in-0 motion-blur-in-md motion-rotate-in-45 motion-rotate-loop-45 md:text-9xl">👋</p>
                    <img src={pfp} className="aspect-square object-cover w-full rounded-full" alt="Diego pfp"/>
                    <img src={bg1} className="absolute -top-100 left-0 -z-10 object-cover max-w-200 opacity-25" alt="Diego background"/>
                    <img src={bg2} className="absolute -bottom-100 left-0 -z-10 object-cover max-w-200 opacity-25" alt="Diego background"/>
                </div>
                <div className="space-y-5 md:w-1/3">
                    <span className="inline-block font-black ">HELLO,<span className="text-orange"> MY NAME IS...</span></span>
                    <h1 className="text-4xl font-bold drop-shadow-2xl motion-preset-typewriter-[14] motion-duration-6000 motion-delay-500"><span className="text-orange">DIEGO</span> QUIÑONES</h1>
                    <p className="text-lg text-justify">
                        I'm a <strong className="text-orange font-bold">Full stack web developer</strong> with passion
                        and knowledge to bring your webpage to life
                        if you want to start to bring real value to your business
                        and go to the next level you can count with my help 😊
                    </p>
                    <div className="flex justify-center gap-5">
                        <a href="#contact" className="inline-block bg-orange py-4 px-8 rounded-xl font-bold hover:bg-orange-300 transition motion-preset-confetti">Start Working!</a>
                        <a href={cv} download className="inline-block bg-slate-700 py-4 px-8 rounded-xl font-bold hover:bg-slate-300 transition motion-preset-bounce">Download my CV</a>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Header;