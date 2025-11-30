import React from "react";
import "../App.css";
import brochure from '../../images/Brochure-waste2gas.pdf';

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
        minHeight: 'calc(100vh - 64px)',
        width: '100%',
        maxWidth: '100vw',
        position: 'static',
        borderRadius: 0,
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        top: 0,
        overflowX: 'hidden',
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
          Livraison installation et services après vente-assurés.
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
            flexDirection: 'row',
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
              width: 'auto',
              maxWidth: '320px',
              marginBottom: 0,
              minWidth: '140px',
              transition: 'all 0.18s cubic-bezier(.4,2,.6,1)',
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.96)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            onClick={() => {
              const section = document.getElementById('projets');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Voir nos modèles
          </button>
          <a
            href={brochure}
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
                transition: 'all 0.18s cubic-bezier(.4,2,.6,1)',
              }}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.96)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Recevoir une brochure
            </button>
          </a>
        </div>
      </div>
      {/* Suppression de l'image décorative à droite */}
      <style>{`
        .hero-btn {
          transition: all 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s cubic-bezier(.4,2,.6,1);
        }
        .hero-btn:hover {
          filter: brightness(1.18) contrast(1.13) drop-shadow(0 4px 18px #16653444);
          transform: scale(1.07) translateY(-4px) rotate(-1.5deg);
          box-shadow: 0 8px 32px rgba(22,101,52,0.18), 0 1.5px 8px rgba(22,101,52,0.10);
          outline: none;
        }
        .hero-btn:focus-visible {
          outline: 2.5px solid #166534;
          outline-offset: 2px;
        }
        .hero-btn:active {
          filter: brightness(0.97) contrast(1.1);
          transform: scale(0.95) translateY(1px) rotate(0.5deg);
          box-shadow: 0 2px 8px rgba(22,101,52,0.10);
        }
      `}</style>
    </section>
  );
};

export default Hero;
