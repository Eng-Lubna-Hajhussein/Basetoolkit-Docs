import * as React from "react";
import {
  SvgIcon,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
  Typography,
  Box,
  useTheme,
} from "@basetoolkit/ui";

export default function CustomizedTimeline() {
  const theme = useTheme();
  return (
      <Timeline
        position="alternate"
        sx={{
          "& svg:not(.outlined-svg)": { fill: "#fff" },
          ".outlined-svg": { fill: "#000" },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 2 }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <SvgIcon icon="fastfood" variant="filled" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            style={{
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
            }}
          >
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 2 }}
            variant="body2"
            color="text.secondary"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SvgIcon icon="laptop_mac" variant="filled" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent   style={{
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
            }}>
            <Typography variant="h6" component="span">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SvgIcon icon="hotel" className="outlined-svg" variant="filled" />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent   style={{
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
            }}>
            <Typography variant="h6" component="span">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <SvgIcon icon="repeat" variant="filled" />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent   style={{
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
            }}>
            <Typography variant="h6" component="span">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
  );
}
