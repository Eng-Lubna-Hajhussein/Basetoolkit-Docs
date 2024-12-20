import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Box,
  Container,
  Slide,
} from "@basetoolkit/ui";

function HideOnScroll(props) {
  const { children, targetRef } = props;

  const trigger = useScrollTrigger({
    target: targetRef.current ? targetRef.current : undefined,
    disableHysteresis: true, // Disable any delay for triggering
    threshold: 100, // Ensure it triggers as soon as you scroll
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  targetRef: PropTypes.object.isRequired,
};

export default function HideAppBar(props) {
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
      <HideOnScroll {...props} targetRef={divRef}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to hide App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
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
