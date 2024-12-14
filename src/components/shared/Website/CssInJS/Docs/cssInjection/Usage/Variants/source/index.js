export const source = `
import { cssInjection, Stack } from "@basetoolkit/ui";
import React from "react";

const BaseButton = cssInjection("button", {
  shouldForwardProp: (prop) =>
    !["variant", "color", "size", "title"].includes(prop),
})(({ size }) => ({
  padding:
    size === "small"
      ? "5px 10px"
      : size === "large"
      ? "15px 30px"
      : "10px 20px",
  border: "none",
  borderRadius: "4px",
  fontSize: size === "small" ? "14px" : size === "large" ? "18px" : "16px",
  cursor: "pointer",
  variants: [
    {
      props: { variant: "contained", color: "primary" },
      style: {
        backgroundColor: "#1E90FF",
        color: "white",
      },
      onClick:()=>{alert("some functionality for primary contained button")}
    },
    {
      props: { variant: "contained", color: "secondary" },
      style: {
        backgroundColor: "#DB1075",
        color: "white",
      },
    },
    {
      props: { variant: "outlined", color: "primary" },
      style: {
        border: "2px solid #1E90FF",
        color: "#1E90FF",
        backgroundColor:"white"
      },
    },
    {
      props: { title: "important" },
      style: {
        fontWeight: "bold",
        textTransform: "uppercase",
      },
    },
  ],
}));

export default function VariantsArray() {
  return (
    <Stack spacing={2}>
      <BaseButton
        variant="contained"
        color="primary"
        size="large"
        title="important"
      >
       Click Me
      </BaseButton>
      <BaseButton
        variant="contained"
        color="secondary"
        size="small"
      >
        Secondary Small
      </BaseButton>
      <BaseButton
        variant="outlined"
        color="primary"
        size="large"
        title="important"
      >
        Primary Outlined Important
      </BaseButton>
      <BaseButton
        variant="contained"
        color="secondary"
        size="large"
      >
        Secondary Large
      </BaseButton>
    </Stack>
  );
}
`;
