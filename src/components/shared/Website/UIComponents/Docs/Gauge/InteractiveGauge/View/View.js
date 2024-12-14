import React, { useState } from "react";
import { Slider, Switch, FormControlLabel, Gauge, Grid } from "@basetoolkit/ui";

const InteractiveGauge = () => {
  const [value, setValue] = useState(50);
  const [showPointer, setShowPointer] = useState(false);
  const [arcWidth, setArcWidth] = useState(10);
  const [startAngle, setStartAngle] = useState(0);
  const [endAngle, setEndAngle] = useState(180);
  const [color, setColor] = useState("primary");

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6} container justifyContent="center">
        <Gauge
          width={200}
          height={200}
          value={value}
          pointer={showPointer}
          hideText={true} 
          arcWidth={arcWidth}
          startAngle={startAngle}
          endAngle={endAngle}
          color={color}
        />
      </Grid>

      {/* Controls */}
      <Grid item xs={12} md={6}>
        {/* Value Slider */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <label>Value: {value}</label>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
              step={1}
              min={0}
              max={100}
            />
          </Grid>
        </Grid>

        {/* Arc Width Slider */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <label>Arc Width: {arcWidth}px</label>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={arcWidth}
              onChange={(e, newValue) => setArcWidth(newValue)}
              step={1}
              min={1}
              max={30}
            />
          </Grid>
        </Grid>

        {/* Start Angle Slider */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <label>Start Angle: {startAngle}°</label>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={startAngle}
              onChange={(e, newValue) => setStartAngle(newValue)}
              step={1}
              min={0}
              max={360}
            />
          </Grid>
        </Grid>

        {/* End Angle Slider */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <label>End Angle: {endAngle}°</label>
          </Grid>
          <Grid item xs={8}>
            <Slider
              value={endAngle}
              onChange={(e, newValue) => setEndAngle(newValue)}
              step={1}
              min={0}
              max={360}
            />
          </Grid>
        </Grid>

        {/* Pointer Switch */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Switch
                  checked={showPointer}
                  onChange={() => setShowPointer(!showPointer)}
                />
              }
              label="Show Pointer"
            />
          </Grid>
        </Grid>

        {/* Color Switch */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Switch
                  checked={color === "secondary"}
                  onChange={() =>
                    setColor(color === "primary" ? "secondary" : "primary")
                  }
                />
              }
              label="Use Secondary Color"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InteractiveGauge;
