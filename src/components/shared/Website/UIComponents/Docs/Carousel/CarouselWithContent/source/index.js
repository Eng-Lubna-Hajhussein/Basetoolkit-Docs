export const source = `
import { Carousel } from "@basetoolkit/ui";
import React from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    content: "This is slide 1",
  },
  {
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    content: "This is slide 2",
  },
  {
    image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    content: "This is slide 3",
  },
];

function CarouselWithContent() {
  return <Carousel slides={slides} />;
}

export default CarouselWithContent;
`;
