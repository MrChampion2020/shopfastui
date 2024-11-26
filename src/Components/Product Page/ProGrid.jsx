// // import { Box, Grid } from "@mui/material";
// // import React from "react";
// // import ProdItem from "./ProdItem";

// // const ProGrid = ({ prod, setFilter, setSort, filter, sort }) => {
// //   return (
// //     <Box width={{ xs: "90%", sm: "90%", lg: "80%", xl: "80%" }}>
     
// //       <Grid container spacing={{ xs: 1, md: 2, lg: 4, xl: 6 }}>
// //         {prod.map((prod) => (
// //           <Grid key={prod._id} item xs={6} sm={4} md={3} xl={4}>
// //             <ProdItem item={prod} />
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default ProGrid;


// import { Box, Grid, Typography } from "@mui/material";
// import React from "react";
// import ProdItem from "./ProdItem";

// const ProGrid = ({ prod = [],}) => {
//   return (
//     <Box
//       width={{ xs: "90%", sm: "90%", lg: "80%", xl: "80%" }}
//       mx="auto" // Center the grid horizontally
//       mt={4} // Add some margin at the top
//     >
//       {prod.length > 0 ? (
//         <Grid container spacing={{ xs: 1, md: 2, lg: 3, xl: 4 }}>
//           {prod.map((product) => (
//             <Grid key={product._id} item xs={7} sm={6} md={4} xl={4}>
//               <ProdItem item={product} />
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Typography
//           variant="h6"
//           align="center"
//           color="textSecondary"
//           mt={4}
//         >
//           No products available.
//         </Typography>
//       )}
//     </Box>
//   );
// };

// export default ProGrid;


import React from "react";
import { Box, Grid } from "@mui/material";
import ProdItem from "./ProdItem";

const ProGrid = ({ prod = [], setFilter, setSort, filter, sort }) => {
  return (
    <Box width="90%">
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {prod.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={4} lg={4}>
            <ProdItem item={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProGrid;

