import { keyframes, useCSSClass } from '@basetoolkit/ui';
import React from 'react';

// Keyframes for animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LandingPageCard = () => {
  const classes = useCSSClass({
   
    card: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      margin: '20px',
      overflow: 'hidden',
      animation: `${fadeIn} 1s ease-out forwards`,
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
      },
      '@media (max-width: 768px)': {
        width: '100%',
      },
    },
    imageWrapper: {
      position: 'relative',
      overflow: 'hidden',
      '& img': {
        width: '100%',
        height: 'auto',
        transition: 'transform 0.5s ease',
      },
      '&:hover img': {
        transform: 'scale(1.1)',
      },
    },
    rotateIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      width: '40px',
      height: '40px',
      backgroundColor: '#007bff',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      animation: `${rotate} 5s infinite linear`,
      color: '#fff',
    },
    content: {
      padding: '20px',
      textAlign: 'center',
    },
    title: {
      fontSize: '20px',
      margin: '10px 0',
      color: '#333',
    },
    description: {
      fontSize: '16px',
      color: '#666',
      margin: '0 0 20px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      animation: `${pulse} 2s infinite ease-in-out`,
      '&:hover': {
        backgroundColor: '#0056b3',
      },
    },
  });

  return (
    <div>
      <div className={classes.card}>
        <div className={classes.imageWrapper}>
          <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" alt="Card Example" />
          <div className={classes.rotateIcon}>⭐</div>
        </div>
        <div className={classes.content}>
          <h2 className={classes.title}>Landing Page Card</h2>
          <p className={classes.description}>
            This is a beautiful card with animations and hover effects.
          </p>
          <button className={classes.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCard;
