import { cssInjection, keyframes } from '@basetoolkit/ui';
import React from 'react';

const pulse = keyframes({
  '0%': {
    transform: 'scale(1)',
    boxShadow: '0 0 0 0 rgba(255, 0, 0, 0.7)',
  },
  '70%': {
    transform: 'scale(1.1)',
    boxShadow: '0 0 15px 10px rgba(255, 0, 0, 0)',
  },
  '100%': {
    transform: 'scale(1)',
    boxShadow: '0 0 0 0 rgba(255, 0, 0, 0)',
  },
});

const AnimatedDiv = cssInjection('div')({
  width: '150px',
  height: '150px',
  backgroundColor: '#e74c3c',
  borderRadius: '50%',
  animation: `${pulse} 2s infinite`,
  margin: '50px auto',
});

const AnimationExample = () => {
  return <AnimatedDiv />;
};

export default AnimationExample;
