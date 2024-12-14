import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Checkbox,
  Avatar,
  useTheme,
  alpha,
} from "@basetoolkit/ui";

const avatarSrcEnum = [
  "https://tse4.mm.bing.net/th?id=OIP.IrJSe207eQF64kILfjypIwHaHa&pid=Api&P=0&h=220",
  "https://tse4.mm.bing.net/th?id=OIP.0p9Uc6Q1ZN1cyUfReUTOFAHaHa&pid=Api&P=0&h=220",
  "https://tse3.mm.bing.net/th?id=OIP.XjvTFFI032NhXwhUTp7QUAHaHa&pid=Api&P=0&h=220",
  "https://tse3.mm.bing.net/th?id=OIP.HsKmJ4YBxPLOor-msjRyOAHaHa&pid=Api&P=0&h=220",
];

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);

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
  const theme = useTheme();

  return (
    <List
      dense
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: alpha(theme.palette.divider, 0.3),
      }}
    >
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.includes(value)}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={avatarSrcEnum[value]}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
