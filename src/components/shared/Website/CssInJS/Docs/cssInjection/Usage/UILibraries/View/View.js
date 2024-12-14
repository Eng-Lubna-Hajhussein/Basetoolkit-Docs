import React from 'react';
import { Button, cssInjection } from '@basetoolkit/ui';

const StyledButton = cssInjection(Button)`
  background-color: #e74c3c !important;
  color: white;
  font-size: 1.25rem;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #c0392b !important;
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 12px !important;
    font-size: 1rem !important;
  }
`;

const BasetoolkitStyledButton = () => {
  return <StyledButton variant="contained">Responsive Basetoolkit Button</StyledButton>;
};

export default BasetoolkitStyledButton;
