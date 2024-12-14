import { Grid } from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";
import React from "react";

const GradientList = () => {
  // Create a complex scale with multiple colors
  const scale = coloris.scale([
    "#ff0000",
    "#ff9900",
    "#ffff00",
    "#00ff00",
    "#0000ff",
    "#4b0082",
    "#9400d3",
  ]);

  // Retrieve 10 evenly spaced colors from the scale
  const gradientColors = scale.colors(42);

  const items = Array.from({ length: 42 }, (_, index) => `${index + 1}`);

  return (
    <Grid container spacing={2} justifyContent="center">
      {items.map((item, index) => (
        <Grid item xs={2} key={index}>
          <div
            style={{
              backgroundColor: gradientColors[index],
              padding: "10px",
              color: "#fff",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            {item}
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default GradientList;
