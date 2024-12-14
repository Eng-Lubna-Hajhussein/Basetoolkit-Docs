import * as React from "react";
import { Rating, Box, SvgIcon } from "@basetoolkit/ui";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function HoverRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        emptyIcon={
          <SvgIcon icon="star" variant="filled" style={{ opacity: 0.55 }} />
        }
      />
      {value !== null && <Box sx={{ ml: 2 }}>{labels[value]}</Box>}
    </Box>
  );
}
