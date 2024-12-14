import React from 'react';
import { Button, Card, CardContent, Typography, Avatar, keyframes, useCSSClass } from '@basetoolkit/ui';

// Keyframes for animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const CustomBasetoolkitStyledComponent = () => {
  const classes = useCSSClass({
    card: {
      width: '400px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f0f0f0',
      '&:hover': {
        backgroundColor: '#e0e0e0',
        transform: 'translateY(-10px)',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
      },
    },
    avatar: {
      width: '100px',
      height: '100px',
      margin: '0 auto',
      animation: `${spin} 4s infinite linear`,
      border: '3px solid #007bff',
      '&:hover': {
        borderColor: '#0056b3',
        animation: `${pulse} 2s infinite`,
      },
    },
    button: {
      marginTop: '20px',
      padding: '12px 24px',
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '10px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      '&:hover': {
        backgroundColor: '#0056b3',
        transform: 'translateY(-2px)',
      },
      '&:active': {
        backgroundColor: '#003d80',
        transform: 'translateY(0)',
      },
    },
    typography: {
      color: '#333',
      textAlign: 'center',
      '& h5': {
        color: '#007bff',
      },
      '& p': {
        color: '#666',
      },
    },
  });

  return (
    <Card className={classes.card}>
      <CardContent>
        <Avatar
          alt="User Avatar"
          src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
          className={classes.avatar}
        />
        <Typography variant="h5" className={classes.typography}>
          Welcome to Basetoolkit and useCSSClass
        </Typography>
        <Typography variant="body2" className={classes.typography}>
          This example demonstrates how to combine Basetoolkit components with
          custom styles using the useCSSClass hook.
        </Typography>
        <Button variant="contained" className={classes.button}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomBasetoolkitStyledComponent;
