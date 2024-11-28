// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
// import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "./Redux/authSlice";
// import { setCart } from "./Redux/cartSlice";
// import BecomeSeller from "./User/BecomeSeller";
// import axios from "axios";
// import logo from "../assets/logo.png";
// import MenuIcon from "@mui/icons-material/Menu";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 5),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export default function PrimarySearchAppBar() {
//   const { isAuth } = useSelector((state) => state.auth);
//   const { userDet } = useSelector((state) => state.user);
//   const { cartItems } = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//   const [becomeSeller, setBecomeSeller] = React.useState(false);

//   const isMenuOpen = Boolean(anchorEl);
//   const navigate = useNavigate();

//   const handleProfileMenuOpen = (event) => {
//     if (!isAuth) {
//       navigate("/signin");
//     } else {
//       setAnchorEl(event.currentTarget);
//     }
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };
//   const handleLogout = () => {
//     dispatch(logout());
//     dispatch(setCart([]));
//     handleMenuClose();
//     navigate("/signin");
//   };

//   const handleBecomeSeller = () => {
//     if (userDet.type === "seller" || userDet.type === "admin") {
//       setAnchorEl(null);
//       navigate("/dashboard");
//     } else {
//       setBecomeSeller(true);
//     }
//   };

//   const handleMyAccount = () => {
//     handleMenuClose();
//     navigate("/my-account");
//   };

//   const handleRightMenu = (menu) => {
//     if (!isAuth) return;

//     navigate(menu === "cart" ? "/cart" : "/wishlist");
//   };

//   const redirectToHome = () => {
//     navigate("/");
//   };
//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//       sx={{ marginTop: "30px" }}
//     >
//       <MenuItem onClick={handleMyAccount}>Profile</MenuItem>
//       <MenuItem onClick={handleMyAccount}>My account</MenuItem>
//       <MenuItem onClick={handleBecomeSeller}>
//         {userDet.type === "seller" || userDet.type === "admin"
//           ? "Admin Dashboard"
//           : "Become a seller"}
//       </MenuItem>
//       <MenuItem onClick={handleLogout}>Logout</MenuItem>
//     </Menu>
//   );
//   const { pathname } = useLocation();

//   const [search, setSearch] = React.useState("");
//   const [searchData, setSearchData] = React.useState([]);
//   const [tId, setTId] = React.useState(null);
//   const [showDiv, setShowDiv] = React.useState(false);

//   const handleSearch = (e) => {
//     setShowDiv(false);
//     e.preventDefault();
//     setSearch(() => e.target.value);
//     if (tId) {
//       clearTimeout(tId);
//     }
//     if (search.length > 2) {
//       setTId(
//         setTimeout(() => {
//           axios
//             .get(
//               `${process.env.REACT_APP_SERVER_BASE_URL}/admin/prod/${search}`
//             )
//             .then((res) => {
//               setShowDiv(true);
//               setTimeout(() => {
//                 setShowDiv(false);
//               }, 6000);
//               setSearchData(res.data);
//             });
//         }, 100)
//       );
//     }
//   };

//   return (
//     <Box
//       sx={{ flexGrow: 1 }}
//       display={
//         pathname.startsWith("/dashboard") || pathname.startsWith("/users")
//           ? "none"
//           : "block"
//       }
//       style={{
//         width: "80%",
//         margin: "auto"
//       }}
//     >
//       <AppBar
//         position="static"
//         color="secondary"
//         sx={{ backgroundColor: "white", color: "black" }}
//       >
//         <Toolbar>
//           <IconButton
//             onClick={redirectToHome}
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2,
//               transition: 'all 0.3s ease',
//               '&:hover': {
//                  color: "green",
//                  backgroundColor: "#D4F6D4"
//               },
//             }}

//           >
//             {/* <StoreRoundedIcon /> */}
//           <MenuIcon style={{ fontSize: 30, color: "#424874" }} />
//           </IconButton>

//           <Typography
//             onClick={redirectToHome}
//             // variant="h6"
//             noWrap
//             component="div"
//             className="storeName"
//             sx={{ display: { xs: "none", sm: "block" } }}

