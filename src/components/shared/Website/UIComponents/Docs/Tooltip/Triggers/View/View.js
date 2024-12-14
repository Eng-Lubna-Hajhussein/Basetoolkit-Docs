import * as React from 'react';
import { Grid, Button, Tooltip, ClickAwayListener } from '@basetoolkit/ui';

export default function TriggersTooltips() {
  const [open, setOpen] = React.useState({
    click: false,
  });

  const handleTooltipClose = () => {
    setOpen({ click: false });
  };

  const handleTooltipOpen = () => {
    setOpen({ click: true });
  };

  return (
    <div>
      <Grid container sx={{ justifyContent: 'center' }} spacing={2}>
        <Grid item>
          <Tooltip title="Add">
            <Button>Hover or touch</Button>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip disableHoverListener title="Add">
            <Button>Focus or touch</Button>
          </Tooltip>
        </Grid>

        <Grid item>
          <Tooltip disableHoverListener title="Add">
            <Button>Focus</Button>
          </Tooltip>
        </Grid>

        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open.click}
                disableHoverListener
                title="Add"
              >
                <Button onClick={handleTooltipOpen}>Click</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}
