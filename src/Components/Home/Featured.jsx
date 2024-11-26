


// import React from "react";
// import f1 from "../../assets/img/features/f1.png";

// const Featured = () => {
//   const features = [
//     { id: 1, imgSrc: f1, text: "Free Shipping", style: { backgroundColor: "#FFDEAD", } },
//     { id: 2, imgSrc: "img/features/f2.png", text: "Fast Delivery", style: { backgroundColor: "blue" } },
//     { id: 3, imgSrc: "img/features/f3.png", text: "Free Shipping", style: { backgroundColor: "orange" } },
//     { id: 4, imgSrc: "img/features/f4.png", text: "Money Saving", style: { backgroundColor: "red" } },
//     { id: 5, imgSrc: "img/features/f5.png", text: "Free Shipping", style: { backgroundColor: "purple" } },
//     { id: 6, imgSrc: "img/features/f6.png", text: "Free Shipping", style: { backgroundColor: "teal" } },
//   ];

//   const sectionStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Responsive grid
//     gap: "20px",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "20px",
//     backgroundColor: "#f9f9f9",
//     width: "90%",
//     margin: "auto"
//   };

//   const baseBoxStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//     padding: "10px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     color: "#006400", // Text color for readability
//   };

//   const imgStyle = {
//     width: "80px",
//     height: "80px",
//     marginBottom: "10px",
//   };

//   const textStyle = {
//     fontSize: "16px",
//     fontWeight: "600",
//   };

//   return (
//     <section id="feature" style={sectionStyle}>
//       {features.map((feature) => (
//         <div
//           key={feature.id}
//           style={{
//             ...baseBoxStyle,
//             ...feature.style, // Merge unique background styles for each feature
//           }}
//         >
//           <img src={feature.imgSrc} alt={feature.text} style={imgStyle} />
//           <h6 style={textStyle}>{feature.text}</h6>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Featured;



import React, { useState } from "react";
import f1 from "../../assets/img/features/f1.png";
import f2 from "../../assets/img/features/f2.png";
import f3 from "../../assets/img/features/f3.png";
import f4 from "../../assets/img/features/f4.png";
import f5 from "../../assets/img/features/f5.png";
import f6 from "../../assets/img/features/f6.png";



const Featured = () => {
  const features = [
    { id: 1, imgSrc: f1, text: "Free Shipping", style: { backgroundColor: "#FFDEAD" } },
    { id: 2, imgSrc: f2, text: "Fast Delivery", style: { backgroundColor: "#98FB98" } },
    { id: 3, imgSrc: f3, text: "Free Shipping", style: { backgroundColor: "#AFEEEE" } },
    { id: 4, imgSrc: f4, text: "Money Saving", style: { backgroundColor: "#B0C4DE" } },
    { id: 5, imgSrc: f5, text: "Free Shipping", style: { backgroundColor: "#FAF0E6" } },
    { id: 6, imgSrc: f6, text: "Free Shipping", style: { backgroundColor: "#EEE8AA" } },
  ];

  const sectionStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Responsive grid
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    width: "90%",
    margin: "10px auto"
  };

  const baseBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: "green", // Text color for readability
    transition: "transform 0.3s, box-shadow 0.3s", // Smooth hover effect
  };

  const imgStyle = {
    width: "80px",
    height: "80px",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    fontWeight: "600",
  };

  // State to track hover status
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="feature" style={sectionStyle}>
      {features.map((feature) => (
        <div
          key={feature.id}
          style={{
            ...baseBoxStyle,
            ...feature.style,
            transform: hoveredId === feature.id ? "scale(1.05)" : "scale(1)", // Scale up on hover
            boxShadow:
              hoveredId === feature.id
                ? "0 6px 10px rgba(0, 0, 0, 0.2)" // Deeper shadow on hover
                : "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={() => setHoveredId(feature.id)} // Set hover state on enter
          onMouseLeave={() => setHoveredId(null)} // Clear hover state on leave
        >
          <img src={feature.imgSrc} alt={feature.text} style={imgStyle} />
          <h6 style={textStyle}>{feature.text}</h6>
        </div>
      ))}
    </section>
  );
};

export default Featured;
