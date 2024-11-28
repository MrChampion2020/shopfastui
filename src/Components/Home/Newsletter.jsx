import React from "react";

const Newsletter = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row", // Default to row layout
    alignItems: "center",
    justifyContent: "space-around", // Space items evenly, reducing middle gap
    padding: "20px 40px", // Add padding to move items away from the edges
    backgroundImage: "url(/placeholder.svg?height=200&width=1200)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#041e42",
    gap: "20px", // Balanced spacing between text and form
    flexWrap: "wrap", // Allows wrapping for small screens
    width: "100%",
  };

  const responsiveContainer = {
    "@media (max-width: 768px)": {
      flexDirection: "column", // Switch to column layout for smaller screens
      padding: "20px",
      textAlign: "center", // Center text for smaller screens
    },
  };

  const textCenterStyle = {
    marginBottom: "1rem",
    flex: "1", // Equal space distribution
    minWidth: "300px", // Ensure minimum width for smaller screens
  };

  const titleStyle = {
    color: "#fff",
    fontWeight: 700,
    marginBottom: "0.5rem",
    fontSize: "1.5rem",
    textAlign: "center"
  };

  const descriptionStyle = {
    color: "#818ea0",
    fontWeight: 600,
    fontSize: "1rem",
    textAlign: "center"
  };

  const highlightStyle = {
    color: "#ffbd27",
  };

  const formStyle = {
    display: "flex",
    flex: "1", // Equal space distribution
    maxWidth: "600px",
    minWidth: "300px", // Ensure minimum width for smaller screens
    width: "70%",
    margin: "auto"
  };

  const inputStyle = {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
    borderRadius: "4px 0 0 4px",
    backgroundColor: "#fff",
  };

  const buttonStyle = {
    backgroundColor: "#088178",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "0 4px 4px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonHoverStyle = {
    backgroundColor: "#066e66",
  };

  return (
    <div style={{ ...containerStyle, ...responsiveContainer, marginTop: "5px" }}>
      <div style={textCenterStyle}>
        <h4 style={titleStyle}>Sign Up For Newsletters</h4>
        <p style={descriptionStyle}>
          Get E-mail updates about our latest shop and{" "}
          <span style={highlightStyle}>special offers</span>
        </p>
      </div>
      <form style={formStyle}>
        <input
          type="email"
          placeholder="Your email address"
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
