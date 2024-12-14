import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Avatar, Button } from '@basetoolkit/ui';

const InteractiveCardExample = () => {
  return (
    <Card
      sx={{
        maxWidth: '350px',
        margin: '30px auto',
        padding: '20px',
        borderRadius: '15px',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        transform: 'scale(1)',
        boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#ffffff',
        '&:hover': {
          transform: 'scale(1.08)',
          boxShadow: '0 12px 28px rgba(0, 0, 0, 0.3)',
          backgroundColor: '#f0f8ff',
        },
        '& .media-container': {
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          '& img': {
            transition: 'transform 0.4s ease, filter 0.4s ease',
            height: '200px',
          },
          '&:hover img': {
            filter: 'brightness(0.9)',
            transform: 'scale(1.05)',
          },
        },
        '& .avatar': {
          position: 'absolute',
          bottom: -35,
          left: '50%',
          transform: 'translateX(-50%)',
          border: '4px solid white',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease',
        },
        '&:hover .avatar': {
          transform: 'translateX(-50%) scale(1.1)',
        },
      }}
    >
      <Box className="media-container">
        <CardMedia
          component="img"
          image="https://picsum.photos/350/200"
          alt="Beautiful Landscape"
          sx={{ borderRadius: '10px', objectFit: 'cover' }}
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Avatar"
          className="avatar"
          height={70}
          width={70}
        />
      </Box>
      <CardContent sx={{ textAlign: 'center', marginTop: '60px' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
          Interactive Experience
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: '10px' }}>
          This card grows slightly and adds a shadow when hovered. The avatar hovers over the image.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            mt: 4,
            px: 5,
            py: 1.5,
            borderRadius: '25px',
            transition: 'background-color 0.4s ease, color 0.4s ease',
            color: '#555',
            borderColor: '#ccc',
            '&:hover': {
              backgroundColor: '#1976d2',
              color: 'white',
              borderColor: '#1976d2',
            },
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default InteractiveCardExample;
