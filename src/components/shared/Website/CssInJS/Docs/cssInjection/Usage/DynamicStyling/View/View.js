import React, { useState } from 'react';
import { cssInjection, keyframes } from '@basetoolkit/ui';

// Keyframes for the progress bar animation
const grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

// Keyframes for the button color animation
const pulse = keyframes`
  0% {
    background-color: #007bff;
  }
  50% {
    background-color: #0056b3;
  }
  100% {
    background-color: #007bff;
  }
`;

const Button = cssInjection('button', {
  shouldForwardProp: (prop) => !['size', 'progress', 'loading'].includes(prop),
})(({ size, loading }) => ({
  padding: size === 'large' ? '15px 30px' : '10px 20px',
  fontSize: size === 'large' ? '18px' : '14px',
  backgroundColor: loading ? '#ddd' : '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: loading ? 'not-allowed' : 'pointer',
  position: 'relative',
  overflow: 'hidden',
  transition: 'background-color 0.3s ease',
  animation: loading ? `${pulse} 1.5s infinite` : 'none',
  '&:hover': {
    backgroundColor: loading ? '#ddd' : '#0056b3',
  },
}));

// Progress Bar styled with dynamic width
const ProgressBar = cssInjection('div')(({ progress }) => ({
  width: `${progress}%`,
  height: '5px',
  backgroundColor: progress > 75 ? '#4caf50' : progress > 50 ? '#f39c12' : '#e74c3c',
  position: 'absolute',
  bottom: 0,
  left: 0,
  animation: `${grow} 2s ease`,
}));

// Main component to show dynamic styling in action
const DynamicButton = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!loading) {
      setLoading(true);
      let newProgress = 0;
      const interval = setInterval(() => {
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
        } else {
          newProgress += 10;
          setProgress(newProgress);
        }
      }, 200);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Button size="large" loading={loading} onClick={handleClick}>
        {loading ? 'Loading...' : 'Start Process'}
        <ProgressBar progress={progress} />
      </Button>
    </div>
  );
};

export default DynamicButton;
