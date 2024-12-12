// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import { useLocation, useNavigate } from "react-router-dom";
// import { setActiveProd } from "../Redux/activeProdSlice";
// import { useDispatch, useSelector } from "react-redux";

// export default function HomeTabs() {
//   const { active } = useSelector((state) => state.activeProd);

//   React.useEffect(() => {
//     let val;
//     if (active === "all" || active === "cosmetics") {
//       val = 3;
//     } else if (active === "electronics") {
//       val = 0;
//     } else if (active === "footwears") {
//       val = 1;
//     } else if (active === "shirts") {
//       val = 2;
//     }
//     setValue(val);
//   }, [active]);
//   const [value, setValue] = React.useState(3);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     let active = "";
//     if (newValue === 0) active = "electronics";
//     else if (newValue === 1) active = "footwears";
//     else if (newValue === 2) active = "shirts";
//     else if (newValue === 3) active = "all";
//     else if (newValue === 4) active = "cosmetics";
//     dispatch(setActiveProd(active));
//     navigate("/all-products");
//   };

//   const handleClick = () => {
//     navigate("/all-products");
//   };

//   let { pathname } = useLocation();

//   return (
//     <Box
//       display={
//         pathname === "/signin" ||
//         pathname.startsWith("/users") ||
//         pathname ==="/my-account" ||
//         pathname === "/signup" ||
//         pathname === "/dashboard"
//           ? "none"
//           : "flex"
//       }
//       justifyContent="center"
//       sx={{ width: "100%", bgcolor: "background.paper" }}
//       padding={{ xs: "5px 0", sm: "10px 0" }}
//     >
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons="auto"
//         sx={{ color: "#424874" }}
//         aria-label="scrollable auto tabs example"
//       >
//         <Tab onClick={handleClick} label="Electronics" />
//         <Tab onClick={handleClick} label="Footwears" />
//         <Tab onClick={handleClick} label="Shirts" />
//         <Tab onClick={handleClick} label="all products" />
//       </Tabs>
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import { setActiveProd } from "../Redux/activeProdSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HomeTabs() {
  const { active } = useSelector((state) => state.activeProd);
  const [anchorEl, setAnchorEl] = React.useState(null); // Anchor for dropdown
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  // Handle menu open/close
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    dispatch(setActiveProd(category)); // Update active category in Redux
    navigate("/all-products"); // Navigate to all-products page
    handleMenuClose(); // Close the dropdown
  };

  const { pathname } = useLocation();

  return (
    <Box
      display={
        pathname === "/signin" ||
        pathname.startsWith("/users") ||
        pathname === "/my-account" ||
        pathname === "/signup" ||
        pathname === "/dashboard"
          ? "none"
          : "flex"
      }
      justifyContent="center"
      sx={{ width: "100%", bgcolor: "background.paper" }}
      padding={{ xs: "5px 0", sm: "10px 0" }}
    >
      <Button
        id="category-button"
        aria-controls={open ? "category-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleMenuOpen} // Open menu on click
        sx={{ color: "darkgreen", fontSize: "16px" }}
      >
        Categories
      </Button>

      {/* Dropdown Menu */}
      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "category-button",
        }}
      >
        <MenuItem onClick={() => handleCategoryClick("all")}>
          Browse All
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClick("electronics")}>
          Electronics
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClick("footwears")}>
          Footwears
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClick("shirts")}>
          Shirts
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClick("cosmetics")}>
          Cosmetics
        </MenuItem>
      </Menu>
    </Box>
  );
}
