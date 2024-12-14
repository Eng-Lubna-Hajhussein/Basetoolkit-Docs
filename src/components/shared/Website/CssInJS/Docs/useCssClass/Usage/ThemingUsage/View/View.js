import React from "react";
import { useCSSClass } from "@basetoolkit/ui";

const ThemedNestedStyles = () => {
  const classes = useCSSClass((theme) => ({
    card: {
      backgroundColor: theme.palette.background.paper,
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      margin: "20px auto",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
      },
      "& h1": {
        color: theme.palette.primary.main,
        margin: "0 0 15px 0",
        fontSize: "24px",
      },
      "& p": {
        color: theme.palette.text.secondary,
        fontSize: "16px",
        lineHeight: "1.6",
        marginBottom: "20px",
      },
      "& button": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          transform: "translateY(-3px)",
        },
        "&:active": {
          backgroundColor: theme.palette.primary.darker,
          transform: "translateY(0)",
        },
      },
    },
  }));

  return (
    <div className={classes.card}>
      <h1>Themed Card</h1>
      <p>
        This is a paragraph with themed colors, nested styles, and additional
        styling. The card has a hover effect to lift up slightly for a modern
        interactive feel.
      </p>
      <button>Learn More</button>
    </div>
  );
};

export default ThemedNestedStyles;
