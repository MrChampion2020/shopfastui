// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import { Box } from "@mui/system";
// import { Button, Typography } from "@mui/material";

// const PaymentSuccess = () => {
//   const [validUrl, setValidUrl] = useState(false);
//   const { orderId } = useParams();

//   // useEffect(() => {
//   //   axios
//   //     .get(`${process.env.REACT_APP_SERVER_BASE_URL}/order/success/${orderId}`)
//   //     .then((res) => {
//   //       console.log(res);
//   //       setValidUrl(true);
//   //     })
//   //     .catch((e) => {
//   //       console.log(e.message);
//   //       setValidUrl(false);
//   //     });
//   // }, []);



//   return (useEffect(() => {
//   axios
//     .get(`${process.env.REACT_APP_SERVER_BASE_URL}/order/stripe/success/${orderId}`)
//     .then((res) => {
//       console.log(res);
//       setValidUrl(true);
//     })
//     .catch((e) => {
//       console.log(e.message);
//       setValidUrl(false);
//     });
// }, []);

//     <>
//       {validUrl ? (
//         <Box display="flex" flexDirection="column" gap={2} alignItems="center">
//           <img
//             width="20%"
//             src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"
//           />
//           <Typography textAlign="center" variant="h4">
//             Order placed successfully
//           </Typography>

//           <Link className="link" to="/all-products">
//             <Button variant="contained" id="primaryBgColor">
//               Shop More
//             </Button>
//           </Link>
//         </Box>
//       ) : (
//         <Box display="flex" flexDirection="column" gap={2} alignItems="center">
//           <img
//             width="40%"
//             src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
//           />
//           <Typography textAlign="center" variant="h4">
//             Error 404! Page Not Found
//           </Typography>

//           <Link className="link" to="/">
//             <Button variant="contained" id="primaryBgColor">
//               Go to Home
//             </Button>
//           </Link>
//         </Box>
//       )}
//     </>
//   );
// };
// export default PaymentSuccess;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import { Box } from "@mui/system";
// import { Button, Typography } from "@mui/material";

// const PaymentSuccess = () => {
//   const [validUrl, setValidUrl] = useState(false);
//   const { orderId } = useParams();

//   useEffect(() => {
//     const verifyOrder = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_SERVER_BASE_URL}/order/stripe/success/${orderId}`
//         );
//         console.log(response);
//         setValidUrl(true);
//       } catch (error) {
//         console.error(error.message);
//         setValidUrl(false);
//       }
//     };
//     verifyOrder();
//   }, [orderId]);

//   return (
//     <>
//       {validUrl ? (
//         <Box
//           display="flex"
//           flexDirection="column"
//           gap={2}
//           alignItems="center"
//         >
//           <img
//             width="20%"
//             src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"
//           />
//           <Typography textAlign="center" variant="h4">
//             Order placed successfully
//           </Typography>

//           <Link className="link" to="/all-products">
//             <Button variant="contained" id="primaryBgColor">
//               Shop More
//             </Button>
//           </Link>
//         </Box>
//       ) : (
//         <Box
//           display="flex"
//           flexDirection="column"
//           gap={2}
//           alignItems="center"
//         >
//           <img
//             width="40%"
//             src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif"
//           />
//           <Typography textAlign="center" variant="h4">
//             Error 404! Page Not Found
//           </Typography>

//           <Link className="link" to="/">
//             <Button variant="contained" id="primaryBgColor">
//               Go to Home
//             </Button>
//           </Link>
//         </Box>
//       )}
//     </>
//   );
// };

// export default PaymentSuccess;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";
// import { Box, Button, Typography, CircularProgress } from "@mui/material";

// const PaymentSuccess = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { orderId } = useParams();

//   useEffect(() => {
//     const fetchOrderDetails = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_SERVER_BASE_URL}/order/success/${orderId}`
//         );
//         setOrderDetails(response.data.order);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching order details:", error);
//         setError("Failed to fetch order details. Please try again later.");
//         setLoading(false);
//       }
//     };
//     fetchOrderDetails();
//   }, [orderId]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box display="flex" flexDirection="column" gap={2} alignItems="center">
//         <Typography variant="h4" color="error">
//           {error}
//         </Typography>
//         <Link to="/">
//           <Button variant="contained" color="primary">
//             Go to Home
//           </Button>
//         </Link>
//       </Box>
//     );
//   }

//   return (
//     <Box display="flex" flexDirection="column" gap={2} alignItems="center">
//       <img
//         width="20%"
//         src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"
//         alt="Success"
//       />
//       <Typography variant="h4" textAlign="center">
//         Order placed successfully
//       </Typography>
//       {orderDetails && (
//         <Box>
//           <Typography variant="h6">Order Details:</Typography>
//           <Typography>Order ID: {orderDetails._id}</Typography>
//           <Typography>Total Amount: ₦{orderDetails.amount / 100}</Typography>
//           <Typography>Items:</Typography>
//           <ul>
//             {orderDetails.items.map((item, index) => (
//               <li key={index}>
//                 {item.product.title} - Quantity: {item.quantity}
//               </li>
//             ))}
//           </ul>
//         </Box>
//       )}
//       <Link to="/all-products">
//         <Button variant="contained" color="primary">
//           Shop More
//         </Button>
//       </Link>
//     </Box>
//   );
// };

// export default PaymentSuccess;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Typography, CircularProgress } from "@mui/material";

const PaymentSuccess = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { orderId } = useParams();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_BASE_URL}/order/success/${orderId}`
        );
        setOrderDetails(response.data.order);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order details:", error);
        setError(error.response?.data?.error || "Failed to fetch order details. Please try again later.");
        setLoading(false);
      }
    };
    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" flexDirection="column" gap={2} alignItems="center">
        <Typography variant="h4" color="error">
          {error}
        </Typography>
        <Link to="/">
          <Button variant="contained" color="primary">
            Go to Home
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <img
        width="20%"
        src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"
        alt="Success"
      />
      <Typography variant="h4" textAlign="center">
        Order placed successfully
      </Typography>
      {orderDetails && (
        <Box>
          <Typography variant="h6">Order Details:</Typography>
          <Typography>Order ID: {orderDetails._id}</Typography>
          <Typography>Total Amount: ₦{(orderDetails.amount / 100).toFixed(2)}</Typography>
          <Typography>Items:</Typography>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index}>
                {item.product.title} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </Box>
      )}
      <Link to="/all-products">
        <Button variant="contained" color="primary">
          Shop More
        </Button>
      </Link>
    </Box>
  );
};

export default PaymentSuccess;

