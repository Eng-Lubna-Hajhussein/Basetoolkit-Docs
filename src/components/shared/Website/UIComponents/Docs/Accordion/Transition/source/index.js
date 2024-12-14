export const source = `
import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Fade,
  SvgIcon,
} from "@basetoolkit/ui";

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div style={{ width: "100%" }}>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        TransitionComponent={Fade}
        TransitionProps={{ timeout: { enter: 400, exit: 400 } }}
        connected={false}
      >
        <AccordionSummary
          expandIcon={<SvgIcon icon="expand_more" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Custom transition using Fade</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion connected={false}>
        <AccordionSummary
          expandIcon={<SvgIcon icon="expand_more" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Default transition using Collapse</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
`;
