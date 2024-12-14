import { Box, GlobalStyles } from "@basetoolkit/ui";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// TODO --> MAKING A LANDING PAGE IN (2025)
function Website() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/basetoolkit-button-component");
  }, [navigate]);

  return (
    <Box>
      <GlobalStyles
        styles={{
          body: { m: 0, p: 0, fontFamily: "sans-serif" },
          // "*:not(.website-content *)": { boxSizing: "border-box" },
        }}
      />
    </Box>
  );
}

export default Website;
