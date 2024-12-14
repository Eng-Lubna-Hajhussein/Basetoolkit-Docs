export const source = `
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

const WallPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&::before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
  },
  "&::after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "-30%",
    background:
      "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
    transform: "rotate(30deg)",
  },
});

const Widget = styled("div")(({ theme }) => ({
  padding: 4,
  borderRadius: 5,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(0,0,0,0.6)",
  }),
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return \`\${minute}:\${secondLeft < 10 ? \`0\${secondLeft}\` : secondLeft}\`;
  }
  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative", p: 3 }}>
      <Widget>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src="https://tse1.mm.bing.net/th?id=OIP.uPH2-PqCGa0XKb7XR44X0AHaJ4&pid=Api&P=0&h=220"
            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", fontWeight: 500 }}
            >
              Jun Pulse
            </Typography>
            <Typography noWrap>
              <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
            </Typography>
            <Typography noWrap sx={{ letterSpacing: -0.25 }}>
              Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
            </Typography>
          </Box>
        </Box>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          color="common.black"
          thumbColor="common.black"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: -1,
            "& svg": {
              fill: "#000",
              ...theme.applyStyles("dark", {
                fill: "#fff",
              }),
            },
          })}
        >
          <IconButton aria-label="previous song">
            <SvgIcon icon="fast_rewind" variant="rounded" size="large" />
          </IconButton>
          <IconButton
            aria-label={paused ? "play" : "pause"}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <SvgIcon icon="play_arrow" variant="rounded" fontSize={"3rem"} />
            ) : (
              <SvgIcon icon="pause" variant="rounded" fontSize={"3rem"} />
            )}
          </IconButton>
          <IconButton aria-label="next song">
            <SvgIcon icon="fast_forward" variant="rounded" size="large" />
          </IconButton>
        </Box>
        <Stack
          spacing={2}
          direction="row"
          sx={(theme) => ({
            mb: 1,
            px: 1,
            "& > svg": {
              fill: "rgba(0,0,0,0.4)",
              ...theme.applyStyles("dark", {
                fill: "rgba(255,255,255,0.4)",
              }),
            },
          })}
          alignItems="center"
        >
          <SvgIcon icon="volume_down" variant="rounded" />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            color="common.black"
            thumbColor="common.white"
          />
          <SvgIcon icon="volume_up" variant="rounded" />
        </Stack>
      </Widget>
      <WallPaper />
    </Box>
  );
}
`;
