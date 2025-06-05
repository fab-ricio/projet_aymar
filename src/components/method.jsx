import React from "react";

import image1 from "../../images/image 1.jpg";
import image3 from "../../images/image 3.jpg";

const cards = [
  {
    title: "Méthode 1",
    image: image1,
    description: "Description de la méthode 1."
  },
  {
    title: "Méthode 2",
    image: image3,
    description: "Description de la méthode 2."
  }
];

const Method = () => {
  return (
    <section style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '8rem',
      padding: '2.5rem 0',
      background: '#f6fff9',
      flexWrap: 'wrap',
      marginTop: '2.5rem',
      maxWidth: '100vw',
      minHeight: '480px', // pour s'adapter à la taille des images
    }}>
      {cards.map((card, idx) => (
        <div key={idx} style={{
          background: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 2px 12px rgba(22,101,52,0.10)',
          maxWidth: '440px', // agrandi pour s'adapter à l'image
          width: '440px', // largeur fixe pour la carte
          padding: '2rem', // padding augmenté
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <img src={card.image} alt={card.title} style={{
            width: '400px', // largeur encore plus grande
            height: '400px', // hauteur encore plus grande
            objectFit: 'cover',
            borderRadius: '0.75rem',
            marginBottom: '1rem',
            background: '#e5e7eb', // gris clair si image non chargée
            display: 'block'
          }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#166534' }}>{card.title}</h3>
          <p style={{ color: '#4b5563' }}>{card.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Method;