//           style={{
//             objectFit: "cover",
//             height: "40px",
//             width: "10%"
//           }}>
//          <img src={logo} alt=""
//          style={{
//           width: "100%",
//           height: "100%"
//          }}/> {" "}
//           </Typography>

//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>

//             <StyledInputBase
//               placeholder="Search…"
//               onInput={handleSearch}
//               value={search}
//               inputProps={{ "aria-label": "search" }}
//             />
//             <Box
//               zIndex={4000}
//               position="absolute"
//               backgroundColor="#F4EEFF"
//               color="black"
//               display={showDiv ? "block" : "none"}
//               width="100%"
//               borderRadius="5px"
//               boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
//             >
//               {searchData.map((elem) => (
//                 <Box
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="center"
//                   key={elem._id}
//                   onClick={() => {
//                     setSearch("");
//                     navigate(`product/${elem._id}`);
//                     setShowDiv(false);
//                   }}
//                 >
//                   <p style={{ textAlign: "center" }}>{elem.title}</p>
//                 </Box>
//               ))}
//             </Box>
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: "flex", md: "flex" } }} gap={1}>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//               style={{
//                 borderRadius: "10px",
//                 width: "auto",
//                 padding: "8px",
//                 margin: "auto 10px",
//                 backgroundColor: "white",
//               }}

//               sx={{
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   color: 'grey',
//                 },
//               }}
//             >
//               <Typography>{!isAuth ? "Login" : userDet.name}</Typography>
//               <KeyboardArrowDownRoundedIcon />
//             </IconButton>

//             <IconButton
//               size="large"
//               color="inherit"
//               onClick={() => handleRightMenu("cart")}
//               style={{
//                 borderRadius: "50%",

//               }}

