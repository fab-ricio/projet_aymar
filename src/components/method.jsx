import React from "react";

const cards = [
  {
    title: "Méthode 1",
    image: require("../images/image 1.jpg"),
    description: "Description de la méthode 1."
  },
  {
    title: "Méthode 2",
    image: require("../images/image 3.jpg"),
    description: "Description de la méthode 2."
  }
];

const Method = () => {
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      padding: '2.5rem 0',
      background: '#f6fff9',
      flexWrap: 'wrap'
    }}>
      {cards.map((card, idx) => (
        <div key={idx} style={{
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 2px 12px rgba(22,101,52,0.10)',
          maxWidth: '320px',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <img src={card.image} alt={card.title} style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '0.75rem',
            marginBottom: '1rem'
          }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#166534' }}>{card.title}</h3>
          <p style={{ color: '#4b5563' }}>{card.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Method;
