import * as React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Button,
  SvgIcon,
  Box,
  Stack,
} from "@basetoolkit/ui";

export default function AccordionVariants() {
  return (
    <Stack spacing={2} style={{ width: "100%" }}>
      <Box>
        <Accordion variant="elevation">
          <AccordionSummary
            expandIcon={<SvgIcon icon="expand_more" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Elevation Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion variant="elevation">
          <AccordionSummary
            expandIcon={<SvgIcon icon="expand_more" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Elevation Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded variant="elevation">
          <AccordionSummary
            expandIcon={<SvgIcon icon="expand_more" />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Elevation Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </Box>
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<SvgIcon icon="expand_more" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Outlined Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<SvgIcon icon="expand_more" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Outlined Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<SvgIcon icon="expand_more" />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Outlined Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </Box>
    </Stack>
  );
}
