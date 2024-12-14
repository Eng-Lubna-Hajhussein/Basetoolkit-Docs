import { Carousel } from "@basetoolkit/ui";
import React from "react";

const slides = [
  { image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d" },
  { image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45" },
  { image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" },
  { image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8" },
];

function MultipleSlidesView() {
  return <Carousel slides={slides} slidesPerView={2} />;
}

export default MultipleSlidesView;
