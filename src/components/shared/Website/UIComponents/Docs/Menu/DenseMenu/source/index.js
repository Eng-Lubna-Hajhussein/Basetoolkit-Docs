export const source = `
import * as React from "react";
import {
  Paper,
  Divider,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@basetoolkit/ui";
import { SvgIcon } from "@basetoolkit/ui";

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }} variant="outlined">
      <MenuList dense>
        <MenuItem>
          <ListItemText inset typography="subtitle2">Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset typography="subtitle2">1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset typography="subtitle2">Double</ListItemText>
        </MenuItem>
        <MenuItem>
        <Stack direction={"row"} alignItems="center" spacing={0}>
          <ListItemIcon>
            <SvgIcon icon="check" fontSize={20} />
          </ListItemIcon>
          <ListItemText  typography="subtitle2">
          Custom: 1.2
          </ListItemText>
        </Stack>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText typography="subtitle2">Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText typography="subtitle2">Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText typography="subtitle2">Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
`;
