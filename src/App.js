import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
    
      <About />

      <Projects />

      <Skills />

      <Experience />

      <Footer />
    </div>
  );
}

export default App;