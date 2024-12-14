import { Button, cssInjection, keyframes } from '@basetoolkit/ui';
import React from 'react';

// Keyframes for border expansion and contraction
const borderExpand = keyframes`
  0% {
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0 0 0 rgba(0, 123, 255, 0.4);
  }
  50% {
    border-width: 8px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.8);
  }
  100% {
    border-width: 2px;
    border-radius: 8px;
    box-shadow: 0 0 0 rgba(0, 123, 255, 0.4);
  }
`;

const AnimatedButton = cssInjection(Button)` 
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid #007bff;
  background-color: #007bff;
  color: white;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    animation: ${borderExpand} 1.5s ease-in-out infinite;
    background-color: #0056b3;
  }
`;

const HoverButtonExample = () => (
  <AnimatedButton variant="contained" color="primary">
    Hover Me
  </AnimatedButton>
);

export default HoverButtonExample;
