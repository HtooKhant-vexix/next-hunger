import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
// import Login from "../pages/Login";
import Register from "./Register";
// import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  // const logined = localStorage.getItem("token");
  // const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar className="flex justify-between mx-10">
        <Typography variant="h6" noWrap component="div">
          Hunger Zone
        </Typography>
        {/* {logined ? ( */}
        {/* <Button
          variant="outlined"
          // onClick={() => {
          //   localStorage.removeItem("token"), navigate("/login");
          // }}
          color="inherit"
        >
          Logout
        </Button> */}
        {/* ) : ( */}
          <Register label="Register" variant="outlined" />
        {/* )} */}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
