export const source = `
import { cssInjection, keyframes } from "@basetoolkit/ui";
import React, { useState } from "react";

const rotate = keyframes\`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
\`;

const Card = cssInjection("div", {
  shouldForwardProp: (prop) => !["variant", "elevated"].includes(prop),
})(({ theme, variant, elevated }) => ({
  backgroundColor: variant === "primary" ? "#3498db" : "#e74c3c",
  color: "#fff",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: elevated ? "0 8px 20px rgba(0, 0, 0, 0.2)" : "none",
  overflow: "hidden",
  position: "relative",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-50px",
    right: "-50px",
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    zIndex: 1,
    animation: \`\${rotate} 8s infinite linear\`,
  },
  "& .content": {
    position: "relative",
    zIndex: 2,
  },
  "@media (max-width: 768px)": {
    padding: "15px",
  },
  "@media (max-width: 480px)": {
    padding: "10px",
  },
}));

const CardButton = cssInjection("button")(({ variant, disabled }) => ({
  backgroundColor: variant === "primary" ? "#2ecc71" : "#f39c12",
  color: disabled ? "gray" : "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: disabled ? "not-allowed" : "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: disabled
      ? "#bdc3c7"
      : variant === "primary"
      ? "#27ae60"
      : "#e67e22",
  },
  "@media (max-width: 600px)": {
    width: "100%",
  },
}));

const ComplexCardExample = () => {
  const [elevated, setElevated] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <Card
        variant="primary"
        elevated={elevated}
        onClick={() => setElevated(!elevated)}
      >
        <div className="content">
          <h2>Primary Variant</h2>
          <p>
            This card uses the primary variant with animations, pseudo-elements,
            and responsive design.
          </p>
          <CardButton
            variant="primary"
            disabled={disabled}
            onClick={() => setDisabled(!disabled)}
          >
            {disabled ? "Disabled" : "Click Me"}
          </CardButton>
        </div>
      </Card>

      <Card variant="secondary" elevated={!elevated}>
        <div className="content">
          <h2>Secondary Variant</h2>
          <p>
            This card uses the secondary variant with dynamic state, hover
            effects, and media queries.
          </p>
          <CardButton
            variant="secondary"
            disabled={disabled}
            onClick={() => setDisabled(!disabled)}
          >
            {disabled ? "Disabled" : "Click Me"}
          </CardButton>
        </div>
      </Card>
    </div>
  );
};

export default ComplexCardExample;
`;
