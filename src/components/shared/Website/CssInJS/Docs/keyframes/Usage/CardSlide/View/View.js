import React from 'react';
import { cssInjection, keyframes } from '@basetoolkit/ui';

// Keyframes for entry animation (fade in + slide up)
const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframes for text color animation
const textColorChange = keyframes`
  0% {
    color: #007bff;
  }
  50% {
    color: #28a745;
  }
  100% {
    color: #007bff;
  }
`;

// Keyframes for button border animation
const borderAnimation = keyframes`
  0% {
    border-color: #007bff;
  }
  50% {
    border-color: #28a745;
  }
  100% {
    border-color: #007bff;
  }
`;

// Custom card component with entry animation
const AnimatedCard = cssInjection('div')`
  animation: ${fadeInSlideUp} 1s ease-out forwards;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 20px;
  border: 2px solid #007bff;
  max-width: 500px;
  margin: 40px auto;
`;

// Typography with text color animation
const AnimatedText = cssInjection('h4')`
  animation: ${textColorChange} 3s infinite;
  font-weight: bold;
  text-align: center;
`;

// Buttons with border animation
const CustomButton = cssInjection('button')`
  padding: 10px 20px;
  background-color: white;
  color: #007bff;
  border: 2px solid;
  animation: ${borderAnimation} 3s infinite;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
    color: #0056b3;
    border-color: #0056b3;
  }
`;

const ComplexAnimatedCard = () => (
  <AnimatedCard>
    <AnimatedText>
      Welcome to BaseToolkit
    </AnimatedText>
    <p style={{ textAlign: 'center', color: '#333' }}>
      Explore dynamic animations for text and buttons, with smooth color transitions.
    </p>
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
      <CustomButton>
        Get Started
      </CustomButton>
      <CustomButton style={{ borderColor: '#28a745', color: '#28a745' }}>
        Learn More
      </CustomButton>
    </div>
  </AnimatedCard>
);

export default ComplexAnimatedCard;
