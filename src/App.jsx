import React from "react";
import NavBar from './components/NavBar.jsx'
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Experiece from "./components/Experience.jsx";

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
      </main>
    </>
  )
}

export default App
