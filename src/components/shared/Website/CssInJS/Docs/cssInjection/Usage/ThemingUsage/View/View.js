import { cssInjection } from '@basetoolkit/ui';
import React from 'react';

const ThemedComponent = cssInjection('div')(({ theme }) => `
  background-color: ${theme.palette.background.default};
  color: ${theme.palette.text.primary};
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 2px solid ${theme.palette.primary.main};
  text-align: center;
  font-size: 1.25rem;

  &:hover {
    background-color: ${theme.palette.background.paper};
  }
`);

const ThemedExample = () => {
  return <ThemedComponent >Elegant Themed Component</ThemedComponent>;
};

export default ThemedExample;
