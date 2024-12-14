export const source = `
import React from 'react';
import { cssInjection } from '@basetoolkit/ui';

const StyledDiv = cssInjection('div')\`
  background-color: #3498db;
  color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 1.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
\`;

const BasicExample = () => {
  return <StyledDiv>Beautiful Basic Styled Div</StyledDiv>;
};

export default BasicExample;
`