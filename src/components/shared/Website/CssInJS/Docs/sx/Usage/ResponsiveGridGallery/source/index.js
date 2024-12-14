export const source = `
import React, { useState } from 'react';
import { Grid, Box, Typography } from '@basetoolkit/ui';

const GridGalleryExample = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { title: 'Item 1', img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62" },
    { title: 'Item 2', img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6" },
    { title: 'Item 3', img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f" },
    { title: 'Item 4', img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25" },
  ];

  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: '20px',
        justifyContent: 'center',
        '& .gallery-item': {
          position: 'relative',
          overflow: 'hidden',
          '&:hover .overlay': {
            opacity: 1,
          },
          '& .overlay': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'opacity 0.3s ease',
            '& .title': {
              color: '#fff',
              fontSize: '20px',
              fontWeight: 'bold',
            },
          },
        },
      }}
    >
      {items.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={index}
          className="gallery-item"
          sx={{
            '&:hover img': {
              transform: 'scale(1.1)',
            },
            boxShadow: activeIndex === index
              ? '0 8px 16px rgba(0, 0, 0, 0.3)' 
              : '0 4px 12px rgba(0, 0, 0, 0.1)', 
            transform: activeIndex === index
              ? 'scale(1.05)' 
              : 'scale(1)', 
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <Box
            sx={{
              height: '250px',
              borderRadius: '8px',
              overflow: 'hidden',
              '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            <img src={item.img} alt={item.title} />
            <Box className="overlay">
              <Typography className="title">{item.title}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridGalleryExample;
`;
