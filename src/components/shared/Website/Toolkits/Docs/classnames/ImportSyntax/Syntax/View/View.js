import { Box, Typography } from "@basetoolkit/ui";

export default function ImportSyntax() {
  return (
    <Box width="100%" display="flex" justifyContent="flex-start">
      <Typography
        component="code"
        sx={{
          fontFamily: 'Consolas, "Courier New", monospace',
          fontSize: "1rem",
          backgroundColor: "#2E3440",
          padding: "10px",
          borderRadius: "4px",
          color: "#D8DEE9",
          width: "100%",
        }}
      >
        <span style={{ color: "#81A1C1" }}>import</span>{" "}
        <span style={{ color: "#88C0D0" }}>classnames</span>{" "}
        <span style={{ color: "#81A1C1" }}>from</span>{" "}
        <span style={{ color: "#A3BE8C" }}>"@basetoolkit/ui/classnames"</span>;
      </Typography>
    </Box>
  );
}
