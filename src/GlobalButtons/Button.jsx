import React from 'react';
import bgimg from '../assets/Logos/navalogo.png';

// Make sure to add extension

const Button = ({ text }) => {
  return (
    <button
      style={{
        backgroundImage: `url(${bgimg})`,  
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: 'none',
        padding: '12px 28px',
        fontWeight: 'bold',
        fontSize: '18px',
        color: 'white',
        cursor: 'pointer',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        userSelect: 'none',
      }}
      aria-label={text}
    >
      {text}
    </button>
  );
};

export default Button;
