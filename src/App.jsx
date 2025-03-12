import React from "react";
import NavBar from './components/NavBar.jsx'
import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";

function App() {

  return (
    <>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <AboutMe />
      </main>
    </>
  )
}

export default App
