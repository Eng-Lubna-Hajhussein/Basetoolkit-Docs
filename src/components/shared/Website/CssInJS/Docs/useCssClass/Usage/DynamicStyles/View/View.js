import { useCSSClass } from '@basetoolkit/ui';
import React, { useState } from 'react';

const ClickStatePseudo = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [boxSize, setBoxSize] = useState(100);
  const [boxColor, setBoxColor] = useState('purple');

  const handleClick = () => {
    setIsClicked(!isClicked);
    setBoxSize(isClicked ? 100 : 150);
    setBoxColor(isClicked ? 'purple' : '#007bff');
  };

  const classes = useCSSClass({
    container: {
      padding: '40px',
      backgroundColor: isClicked ? '#e0f7fa' : '#f5f5f5',
      borderRadius: '12px',
      transition: 'background-color 0.3s ease',
      position: 'relative',
      cursor: 'pointer',
    },
    box: {
      width: `${boxSize}px`,
      height: `${boxSize}px`,
      backgroundColor: boxColor,
      borderRadius: '50%',
      transition: 'all 0.4s ease',
      boxShadow: isClicked
        ? '0 10px 20px rgba(0, 0, 0, 0.2)'
        : '0 4px 10px rgba(0, 0, 0, 0.1)',
      '&:before': {
        content: '""',
        display: 'block',
        width: `${boxSize + 20}px`,
        height: `${boxSize + 20}px`,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        position: 'absolute',
        top: '-10px',
        left: '-10px',
        borderRadius: '50%',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        transform: isClicked ? 'scale(1.1)' : 'scale(1)',
      },
    },
    label: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginTop: '20px',
      textAlign: 'center',
      color: isClicked ? '#007bff' : '#333',
      transition: 'color 0.3s ease',
    },
  });

  return (
    <div className={classes.container} onClick={handleClick}>
      <div className={classes.box}></div>
      <div className={classes.label}>
        {isClicked ? 'Click Again!' : 'Click Me!'}
      </div>
    </div>
  );
};

export default ClickStatePseudo;
