import React, { useState } from "react";
import waste2gaz from "images/waste-2-gaz.jpg";

const Logo = ({ style = {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <a
      href="#hero"
      style={{ display: 'inline-block' }}
      tabIndex={0}
      aria-label="Aller à l'accueil"
    >
      <div
        style={{
          background: 'radial-gradient(circle at 60% 40%, #e0ffe6 0%, #b6f0c1 60%, #166534 100%)',
          borderRadius: '50%',
          boxShadow: isActive
            ? '0 0 0 4px #b6f0c1, 0 2px 12px rgba(22,101,52,0.18)'
            : isHovered
            ? '0 4px 18px #b6f0c1, 0 2px 12px rgba(22,101,52,0.18)'
            : '0 2px 12px rgba(22,101,52,0.13)',
          padding: isActive ? '7px' : isHovered ? '8px' : '10px',
          transform: isActive
            ? 'scale(0.93)'
            : isHovered
            ? 'scale(1.08)'
            : 'scale(1)',
          transition: 'all 0.18s cubic-bezier(.4,2,.6,1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 64,
          height: 64,
          cursor: 'pointer',
          ...style
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setIsActive(false); }}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => { setIsHovered(false); setIsActive(false); }}
      >
        <img
          src={waste2gaz}
          alt="Logo Waste 2 Gaz"
          style={{ width: '110%', height: '110%', objectFit: 'contain', borderRadius: '50%' }}
        />
      </div>
    </a>
  );
};

export default Logo;