//               sx={{
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                    color: "green",
//                    backgroundColor: "#D4F6D4"
//                 },
//               }}
//             >
//               <Badge badgeContent={cartItems.length} color="secondary">
//                 <ShoppingCartRoundedIcon />
//               </Badge>
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <BecomeSeller />
//       {becomeSeller && (
//         <BecomeSeller open={becomeSeller} setBecomeSeller={setBecomeSeller} />
//       )}
//       {renderMenu}
//     </Box>
//   );
// }

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Redux/authSlice";
import { setCart } from "./Redux/cartSlice";
import { setActiveProd } from "./Redux/activeProdSlice";
import BecomeSeller from "./User/BecomeSeller";
import axios from "axios";
import logo from "../assets/logo.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 5),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Navbar() {
  const { isAuth } = useSelector((state) => state.auth);
  const { userDet } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
  const [becomeSeller, setBecomeSeller] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);
  const [tId, setTId] = React.useState(null);
  const [showDiv, setShowDiv] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isCategoryMenuOpen = Boolean(categoryAnchorEl);

  const handleProfileMenuOpen = (event) => {
    if (!isAuth) {
      navigate("/signin");
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryMenuOpen = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryMenuClose = () => {
    setCategoryAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setCart([]));
    handleMenuClose();
    navigate("/signin");
  };

  const handleBecomeSeller = () => {
    if (userDet && (userDet.type === "seller" || userDet.type === "admin")) {
      setAnchorEl(null);
      navigate("/dashboard");
    } else {
      setBecomeSeller(true);
    }
  };

  const handleMyAccount = () => {
    handleMenuClose();
    navigate("/my-account");
  };

  const handleRightMenu = (menu) => {
    if (isAuth) {
      navigate(menu === "cart" ? "/cart" : "/wishlist");
    } else {
      navigate("/signin");
    }
  };

  const redirectToHome = () => {
    navigate("/");
  };

  const handleCategoryClick = (category) => {
    dispatch(setActiveProd(category));
    navigate("/all-products");
    handleCategoryMenuClose();
  };

  const handleSearch = (e) => {
    setShowDiv(false);
    e.preventDefault();
    setSearch(() => e.target.value);
    if (tId) {
      clearTimeout(tId);
    }
    if (search.length > 2) {
      setTId(
        setTimeout(() => {
          axios
            .get(
              `${process.env.REACT_APP_SERVER_BASE_URL}/admin/prod/${search}`
            )
            .then((res) => {
              setShowDiv(true);
              setTimeout(() => {
                setShowDiv(false);
              }, 6000);
              setSearchData(res.data);
            });
        }, 100)
      );
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <StyledMenu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMyAccount}>Profile</MenuItem>
      <MenuItem onClick={handleMyAccount}>My account</MenuItem>
      <MenuItem onClick={handleBecomeSeller}>
        {userDet && (userDet.type === "seller" || userDet.type === "admin")
          ? "Admin Dashboard"
          : "Become a seller"}
      </MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </StyledMenu>
  );

  const categoryMenuId = "category-menu";
  const renderCategoryMenu = (
    <StyledMenu
      anchorEl={categoryAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={categoryMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isCategoryMenuOpen}
      onClose={handleCategoryMenuClose}
    >
      <MenuItem onClick={redirectToHome}>Home</MenuItem>
      <MenuItem onClick={() => handleCategoryClick("all")}>Browse All</MenuItem>
      <MenuItem onClick={() => handleCategoryClick("electronics")}>
        Electronics
      </MenuItem>
      <MenuItem onClick={() => handleCategoryClick("footwears")}>
        Footwears
      </MenuItem>
      <MenuItem onClick={() => handleCategoryClick("shirts")}>Shirts</MenuItem>
      <MenuItem onClick={() => handleCategoryClick("cosmetics")}>
        Cosmetics
      </MenuItem>
    </StyledMenu>
  );

  const { pathname } = useLocation();

  if (pathname.startsWith("/dashboard") || pathname.startsWith("/users")) {
    return null;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: { xs: "100%", sm: "80%" },
        margin: "auto",
      }}
    >
      <AppBar
        position="static"
        color="secondary"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open menu"
            sx={{
              mr: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                color: "green",
                backgroundColor: "#D4F6D4",
              },
            }}
            onClick={handleCategoryMenuOpen}
          >
            <MenuIcon style={{ fontSize: 30, color: "#424874" }} />
          </IconButton>

          <Typography
            onClick={redirectToHome}
            component="div"
            className="storeName"
            sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
            style={{
              objectFit: "cover",
              height: "40px",
              width: "10%",
            }}
          >
            <img
              src={logo}
              alt="Store logo"
              style={{ width: "100%", height: "100%" }}
            />
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              onInput={handleSearch}
              value={search}
              inputProps={{ "aria-label": "search" }}
            />
            <Box
              zIndex={4000}
              position="absolute"
              backgroundColor="#F4EEFF"
              color="black"
              display={showDiv ? "block" : "none"}
              width="100%"
              borderRadius="5px"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            >
              {searchData.map((elem) => (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  key={elem._id}
                  onClick={() => {
                    setSearch("");
                    navigate(`product/${elem._id}`);
                    setShowDiv(false);
                  }}
                >
                  <p style={{ textAlign: "center" }}>{elem.title}</p>
                </Box>
              ))}
            </Box>
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }} gap={1}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{
                borderRadius: "10px",
                width: "auto",
                padding: "8px",
                margin: "auto 10px",
                backgroundColor: "white",
              }}
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "grey",
                },
              }}
            >
              <Typography>
                {isAuth && userDet ? userDet.name : "Login"}
              </Typography>

              <KeyboardArrowDownRoundedIcon />
            </IconButton>

            <IconButton
              size="large"
              color="inherit"
              onClick={() => handleRightMenu("cart")}
              style={{ borderRadius: "50%" }}
              sx={{
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "green",
                  backgroundColor: "#D4F6D4",
                },
              }}
            >
              <Badge
                badgeContent={isAuth ? cartItems.length : 0}
                color="secondary"
              >
                <ShoppingCartRoundedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderCategoryMenu}
      {becomeSeller && (
        <BecomeSeller open={becomeSeller} setBecomeSeller={setBecomeSeller} />
      )}
    </Box>
  );
}
