import clsx from "clsx";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const classHideNavbar = clsx({
    "h-full": menu,
    "opacity-100": menu,
    "opacity-0": !menu,
    "invisible": !menu,
  });

  const classButton = clsx({
    "bg-orange": !menu,
    "bg-red": menu,
    "hover:h-25": !menu,
    "hover:bg-red-300": menu,
  });

  return (
    <>
      <nav className="flex h-20 items-center justify-between fixed top-0 left-0 px-10 w-full bg-blue-primary z-10">
        <a href="#home" className="w-1/2 max-w-[200px]">
          <h1 className="text-3xl font-bold block w-full">Diego QR.</h1>
        </a>
        <button className={"w-20 h-20 cursor-pointer transform transition-all duration-300 rounded-b-2xl flex items-center justify-center " + classButton} onClick={() => setMenu(!menu)}>
          { menu ? <IoCloseCircle size="1.5em"/>: <GiHamburgerMenu size="1.5em" /> }
        </button>
      </nav>
      <ul className={"fixed top-20 left-0 w-full bg-linear-to-b from-blue-primary to-transparent text-white text-center z-10 transform transition-all duration-300 ease-in-out " + classHideNavbar}>
          <NavLink href="#home" onClick={() => setMenu(!menu)}>Home</NavLink>
          <NavLink href="#about" onClick={() => setMenu(!menu)}>About Me</NavLink>
          <NavLink href="#experience" onClick={() => setMenu(!menu)}>Experience</NavLink>
          <NavLink href="#projects" onClick={() => setMenu(!menu)}>Projects</NavLink>
          <NavLink href="#education" onClick={() => setMenu(!menu)}>Education</NavLink>
          <NavLink href="#contact" onClick={() => setMenu(!menu)}>Contact</NavLink>
        </ul>
    </>
  )
}

export default NavBar