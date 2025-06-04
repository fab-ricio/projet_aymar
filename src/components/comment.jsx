import React from "react";
import "../App.css";

const Comment = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#fff',
      borderRadius: '1rem',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      padding: '2rem',
      maxWidth: '400px',
      margin: '2rem auto'
    }}>
      <img
        src="#"
        alt="Aymar"
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '1.2rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)'
        }}
      />
      <blockquote style={{
        fontStyle: 'italic',
        color: '#374151',
        margin: 0,
        textAlign: 'center',
        fontSize: '1.15rem'
      }}>
        "On ne pensait pas que c'était aussi simple à utiliser. Maintenant on cuisine avec nos épluchures !"
      </blockquote>
    </div>
  );
};

export default Comment;
