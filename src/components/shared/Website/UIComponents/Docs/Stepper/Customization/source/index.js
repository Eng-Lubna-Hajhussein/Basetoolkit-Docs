export const source = `
import * as React from "react";
import PropTypes from "prop-types";
import {
  cssInjection as styled,
  Stack,
  Stepper,
  Step,
  StepLabel,
  SvgIcon,
  StepConnector,
  useCSSClass,
} from "@basetoolkit/ui";
import { typographyClasses } from "@basetoolkit/ui/classes";

const QontoConnector = styled(StepConnector)({
  top: 10,
  left: "calc(-50% + 16px)",
  right: "calc(50% + 16px)",
  bgcolor: "#784af4 !important",
  mx: 1,
});

const QontoStepIconRoot = styled("div")(({ theme }) => ({
  color: "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  "& .QontoStepIcon-completedIcon": {
    fill: "#784af4",
    zIndex: 1,
    height: 22,
    width: 22,
    mr: 1,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
    mr: 1,
  },
  ...theme.applyStyles("dark", {
    color: theme.palette.grey[700],
  }),
  variants: [
    {
      props: { active: true },
      style: {
        color: "#784af4",
      },
    },
  ],
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot active={active} className={className}>
      {completed ? (
        <SvgIcon icon="check" className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  top: 22,
  mx: 1,
  backgroundImage:
    "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%) !important",
}));

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  mr: 1,
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: { active: true },
      style: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
    },
    {
      props: { completed: true },
      style: {
        backgroundImage:
          "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, index } = props;

  console.log(props);

  const icons = {
    0: <SvgIcon icon="settings" color="white" variant="filled" />,
    1: <SvgIcon icon="group_add" color="white" variant="filled" />,
    2: <SvgIcon icon="video_label" color="white" variant="filled" />,
  };

  return (
    <ColorlibStepIconRoot
      // ownerState={{ completed, active }}
      completed={completed}
      active={active}
      className={className}
    >
      {icons[String(index)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function CustomizedSteppers() {
  const  classes  = useCSSClass({
    labelColor: {
      [\`&.completed, &.active\`]: {
        [\`& .\${typographyClasses.root}\`]: {
          color: "#000 !important",
        },
      },
    },
  });
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper activeStep={0} connector={<QontoConnector />}>
        {steps.map((label, index) => (
          <Step
            key={label}
            StepIconComponent={QontoStepIcon}
            completed={index === 0}
          >
            <StepLabel  className={classes?.labelColor}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper activeStep={0} connector={<ColorlibConnector />}>
        {steps.map((label, index) => (
          <Step
            key={label}
            StepIconComponent={ColorlibStepIcon}
            active={index === 0}
          >
            <StepLabel
              className={classes?.labelColor}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
`;
