import coloris from '@basetoolkit/ui/coloris';
import React from 'react';

const ColorScaleDemo = () => {
  // Define a color scale from white to black
  const scale = coloris.scale(["#ffffff", "#ff0000", "#000000"]);

  // Get a few example colors from the scale (0.0 -> 1.0)
  const colors = [
    scale(0),   // White
    scale(0.25), // A light red
    scale(0.5), // Red
    scale(0.75), // A dark red
    scale(1),   // Black
  ];

  return (
    <div>
      <h3>Color Scale from White to Black through Red</h3>
      {colors.map((color, index) => (
        <div key={index} style={{ backgroundColor: color, padding: '20px', margin: '10px' }}>
          {color}
        </div>
      ))}
    </div>
  );
};

export default ColorScaleDemo;
