import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section className="hero-section" id="hero" style={{
      marginTop: '64px', // Décale le hero sous le header fixe
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      margin: 0,
      background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://assets.onecompiler.app/43kpa5yxd/43kp9x7px/WASTE%202%20GAZ.png') top center/cover no-repeat`,
      minHeight: '100vh',
      width: '100%',
      position: 'static',
      borderRadius: 0,
      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
      top: 0,
    }}>
      <div style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: 'whitesmoke', display: 'inline-block', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Transformez vos déchets en énergie propre
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'whitesmoke', marginBottom: '2rem' }}>
          Profitez de réductions exclusives sur une large sélection de produits tendance. Livraison rapide et service client 24/7.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            background: '#166534',
            color: '#fff',
            border: 'none',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: '0 2px 8px rgba(22,101,52,0.15)'
          }}>
            Voir nos modèles
          </button>
          <a href="/Brochure.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <button style={{
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              fontSize: '1.1rem',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              border: '1.5px solid #fff',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(22,101,52,0.10)'
            }}>
              Recevoir une brochure
            </button>
          </a>
        </div>
      </div>
      {/* Suppression de l'image décorative à droite */}
    </section>
  );
};

export default Hero;
