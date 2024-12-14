export const source = `
import React, { useState, useEffect } from "react";
import { Skeleton } from "@basetoolkit/ui";

const ImageWithSkeleton = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time even if the image loads quickly
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Minimum 1 second delay

    return () => clearTimeout(loadTimer); // Cleanup timer
  }, []);

  return (
    <div style={{ width: "300px", height: "200px", position: "relative" }}>
      {/* Show Skeleton when image is loading */}
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="pulse"
        />
      )}

      {/* The image will appear once the skeleton loading delay is over */}
      <img
        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
        alt="Loading example"
        style={{
          width: "100%",
          height: "100%",
          display: isLoading ? "none" : "block",
        }}
        onLoad={() => {}}
      />
    </div>
  );
};

export default ImageWithSkeleton;
`;
