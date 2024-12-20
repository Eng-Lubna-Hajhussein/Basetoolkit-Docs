export const source = `
import * as React from "react";
import {
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Avatar,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  ListItem,
  List,
  Box,
  SvgIcon,
  cssInjection as styled,
  useTheme,
} from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const theme = useTheme();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: 752,
        bgcolor: coloris(theme.palette.divider).alpha(0.2).hex(),
        p: 2,
      }}
    >
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Text only
          </Typography>
          <Demo>
            <List dense={dense} bgcolor="background.paper.light">
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                    secondaryTypographyProps={{
                      color: "default",
                      variant: "subtitle2",
                    }}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense} bgcolor="background.paper.light">
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <SvgIcon icon="folder" variant="filled" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                    secondaryTypographyProps={{
                      color: "default",
                      variant: "subtitle2",
                    }}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text
          </Typography>
          <Demo>
            <List dense={dense} bgcolor="background.paper.light">
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SvgIcon icon="folder" variant="filled" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                    secondaryTypographyProps={{
                      color: "default",
                      variant: "subtitle2",
                    }}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List dense={dense} bgcolor="background.paper.light">
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <SvgIcon icon="delete" variant="filled" />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <SvgIcon icon="folder" variant="filled" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                    secondaryTypographyProps={{
                      color: "default",
                      variant: "subtitle2",
                    }}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
`;
