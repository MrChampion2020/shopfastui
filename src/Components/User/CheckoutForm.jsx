
// import React, { useState } from "react";
// import { Button, Typography } from "@mui/material";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";

// const CheckoutForm = ({
//   amount,
//   selected,
//   cartItems,
//   coming_from,
//   prodId,
//   token,
//   onSuccess,
//   onClose,
// }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);
//     setError(null);

//     if (!stripe || !elements) {
//       setError("Stripe hasn't loaded yet. Please try again.");
//       setProcessing(false);
//       return;
//     }

//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_SERVER_BASE_URL}/order/stripe`,
//         { amount }
//       );

//       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       });

//       if (stripeError) {
//         setError(stripeError.message || "An error occurred during payment.");
//       } else if (paymentIntent.status === "succeeded") {
//         const products = coming_from === "cart"
//           ? cartItems.map((elem) => ({
//               quantity: elem.quantity,
//               product: elem.product._id,
//             }))
//           : [
//               {
//                 quantity: prodId.split("_")[1],
//                 product: prodId.split("_")[0],
//               },
//             ];

//         try {
//           const response = await axios.post(
//             `${process.env.REACT_APP_SERVER_BASE_URL}/order/stripe/success`,
//             {
//               paymentIntentId: paymentIntent.id,
//               orderDetails: {
//                 items: products,
//                 amount,
//                 address: selected,
//               },
//             },
//             {
//               headers: { Authorization: `Bearer ${token}` },
//             }
//           );

//           if (response.data.success) {
//             onSuccess(paymentIntent.id);
//             onClose();
//           } else {
//             setError("Payment successful, but order creation failed. Please contact support.");
//           }
//         } catch (orderError) {
//           console.error("Order creation error:", orderError);
//           setError("Payment successful, but an error occurred while creating the order. Please contact support.");
//         }
//       }
//     } catch (err) {
//       console.error("Payment error:", err);
//       setError(err.message || "An error occurred during payment. Please try again.");
//     }

//     setProcessing(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
//       <Button
//         type="submit"
//         fullWidth
//         size="large"
//         variant="contained"
//         color="primary"
//         disabled={!stripe || processing}
//         sx={{ mt: 2 }}
//       >
//         {processing ? "Processing..." : "Pay Now"}
//       </Button>
//     </form>
//   );
// };

// export default CheckoutForm;



// import React, { useState } from "react";
// import { Button, Typography, CircularProgress } from "@mui/material";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";

// const CheckoutForm = ({
//   amount,
//   selected,
//   cartItems,
//   coming_from,
//   prodId,
//   token,
//   onSuccess,
//   onClose,
// }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);
//     setError(null);

//     if (!stripe || !elements) {
//       setError("Stripe hasn't loaded yet. Please try again.");
//       setProcessing(false);
//       return;
//     }

//     try {
//       // Create PaymentIntent
//       const { data: paymentIntentData } = await axios.post(
//         `${process.env.REACT_APP_SERVER_BASE_URL}/order/stripe`,
//         { amount }
//       );

//       // Confirm the payment
//       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
//         paymentIntentData.clientSecret,
//         {
//           payment_method: {
//             card: elements.getElement(CardElement),
//           },
//         }
//       );

//       if (stripeError) {
//         setError(stripeError.message);
//       } else if (paymentIntent.status === "succeeded") {
//         // Prepare order details
//         const orderDetails = {
//           items: coming_from === "cart"
//             ? cartItems.map((item) => ({
//                 quantity: item.quantity,
//                 product: item.product._id,
//               }))
//             : [{ quantity: prodId.split("_")[1], product: prodId.split("_")[0] }],
//           amount,
//           address: selected,
//         };

//         // Create order
//         const { data: orderData } = await axios.post(
//           `${process.env.REACT_APP_SERVER_BASE_URL}/order/stripe/success`,
//           {
//             paymentIntentId: paymentIntent.id,
//             orderDetails,
//           },
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );

//         if (orderData.success) {
//           onSuccess(orderData.orderId);
//           onClose();
//         } else {
//           setError("Payment successful, but order creation failed. Please contact support.");
//         }
//       }
//     } catch (err) {
//       console.error("Payment or order creation error:", err);
//       setError(err.response?.data?.error || err.message || "An unexpected error occurred");
//     }

//     setProcessing(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       {error && (
//         <Typography color="error" sx={{ mt: 2 }}>
//           Error: {error}
//         </Typography>
//       )}
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         color="primary"
//         disabled={!stripe || processing}
//         sx={{ mt: 2 }}
//       >
//         {processing ? <CircularProgress size={24} /> : "Pay Now"}
//       </Button>
//     </form>
//   );
// };

// export default CheckoutForm;



import React, { useState } from "react";
import { Button, Typography, CircularProgress } from "@mui/material";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({
  amount,
  selected,
  cartItems,
  coming_from,
  prodId,
  token,
  onSuccess,
  onClose,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      setError("Stripe hasn't loaded yet. Please try again.");
      setProcessing(false);
      return;
    }

    try {
      // Create PaymentIntent
      const { data: paymentIntentData } = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/order/stripe`,
        { amount: Math.round(amount * 100) } // Convert to cents
      );

      // Confirm the payment
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        paymentIntentData.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (stripeError) {
        setError(stripeError.message);
      } else if (paymentIntent.status === "succeeded") {
        // Prepare order details
        const orderDetails = {
          items: coming_from === "cart"
            ? cartItems.map((item) => ({
                quantity: item.quantity,
                product: item.product._id,
              }))
            : [{ quantity: prodId.split("_")[1], product: prodId.split("_")[0] }],
          amount: Math.round(amount * 100), // Store amount in cents
          address: selected,
        };

        // Create order
        const { data: orderData } = await axios.post(
          `${process.env.REACT_APP_SERVER_BASE_URL}/order/stripe/success`,
          {
            paymentIntentId: paymentIntent.id,
            orderDetails,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (orderData.success) {
          onSuccess(orderData.orderId);
          onClose();
        } else {
          setError("Payment successful, but order creation failed. Please contact support.");
        }
      }
    } catch (err) {
      console.error("Payment or order creation error:", err);
      setError(err.response?.data?.error || err.message || "An unexpected error occurred");
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          Error: {error}
        </Typography>
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!stripe || processing}
        sx={{ mt: 2 }}
      >
        {processing ? <CircularProgress size={24} /> : `Pay ₦${amount.toFixed(2)}`}
      </Button>
    </form>
  );
};

export default CheckoutForm;

