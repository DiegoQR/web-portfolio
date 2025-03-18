import React from "react";
import NavBar from './components/NavBar.jsx'
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Experiece from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Eductation.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
      <main className='w-9/10 mx-auto overflow-hidden max-w-xl'>
        <header>
          <NavBar />
          <Header />
        </header>
        
        <AboutMe />
        <Experiece />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
