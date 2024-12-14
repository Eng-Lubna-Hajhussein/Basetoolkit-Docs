import React from 'react';
import { Box, Typography, Paper } from '@basetoolkit/ui';

export default function App() {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          maxWidth: '700px',
          backgroundColor: '#2E3440',
          borderRadius: 2,
          overflow: 'auto',
          color: '#D8DEE9',
        }}
      >
        <Typography
          component="pre"
          sx={{
            fontFamily: 'Consolas, "Courier New", monospace',
            fontSize: '0.79rem',
            whiteSpace: 'pre-wrap',
            lineHeight: 1.5,
            wordBreak: 'break-word',
          }}
        >
          <span style={{ color: '#81A1C1' }}>const</span> trigger ={' '}
          <span style={{ color: '#88C0D0' }}>useScrollTrigger</span>({`{\n`}
          <span style={{ color: '#EBCB8B' }}>disableHysteresis</span>:{' '}
          <span style={{ color: '#A3BE8C' }}>false</span>,{' '}
          <span style={{ color: '#4C566A' }}>
            // Optional: Whether to trigger immediately after the threshold is
            crossed
          </span>
          <br />
          <span style={{ color: '#EBCB8B' }}>threshold</span>:{' '}
          <span style={{ color: '#A3BE8C' }}>100</span>,{' '}
          <span style={{ color: '#4C566A' }}>
            // Optional: Number of pixels scrolled before the trigger activates
          </span>
          <br />
          <span style={{ color: '#EBCB8B' }}>target</span>:{' '}
          <span style={{ color: '#A3BE8C' }}>window</span>,{' '}
          <span style={{ color: '#4C566A' }}>
            // Optional: The target element for scroll detection (default is
            window)
          </span>
          <br />
          {`}`});
        </Typography>
      </Paper>
    </Box>
  );
}
