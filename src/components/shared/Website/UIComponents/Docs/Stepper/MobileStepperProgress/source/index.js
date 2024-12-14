export const source = `
import * as React from 'react';
import { useTheme,MobileStepper,Button,SvgIcon } from '@basetoolkit/ui';

export default function ProgressMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <SvgIcon icon='keyboard_arrow_left' />
          ) : (
            <SvgIcon icon='keyboard_arrow_right' />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <SvgIcon icon='keyboard_arrow_right' />
          ) : (
            <SvgIcon icon='keyboard_arrow_left' />
          )}
          Back
        </Button>
      }
    />
  );
}
`;
