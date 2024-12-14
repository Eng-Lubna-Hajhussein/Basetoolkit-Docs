import * as React from "react";
import {
  useTheme,
  Divider,
  IconButton,
  SvgIcon,
  Grid,
  Button,
  Paper,
  Rating,
  Snackbar,
  useMediaQueryMatch
} from "@basetoolkit/ui";

function InstallationBox() {
  const theme = useTheme();
  const blnMidScreen = useMediaQueryMatch(
    theme.breakpoints.between("md", "lg")
  );
  const installationText = "npm i @basetoolkit/ui";

  const [sOpen, setSOpen] = React.useState(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(installationText);
      setSOpen(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="default"
        onClick={handleClose}
      >
        <SvgIcon icon="close" color="common.white" fontSize={20} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Paper
        variant="outlined"
        my={0}
        width={blnMidScreen?200:250}
      >
        <Grid container justifyContent="center">
          <Button
            onClick={copyText}
            color="black"
            component={"div"}
            fullWidth
            style={{
              textTransform: "initial",
              borderRadius: 0,
              fontSize:blnMidScreen?13: 14,
            }}
            endIcon={
              <IconButton>
                <SvgIcon
                  icon="file_copy"
                  variant={sOpen ? "filled" : "outlined"}
                  size="small"
                />
              </IconButton>
            }
            startIcon={
              <IconButton>
                <SvgIcon icon="chevron_right" size="small" />
              </IconButton>
            }
          >
            npm i @basetoolkit/ui
          </Button>
          <Divider />
          <Rating
            icon="favorite"
            filledColor="secondary"
            // size="small"
            emptyIcon={<SvgIcon variant="outlined" icon="favorite_border" />}
            precision={0.5}
          />
        </Grid>
      </Paper>
      <Snackbar
        open={sOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        message="Installation Text Is Copied"
        action={action}
      />
    </React.Fragment>
  );
}

export default InstallationBox;
