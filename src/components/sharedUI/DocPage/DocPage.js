import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Link,
  Typography,
  useCSSClass,
  useScrollTrigger,
  useTheme,
  useMediaQueryMatch,
} from "@basetoolkit/ui";
import CodeBox from "../CodeBox/CodeBox";
import coloris from "@basetoolkit/ui/coloris";
import InstallationBox from "../InstallationBox/InstallationBox";
import classnames from "@basetoolkit/ui/classnames";
import PropsApi from "../../shared/Website/UIComponents/Api/PropsApi/PropsApi";
import DocsLayout from "../../Layout/DocsLayout/DocsLayout";

function DocPage({ content, sections, title, description }) {
  const theme = useTheme();
  const blnSmallScreen = useMediaQueryMatch(
    theme.breakpoints.between("xs", "md")
  );
  const blnMidScreen = useMediaQueryMatch(
    theme.breakpoints.between("md", "lg")
  );
  const [loading, setLoading] = useState(true);
  const [scrollLoading, setScrollLoading] = useState(false);
  const contentRef = useRef(null);
  const [renderedSections, setRenderedSections] = useState(1);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => {
    if (contentRef.current) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (trigger && renderedSections < 2 && sections.length > 4) {
      setScrollLoading(true);
      setTimeout(() => {
        setRenderedSections((prevSections) => Math.min(prevSections + 1, 2));
        setScrollLoading(false);
      }, 1000);
    }
  }, [trigger]);

  const { link, section2Link } = useCSSClass({
    link: { color: "#000", "&:hover": { color: "primary" } },
    section2Link:
      renderedSections === 2
        ? {}
        : {
            opacity: 0.5,
            pointerEvents: "none",
          },
  });

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
              <Grid item xs={12}>
                <Typography variant="subtitle1">{description}</Typography>
              </Grid>

              {renderedSections >= 1 && (
                <div style={{ width: blnMidScreen ? "97%" : "100%" }}>
                  {sections
                    .slice(0, 4)
                    .map(
                      (
                        {
                          id,
                          title,
                          subtitle,
                          source,
                          view,
                          isApi,
                          componentProps,
                        },
                        index
                      ) => (
                        <Grid container item xs={12} key={index} id={id}>
                          <Grid item xs={12}>
                            <Typography
                              variant="subtitle1"
                              fontSize={isApi ? "1.1rem" : "1.45rem"}
                              fontWeight={800}
                              letterSpacing="-0.2px"
                            >
                              {title}
                            </Typography>
                          </Grid>
                          {subtitle && (
                            <Grid item xs={12}>
                              <Typography variant="subtitle2">
                                {subtitle}
                              </Typography>
                            </Grid>
                          )}
                          {!isApi && (
                            <Grid item xs={12} px={0}>
                              <CodeBox source={source} view={view} />
                            </Grid>
                          )}
                          {isApi && (
                            <>
                              <Grid item xs={12}>
                                <Divider
                                  style={{
                                    margin: `${theme.spacing(
                                      2
                                    )} 0px ${theme.spacing(2)} 0px`,
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <PropsApi componentProps={componentProps} />
                              </Grid>
                            </>
                          )}
                        </Grid>
                      )
                    )}
                </div>
              )}
              {scrollLoading && (
                <Box
                  display="flex"
                  height={"50vh"}
                  width={"100%"}
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgress color="divider" />
                </Box>
              )}
              {renderedSections >= 2 && (
                <div style={{ width: blnMidScreen ? "97%" : "100%" }}>
                  {sections
                    .slice(4)
                    .map(
                      (
                        {
                          id,
                          title,
                          subtitle,
                          source,
                          view,
                          isApi,
                          componentProps,
                        },
                        index
                      ) => (
                        <Grid container item xs={12} key={index} id={id}>
                          <Grid item xs={12}>
                            <Typography
                              variant="subtitle1"
                              fontSize={isApi ? "1.1rem" : "1.45rem"}
                              fontWeight={800}
                              letterSpacing="-0.2px"
                            >
                              {title}
                            </Typography>
                          </Grid>
                          {subtitle && (
                            <Grid item xs={12}>
                              <Typography variant="subtitle2">
                                {subtitle}
                              </Typography>
                            </Grid>
                          )}
                          {!isApi && (
                            <Grid item xs={12} px={0}>
                              <CodeBox source={source} view={view} />
                            </Grid>
                          )}
                          {isApi && (
                            <>
                              <Grid item xs={12}>
                                <Divider
                                  style={{
                                    margin: `${theme.spacing(
                                      2
                                    )} 0px ${theme.spacing(2)} 0px`,
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <PropsApi componentProps={componentProps} />
                              </Grid>
                            </>
                          )}
                        </Grid>
                      )
                    )}
                </div>
              )}
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
                    <Grid
                      item
                      xs={12}
                      container
                      mx={0}
                      px={0}
                      justifyContent="center"
                    >
                      <Grid container item xs={12} mx={0}>
                        <Grid item xs={12} mx={0}>
                          <Typography
                            variant="button"
                            {...(blnMidScreen && { fontSize: 12 })}
                          >
                            contents
                          </Typography>
                        </Grid>
                        <Grid item container xs={12} m={0} py={0}>
                          {content.map(({ label, href }, index) => (
                            <Grid item xs={12} key={index}>
                              <Link
                                className={
                                  index > 3
                                    ? classnames(link, section2Link)
                                    : link
                                }
                                underline="hover"
                                color="text"
                                variant="subtitle2"
                                href={href}
                                {...(blnMidScreen && { fontSize: 13 })}
                              >
                                {label}
                              </Link>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
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

export default React.memo(DocPage);
