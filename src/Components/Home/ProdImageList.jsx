import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import men from "../../assets/img/banner/b4.jpg"
import pal from "../../assets/img/banner/b181.jpg"
import photo from "../../assets/img/banner/b20.jpg"
import bags from "../../assets/img/banner/b16.jpg"
import tshirt from "../../assets/img/banner/b16.jpg"
import clothe from "../../assets/img/products/f1.jpg"


export default function ProdImageList() {
  return (
    <Box padding={{ xs: "10px 10px", md: "20px 0px" }}>
      <Box sx={{ width: "100%", 
      height:{xs:"40vh", md:"300px"}, 
      overflowY: "scroll" 
      }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              style={{
                height: "40%"
              }}/>
            </ImageListItem>
          ))}
        </ImageList>
        
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: photo,
    title: "Camera",
  },
  {
    img: men,
    title: "Watch",
  },
  {
    img: pal,
    title: "Headphone",
  },
  {
    img: bags,
    title: "Beauty Product",
  },
  {
    img: men ,
    title: "Shoe ",
  },
  {
    img: pal,
    title: "Shirt ",
  },
  {
    img:bags ,
    title: "Pant",
  },
  {
    img: tshirt,
    title: "Pant",
  },
  {
    img: men,
    title: "Beauty Prod",
  },
  {
    img: clothe,
    title: "Specs",
  },
  {
    img: men,
    title: "Alexa",
  },
];
