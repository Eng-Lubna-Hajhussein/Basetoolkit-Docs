import {
  Button,
  Collapse,
  createTheme,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  SvgIcon,
  ThemeProvider,
  Tooltip,
  useTheme,
} from "@basetoolkit/ui";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { a11yLight as dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import coloris from "@basetoolkit/ui/coloris";

function CodeBox({ view: ViewComponent, source }) {
  const [expanded, setExpanded] = React.useState(true);
  const [srcCopied, setSrcCopied] = React.useState(false);
  const theme = useTheme();

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(source)
      .then(() => {
        setSrcCopied(true);
        setTimeout(() => {
          setSrcCopied(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Paper variant="outlined" p={0}>
        <Grid container justifyContent="center">
          <Grid item xs={12} />
          <Grid item xs={12} container justifyContent="center" zIndex={1}>
            <ViewComponent />
          </Grid>
          <Grid item xs={12} />
          <Divider />
          <Grid
            item
            xs={12}
            container
            justifyContent="end"
            alignContent="center"
          >
            <Stack direction={"row"} spacing={2} alignItems="center">
              <Button
                variant="outlined"
                size="small"
                color={"default"}
                onClick={handleToggleExpand}
                sx={{
                  height: "25px",
                  padding: "5px !important",
                  textTransform: "capitalize !important",
                  borderColor: `${theme.palette.divider} !important`,
                  "&:hover": {
                    bgcolor:
                      coloris(theme.palette.primary.main)
                        .brightness(5)
                        .alpha(0.5)
                        .hex() + " !important",
                  },
                  "&:focus": {
                    border: `2px solid ${theme.palette.primary.main} !important`,
                  },
                }}
              >
                {expanded ? "collapse code" : "expand code"}
              </Button>
              <Tooltip title="Copy the source" arrow>
                <IconButton
                  onClick={handleCopyClick}
                  color={theme.palette.primary.main}
                >
                  <SvgIcon
                    icon="file_copy"
                    variant={srcCopied ? "filled" : "outlined"}
                    size="small"
                  />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid>
          <Collapse
            in={expanded}
            style={{ width: "100%" }}
            timeout="auto"
            unmountOnExit
          >
            <SyntaxHighlighter
              wrapLongLines
              wrapLines
              useInlineStyles
              customStyle={{
                background: coloris(theme.palette.primary.main)
                  .alpha(0.11)
                  .hex(),
                margin: 0,
                maxHeight: "40vh",
                overflowY: "auto",
                width: "100%",
                boxSizing: "border-box",
              }}
              language="javascript"
              style={dark}
            >
              {source}
            </SyntaxHighlighter>
          </Collapse>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default CodeBox;
