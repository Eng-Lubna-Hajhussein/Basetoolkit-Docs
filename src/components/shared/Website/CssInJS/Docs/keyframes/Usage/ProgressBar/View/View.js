import React from "react";
import { Box, Typography, cssInjection, keyframes } from "@basetoolkit/ui";

// Keyframe for the animated fill effect
const fillProgress = keyframes`
  0% {
    width: 0;
    background-color: #007bff;
  }
  50% {
    width: 50%;
    background-color: #28a745;
  }
  100% {
    width: 100%;
    background-color: #ff5722;
  }
`;

// Styled custom progress bar using cssInjection
const CustomProgressBar = cssInjection("div")`
  width: 100%;
  height: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    animation: ${fillProgress} 4s linear infinite;
    border-radius: 10px;
  }
`;

// Main ProgressBar component
const ProgressBarExample = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        margin: "40px auto",
        textAlign: "center",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e0e0e0",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "25px",
          fontWeight: "bold",
          fontSize: "1.75rem",
          color: "#2c3e50",
          letterSpacing: "0.5px",
        }}
      >
        Infinite Progress Bar
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: "15px",
          fontSize: "1rem",
          color: "#7f8c8d",
          fontStyle: "italic",
          lineHeight: "1.6",
        }}
      >
        Watch the bar continuously reload with smooth color transitions!
      </Typography>
      <CustomProgressBar />
    </Box>
  );
};

export default ProgressBarExample;
