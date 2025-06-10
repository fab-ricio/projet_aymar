import React from "react";
import "../App.css";

const projects = [
  {
    title: "MiniDigesteur 200L",
    description: "Idéal pour 3-5 personnes",
    image: "/images/200L.jpg"
  },
  {
    title: "FamilyDigesteur 500L",
    description: "Jusqu'à 9 personnes",
    image: "/images/500L.jpg"
  },
  {
    title: "AgroDigesteur 1000",
    description: "Usage agricole",
    image: "/images/1000.jpg"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projets" style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      padding: '3rem 0',
      background: '#c6ecd9',
      flexWrap: 'wrap',
      height: 'auto',
      width: '100%', // largeur fluide
      position: 'relative',
      boxSizing: 'border-box',
      margin: 0,
      left: 'unset',
      right: 'unset',
      marginLeft: 0,
      marginRight: 0,
      overflow: 'hidden',
    }}>
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="project-card"
          style={{
            background: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 2px 12px rgba(22,101,52,0.10)',
            maxWidth: '320px',
            width: '100%', // largeur fluide
            minWidth: '220px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1)',
            boxSizing: 'border-box',
          }}
        >
          <img src={project.image} alt={project.title} style={{
            width: '100%',
            maxWidth: '260px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '0.75rem',
            marginBottom: '1rem',
            boxSizing: 'border-box',
          }} />
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#166534' }}>{project.title}</h3>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>{project.description}</p>
          <button style={{
            padding: '0.7rem 2rem',
            fontSize: '1rem',
            background: '#166534',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(22,101,52,0.10)'
          }}>
            Voir plus
          </button>
        </div>
      ))}
    </section>
  );
};

export default Projects;
