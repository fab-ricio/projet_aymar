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
        <div style={{
          width: '100%',
          overflow: 'hidden',
          background: '#174c2a',
          color: '#fff',
          fontWeight: 600,
          fontSize: '1.15rem',
          padding: '0.7rem 0',
          margin: 0,
          position: 'relative',
        }}>
          <div style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            animation: 'marquee 36s linear infinite',
          }}>
            🌍 Découvrez nos solutions innovantes pour transformer vos déchets en énergie propre ! Contactez-nous pour une démonstration gratuite. ♻️🔥🌱
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}</style>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
