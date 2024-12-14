export const source = `
import * as React from "react";
import {Box, FormControlLabel, Paper, Stack, cssInjection as styled, Switch } from "@basetoolkit/ui";

const Item = styled((props) => <Paper bgcolor="divider" p={2} {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    flexGrow:1,
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027 !important",
    }),
  })
);

export default function FlexboxGapStack() {
  const [flexGap, setFlexGap] = React.useState(true);

  const handleFlexGapChange = () => {
    setFlexGap(!flexGap);
  };
  return (
    <Box sx={{ width: 200 }}>
      <FormControlLabel
          sx={{ color: "text.primary" ,pb:2}}
          control={
            <Switch checked={flexGap} onChange={handleFlexGapChange} />
          }
          label="set flex gap"
        />
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap={flexGap}
        sx={{ flexWrap: 'wrap' }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Long content</Item>
      </Stack>
    </Box>
  );
}
`;
