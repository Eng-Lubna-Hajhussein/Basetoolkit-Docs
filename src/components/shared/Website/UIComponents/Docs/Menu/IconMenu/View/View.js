import * as React from "react";
import {
  Divider,
  Paper,
  MenuList,
  ListItemText,
  ListItemIcon,
  Typography,
  SvgIcon,
  MenuItem,
  Grid,
  Stack,
} from "@basetoolkit/ui";

export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: "100%" }} variant="outlined">
      <MenuList>
        {[
          { icon: "content_cut", text: "Cut", shortcut: "⌘X" },
          { icon: "content_copy", text: "Copy", shortcut: "⌘C" },
          { icon: "content_paste", text: "Paste", shortcut: "⌘V" },
        ].map((item, index) => (
          <MenuItem key={index}>
            <Grid container>
              <Grid item xs={6} container alignItems="center" p={0}>
                <Grid item p={0}>
                  <ListItemIcon>
                    <SvgIcon icon={item.icon} size="small" />
                  </ListItemIcon>
                </Grid>
                <Grid item p={0}>
                  <ListItemText>{item.text}</ListItemText>
                </Grid>
              </Grid>
              {item.shortcut && (
                <Grid item xs={6} container justifyContent="end" p={0}>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.shortcut}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem>
          <Stack direction={"row"} alignItems="center">
            <ListItemIcon>
              <SvgIcon icon="cloud" variant="filled" />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </Stack>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
