import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { portfolioData } from "./data"; // Import the data

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar navList={portfolioData.navList} />
      <main>
        <Hero about={portfolioData.about} />
        <About about={portfolioData.about} />
        <Skills skills={portfolioData.skills.skillList} />
        <Projects projects={portfolioData.projects} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer about={portfolioData.about} />
    </div>
  );
}

export default App;
