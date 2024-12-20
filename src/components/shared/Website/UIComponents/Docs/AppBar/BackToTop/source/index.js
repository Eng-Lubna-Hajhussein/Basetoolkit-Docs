export const source = `
import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Box,
  Container,
  Fab,
  Fade,
  SvgIcon,
} from "@basetoolkit/ui";

function ScrollTop(props) {
  const { children, targetRef } = props;
  const trigger = useScrollTrigger({
    target: targetRef.current ? targetRef.current : undefined,
    disableHysteresis: true, // Disable any delay for triggering
    threshold: 0, // Ensure it triggers as soon as you scroll
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "sticky",
          bottom: 16,
          right: 16,
          borderRadius: "50%",
          marginLeft: "auto",
          width: "fit-content",
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

export default function BackToTop(props) {
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
    <div
      ref={divRef}
      style={{ height: 300, overflowY: "auto", position: "relative" }}
    >
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to see button
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar
        id="back-to-top-anchor"
        style={{ height: 0, maxHeight: 0, minHeight: 0 }}
      />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => \`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\`
            )
            .join("\n")}
        </Box>
      </Container>
      <ScrollTop {...props} targetRef={divRef}>
        <Fab size="small" aria-label="scroll back to top" color="divider">
          <SvgIcon icon="keyboard_arrow_up" color="#000" />
        </Fab>
      </ScrollTop>
    </div>
  );
}
`;
