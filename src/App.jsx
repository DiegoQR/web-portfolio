import React from "react";
import NavBar from './components/NavBar.jsx'
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Experiece from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Eductation.jsx";

function App() {

  return (
    <>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <AboutMe />
        <Experiece />
        <Projects />
        <Education />
      </main>
    </>
  )
}

export default App
