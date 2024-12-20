import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Box,
  Container,
} from "@basetoolkit/ui";

function ElevationScroll(props) {
  const { children, targetRef } = props;
  const trigger = useScrollTrigger({
    target: targetRef.current ? targetRef.current : undefined,
    disableHysteresis: true, // Disable any delay for triggering
    threshold: 0, // Ensure it triggers as soon as you scroll
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        color: trigger ? "secondary" : "primary",
      })
    : null;
}

ElevationScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const divRef = React.useRef(null);

  const preventWindowScroll = (event) => {
    if (event.target === divRef.current) {
      event.preventDefault();
    }
  };

  React.useEffect(() => {
    const targetDiv = divRef.current;
    if (targetDiv) {
      targetDiv.addEventListener("scroll", preventWindowScroll);
    }

    return () => {
      if (targetDiv) {
        targetDiv.removeEventListener("scroll", preventWindowScroll);
      }
    };
  }, []);
  return (
    <div ref={divRef} style={{ height: 300, overflowY: "auto" }}>
      <ElevationScroll {...props} targetRef={divRef}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to elevate App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </div>
  );
}
