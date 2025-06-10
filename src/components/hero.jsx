import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section
      className="hero-section"
      id="hero"
      style={{
        marginTop: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        background:
          `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://assets.onecompiler.app/43kpa5yxd/43kp9x7px/WASTE%202%20GAZ.png') top center/cover no-repeat`,
        minHeight: '100vh',
        width: '100%',
        position: 'static',
        borderRadius: 0,
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        top: 0,
      }}
    >
      <div
        className="hero-content"
        style={{
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 1rem',
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: 'whitesmoke',
            display: 'inline-block',
            textAlign: 'center',
            whiteSpace: 'normal',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: 1.1,
            maxWidth: '700px',
          }}
        >
          Transformez vos déchets en énergie propre
        </h1>
        <p
          className="hero-subtitle"
          style={{
            fontSize: '1.25rem',
            color: 'whitesmoke',
            marginBottom: '2rem',
            maxWidth: '600px',
            lineHeight: 1.4,
          }}
        >
          Profitez de réductions exclusives sur une large sélection de produits tendance. Livraison rapide et service client 24/7.
        </p>
        <div
          className="hero-btns"
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%',
            maxWidth: '420px',
            flexDirection: 'row', // force l'alignement horizontal par défaut
          }}
        >
          <button
            className="hero-btn"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              background: '#166534',
              color: '#fff',
              border: 'none',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              fontWeight: 600,
              boxShadow: '0 2px 8px rgba(22,101,52,0.15)',
              width: 'auto', // largeur auto pour alignement horizontal
              maxWidth: '320px',
              marginBottom: 0,
              minWidth: '140px',
            }}
          >
            Voir nos modèles
          </button>
          <a
            href="/Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: 'auto', maxWidth: '320px' }}
          >
            <button
              className="hero-btn"
              style={{
                padding: '1rem 2.5rem',
                textDecoration: 'none',
                fontSize: '1.1rem',
                background: 'rgba(255,255,255,0.15)',
                color: '#fff',
                border: '1.5px solid #fff',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(22,101,52,0.10)',
                width: 'auto',
                minWidth: '140px',
              }}
            >
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
