import React, { useState } from "react";
import { Switch, FormControlLabel, Slider, PieChart } from "@basetoolkit/ui";

const InteractivePieChart = () => {
  const series = [
    { value: 30, label: "Apples", color: "#FF6347" },
    { value: 50, label: "Bananas", color: "#FFD700" },
    { value: 20, label: "Cherries", color: "#8A2BE2" },
  ];

  const [hideLabel, setHideLabel] = useState(false);
  const [innerRadius, setInnerRadius] = useState(50);
  const [overallColor, setOverallColor] = useState(false);

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={hideLabel}
            onChange={() => setHideLabel(!hideLabel)}
          />
        }
        label="Hide Labels"
      />
      <FormControlLabel
        control={
          <Switch
            checked={overallColor}
            onChange={() => setOverallColor(!overallColor)}
          />
        }
        label="Overall Color"
      />
      <div>
        <label>Inner Radius: {innerRadius}%</label>
        <Slider
          value={innerRadius}
          onChange={(e, newValue) => setInnerRadius(newValue)}
          step={5}
          min={0}
          max={70}
        />
      </div>


      <PieChart
        series={series}
        width={300}
        height={300}
        hideLabel={hideLabel}
        innerRadius={innerRadius}
        overallColor={overallColor}
        labelColor="#fff"
        color="primary"
      />
    </div>
  );
};

export default InteractivePieChart;
