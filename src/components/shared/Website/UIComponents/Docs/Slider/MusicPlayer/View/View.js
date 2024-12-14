import * as React from "react";
import {
  cssInjection as styled,
  Box,
  Typography,
  Slider,
  IconButton,
  Stack,
  SvgIcon,
} from "@basetoolkit/ui";

const BackgroundOverlay = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  background: "linear-gradient(120deg, #1c1c1c 0%, #343434 100%)",
  transition: "all 0.5s ease",
  "&::before": {
    content: '""',
    width: "150%",
    height: "150%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background: "radial-gradient(circle, #ff0047 0%, rgba(255, 0, 71, 0) 60%)",
  },
});

const PlayerContainer = styled("div")(({ theme }) => ({
  padding: 4,
  borderRadius: 5,
  width: 450,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(255,255,255,0.85)",
  boxShadow: "0px 8px 30px rgba(0,0,0,0.2)",
  backdropFilter: "blur(20px)",
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(20,20,20,0.9)",
  }),
}));

const Thumbnail = styled("div")({
  width: "100%",
  height: 180,
  borderRadius: 3,
  overflow: "hidden",
  backgroundColor: "rgba(0,0,0,0.1)",
  "& > iframe": {
    width: "100%",
    height: "100%",
    border: "none",
  },
});

const SubText = styled(Typography)({
  fontSize: "0.7rem",
  opacity: 0.6,
  fontWeight: 500,
  letterSpacing: 0.5,
});

export default function YouTubePlayer() {
  const duration = 600; // seconds (10 minutes)
  const [position, setPosition] = React.useState(120);
  const [paused, setPaused] = React.useState(false);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative", p: 3 }}>
      <PlayerContainer>
      <Thumbnail>
  <iframe
    src="https://www.youtube.com/embed/SqcY0GlETPk"
    title="YouTube video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</Thumbnail>
        <Box sx={{ mt: 2 }}>
          <Typography noWrap variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Deep Dive into React Components
          </Typography>
          <Typography variant="caption" color="text.secondary">
            YouTube Channel: Learn with Code
          </Typography>
        </Box>
        <Slider
          aria-label="video-progress"
          size="small"
          value={position}
          min={0}
          step={1}
          color="red"
          thumbColor="white"
          max={duration}
          onChange={(_,value) => setPosition(value)}
         
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <SubText>{formatDuration(position)}</SubText>
          <SubText>-{formatDuration(duration - position)}</SubText>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            mt: 1,
            "& svg": {
              fill: "#1c1c1c",
            },
          }}
        >
          <IconButton aria-label="rewind 10 seconds">
            <SvgIcon icon="replay_10" variant="rounded" size="medium" />
          </IconButton>
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <SvgIcon icon="play_arrow" variant="rounded" fontSize="3rem" />
            ) : (
              <SvgIcon icon="pause" variant="rounded" fontSize="3rem" />
            )}
          </IconButton>
          <IconButton aria-label="forward 10 seconds">
            <SvgIcon icon="forward_10" variant="rounded" size="medium" />
          </IconButton>
        </Box>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            mt: 1,
            "& > svg": {
              fill: "rgba(28,28,28,0.4)",
            },
          }}
          alignItems="center"
        >
          <SvgIcon icon="volume_down" variant="rounded" />
          <Slider
            aria-label="Volume"
            defaultValue={50}
             color="red"
          thumbColor="white"
          />
          <SvgIcon icon="volume_up" variant="rounded" />
        </Stack>
      </PlayerContainer>
      <BackgroundOverlay />
    </Box>
  );
}
