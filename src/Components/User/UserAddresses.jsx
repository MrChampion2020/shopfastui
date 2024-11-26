// import { Radio } from "@mui/material";
// import { Box, Stack } from "@mui/system";
// import React, { useState } from "react";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const UserAddresses = () => {
//   const [addresses, setAddresses] = useState([]);
//   const { token } = useSelector((state) => state.auth);
//   const [loading, setLoading] = useState(false);
//   React.useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`${process.env.REACT_APP_SERVER_BASE_URL}/address`, {
//         headers: { token },
//       })
//       .then((res) => {
//         setAddresses(res.data);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <Box
//       borderRadius="5px"
//       overflow="scroll"
//       maxHeight={800}
//       boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
//       p={3}
//       mb={50}
//     >
//       <FormControl>
//         <RadioGroup
//           name="address-radio"
//           onChange={(e) => {
//             // setSelected(e.target.value);
//           }}
//         >
//           {loading && <h6>Loading Adresses ...</h6>}
//           {addresses.length === 0 && !loading && <h6>No address added</h6>}
//           {addresses.map((elem) => (
//             <Stack direction="row">
//               <Box
//                 display="flex"
//                 flexDirection="column"
//                 justifyContent="flex-start"
//               >
//                 <FormControlLabel
//                   value={elem._id}
//                   control={<Radio size="small" disabled />}
//                 />
//               </Box>
//               <Box>
//                 <h6 style={{ margin: 0 }}>
//                   {elem.firstName} {elem.lastName}
//                 </h6>
//                 <p style={{ margin: 0 }}>{elem.addLine1}</p>
//                 <p>
//                   {elem.city}, {elem.state}, {elem.country}
//                 </p>
//               </Box>
//             </Stack>
//           ))}
//         </RadioGroup>
//       </FormControl>
//     </Box>
//   );
// };

// export default UserAddresses;


import { Radio } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useSelector } from "react-redux";

const UserAddresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchAddresses = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/address`, {
          headers: { token },
        });
        if (Array.isArray(response.data)) {
          setAddresses(response.data);
        } else {
          setError("Invalid response from API");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAddresses();
  }, [token]);

  if (loading) {
    return <h6>Loading Addresses...</h6>;
  }

  if (error) {
    return <h6>Error: {error}</h6>;
  }

  if (addresses.length === 0) {
    return <h6>No addresses added</h6>;
  }

  return (
    <Box
      borderRadius="5px"
      overflow="scroll"
      maxHeight={800}
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      p={3}
      mb={50}
    >
      <FormControl>
        <RadioGroup
          name="address-radio"
          onChange={(e) => {
            // setSelected(e.target.value);
          }}
        >
          {addresses.map((elem) => (
            <Stack direction="row" key={elem._id}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <FormControlLabel
                  value={elem._id}
                  control={<Radio size="small" disabled />}
                />
              </Box>
              <Box>
                <h6 style={{ margin: 0 }}>
                  {elem.firstName} {elem.lastName}
                </h6>
                <p style={{ margin: 0 }}>{elem.addLine1}</p>
                <p>
                  {elem.city}, {elem.state}, {elem.country}
                </p>
              </Box>
            </Stack>
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default UserAddresses;




// import React, { useState, useEffect } from "react";
// import { Box, Stack, Typography, CircularProgress } from "@mui/material";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const UserAddresses = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { token } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_SERVER_BASE_URL}/order/get-order`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         if (Array.isArray(response.data)) {
//           setOrders(response.data);
//         } else {
//           setOrders([]);
//           console.error("Received non-array data:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//         setError("Failed to fetch orders. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [token]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="200px">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box textAlign="center">
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <Box textAlign="center">
//         <Typography>No orders found.</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       borderRadius="5px"
//       overflow="scroll"
//       maxHeight={800}
//       width={{ xs: "90%", md: "50%", xl: "40%" }}
//       boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
//       p={3}
//     >
//       {orders.map((order) => (
//         <Box
//           key={order._id}
//           p={2}
//           borderRadius="5px"
//           mb={3}
//           boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
//         >
//           {order.items.map((item, index) => (
//             <Stack
//               key={index}
//               maxHeight={200}
//               overflow="scroll"
//               m={1}
//               direction="row"
//               spacing={3}
//             >
//               <img
//                 style={{
//                   width: "20%",
//                   objectFit: "contain",
//                 }}
//                 src={item.product.image}
//                 alt={item.product.title}
//               />
//               <Box>
//                 <Typography variant="body1" fontWeight="bold">
//                   {item.product.title}
//                 </Typography>
//                 <Typography variant="body2">Quantity: {item.quantity}</Typography>
//               </Box>
//             </Stack>
//           ))}
//           <Stack m={1} mb={2} mt={2}>
//             <Typography variant="body1" fontWeight="bold">
//               {order.address.firstName} {order.address.lastName}
//             </Typography>
//             <Typography variant="body2">
//               {order.address.addLine1}, {order.address.city}
//             </Typography>
//             <Typography variant="body2">
//               Total:{" "}
//               <b>
//                 {new Intl.NumberFormat("en-NG", {
//                   style: "currency",
//                   currency: "NGN",
//                 }).format(order.amount / 100)}
//               </b>
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Ordered at: {new Date(order.createdAt).toLocaleDateString()}
//             </Typography>
//           </Stack>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default UserAddresses;

