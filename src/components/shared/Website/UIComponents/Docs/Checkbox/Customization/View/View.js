import * as React from "react";
import { cssInjection as styled, Checkbox } from "@basetoolkit/ui";

// Gradient Checkbox
const GradientIcon = styled("span")(({ theme }) => ({
  borderRadius: 1,
  width: 16,
  height: 16,
  background: "linear-gradient(45deg, #ff6b6b, #f8c291)",
  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
  "input:hover ~ &": {
    background: "linear-gradient(45deg, #ff8a65, #ffb3b3) !important",
  },
}));

const GradientCheckedIcon = styled(GradientIcon)({
  background: "linear-gradient(45deg, #ff6b6b, #f76b1c) !important",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundColor: "#fff", // White checkmark color
    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23fff' d='M12 5c-.28 0-.53.11-.71.29L7 9.59 4.71 7.29c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29c-.39.39-.39 1.03 0 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5c.39-.39.39-1.03 0-1.42-.18-.18-.43-.29-.71-.29z'/%3E%3C/svg%3E")`,
    content: '""',
  },
});

// Outline Checkbox
const OutlineIcon = styled("span")({
  width: 12,
  height: 12,
  borderRadius: 1,
  border: "2px solid #007bff",
  backgroundColor: "transparent",
  "input:hover ~ &": {
    borderColor: "#0056b3",
  },
});

const OutlineCheckedIcon = styled(OutlineIcon)({
  backgroundColor: "#007bff",
  "&::before": {
    display: "block",
    width: 12,
    height: 12,
    backgroundColor: "#007bff",
    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23fff' d='M12 5c-.28 0-.53.11-.71.29L7 9.59 4.71 7.29c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29c-.39.39-.39 1.03 0 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5c.39-.39.39-1.03 0-1.42-.18-.18-.43-.29-.71-.29z'/%3E%3C/svg%3E")`,
    content: '""',
  },
});

// Flat Checkbox
const FlatIcon = styled("span")({
  width: 16,
  height: 16,
  borderRadius: 1,
  backgroundColor: "#e0e0e0",
  "input:hover ~ &": {
    backgroundColor: "#bdbdbd",
  },
});

const FlatCheckedIcon = styled(FlatIcon)({
  backgroundColor:t=>t.palette.primary.light +" !important",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundColor: "#fff", // White color for the checkmark
    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23fff' d='M12 5c-.28 0-.53.11-.71.29L7 9.59 4.71 7.29c-.18-.18-.43-.29-.71-.29s-.53.11-.71.29c-.39.39-.39 1.03 0 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5c.39-.39.39-1.03 0-1.42-.18-.18-.43-.29-.71-.29z'/%3E%3C/svg%3E")`,
    content: '""',
  },
});

function GradientCheckbox(props) {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<GradientCheckedIcon />}
      icon={<GradientIcon />}
      inputProps={{ "aria-label": "Gradient Checkbox" }}
      {...props}
    />
  );
}

function OutlineCheckbox(props) {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<OutlineCheckedIcon />}
      icon={<OutlineIcon />}
      inputProps={{ "aria-label": "Outline Checkbox" }}
      {...props}
    />
  );
}

function FlatCheckbox(props) {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<FlatCheckedIcon />}
      icon={<FlatIcon />}
      inputProps={{ "aria-label": "Flat Checkbox" }}
      {...props}
    />
  );
}

export default function CustomizationDemo() {
  return (
    <div>
      <GradientCheckbox defaultChecked />
      <OutlineCheckbox defaultChecked />
      <FlatCheckbox defaultChecked />
    </div>
  );
}
