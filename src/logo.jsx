import React from "react";
import waste2gaz from "../images/waste-2-gaz.jpg";

const Logo = ({ style = {} }) => (
  <div
    style={{
      background: 'radial-gradient(circle at 60% 40%, #e0ffe6 0%, #b6f0c1 60%, #166534 100%)',
      borderRadius: '50%',
      boxShadow: '0 2px 12px rgba(22,101,52,0.13)',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      ...style
    }}
  >
    <img
      src={waste2gaz}
      alt="Logo Waste 2 Gaz"
      style={{ width: '80%', height: '80%', objectFit: 'contain', borderRadius: '50%' }}
    />
  </div>
);

export default Logo;
