import * as React from "react";
import {
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  cssInjection as styled,
  SvgIcon,
} from "@basetoolkit/ui";
import { accordionSummaryClasses } from "@basetoolkit/ui/classes";

const StyledAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const StyledAccordionSummary = styled((props) => (
  <AccordionSummary
    expandIcon={<SvgIcon icon="arrow_forward_ios" variant="sharp"  fontSize="0.9rem" />}
    {...props}
  />
))(({ theme, expanded }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",

  [`& .${accordionSummaryClasses.expandIcon}`]: {
    ...(expanded ? { transform: "rotate(90deg)" } : {}),
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    // Only the state of the clicked accordion is updated
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <StyledAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <StyledAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>Collapsible Group Item #1</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <StyledAccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>Collapsible Group Item #2</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <StyledAccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>Collapsible Group Item #3</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
    </div>
  );
}
