import React from "react";

const Contact = () => (
  <section id="contact" style={{
    background: '#f6fff9',
    borderRadius: 0,
    boxShadow: 'none',
    margin: 0,
    maxWidth: '100%',
    width: '100%',
    minHeight: 'unset',
    padding: '3.5rem 0 2.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: 'unset',
    right: 'unset',
    marginLeft: 0,
    marginRight: 0,
    boxSizing: 'border-box',
    overflow: 'hidden',
  }}>
    <h2 style={{
      color: '#174c2a',
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '2rem',
      letterSpacing: '0.5px',
      textAlign: 'center',
    }}>Contact</h2>
    <div style={{ fontSize: '1.15rem', color: '#174c2a', fontWeight: 600, margin: '1.5rem 0', textAlign: 'center', width: '100%' }}>
      <div style={{ marginBottom: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem' }}>
        <span style={{ fontSize: '1.4rem' }}>✉️</span>
        <span>Email :</span>
        <a href="mailto:contact@waste2gaz.com" style={{ color: '#166534', textDecoration: 'underline', fontWeight: 500 }}>contact@waste2gaz.com</a>
      </div>
      <div style={{ marginBottom: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem' }}>
        <span style={{ fontSize: '1.4rem' }}>📞</span>
        <span>Téléphone :</span>
        <a href="tel:+33612345678" style={{ color: '#166534', textDecoration: 'underline', fontWeight: 500 }}>+212 767799668</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.7rem' }}>
        <span style={{ fontSize: '1.4rem' }}>📍</span>
        <span>Cité Universitaire de Ziaten | 90000 Tanger.</span>
      </div>
    </div>
  </section>
);

export default Contact;
