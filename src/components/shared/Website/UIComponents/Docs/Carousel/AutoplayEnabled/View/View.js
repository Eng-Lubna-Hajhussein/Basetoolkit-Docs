import { Carousel } from "@basetoolkit/ui";
import React from "react";

const slides = [
  { image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45" },
  { image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" },
  { image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8" },
];

function AutoplayEnabledCarousel() {
  return <Carousel slides={slides} autoShow={true} interval={2000} />;
}

export default AutoplayEnabledCarousel;
