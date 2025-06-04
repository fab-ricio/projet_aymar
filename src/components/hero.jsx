import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section className="hero-section" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem', // Suppression du padding top/bottom
      background: `linear-gradient(rgba(248,250,252,0.05), rgba(224,231,239,0.05)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`,
      minHeight: '100vh', // occupe toute la hauteur de l'écran
      width: '100vw', // occupe toute la largeur de l'écran
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      borderRadius: 0,
      boxShadow: '0 4px 24px rgba(0,0,0,0.07)'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem', color: '#1a202c' }}>
          Découvrez nos <span style={{ color: '#2563eb' }}>meilleures offres</span> pour vous !
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem' }}>
          Profitez de réductions exclusives sur une large sélection de produits tendance. Livraison rapide et service client 24/7.
        </p>
        <button style={{
          padding: '1rem 2.5rem',
          fontSize: '1.1rem',
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: '0.75rem',
          cursor: 'pointer',
          fontWeight: 600,
          boxShadow: '0 2px 8px rgba(37,99,235,0.15)'
        }}>
          Voir les produits
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
        alt="Hero banner"
        style={{
          width: '420px',
          height: 'auto',
          borderRadius: '1.5rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
        }}
      />
    </section>
  );
};

export default Hero;
