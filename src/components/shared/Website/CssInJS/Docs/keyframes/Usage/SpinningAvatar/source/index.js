export const source = `
import { Avatar, cssInjection, keyframes } from "@basetoolkit/ui";
import React from "react";

// Keyframes for rotating avatar
const rotate = keyframes\`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
\`;

// Keyframes for animated border
const loadingBorder = keyframes\`
 0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 255, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.4);
  }
\`;

// Custom Avatar with spinning and border loading animation
const SpinningAvatar = cssInjection(Avatar)\`
  animation: ${rotate} 3s linear infinite;
  border: 4px solid transparent;
  border-radius: 50%;
  padding: 5px;
  background-color: #f0f0f0;
  animation: ${loadingBorder} 2s ease-in-out infinite;
\`;

const LoadingAvatarExample = () => (
  <SpinningAvatar
    alt="User Avatar"
    src="https://tse1.mm.bing.net/th?id=OIP.4qUN0_7qTBGSujcMl05E3AHaHa&pid=Api&P=0&h=220"
    sx={{ width: 100, height: 100 }}
  />
);

export default LoadingAvatarExample;
`