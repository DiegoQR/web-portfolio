import React from "react";

function NavBar() {
  return (
    <nav className="bg-sky-950 h-16 flex justify-between items-center px-10 text-white">
      <h1 className="text-3xl font-bold">DiegoDev.</h1>
      <div className="flex gap-10">
        <a className="text-lg"href="#home">Home</a>
        <a className="text-lg" href="#about">About Me</a>
        <a className="text-lg" href="#experience">Experience</a>
        <a className="text-lg" href="#projects">Projects</a>
        <a className="text-lg" href="#education">Education</a>
        <a className="text-lg" href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar