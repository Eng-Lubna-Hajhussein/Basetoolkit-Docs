import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  SvgIcon,
  Box,
} from "@basetoolkit/ui";

export default function AccordionExpandDefault() {
  return (
    <Box>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<SvgIcon icon="expand_more" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SvgIcon icon="expand_more" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
