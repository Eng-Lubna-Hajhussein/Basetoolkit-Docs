export const source = `
import React, { useState } from "react";
import {
  Box,
  Grid,
  Rating,
  FormGroup,
  FormControlLabel,
  SvgIcon,
} from "@basetoolkit/ui";

const BasicRating = () => {
  const [value, setValue] = useState(2);

  return (
    <Box sx={{ mt: 2 }}>
      <FormGroup>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControlLabel
              name="simple-Basic"
              value={value}
              label="Controlled"
              onChange={(newValue) => {
                setValue(newValue);
              }}
              control={<Rating />}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              label="Read Only"
              control={
                <Rating
                  filledColor="secondary"
                  name="read-only"
                  value={value}
                  readOnly
                />
              }
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              label="Disabled"
              control={<Rating name="disabled" value={value} disabled />}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              label="Required"
              required
              control={
                <Rating filledColor="warning" name="required" value={value} />
              }
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              label="Null Value"
              control={<Rating name="no-value" value={null} />}
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              label="Custom"
              control={
                <Rating
                  name="custom"
                  filledColor="red"
                  icon={"heart_broken"}
                  emptyIcon={<SvgIcon icon="heart_broken" />}
                  value={value}
                />
              }
            />
          </Grid>
        </Grid>
      </FormGroup>
    </Box>
  );
};

export default BasicRating;
`;
