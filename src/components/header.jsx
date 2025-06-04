import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header style={{
      width: '100vw',
      position: 'fixed', // Fixe le header en haut
      top: 0,
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      background: '#2563eb',
      color: '#fff',
      boxShadow: '0 2px 12px rgba(37,99,235,0.10)',
      padding: 0,
      zIndex: 1000,
      borderBottom: 'none', // supprime toute bordure
      minHeight: 0 // force la hauteur minimale à 0
    }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 0, // Suppression du padding vertical
        height: '64px', // Hauteur fixe pour le header
      }}>
        <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px' }}>waste 2 gaz</div>
        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Accueil</a></li>
          <li><a href="#projets" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Projets</a></li>
          <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
