import { Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProdItem = ({ item }) => {
  const { image, price, title, _id } = item;
  const navigate = useNavigate();
  return (
    <Box
      height={{ xs: "200px", sm: "300px" }}
    
      width={{ xs: "100%", md: "100%" }}
      className="prodItem"
      p="6px"
      onClick={() => {
        navigate(`/product/${_id}`);
      }}
      style={{
        border: "0.05px solid #29CC29",
        objectFit: "cover",
        width: "100%"
      }}
    >
      <img height="70%" width="100%" alt={title} src={image} 
      
      style={{
        borderRadius: "10px"
      }}/>
      <Typography className="textOverflow" m="15px 5px" fontSize={{xs: "14px", sm: "19px"}} mb={{xs: "2px", sm: "5px"}} color="darkgreen">
        {title}
      </Typography>
 
      <Typography fontSize={{xs: "14px", sm: "19px"}} m="0px 5px" className="link" color="black">
        <b>NGN</b>{" "}
        {new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(
          price
        )}
      </Typography>
    </Box>
  );
};

export default ProdItem;
