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
      <div className="container" style={{ paddingTop: 0, paddingBottom: '10rem', margin: 0 }}>
        <Hero />
        <About />
        <Projects />
        <Method />
        <Members />
        <Comment />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Main;
