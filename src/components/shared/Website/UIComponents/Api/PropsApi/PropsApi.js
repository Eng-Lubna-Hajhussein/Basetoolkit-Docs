import * as React from "react";
import {
  cssInjection as styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  SvgIcon,
  Chip,
  Stack,
  useTheme,
  useCSSClass,
} from "@basetoolkit/ui";
import {
  accordionSummaryClasses,
  chipClasses,
} from "@basetoolkit/ui/classes";
import coloris from "@basetoolkit/ui/coloris";

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
    expandIcon={
      <SvgIcon icon="arrow_forward_ios" variant="sharp" fontSize="0.9rem" />
    }
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

export default function PropsApi({ componentProps }) {
  const theme = useTheme();

  const { chip } = useCSSClass({
    chip: {
      [`& .${chipClasses.label}`]: {
        textTransform: "lowercase !important",
      },
      borderRadius: "5px !important",
    },
  });
  return (
    <div style={{ maxHeight: "100vh", overflowY: "auto",boxSizing:"border-box",overflowX:"hidden" }}>
      {componentProps.map(({ prop, type, description }, key) => (
        <StyledAccordion
          key={prop}
          expanded={componentProps.length >= 10 ? key <= 2 : key <= 1}
        >
          <StyledAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Stack direction={"row"} spacing={1} alignItems="center">
              <Typography>{prop}</Typography>
              {type.map((propType) => (
                <Chip
                  key={propType}
                  className={chip}
                  label={propType}
                  size="small"
                  variant="outlined"
                  color={coloris(theme.palette.default.main).alpha(".5").hex()}
                />
              ))}
            </Stack>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <Typography>{description}</Typography>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </div>
  );
}
