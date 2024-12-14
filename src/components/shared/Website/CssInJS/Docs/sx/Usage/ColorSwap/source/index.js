export const source = `
import React from 'react';
import { Box, keyframes } from '@basetoolkit/ui';

// Keyframe for color swap animation
const colorSwap = keyframes\`
  0% { border-color: #ff5722; }
  50% { border-color: #007bff; }
  100% { border-color: #ff5722; }
\`;

// Keyframe for rotation animation
const rotation = keyframes\`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
\`;

// Keyframe for pulsating effect
const pulse = keyframes\`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
\`;

const ColorSwap = () => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        padding: '15px 35px',
        color: 'primary.main',
        border: '2px solid',
        borderColor: 'primary.main',
        borderRadius: '30px',
        cursor: 'pointer',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        animation: \`\${colorSwap} 3s infinite, \${pulse} 2s infinite ease-in-out\`, // Combined animations: color swap + pulse
        '&:hover': {
          color: 'secondary.main', 
          borderColor: 'secondary.main', 
          background: 'linear-gradient(90deg, #ff5722, #007bff)', 
          transform: 'scale(1.1)', 
          animation: \`\${rotation} 1s infinite linear\`,
        },
      }}
    >
      Hover Me
    </Box>
  );
};

export default ColorSwap;
`