// import { Box, Stack } from "@mui/system";
// import React, { useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const UserAddresses = () => {
//   const [orders, setOrders] = useState([]);
//   const { token } = useSelector((state) => state.auth);
//   const [loading, setLoading] = useState(false);
//   React.useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`${process.env.REACT_APP_SERVER_BASE_URL}/order/get-order`, {
//         headers: { token },
//       })
//       .then((res) => {
//         setOrders(res.data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <Box
//       borderRadius="5px"
//       overflow="scroll"
//       maxHeight={800}
//       width={{ xs: "90%", md: "50%", xl: "40%" }}
//       boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
//       p={3}
//     >
//       {loading && <h6>Loading Orders ...</h6>}
//       {orders.length === 0 && !loading && <h6>No order found</h6>}
//       {orders.map((order) => (
//         <Box
//           p={1}
//           borderRadius="5px"
//           mb={2}
//           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
//         >
//           {order.items.map((prod) => {
//             return (
//               <Stack
//                 maxHeight={200}
//                 overflow="scroll"
//                 m={1}
//                 direction="row"
//                 spacing={3}
//               >
//                 <img
//                   style={{
//                     width: "20%",
//                   }}
//                   src={prod.product.image}
//                 />
//                 <Box>
//                   <p style={{ margin: 0 }}>
//                     <b>{prod.product.title}</b>
//                   </p>
//                   <p>Quantity : {prod.quantity}</p>
//                 </Box>
//               </Stack>
//             );
//           })}
//           <Stack m={1} mb={2} mt={2}>
//             <p style={{ margin: 0 }}>
//               <b>{order.address.firstName}</b>
//             </p>
//             <p style={{ margin: 0 }}>
//               {order.address.addLine1}, {order.address.city}
//             </p>
//             <p>
//               Total :
//               <b>
//                 {" "}
//                 {new Intl.NumberFormat("en-IN", {
//                   style: "currency",
//                   currency: "INR",
//                 }).format(order.amount)}{" "}
//               </b>
//             </p>
//             <p style={{ margin: 0 }}>
//               <b>Ordered at : {order.createdAt.split("T")[0]}</b>
//             </p>
//           </Stack>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default UserAddresses;



// import { Box, Stack } from "@mui/system";
// import React, { useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const UserAddresses = () => {
//   const [orders, setOrders] = useState([]);
//   const { token } = useSelector((state) => state.auth);
//   const [loading, setLoading] = useState(false);

//   React.useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`${process.env.REACT_APP_SERVER_BASE_URL}/order/get-all`, {
//         headers: { token },
//       })
//       .then((res) => {
//         setOrders(res.data);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <Box
//       borderRadius="5px"
//       overflow="scroll"
//       maxHeight={800}
//       width={{ xs: "90%", md: "50%", xl: "40%" }}
//       boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
//       p={3}
//     >
//       {loading && <h6>Loading Orders ...</h6>}
//       {orders.length === 0 && !loading && <h6>No order found</h6>}
//       {orders.map((order) => (
//         <Box
//           p={1}
//           borderRadius="5px"
//           mb={2}
//           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
//         >
//           {order.items.map((prod) => {
//             return (
//               <Stack
//                 maxHeight={200}
//                 overflow="scroll"
//                 m={1}
//                 direction="row"
//                 spacing={3}
//               >
//                 <img
//                   style={{
//                     width: "20%",
//                   }}
//                   src={prod.product.image}
//                 />
//                 <Box>
//                   <p style={{ margin: 0 }}>
//                     <b>{prod.product.title}</b>
//                   </p>
//                   <p>Quantity : {prod.quantity}</p>
//                 </Box>
//               </Stack>
//             );
//           })}
//           <Stack m={1} mb={2} mt={2}>
//             <p style={{ margin: 0 }}>
//               <b>{order.address.firstName}</b>
//             </p>
//             <p style={{ margin: 0 }}>
//               {order.address.addLine1}, {order.address.city}
//             </p>
//             <p>
//               Total :
//               <b>
//                 {" "}
//                 {new Intl.NumberFormat("en-IN", {
//                   style: "currency",
//                   currency: "NGN",
//                 }).format(order.amount / 100)}{" "}
//               </b>
//             </p>
//             <p style={{ margin: 0 }}>
//               <b>Ordered at : {order.createdAt.split("T")[0]}</b>
//             </p>
//           </Stack>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default UserAddresses;


// // import React, { useState, useEffect } from "react";
// // import { Box, Stack } from "@mui/system";
// // import { CircularProgress, Typography } from "@mui/material";
// // import axios from "axios";
// // import { useSelector } from "react-redux";

