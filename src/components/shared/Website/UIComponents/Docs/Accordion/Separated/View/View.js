import * as React from 'react';
import { Accordion,AccordionActions,AccordionSummary,AccordionDetails,Button,SvgIcon, Box } from '@basetoolkit/ui';

export default function AccordionUsage() {
  return (
    <div style={{width:"100%"}}>
      <Accordion connected={false}>
        <AccordionSummary
          expandIcon={<SvgIcon icon="expand_more" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion connected={false}>
        <AccordionSummary
          expandIcon={<SvgIcon icon="expand_more" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded connected={false}>
        <AccordionSummary
          expandIcon={<SvgIcon icon="expand_more" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
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
    </div>
  );
}
