export const source = `
import React, { useState } from 'react';
import { Box, Typography, Avatar, Button } from '@basetoolkit/ui';

const ResponsiveCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        margin: '20px auto',
        padding: '20px',
        borderRadius: '15px',
        backgroundColor: 'background.paper.light',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        xs: {
          maxWidth: '100%',
          padding: '15px',
          backgroundColor: hovered ? '#e0f7fa' : '#f0f0f0',
          '& .button': {
            fontSize: '0.875rem',
          },
          '&:hover .avatar': {
            transform: 'scale(1.2)',
          },
        },
        sm: {
          maxWidth: '80%',
          padding: '20px',
          '& .button': {
            fontSize: '1rem',
          },
          '&:hover .avatar': {
            transform: 'scale(1.3)',
          },
        },
        lg: {
          maxWidth: '40%',
          padding: '30px',
          '& .button': {
            fontSize: '1.1rem',
          },
          '&:hover .avatar': {
            transform: 'scale(1.4)',
          },
        },
        xl: {
          maxWidth: '30%',
          padding: '40px',
          '& .button': {
            fontSize: '1.25rem',
          },
          '&:hover .avatar': {
            transform: 'scale(1.5)',
          },
        },
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
        },
        '& .avatar-container': {
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        },
        '& .avatar': {
          width: '80px',
          height: '80px',
          border: '3px solid white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
          xs: { width: '60px', height: '60px' },
          sm: { width: '70px', height: '70px' },
          lg: { width: '80px', height: '80px' },
        },
        '& .media-container': {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          marginBottom: '20px',
          '&:hover img': {
            filter: 'brightness(0.8)',
            transform: 'scale(1.1)',
          },
        },
        '& .content': {
          textAlign: 'center',
        },
      }}
    >
      <Box className="media-container">
        <img
          src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
          alt="Card Media"
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <Box className="avatar-container">
          <Avatar
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="avatar"
          />
        </Box>
      </Box>
      <Box className="content">
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Dynamic Card
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', margin: '10px 0' }}>
          This card adapts to screen sizes and adds dynamic effects on hover.
        </Typography>
        <Button
          variant="contained"
          className="button"
          sx={{
            mt: 2,
            px: 4,
            py: 1,
            borderRadius: '20px',
            backgroundColor: hovered ? '#4caf50' : '#007bff',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: hovered ? '#388e3c' : '#0056b3',
            },
          }}
        >
          Explore
        </Button>
      </Box>
    </Box>
  );
};

export default ResponsiveCard;
`;
