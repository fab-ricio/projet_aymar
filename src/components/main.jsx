import React from "react";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
import About from "./about.jsx";
import Projects from "./projects.jsx";
import Method from "./method.jsx";
import Comment from "./comment.jsx";
import Footer from "./footer.jsx";

const Main = () => {
  return (
    <>
      <Header />
      <div className="container mt-5" style={{ paddingTop: 0, paddingBottom: '10rem' }}>
        <Hero />
        <About />
        <Projects />
        <Method />
        <Comment />
      </div>
      <Footer />
    </>
  );
};

export default Main;
