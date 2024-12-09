
// import React, { useState } from "react";

// // /all-products
// import f1 from "../../assets/img/features/f1.png";
// import f2 from "../../assets/img/features/f2.png";
// import f3 from "../../assets/img/features/f3.png";
// import f4 from "../../assets/img/features/f4.png";
// import f5 from "../../assets/img/features/f5.png";
// import f6 from "../../assets/img/features/f6.png";

// const Featured = () => {
//   const features = [
//     { id: 1, imgSrc: f1, text: "Free Shipping", style: { backgroundColor: "#FFDEAD" } },
//     { id: 2, imgSrc: f2, text: "Fast Delivery", style: { backgroundColor: "#98FB98" } },
//     { id: 3, imgSrc: f3, text: "Free Shipping", style: { backgroundColor: "#AFEEEE" } },
//     { id: 4, imgSrc: f4, text: "Money Saving", style: { backgroundColor: "#B0C4DE" } },
//     { id: 5, imgSrc: f5, text: "Free Shipping", style: { backgroundColor: "#FAF0E6" } },
//     { id: 6, imgSrc: f6, text: "Free Shipping", style: { backgroundColor: "#EEE8AA" } },
//   ];

//   const sectionStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(150px, 2fr))", // At least 2 items in smallest row
//     gap: "20px",
//     padding: "20px",
//     backgroundColor: "#f9f9f9",
//     width: "95%",
//     margin: "10px auto",
//   };

//   const baseBoxStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     textAlign: "center",
//     padding: "15px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     transition: "transform 0.3s, box-shadow 0.3s", // Smooth hover effect
//   };

//   const imgStyle = {
//     width: "100px",
//     height: "100px",
//     marginBottom: "10px",
//   };

//   const textStyle = {
//     fontSize: "14px",
//     fontWeight: "600",
//     color: "#333", // Text color
//   };

//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <section id="feature" style={sectionStyle}>
//       {features.map((feature) => (
//         <div
//           key={feature.id}
//           style={{
//             ...baseBoxStyle,
//             ...feature.style,
//             transform: hoveredId === feature.id ? "scale(1.05)" : "scale(1)",
//             boxShadow:
//               hoveredId === feature.id
//                 ? "0 6px 12px rgba(0, 0, 0, 0.15)" // Stronger shadow on hover
//                 : "0 4px 6px rgba(0, 0, 0, 0.1)",
//           }}
//           onMouseEnter={() => setHoveredId(feature.id)}
//           onMouseLeave={() => setHoveredId(null)}
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
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// /all-products
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

  const navigate = useNavigate(); // For navigation

  // Navigate to a page when an item is clicked
  const handleItemClick = (id) => {
    // Example navigation, modify this to go to specific pages
    navigate(`/all-products`);
  };

  return (
    <Box width="90%" margin="auto" padding="10px">
      <Grid container spacing={2} justifyContent="center">
        {features.map((feature) => (
          <Grid key={feature.id} item xs={6} sm={4} md={3} lg={2}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "15px",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s", // Smooth hover effect
                ...feature.style,
                height: "120px", // Set height to make it consistent
              }}
              onClick={() => handleItemClick()} // Trigger navigation
            >
              <img src={feature.imgSrc} alt={feature.text} style={{ width: "80px", height: "80px", marginBottom: "10px" }} />
              <Typography style={{ fontSize: "14px", fontWeight: "600", color: "#333" }}>{feature.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Featured;
