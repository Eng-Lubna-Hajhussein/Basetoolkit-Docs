import React from "react";
import { Stack, Typography, PartiallyFilledIcon, Box } from "@basetoolkit/ui";

function PartiallyFilledIconDemo() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={3} alignItems="center">
        <Box display={"flex"} flexDirection="column" alignItems="center">
          <PartiallyFilledIcon
            icon="star"
            fillPercentage={0.43}
            size="large"
            filledColor="#FFD700"
          />
          <Typography variant="body2">43%</Typography>
        </Box>
        <Box display={"flex"} flexDirection="column" alignItems="center">
          <PartiallyFilledIcon
            icon="favorite"
            fillPercentage={0.5}
            size="large"
            filledColor="#FF5733"
          />
          <Typography variant="body2">50%</Typography>
        </Box>
        <Box display={"flex"} flexDirection="column" alignItems="center">
          <PartiallyFilledIcon
            icon="favorite_border"
            fillPercentage={0.6}
            size="large"
            filledColor="hotpink"
          />
          <Typography variant="body2">60%</Typography>
        </Box>
        <Box display={"flex"} flexDirection="column" alignItems="center">
          <PartiallyFilledIcon
            icon="home"
            fillPercentage={0.41}
            size="large"
            filledColor="warning"
          />
          <Typography variant="body2">41%</Typography>
        </Box>
        <Box display={"flex"} flexDirection="column" alignItems="center">
          <PartiallyFilledIcon
            icon="thumb_up"
            fillPercentage={0.3}
            size="large"
            filledColor="#4CAF50"
          />
          <Typography variant="body2">30%</Typography>
        </Box>
        <Box display={"flex"} flexDirection="column" alignItems="center">
          <PartiallyFilledIcon
            icon="settings"
            fillPercentage={0.61}
            size="large"
            filledColor="black"
          />
          <Typography variant="body2">63%</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default PartiallyFilledIconDemo;
