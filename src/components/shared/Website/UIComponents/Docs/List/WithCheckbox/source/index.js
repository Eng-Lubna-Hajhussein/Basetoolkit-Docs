export const source = `
import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  SvgIcon,
  alpha,
  useTheme,
} from "@basetoolkit/ui";

export default function CheckboxList() {
  const theme = useTheme();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: alpha(theme.palette.divider,.3) }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = \`checkbox-list-label-\${value}\`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <SvgIcon icon="comment" variant="filled" />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  onChange={handleToggle(value)}
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={\`Line item \${value + 1}\`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
`;
