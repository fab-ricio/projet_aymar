import React, { useState } from "react";

import image1 from '../../images/image 1.jpg';
import image3 from '../../images/image 3.jpg';

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

const fullscreenIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: '50%' }}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3m0 8v3a2 2 0 0 0 2 2h3m8-18h3a2 2 0 0 1 2 2v3m0 8v3a2 2 0 0 1-2 2h-3" />
  </svg>
);

const Method = () => {
  const [fullscreenImg, setFullscreenImg] = useState(null);
  return (
    <>
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '4rem',
        padding: '2.5rem 0',
        background: '#f6fff9',
        flexWrap: 'wrap',
        marginTop: '2.5rem',
        maxWidth: '100%',
        minHeight: '320px',
        width: '100%',
        boxSizing: 'border-box',
        margin: 0,
      }}>
        {cards.map((card, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 2px 12px rgba(22,101,52,0.10)',
            maxWidth: '440px',
            width: '100%',
            minWidth: '220px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            boxSizing: 'border-box',
          }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px', height: 'auto' }}>
              <img
                src={card.image}
                alt={card.title}
                className="method-img"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderRadius: '0.75rem',
                  marginBottom: '1rem',
                  background: '#e5e7eb',
                  display: 'block',
                  cursor: 'pointer',
                  transition: 'filter 0.35s cubic-bezier(.4,2,.6,1)',
                  boxSizing: 'border-box',
                }}
                onClick={() => setFullscreenImg(card.image)}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  opacity: 0.92,
                  transition: 'opacity 0.2s',
                  cursor: 'pointer',
                  zIndex: 2,
                  background: 'none',
                  padding: 0,
                  display: 'none',
                }}
                className="fullscreen-icon"
                onClick={() => setFullscreenImg(card.image)}
              >
                {fullscreenIcon}
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* Modal plein écran */}
      {fullscreenImg && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setFullscreenImg(null)}
        >
          <img
            src={fullscreenImg}
            alt="fullscreen"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '1.2rem',
              boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
              background: '#fff',
            }}
          />
        </div>
      )}
      <style>{`
        .fullscreen-icon {
          display: none;
        }
        .fullscreen-icon:hover {
          opacity: 1 !important;
        }
        .project-card:hover .fullscreen-icon,
        div[style*='position: relative'] .fullscreen-icon:hover,
        div[style*='position: relative']:hover .fullscreen-icon {
          display: block !important;
        }
        .method-img:hover {
          filter: contrast(1.25) brightness(0.85) saturate(1.1);
        }
        @media (max-width: 700px) {
          section {
            gap: 1.2rem !important;
            padding: 1.2rem 0 !important;
          }
          .method-img {
            max-width: 95vw !important;
            height: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default Method;
