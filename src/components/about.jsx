import React from "react";
import "../App.css";

const aboutItems = [
  {
    icon: "♻️", // logo recyclage emoji
    title: "Écologique",
    description: "Réduction des déchets."
  },
  {
    icon: "🔥", // feu emoji
    title: "Économique",
    description: "Biogaz gratuit"
  },
  {
    icon: "🌱", // plante emoji
    title: "Fertilisant",
    description: "Revalorisez le digestat"
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
      flexWrap: 'wrap',
      width: '100%',
      boxSizing: 'border-box',
      margin: 0,
    }}>
      {aboutItems.map((item, idx) => (
        <div key={idx} style={{
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 2px 12px rgba(22,101,52,0.10)',
          maxWidth: '260px',
          width: '100%',
          minWidth: '180px',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}>
          <span style={{
            fontSize: '3.5rem',
            marginBottom: '1.2rem',
            lineHeight: 1
          }}>{item.icon}</span>
          <h5 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#166534' }}>{item.title}</h5>
          {item.title === 'Économique' ? (
            <p style={{ color: '#4b5563', fontSize: '1rem' }}>
              <b>Biogaz</b> gratuit
            </p>
          ) : (
            <p style={{ color: '#4b5563', fontSize: '1rem' }}>{item.description}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default About;
