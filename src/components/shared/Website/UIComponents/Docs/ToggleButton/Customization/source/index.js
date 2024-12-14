export const source = `
import * as React from "react";
import {
  cssInjection as styled,
  Divider,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  SvgIcon,
} from "@basetoolkit/ui";
import { toggleButtonGroupClasses } from "@basetoolkit/ui/classes";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  margin: theme.spacing(0.5),
  border: "0px !important",
  borderRadius: theme.shape.borderRadius,
  [\`& .\${toggleButtonGroupClasses.disabled}\`]: {
    border: 0,
  },
  [\`> *\`]: {
    mx:"2px",
    border:"0px !important",
    borderRadius:"5px !important"
  },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState("left");
  const [formats, setFormats] = React.useState(() => ["italic"]);

  const handleFormat = (newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={(theme) => ({
          display: "flex",
          border: \`1px solid \${theme.palette.divider}\`,
          flexWrap: "wrap",
        })}
        variant="outlined"
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          color="secondary"
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <SvgIcon icon="format_align_left" />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <SvgIcon icon="format_align_center" />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <SvgIcon icon="format_align_right" />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <SvgIcon icon="format_align_justify" />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          color="warning"
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <SvgIcon icon="format_bold" />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <SvgIcon icon="format_italic" />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <SvgIcon icon="format_underlined" />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <SvgIcon icon="format_color_fill" />
            <SvgIcon icon="arrow_drop_down" />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
`