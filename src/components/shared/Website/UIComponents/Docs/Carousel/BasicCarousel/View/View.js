import React from "react";
import { Carousel } from "@basetoolkit/ui";

const slides = [
  { image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45" },
  { image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" },
  { image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8" },
];

function BasicImageCarousel() {
  return <Carousel slides={slides} />;
}

export default BasicImageCarousel;
