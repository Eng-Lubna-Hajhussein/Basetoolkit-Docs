import React from "react";
import { keyframes, Carousel, SvgIcon } from "@basetoolkit/ui";
import { carouselClasses } from "@basetoolkit/ui/classes";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const indicatorTransition = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
`;

const slides = [
  {
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    content: (
      <div>
        <h2>Amazing Destination</h2>
        <p>Discover the beauty of untouched nature.</p>
      </div>
    ),
  },
  {
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    content: (
      <div>
        <h2>Adventure Awaits</h2>
        <p>Join our exciting outdoor adventures.</p>
      </div>
    ),
  },
  {
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    content: (
      <div>
        <h2>Relaxing Getaways</h2>
        <p>Experience tranquility in the heart of nature.</p>
      </div>
    ),
  },
];

function AnimatedCarousel() {
  return (
    <Carousel
      slides={slides}
      slidesPerView={1}
      autoShow={true}
      interval={3000}
      sx={{
        width: "90%",
        margin: "auto",
        position: "relative",
        "& .slides": {
          transition: "transform 0.8s ease-in-out",
          animation: `${slideIn} 0.8s ease-in`,
        },
        "& .slide": {
          animation: `${slideOut} 0.8s ease-out`,
        },
        [`& .${carouselClasses.indicators}`]: {
          position: "absolute",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        },
        [`& .${carouselClasses.indicator}`]: {
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          cursor: "pointer",
          transition: "opacity 0.3s",
          "&.active": {
            backgroundColor: "rgba(255, 255, 255, 1)",
            animation: `${indicatorTransition} 0.8s ease-in-out infinite`,
          },
        },
      }}
    />
  );
}

export default AnimatedCarousel;
