export const source = `
import * as React from "react";
import {
  List,
  ListItemText,
  ListItem,
  ListSubheader,
  useTheme,
  alpha,
} from "@basetoolkit/ui";

export default function PinnedSubheaderList() {
  const theme = useTheme();
  return (
    <List
    disablePadding
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "divider",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={\`section-\${sectionId}\`}>
          <ul>
            <ListSubheader bgcolor="divider">{\`I'm sticky \${sectionId}\`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={\`item-\${sectionId}-\${item}\`}>
                <ListItemText primary={\`Item \${item}\`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
`;
