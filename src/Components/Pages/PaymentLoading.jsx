import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={20}
      mb={40}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
      <h5
        style={{
          margin: 20,
        }}
      >
        Placing Order... Please do not exit or refresh
      </h5>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function PaymentLoading() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}



// import * as React from "react";
// import PropTypes from "prop-types";
// import CircularProgress from "@mui/material/CircularProgress";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

// function CircularProgressWithLabel(props) {
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       mt={20}
//       mb={40}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <CircularProgress variant="determinate" {...props} />
//         <Box
//           sx={{
//             top: 0,
//             left: 0,
//             bottom: 0,
//             right: 0,
//             position: "absolute",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="caption" component="div" color="text.secondary">
//             {`${Math.round(props.value)}%`}
//           </Typography>
//         </Box>
//       </Box>
//       <h5
//         style={{
//           margin: 20,
//         }}
//       >
//         Placing Order... Please do not exit or refresh
//       </h5>
//     </Box>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// export default function PaymentPage() {
//   const [progress, setProgress] = React.useState(0);
//   const [amount, setAmount] = React.useState("");
//   const [loading, setLoading] = React.useState(false);

//   const handlePayment = async () => {
//     if (!amount || isNaN(amount)) {
//       alert("Please enter a valid amount in NGN");
//       return;
//     }

//     setLoading(true);
//     try {
//       const stripe = await stripePromise;

//       // Step 1: Call backend to create PaymentIntent
//       const response = await axios.post("/stripe", {
//         amount: parseFloat(amount),
//       });

//       const clientSecret = response.data.clientSecret;

//       // Step 2: Confirm payment using Stripe.js
//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: {
//             // Optional: Customize card details UI (handled via Stripe Elements if applicable)
//           },
//         },
//       });

//       if (result.error) {
//         // Handle error
//         alert(`Payment failed: ${result.error.message}`);
//       } else if (result.paymentIntent.status === "succeeded") {
//         // Payment was successful
//         alert("Payment successful!");
//       }
//     } catch (error) {
//       console.error("Error processing payment:", error.message);
//       alert("An error occurred during payment processing.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   React.useEffect(() => {
//     if (loading) {
//       const timer = setInterval(() => {
//         setProgress((prevProgress) =>
//           prevProgress >= 100 ? 100 : prevProgress + 10
//         );
//       }, 800);

//       return () => clearInterval(timer);
//     }
//   }, [loading]);

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       mt={5}
//     >
//       {loading ? (
//         <CircularProgressWithLabel value={progress} />
//       ) : (
//         <>
//           <Typography variant="h5" gutterBottom>
//             Stripe Payment in Naira (NGN)
//           </Typography>
//           <TextField
//             label="Amount (NGN)"
//             variant="outlined"
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             style={{ marginBottom: 20, width: "300px" }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handlePayment}
//             disabled={loading}
//           >
//             Pay Now
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// }
