export const source = `
import * as React from "react";
import {
  cssInjection as styled,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@basetoolkit/ui";

const BlueGradientIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.2), inset 0 -1px 0 rgba(0,0,0,0.1)",
  transition: "background 0.3s",
  "&:focus": {
    outline: "2px auto rgba(79, 141, 245, 0.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    background: "linear-gradient(135deg, #3c7de4, #6eb6f6)",
    ...theme.applyStyles("dark", {
      background: "linear-gradient(135deg, #2a5ca1, #5083b7)",
    }),
  },
  "input:disabled ~ &": {
    background: "rgba(80, 100, 130, 0.3)",
    boxShadow: "none",
    ...theme.applyStyles("dark", {
      background: "rgba(50, 60, 80, 0.3)",
    }),
  },
  ...theme.applyStyles("dark", {
    background: "linear-gradient(135deg, #2a5ca1, #5083b7)",
  }),
}));

const BlueGradientCheckedIcon = styled(BlueGradientIcon)({
  background: "linear-gradient(135deg, #3a78e6, #2f65c3)",
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(circle, #fff, #fff 28%, transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    background: "linear-gradient(135deg, #356ccd, #2a5ca1)",
  },
});

// Blue Gradient Radio Component
function BlueGradientRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BlueGradientCheckedIcon />}
      icon={<BlueGradientIcon />}
      {...props}
    />
  );
}

export default function CustomizedBlueGradientRadios() {
  return (
    <FormControl>
      <FormLabel id="demo-customized-blue-gradient-radios">Favorite Shade</FormLabel>
      <RadioGroup
        defaultValue="sky"
        aria-labelledby="demo-customized-blue-gradient-radios"
        name="customized-blue-gradient-radios"
      >
        <FormControlLabel value="sky" control={<BlueGradientRadio />} label="Sky Blue" />
        <FormControlLabel value="ocean" control={<BlueGradientRadio />} label="Ocean Blue" />
        <FormControlLabel value="midnight" control={<BlueGradientRadio />} label="Midnight Blue" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<BlueGradientRadio />}
          label="(Disabled)"
        />
      </RadioGroup>
    </FormControl>
  );
}
`;
