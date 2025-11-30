import React from "react";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Method from "./method.jsx";
import Comment from "./comment.jsx";
import Footer from "./footer.jsx";
import Members from "./members.jsx";
import Contact from "./contact.jsx";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: 0, paddingBottom: 0, margin: 0 }}>
        <Hero />
        <About />
        <Projects />
        <Method />
        <Members />
        <Comment />
        <Contact />
        {/* Texte défilant */}
        <div className="marquee" style={{ background: '#174c2a', color: '#fff' }}>
          <div className="marquee-track">
            <span>🌍 Découvrez nos solutions innovantes pour transformer vos déchets en énergie propre !</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
