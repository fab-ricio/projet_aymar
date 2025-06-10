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
          Email : <a href="mailto:contact@waste2gaz.com" style={{ color: '#60a5fa' }}>contact@waste2gaz.com</a> | Téléphone : <a href="tel:+33612345678" style={{ color: '#60a5fa' }}>+212 767799668</a>
        </p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: '#cbd5e1' }}>
          Adresse : Cité Universitaire de Ziaten | 90000 Tanger.
        </p>
        <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
          &copy; {new Date().getFullYear()} E-Commerce. Tous droits réservés.
        </div>
        {/* Réseaux sociaux modernes */}
        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          { [
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/',
              bg: 'linear-gradient(135deg, #0077B5 60%, #00A0DC 100%)',
              svg: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="white"/><path d="M10.5 12h2v7h-2v-7zm1-2a1 1 0 110-2 1 1 0 010 2zm3 2h2v1h.03c.28-.53.97-1.09 2-1.09 2.14 0 2.53 1.41 2.53 3.25v3.84h-2v-3.41c0-.81-.01-1.85-1.13-1.85-1.13 0-1.3.88-1.3 1.79v3.47h-2v-7z" fill="#0A66C2"/></svg>
              )
            },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/',
              bg: 'linear-gradient(135deg, #f9ce34 0%, #ee2a7b 60%, #6228d7 100%)',
              svg: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="white"/><rect x="8" y="8" width="12" height="12" rx="4" stroke="#E1306C" strokeWidth="2"/><circle cx="14" cy="14" r="3" stroke="#E1306C" strokeWidth="2"/><circle cx="19" cy="9" r="1" fill="#E1306C"/></svg>
              )
            },
            {
              name: 'Facebook',
              url: 'https://www.facebook.com/',
              bg: 'linear-gradient(135deg, #1877F2 60%, #42A5F5 100%)',
              svg: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="white"/><path d="M16.5 10.5h2V8.5h-2c-2.21 0-3.5 1.29-3.5 3.5v1.5h-2v2h2v5h2v-5h2l.5-2h-2.5v-1.5c0-.55.45-1 1-1z" fill="#1877F3"/></svg>
              )
            },
            {
              name: 'WhatsApp',
              url: 'https://wa.me/',
              bg: 'linear-gradient(135deg, #25D366 60%, #128C7E 100%)',
              svg: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="white"/><path d="M20.5 15.5c-.41 0-.82-.06-1.21-.18-.38-.12-.8-.25-1.23-.41-.43-.16-.87-.34-1.31-.54-.44-.2-.87-.41-1.29-.65-.42-.24-.83-.5-1.22-.78-.39-.28-.76-.58-1.1-.9-.34-.32-.66-.66-.95-1.01-.29-.35-.56-.72-.8-1.1-.24-.38-.46-.77-.65-1.18-.19-.41-.36-.83-.5-1.25-.14-.42-.25-.85-.33-1.28-.08-.43-.13-.87-.13-1.31 0-.41.06-.82.18-1.21.12-.38.25-.8.41-1.23.16-.43.34-.87.54-1.31.2-.44.41-.87.65-1.29.24-.42.5-.83.78-1.22.28-.39.58-.76.9-1.1.32-.34.66-.66 1.01-.95.35-.29.72-.56 1.1-.8.38-.24.77-.46 1.18-.65.41-.19.83-.36 1.25-.5.42-.14.85-.25 1.28-.33.43-.08.87-.13 1.31-.13.41 0 .82.06 1.21.18.38.12.8.25 1.23.41.43.16.87.34 1.31.54.44.2.87.41 1.29.65.42.24.83.5 1.22.78.39.28.76.58 1.1.9.34.32.66.66.95 1.01.29.35.56.72.8 1.1.24.38.46.77.65 1.18.19.41.36.83.5 1.25.14.42.25.85.33 1.28.08.43.13.87.13 1.31 0 .41-.06.82-.18 1.21-.12.38-.25.8-.41 1.23-.16.43-.34.87-.54 1.31-.2.44-.41.87-.65 1.29-.24.42-.5.83-.78 1.22-.28.39-.58.76-.9 1.1-.32.34-.66.66-1.01.95-.35.29-.72.56-1.1.8-.38.24-.77.46-1.18.65-.41.19-.83.36-1.25.5-.42.14-.85.25-1.28.33-.43.08-.87.13-1.31.13z" fill="#25D366"/></svg>
              )
            }
          ].map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: item.bg,
                borderRadius: '50%',
                width: 56,
                height: 56,
                boxShadow: '0 4px 16px rgba(0,0,0,0.13)',
                transition: 'transform 0.18s, box-shadow 0.18s',
                border: 'none',
                margin: 0,
                cursor: 'pointer',
                outline: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = 'scale(1.13)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)';
                e.currentTarget.style.filter = 'brightness(1.08)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.13)';
                e.currentTarget.style.filter = 'none';
              }}
            >
              {item.svg}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
