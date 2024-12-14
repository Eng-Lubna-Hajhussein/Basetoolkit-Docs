import * as React from 'react';

import { Box,CircularProgress,Button,Fab,colors, SvgIcon } from '@basetoolkit/ui';
import { svgIconClasses } from '@basetoolkit/ui/classes';

export default function CircularIntegration() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef(undefined);
  const {green} = colors;

  const buttonSx = {
    ...(success && {
      bgcolor: green[500] +" !important",
      '&:hover': {
        bgcolor: green[700] +" !important",
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box position='relative' sx={{ m: 1,[`& .${svgIconClasses.root}`]:{fill:"common.white"} }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <SvgIcon icon='check' /> : <SvgIcon icon='save' />}
        </Fab>
        {loading && (
          <CircularProgress
            size={60}
            thickness={6}
            color={green[500]}
            
            style={{
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1 }} position='relative'>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          color={loading?"default":"primary"}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            color= {green[500]}
            style={{
              position: 'absolute',
              top: "50%",
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
}
