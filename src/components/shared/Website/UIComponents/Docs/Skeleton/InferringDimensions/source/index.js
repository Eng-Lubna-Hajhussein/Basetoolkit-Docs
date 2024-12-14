export const source = `
import * as React from "react";
import PropTypes from "prop-types";
import { Typography, Skeleton, Grid, Box, useTheme } from "@basetoolkit/ui";

const variants = ["h1", "h3", "body1", "caption"];

function TypographyDemo({ loading = false }) {
  const theme = useTheme();

  return (
    <Box>
      {variants.map((variant) => (
        <Box key={variant} mb={2}>
          {loading ? (
            <Skeleton
              variant="text"
              width="100%"
              height={theme.typography[variant]["fontSize"]}
            />
          ) : (
            <Typography component="div" variant={variant}>
              {variant}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

TypographyDemo.propTypes = {
  loading: PropTypes.bool,
};

export default function SkeletonTypography() {
  return (
    <Grid container spacing={8} width={"100%"}>
      <Grid item xs={6}>
        <TypographyDemo loading />
      </Grid>
      <Grid item xs={6}>
        <TypographyDemo />
      </Grid>
    </Grid>
  );
}
`;
