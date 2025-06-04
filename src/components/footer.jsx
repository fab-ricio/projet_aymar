import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer style={{
      background: '#1a202c',
      color: '#fff',
      padding: '2rem 0',
      textAlign: 'center',
      marginTop: '3rem',
      borderTopLeftRadius: '1.5rem',
      borderTopRightRadius: '1.5rem',
      boxShadow: '0 -2px 12px rgba(0,0,0,0.10)',
      width: '100vw',
      position: 'relative', // Le footer n'est plus fixé
      left: '50%',
      right: '50%',
      bottom: 0,
      marginLeft: '-50vw',
      marginRight: '-50vw',
      borderRadius: 0,
      marginBottom: '-8px', // supprime tout espace blanc sous le footer
      zIndex: 1000
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h4 style={{ marginBottom: '1rem', fontWeight: 700 }}>Contact & Informations</h4>
        <p style={{ margin: 0 }}>
          Email : <a href="mailto:contact@ecommerce.com" style={{ color: '#60a5fa' }}>contact@ecommerce.com</a> | Téléphone : <a href="tel:+33123456789" style={{ color: '#60a5fa' }}>+33 1 23 45 67 89</a>
        </p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: '#cbd5e1' }}>
          Adresse : 123 Avenue du Commerce, 75000 Paris, France
        </p>
        <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
          &copy; {new Date().getFullYear()} E-Commerce. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
