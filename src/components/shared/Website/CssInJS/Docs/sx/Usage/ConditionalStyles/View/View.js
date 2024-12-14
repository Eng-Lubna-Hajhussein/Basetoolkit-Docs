import React from 'react';
import { Box, Typography } from '@basetoolkit/ui';

const ConditionalStylesExample = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        backgroundColor: 'background.paper',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: 'secondary.main',
          transform: 'scale(1.05)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        },
        '@media (max-width: 600px)': {
          padding: '10px',
          '&:hover': {
            transform: 'scale(1)',
            boxShadow: 'none',
          },
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary', marginBottom: '10px' }}>
        Conditional Styling Example
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Hover over this box to see the effect. On smaller screens, the hover effect is toned down.
      </Typography>
    </Box>
  );
};

export default ConditionalStylesExample;
