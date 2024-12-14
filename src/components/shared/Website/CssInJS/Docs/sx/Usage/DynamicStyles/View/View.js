import React, { useState } from 'react';
import { Box } from '@basetoolkit/ui';

const DynamicStylesExample = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box
      sx={{
        padding: '30px',
        textAlign: 'center',
        backgroundColor: 'background.paper.light',
        borderRadius: '12px',
        boxShadow: isActive ? '0 6px 20px rgba(0, 0, 0, 0.2)' : '0 3px 10px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease, background-color 0.3s ease', 
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Box
        onClick={() => setIsActive(!isActive)}
        sx={{
          padding: '12px 25px',
          backgroundColor: isActive ? 'primary.main' : 'secondary.main', 
          color: 'white',
          borderRadius: '25px',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.2s ease', 
          '&:hover': {
            backgroundColor: isActive ? 'primary.dark' : 'secondary.dark', 
            transform: 'scale(1.05)', 
          },
        }}
      >
        {isActive ? 'Deactivate' : 'Activate'}
      </Box>
    </Box>
  );
};

export default DynamicStylesExample;
