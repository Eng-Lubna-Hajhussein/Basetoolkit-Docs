import React from "react";
import { useCSSClass } from "@basetoolkit/ui";

const ResponsivePseudoClasses = () => {
  const classes = useCSSClass({
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: "40px",
      backgroundColor: "#f7f7f7",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      width: "calc(40% - 20px)",
      margin: "10px",
      textAlign: "center",
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
      },
      "& img": {
        width: "100%",
        borderRadius: "10px 10px 0 0",
      },
      "& h3": {
        margin: "15px 0 10px 0",
        color: "#333",
        fontSize: "18px",
      },
      "& p": {
        color: "#666",
        fontSize: "14px",
      },
      "@media (max-width: 1024px)": {
        width: "calc(50% - 20px)", // Adjust to 50% width on medium screens
      },
      "@media (max-width: 768px)": {
        width: "100%", // Full width on smaller screens
      },
    },
    button: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#007bff",
      color: "white",
      padding: "12px 24px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.3s ease",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      marginTop: "20px",
      "&:hover": {
        backgroundColor: "#0056b3",
        transform: "translateY(-2px)",
      },
      "&:active": {
        backgroundColor: "#003d80",
        transform: "translateY(0)",
      },
      "& .icon": {
        marginRight: "10px",
        transition: "transform 0.3s ease",
      },
      "&:hover .icon": {
        transform: "rotate(20deg)",
      },
    },
    label: {
      fontSize: "16px",
      fontWeight: "bold",
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
    },
  });

  return (
    <div className={classes.container}>
      {/* Card 1 */}
      <div className={classes.card}>
        <img
          src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
          alt="Image 1"
        />
        <h3>Card Title 1</h3>
        <p>Some descriptive text for this card goes here.</p>
        <button className={classes.button}>
          <span className="icon" role="img" aria-label="star">
            ⭐
          </span>
          <span className={classes.label}>Action Button</span>
        </button>
      </div>

      {/* Card 2 */}
      <div className={classes.card}>
        <img
          src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
          alt="Image 2"
        />
        <h3>Card Title 2</h3>
        <p>Some descriptive text for this card goes here.</p>
        <button className={classes.button}>
          <span className="icon" role="img" aria-label="rocket">
            🚀
          </span>
          <span className={classes.label}>Learn More</span>
        </button>
      </div>

      {/* Card 3 */}
      <div className={classes.card}>
        <img
          src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
          alt="Image 3"
        />
        <h3>Card Title 3</h3>
        <p>A final bit of text for this last card in the group.</p>
        <button className={classes.button}>
          <span className="icon" role="img" aria-label="lightbulb">
            💡
          </span>
          <span className={classes.label}>Get Started</span>
        </button>
      </div>
      
      {/* Card 4 */}
      <div className={classes.card}>
        <img
          src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
          alt="Image 4"
        />
        <h3>Card Title 4</h3>
        <p>A final bit of text for this last card in the group.</p>
        <button className={classes.button}>
          <span className="icon" role="img" aria-label="lightbulb">
            💡
          </span>
          <span className={classes.label}>Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default ResponsivePseudoClasses;
