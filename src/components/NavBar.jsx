import React from "react";

function NavBar() {
  return (
    <nav className="bg-sky-950 h-16 flex justify-between items-center px-10 text-white sticky top-0 z-50 py-5 overflow-hidden">
      <a href="#home">
        <h1 className="text-3xl font-bold">DiegoDev.</h1>
      </a>
      <div className="flex gap-10 text-lg">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar