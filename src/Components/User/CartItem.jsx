import { Button } from '@mui/material';
import {
  borderRadius,
  Box,
  display,
  margin,
  padding,
  Stack,
  width,
} from '@mui/system';
import React from 'react';
import axios from 'axios';
import { setCart } from '../Redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartItem = ({ prod, qty }) => {
  const { token } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const { title, price, seller, image, _id } = prod;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = () => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_BASE_URL}/cart/${_id}`, {
        headers: { token },
      })
      .then((res) => {
        let updated = cartItems.filter(({ product }) => product._id !== _id);
        dispatch(setCart(updated));
      });
  };
  return (
    <Stack
      height="100%"
      // border="0.05px solid green"
      p="10px"
      direction="column"
      spacing={5}
      style={{
        width: '60%',
        borderRadius: '5px',
        padding: '10px',
        margin: '2px auto',
      }}
    >
      <Box
        height="60%"
        onClick={() => {
          navigate(`/product/${_id}`);
        }}
        style={{ width: '95%', margin: 'auto' }}
      >
        <img
          src={image}
          alt="product"
          style={{
            height: '100%',
            width: '100%',
            borderRadius: '5px',
          }}
        />
      </Box>
      <Stack>
        <Box>
          <h4
            onClick={() => {
              navigate(`/product/${_id}`);
            }}
            style={{
              fontSize: {xs: "12px", xl: "14px" },
              cursor: 'pointer',
              color: 'black',
              fontWeight: '800',
            }}
            className="textOverflow"
          >
            {title}
          </h4>
          <p
            style={{
              fontSize: '14px',
              margin: '0px',
              color: '#06620A',
              fontWeight: '500',
            }}
            className="link"
          >
            Seller : {seller}
          </p>
          <p style={{ fontSize: '14px', color: 'darkgreen' }} className="link">
            Quantity : {qty}
          </p>
        </Box>
        <Box
        style={{
                margin: "",
                gap: "10px"
        }}>
          <span
            style={{
              fontWeight: '800',
              padding: "10px"
            }}
          >
            {' '}
            {
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'NGN',
              })
                .format(price)
                .split('.')[0]
            }{' '}
          </span>
          {/* <Button size="small" onClick={handleRemove}>
            Remove
          </Button> */}
          <Button
            size="small"
            onClick={handleRemove}
            sx={{
              backgroundColor: 'lightgrey',
              color: 'black',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },
            }}
          >
            Remove
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default CartItem;
