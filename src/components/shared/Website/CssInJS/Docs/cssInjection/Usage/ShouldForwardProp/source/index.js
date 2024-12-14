export const source = `
import { cssInjection } from '@basetoolkit/ui';
import React from 'react';

const CustomComponent = cssInjection('button', {
  shouldForwardProp: (prop) => prop !== 'isPrimary',
})(({isPrimary})=>({
  backgroundColor:  (isPrimary ? '#1abc9c' : '#34495e'),
  cursor:"pointer",
  color: 'white',
  padding: '15px 30px',
  fontSize: '1.2rem',
  borderRadius: '8px',
  border: 'none',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor:  (isPrimary ? '#16a085' : '#2c3e50'),
  },
}));

const ForwardPropsExample = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <CustomComponent isPrimary>Primary Button</CustomComponent>
      <CustomComponent>Secondary Button</CustomComponent>
    </div>
  );
};

export default ForwardPropsExample;
`;
