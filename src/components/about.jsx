import React from "react";
import "../App.css";

const aboutItems = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2909/2909765.png", // écologique
    title: "Écologique",
    description: "Réduit l'empreinte carbone et favorise la préservation de l'environnement."
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // économique
    title: "Économique",
    description: "Permet de réaliser des économies sur le traitement des déchets et la production d'énergie."
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/616/616494.png", // fertilisant
    title: "Fertilisant",
    description: "Produit un résidu riche en nutriments, idéal pour l'agriculture et le jardinage."
  }
];

const About = () => {
  return (
    <section className="about-section" style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2.5rem',
      padding: '3rem 0',
      background: 'transparent',
      flexWrap: 'wrap'
    }}>
      {aboutItems.map((item, idx) => (
        <div key={idx} style={{
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 2px 12px rgba(22,101,52,0.10)', // vert foncé
          maxWidth: '260px',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <img src={item.icon} alt={item.title} style={{
            width: '64px',
            height: '64px',
            marginBottom: '1.2rem',
            objectFit: 'contain'
          }} />
          <h5 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#166534' }}>{item.title}</h5>
          <p style={{ color: '#4b5563', fontSize: '1rem' }}>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default About;
