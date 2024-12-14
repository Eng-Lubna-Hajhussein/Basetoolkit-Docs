import React from "react";
import { Box, SvgIcon } from "@basetoolkit/ui";

function CustomizationDemo() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <SvgIcon
        icon="favorite_border"
        sx={{
          fill: "text.secondary",
          cursor: "pointer",
          borderRadius: 2,
          "&:hover": { fill: "warning", boxShadow: 5 },
        }}
        size="medium"
        mt={4}
        p={1}
        ml={2}
        boxShadow={2}
      />
    </Box>
  );
}

export default CustomizationDemo;
