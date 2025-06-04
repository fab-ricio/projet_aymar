import React from "react";
import "../App.css";

const projects = [
  {
    title: "Boutique Mode",
    description: "Une plateforme e-commerce moderne pour vêtements et accessoires, avec paiement sécurisé et gestion de stock.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Électronique Shop",
    description: "Vente en ligne de produits électroniques, interface intuitive et filtres avancés pour la recherche.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Maison & Déco",
    description: "Site de décoration intérieure avec catalogue interactif et suggestions personnalisées.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      padding: '3rem 0',
      background: '#f8fafc',
      flexWrap: 'wrap'
    }}>
      {projects.map((project, idx) => (
        <div key={idx} style={{
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          maxWidth: '320px',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <img src={project.image} alt={project.title} style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '0.75rem',
            marginBottom: '1rem'
          }} />
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#1a202c' }}>{project.title}</h3>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>{project.description}</p>
          <button style={{
            padding: '0.7rem 2rem',
            fontSize: '1rem',
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(37,99,235,0.10)'
          }}>
            Voir plus
          </button>
        </div>
      ))}
    </section>
  );
};

export default Projects;
