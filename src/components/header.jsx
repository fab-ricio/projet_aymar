import React from "react";
import "../App.css";
import Logo from "../logo.jsx";

const Header = () => {
  return (
    <header style={{
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      margin: 0,
      background: 'rgba(22,101,52,0.7)',
      color: '#fff',
      boxShadow: '0 2px 12px rgba(22,101,52,0.10)',
      padding: '0 2rem',
      zIndex: 1000,
      borderBottom: 'none',
      minHeight: 0,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 0,
        height: '64px',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px', display: 'flex', alignItems: 'center' }}>
          <Logo style={{ width: 40, height: 40, marginRight: 8 }} />
        </div>
        <ul
          style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="header-links"
        >
          <li><a href="#hero" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem' }}>Accueil</a></li>
          <li><a href="#projets" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem' }}>Projets</a></li>
          <li><a href="#membres" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem' }}>Membres</a></li>
          <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: '1rem' }}>Contact</a></li>
        </ul>
      </nav>
      <style>{`
        @media (max-width: 700px) {
          header {
            padding: 0 0.5rem !important;
          }
          .header-links {
            gap: 1.1rem !important;
            font-size: 0.93rem !important;
          }
          nav {
            height: 56px !important;
          }
        }
        @media (max-width: 480px) {
          header {
            padding: 0 0.2rem !important;
          }
          .header-links {
            gap: 0.7rem !important;
            font-size: 0.87rem !important;
          }
          nav {
            height: 60px !important;
          }
          .logo {
            height: 2.1rem !important;
            width: 2.1rem !important;
            min-width: 2.1rem !important;
            padding: 0.15em !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
