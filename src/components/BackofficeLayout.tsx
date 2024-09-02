import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Nav from "./Nav";
// import AppRouter from "./AppRouter";
import Sidebar from "./Sidebar";

export default function Layout({ children }: any) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <Nav /> */}
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* <AppRouter /> */}
        {children}
      </Box>
    </Box>
  );
}
