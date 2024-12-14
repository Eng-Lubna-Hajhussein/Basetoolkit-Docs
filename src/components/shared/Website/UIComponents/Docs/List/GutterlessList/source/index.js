export const source = `
import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  SvgIcon,
} from "@basetoolkit/ui";

export default function GutterlessList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper.light" }}>
      {[1, 2, 3].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <SvgIcon icon="comment" variant="filled" />
            </IconButton>
          }
        >
          <ListItemText primary={\`Line item \${value}\`} />
        </ListItem>
      ))}
    </List>
  );
}
`;
