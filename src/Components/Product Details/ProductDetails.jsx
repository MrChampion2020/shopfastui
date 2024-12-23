import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import ShoppingCartRounded from "@mui/icons-material/ShoppingCartRounded";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setCartTotal } from "../Redux/cartSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ prod, exists }) => {
  const { token, isAuth } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { price, seller, title, category, _id } = prod;

  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const buttons = [
    <Button
      disabled={quantity ===1}
      onClick={() => setQuantity((prev) => prev - 1)}
      key="one"
    >
      -
    </Button>,
    <Button key="two">{quantity}</Button>,
    <Button onClick={() => setQuantity((prev) => prev + 1)} key="three">
      +
    </Button>,
  ];

  const handleAddToCart = () => {
    if (exists) {
      navigate("/cart");
      return;
    }
    axios
      .post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/cart/${_id}`,
        { quantity },
        {
          headers: { token },
        }
      )
      .then((res) => {
        dispatch(setCart([...cartItems, { product: prod, quantity }]));
      });
  };

  const handleBuyNow = () => {
    dispatch(setCartTotal(prod.price * quantity));
    navigate(`/product/${_id}_${quantity}/address`);
  };

  const handleButtonClick = () => {
    if (!isAuth) {
      // Redirect to login if not authenticated
      navigate("/signin");
    } else {
      // Proceed to buy if authenticated
      handleBuyNow();
    }
  };
  return (
    <Stack
      alignItems={{ xs: "center", sm: "flex-start" }}
      width={{ xs: "100%", sm: "50%" }}
      spacing={3}
      style={{
        backgroundColor: "white"
      }} >
      <Box>
        <Typography fontSize={{ xs: 35, sm: 42 }} fontWeight={600} 
        style={{
          fontSize: "14px",
          padding: "2px"
        }}>
          <h1
          style={{
          fontSize: "20px",
          fontWeight: "800",
          padding: "2px"

          }}>Product Details</h1>
          {title}
        </Typography>
        <Box>
          <Typography color="#A6B1E1">
            <b>Category :</b> {category?.toUpperCase()}
          </Typography>
          <Typography color="#A6B1E1">
            <b>Sold by:</b> {seller}
          </Typography>
        </Box>
      </Box>
      <Stack direction="row">
        <Typography fontSize={20} color="black" mr={2}>
          <b>Qty :</b>
        </Typography>
        <ButtonGroup size="small" aria-label="small button group">
          {buttons}
        </ButtonGroup>
      </Stack>
      <Typography color="darkgreen" fontSize={{ xs: 20, sm: 30 }} variant="h6">
        Price :{" "}
        {new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(
          price
        )}{" "}
        NGN
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          size="small"
          disabled={!isAuth}
          variant="outlined"
          onClick={handleAddToCart}
          fontSize={{ xs: "10px", sm: "14px" }}
          width={{ xs: "40%", sm: "40%" }}
        >
          {!exists ? " + " : " Open "}{" "}
          <span style={{ marginLeft: "5px" }}>
            <ShoppingCartRounded fontSize="small" />
          </span>
        </Button>
        <Button
          size="small"
          id="primaryBgColor"
          variant="contained"
          disabled={!isAuth}
          onClick={handleButtonClick}
          fontSize={{ xs: "10px", sm: "14px" }}
          width={{ xs: "40%", sm: "50%" }}
          style={{
            color: "white",
            backgroundColor: "green",
            
            
          }}
        >
          {isAuth ? "Buy Now" : "log in to continue"}
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