// // const UserAddresses = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const { token } = useSelector((state) => state.auth);

// //   useEffect(() => {
// //     setLoading(true);
// //     setError(null);

// //     axios
// //       .get(`${process.env.REACT_APP_SERVER_BASE_URL}/order/get-order`, {
// //         headers: { token },
// //       })
// //       .then((res) => {
// //         setOrders(res.data);
// //       })
// //       .catch((err) => {
// //         setError("Failed to load orders. Please try again later.");
// //         console.error("Order fetch error:", err);
// //       })
// //       .finally(() => {
// //         setLoading(false);
// //       });
// //   }, [token]);

// //   return (
// //     <Box
// //       borderRadius="5px"
// //       overflow="scroll"
// //       maxHeight={800}
// //       width={{ xs: "90%", md: "50%", xl: "40%" }}
// //       boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
// //       p={3}
// //     >
// //       {loading && (
// //         <Box display="flex" justifyContent="center" alignItems="center">
// //           <CircularProgress />
// //         </Box>
// //       )}
// //       {error && (
// //         <Typography color="error" textAlign="center">
// //           {error}
// //         </Typography>
// //       )}
// //       {!loading && orders.length === 0 && !error && (
// //         <Typography textAlign="center" variant="h6">
// //           No orders found.
// //         </Typography>
// //       )}
// //       {orders.map((order) => (
// //         <Box
// //           key={order._id} // Add unique key for each order
// //           p={2}
// //           borderRadius="5px"
// //           mb={3}
// //           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
// //         >
// //           {order.items.map((prod, index) => (
// //             <Stack
// //               key={index} // Add unique key for each product in an order
// //               maxHeight={200}
// //               overflow="scroll"
// //               m={1}
// //               direction="row"
// //               spacing={3}
// //             >
// //               <img
// //                 style={{
// //                   width: "20%",
// //                   objectFit: "contain",
// //                   borderRadius: "5px",
// //                 }}
// //                 src={prod.product.image || "/placeholder-image.png"} // Fallback image
// //                 alt={prod.product.title || "Product"}
// //               />
// //               <Box>
// //                 <Typography variant="body1" fontWeight="bold" noWrap>
// //                   {prod.product.title || "Unnamed Product"}
// //                 </Typography>
// //                 <Typography variant="body2">Quantity: {prod.quantity}</Typography>
// //               </Box>
// //             </Stack>
// //           ))}
// //           <Stack m={1} mb={2} mt={2}>
// //             <Typography variant="body1" fontWeight="bold">
// //               {order.address.firstName}
// //             </Typography>
// //             <Typography variant="body2">
// //               {order.address.addLine1}, {order.address.city}
// //             </Typography>
// //             <Typography variant="body2">
// //               Total:{" "}
// //               <b>
// //                 {new Intl.NumberFormat("en-NG", {
// //                   style: "currency",
// //                   currency: "NGN",
// //                 }).format(order.amount)}
// //               </b>
// //             </Typography>
// //             <Typography variant="body2" color="text.secondary">
// //               Ordered at: {order.createdAt.split("T")[0]}
// //             </Typography>
// //           </Stack>
// //         </Box>
// //       ))}
// //     </Box>
// //   );
// // };

// // export default UserAddresses;


import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_BASE_URL}/order/get-order`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOrders(response.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (orders.length === 0) {
    return (
      <Box textAlign="center">
        <Typography>No orders found.</Typography>
      </Box>
    );
  }

  return (
    <Box
      borderRadius="5px"
      overflow="auto"
      maxHeight={800}
      width={{ xs: "90%", md: "50%", xl: "40%" }}
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      p={3}
    >
      {orders.map((order) => (
        <Box
          key={order._id}
          p={2}
          borderRadius="5px"
          mb={3}
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          {order.items.map((item, index) => (
            <Stack
              key={index}
              maxHeight={200}
              overflow="auto"
              m={1}
              direction="row"
              spacing={3}
            >
              <img
                style={{
                  width: "20%",
                  objectFit: "contain",
                }}
                src={item.product.image}
                alt={item.product.title}
              />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {item.product.title}
                </Typography>
                <Typography variant="body2">Quantity: {item.quantity}</Typography>
              </Box>
            </Stack>
          ))}
          <Stack m={1} mb={2} mt={2}>
            <Typography variant="body1" fontWeight="bold">
              {order.address.firstName} {order.address.lastName}
            </Typography>
            <Typography variant="body2">
              {order.address.addLine1}, {order.address.city}
            </Typography>
            <Typography variant="body2">
              Total:{" "}
              <b>
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(order.amount / 100)}
              </b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ordered at: {new Date(order.createdAt).toLocaleDateString()}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default UserOrders;

