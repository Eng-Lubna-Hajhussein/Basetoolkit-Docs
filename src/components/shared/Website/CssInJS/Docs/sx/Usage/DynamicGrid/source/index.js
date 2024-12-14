export const source = `
import React, { useState } from "react";
import { Grid, Typography } from "@basetoolkit/ui";

const DynamicGridExample = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Grid
      container
      spacing={3}
      sx={(theme) => ({
        padding: theme.spacing(2),
        "& .dynamic-grid-item": {"& .dynamic-grid-content":{
          padding: theme.spacing(2),
          cursor:"pointer",
          borderRadius: "8px",
          boxShadow: isActive
            ? \`0 4px 12px \${theme.palette.secondary.main}\`
            : "none",
          backgroundColor: isActive
            ? theme.palette.secondary.light
            : theme.palette.grey[100],
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
        }},
      })}
      onClick={() => setIsActive(!isActive)}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <Grid key={index} item xs={6} className="dynamic-grid-item">
          <div  className="dynamic-grid-content">
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Grid Item {index + 1}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default DynamicGridExample;
`;
