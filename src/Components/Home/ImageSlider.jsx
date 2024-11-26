// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from "react-bootstrap/Carousel";
// import { Box } from "@mui/material";
// import men from "../../assets/img/banner/b4.jpg"
// import pal from "../../assets/img/banner/b181.jpg"
// import photo from "../../assets/img/banner/b20.jpg"
// import bags from "../../assets/img/banner/b16.jpg"

// const ImageSlider = () => {
//   const images = [
//     men,
//     pal,
//     photo,
//    bags,
//   ];
//   return (
//     <Box
//       // disableGutters
//       padding={{ xs: "5px 0px", md: "10px 0px" }}
//       style={{
//         width: "100%",
//         height: "40%"
//       }}
//     >
//       <Carousel
//       style={{
//         objectFit: "cover",
//         width: "100%",
//         height: "40%"
//       }}>
//         {images.map((item) => (
//           <Carousel.Item interval={4000}
//           style={{
//             objectFit: "cover",
//             width: "100%",
//             height: "40%"
//           }}>
//             <img className="d-block w-100" src={item} alt="First slide" />
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Box>
//   );
// };

// export default ImageSlider;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Box, Typography } from '@mui/material';
import men from '../../assets/img/banner/banner4.png';
import pal from '../../assets/img/banner/banner3.png';
import photo from '../../assets/img/banner/banner2.jpg';
import bags from '../../assets/img/banner/banner6.jpg';
import button from '../../assets/img/button.png';


const ImageSlider = () => {
  const images = [men, pal, photo, bags];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '40vh', md: '80vh' }, // 40% for small devices, 80% for large
        overflow: 'hidden',
      }}
    >
      <Carousel
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {images.map((item, index) => (
          <Carousel.Item
            key={index}
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              
            }}
          >
            <img
              className="d-block w-100"
              src={item}
              alt={`Slide ${index + 1}`}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
            {/* Text Area Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: '30%',
                left: { xs: '5%', md: '10%' }, // Adjusts padding for smaller and larger screens
                transform: 'translateY(-50%)',
                color: 'green',
                backgroundColor: {
                  xs: 'transparent',
                  md: 'transparent',
                }, // Background for smaller screens
                padding: { xs: '10px', md: '0' },
                maxWidth: { xs: '90%', md: '40%' },
                textAlign: 'left',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '16px', md: '20px' },
                  color: 'black',
                }}
              >
                Trade-in-offer
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: '800',
                  color: 'black',
                  fontSize: { xs: '1rem', md: '50px' },
                }}
              >
                Excellent deals for you{' '}
                <br
                  style={{
                    color: '#06620A',
                  }}
                />{' '}
                On all purchases
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginTop: '10px',
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  color: '#06620A',
                }}
              >
                Save more with gift cards, up to 80% off!
              </Typography>
              {/* <Box
                component="button"
                sx={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  fontSize: "1rem",
                  backgroundColor: "peachpuff",
                  color: "#06620A",
                  border: "none",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "coral",
                  },
                }}
              >
                Shop Now
              </Box> */}
              <Box
                component="button"
                sx={{
                  marginTop: '15px',
                  padding: '10px 20px',
                  fontSize: '1rem',
                  background: `url(${button}) no-repeat center/cover`, // Set the image as background
                  color: '#06620A', // Text color for better contrast
                  border: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    background: `url(${button}) no-repeat center/cover`, // Change image on hover
                  },
                }}
              >
                Shop Now
              </Box>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
};

export default ImageSlider;
