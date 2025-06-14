import React from "react";
import aymar from '../../images/Aymar-Wendy.jpg';
import faly from '../../images/Faly-Ramonja.jpg';
import amine from '../../images/amine-kouchou.jpg';
import hanane from '../../images/hanane.jpg';

const members = [
  {
    name: "Aymar Wendy",
    avatar: aymar
  },
  {
    name: "Faly Ramonja",
    avatar: faly
  },
  {
    name: "Amine Kouchou",
    avatar: amine
  },
  {
    name: "Hanane Oukrich",
    avatar: hanane
  }
];

const Members = () => (
  <section id="membres" style={{
    padding: '2.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 0 2rem 0',
    width: '100%',
    boxSizing: 'border-box',
  }}>
    <h2 style={{ color: '#111', fontWeight: 700, marginBottom: '2rem', fontSize: '2rem' }}>Membres du projet</h2>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2.5rem',
      justifyContent: 'center',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      {members.map((member, idx) => (
        <div key={idx} className="member-card" style={{
          borderRadius: '1rem',
          boxShadow: '0 2px 12px rgba(22,101,52,0.10)',
          padding: '1.2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '180px',
          maxWidth: '220px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          background: '#fff',
          boxSizing: 'border-box',
        }}>
          <img src={member.avatar} alt={member.name} style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem',
            boxShadow: '0 2px 8px rgba(22,101,52,0.10)',
            border: '3px solid #e0e0e0',
            background: '#fff',
            aspectRatio: '1/1',
            display: 'block'
          }} />
          <div style={{ color: '#111', fontWeight: 600, fontSize: '1.1rem' }}>{member.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Members;
