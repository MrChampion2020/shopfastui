// import { Box, Grid } from "@mui/material";
// import React from "react";
// import ProdFilter from "./ProdFilter";
// import ProdItem from "./ProdItem";

// const ProdGrid = ({ prod, setFilter, setSort, filter, sort }) => {
//   return (
//     <Box width={{ xs: "100%", sm: "100%", lg: "90%", xl: "90%" }}
//     >
//       <ProdFilter
//         filter={filter}
//         setFilter={setFilter}
//         sort={sort}
//         setSort={setSort}
//       />
//       <Grid container spacing={{ xs: 1, md: 4, lg: 5, xl: 6 }}
//      >
//         {prod.map((prod) => (
//           <Grid key={prod._id} item xs={8} sm={6} md={5} xl={4}>
//             <ProdItem item={prod} 
//              style={{
//               margin: "auto"
//             }}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProdGrid;



import { Box, Grid } from "@mui/material";
import React from "react";
import ProdFilter from "./ProdFilter";
import ProdItem from "./ProdItem";

const ProdGrid = ({ prod, setFilter, setSort, filter, sort }) => {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box width={{ xs: "95%", sm: "90%", md: "85%", lg: "80%", xl: "75%" }}>
        <ProdFilter
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
        >
          {prod.map((item) => (
            <Grid
              key={item._id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
              display="flex"
              justifyContent="center"
            >
              <ProdItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProdGrid;

