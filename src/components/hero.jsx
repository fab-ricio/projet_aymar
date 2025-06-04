import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <section className="hero-section" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4rem 2rem',
      background: 'linear-gradient(90deg, #f8fafc 60%, #e0e7ef 100%)',
      minHeight: '60vh',
      borderRadius: '1.5rem',
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
