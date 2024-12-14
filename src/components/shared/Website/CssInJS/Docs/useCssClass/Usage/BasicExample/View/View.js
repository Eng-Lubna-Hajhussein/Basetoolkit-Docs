import { useCSSClass } from '@basetoolkit/ui';
import React from 'react';

const BasicMultipleClasses = () => {
  const classes = useCSSClass(theme=>({
    container: {
      padding: '40px',
      backgroundColor: '#f0f4f8',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    buttonPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        backgroundColor:  theme.palette.primary.dark,
        transform: 'translateY(-2px)',
      },
      '&:active': {
        backgroundColor:  theme.palette.primary.light,
        transform: 'translateY(0)',
      },
    },
    buttonSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        transform: 'translateY(-2px)',
      },
      '&:active': {
        backgroundColor: theme.palette.secondary.light,
        transform: 'translateY(0)',
      },
    },
  }));

  return (
    <div className={classes.container}>
      <button className={classes.buttonPrimary}>Primary Button</button>
      <button className={classes.buttonSecondary}>Secondary Button</button>
    </div>
  );
};

export default BasicMultipleClasses;
