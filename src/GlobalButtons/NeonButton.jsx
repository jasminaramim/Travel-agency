import React from 'react';

const NeonButton = ({ text, link }) => {
  return (
    <>
      <style>{`
        .neon-btn {
          position: relative;
          display: inline-block;
          width: 250px;
          height: 50px;
          background: #232323;
          text-decoration: none;
          text-transform: uppercase;
          text-align: center;
          line-height: 50px;
          color: #01BF5F; /* Green */
          font-size: 16px; /* Medium text */
          font-family: Verdana, sans-serif;
          letter-spacing: 4px;
        }

        .neon-btn::before,
        .neon-btn::after,
        .neon-btn span::before,
        .neon-btn span::after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background: #01BF5F; /* Green */
          transition: 1s;
          mix-blend-mode: hue;
        }

        .neon-btn::before {
          top: -2px;
          left: -2px;
        }

        .neon-btn::after {
          top: -2px;
          right: -2px;
        }

        .neon-btn span::before {
          bottom: -2px;
          left: -2px;
        }

        .neon-btn span::after {
          bottom: -2px;
          right: -2px;
        }

        .neon-btn:hover::before,
        .neon-btn:hover::after,
        .neon-btn:hover span::before,
        .neon-btn:hover span::after {
          width: calc(180px / 2);
          height: calc(50px / 2);
        }
      `}</style>

      <a href={link} className="neon-btn">
        <span>{text}</span>
      </a>
    </>
  );
};

export default NeonButton;
