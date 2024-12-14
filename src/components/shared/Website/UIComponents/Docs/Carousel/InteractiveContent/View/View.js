import React from "react";
import {Button,Carousel} from "@basetoolkit/ui"; 

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    content: (
      <div className="slide-interactive-content">
        <h2>Special Offer</h2>
        <p>Get 50% off on your first purchase!</p>
        <Button className="slide-interactive-content-button" onClick={() => alert("Offer Activated!")}>Learn More</Button>
      </div>
    ),
  },
  {
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    content: (
      <div className="slide-interactive-content">
        <h2>New Arrival</h2>
        <p>Check out our latest collection now.</p>
        <Button className="slide-interactive-content-button" onClick={() => alert("New Collection!")}>Shop Now</Button>
      </div>
    ),
  },
  {
    image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    content: (
      <div>
        <h2>Limited Time</h2>
        <p>Hurry, offer ends soon!</p>
        <Button onClick={() => alert("Offer Ending Soon!")}>Grab Offer</Button>
      </div>
    ),
  },
];

function InteractiveContentCarousel() {
  return (
    <Carousel
      slides={slides}
      slidesPerView={1}
      autoShow={true}
      interval={4000}
      sx={{
        width: "90%",
        margin: "auto",
        "& .slide-interactive-content": {
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "20px",
          borderRadius: "8px",
        },
        "& .slide-interactive-content-button": {
          marginTop: "10px",
        },
      }}
    />
  );
}

export default InteractiveContentCarousel;
