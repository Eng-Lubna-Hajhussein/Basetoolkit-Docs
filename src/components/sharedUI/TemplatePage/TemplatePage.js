import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  useTheme,
  useMediaQueryMatch,
  Card,
  CardMedia,
  CardActions,
  Button,
  SvgIcon,
} from "@basetoolkit/ui";
import coloris from "@basetoolkit/ui/coloris";
import InstallationBox from "../InstallationBox/InstallationBox";
import DocsLayout from "../../Layout/DocsLayout/DocsLayout";

function TemplatePage({ title, description, demo, srcCode, livePreview }) {
  const theme = useTheme();
  const blnSmallScreen = useMediaQueryMatch(
    theme.breakpoints.between("xs", "md")
  );
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setLoading(false);
    }
  }, []);

  return (
    <DocsLayout>
      <div ref={contentRef}>
        {loading ? (
          <Box
            display="flex"
            height={"80vh"}
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress color="divider" />
          </Box>
        ) : (
          <Grid container>
            <Grid item container sm={12} md={9} xs={12} lg={9}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  fontSize={"2.25rem"}
                  fontWeight={600}
                  letterSpacing="-0.2px"
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={12} container justifyContent="center">
                <Card style={{ width: "100%" }}>
                  <CardMedia
                    component="video"
                    src={demo}
                    controls
                    sx={{ height: 300 }}
                  />
                  <CardActions sx={{ py: 1 }}>
                    <Grid container width={"100%"}>
                      <Grid item xs={6} container justifyContent="start">
                        <Button
                          size="small"
                          endIcon={
                            <SvgIcon
                              color="primary"
                              fontSize={20}
                              icon="code"
                            />
                          }
                          href={srcCode}
                          target="_blank"
                        >
                          Src Code
                        </Button>
                      </Grid>
                      <Grid item xs={6} container justifyContent="end">
                        <Button
                          size="small"
                          endIcon={
                            <SvgIcon
                              color="primary"
                              fontSize={20}
                              icon="visibility"
                            />
                          }
                          href={livePreview}
                          target="_blank"
                        >
                          Live Preview
                        </Button>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">{description}</Typography>
              </Grid>
            </Grid>
            {!blnSmallScreen && (
              <Grid
                item
                container
                lg={3}
                md={3}
                alignContent="start"
                justifyContent="center"
                style={{ position: "relative", overflow: "visible" }}
              >
                <Box position="fixed">
                  <Box
                    sx={(t) => ({
                      maxHeight: "86vh",
                      overflowY: "auto",
                      direction: "rtl",
                      "& > *": {
                        direction: "ltr",
                      },
                      "&::-webkit-scrollbar": {
                        width: "4px",
                      },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor: coloris(t.palette.divider)
                          .brightness(1.5)
                          .hex(),
                        marginTop: 1,
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "divider",
                        borderRadius: "4px",
                      },
                      "&::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "#555",
                      },
                    })}
                  >
                    <Grid item xs={12} container justifyContent="center" my={0}>
                      <InstallationBox />
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        )}
      </div>
    </DocsLayout>
  );
}

export default React.memo(TemplatePage);
