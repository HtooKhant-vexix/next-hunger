import React from "react";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Drawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import { Box, List, Toolbar } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import TableBarIcon from "@mui/icons-material/TableBar";

const Sidebar = () => {
  const drawerWidth = 240;
  const sideBar = [
    {
      name: "Home",
      icon: <HomeIcon className="text-3xl text-gray-400" />,
      to: "/backoffice",
      id: 1,
    },
    {
      name: "Location",
      icon: <FmdGoodIcon className="text-3xl text-gray-400" />,
      to: "/backoffice/location",
      id: 2,
    },
    {
      name: "Order",
      icon: <BookmarkIcon className="text-3xl text-gray-400" />,
      to: "/backoffice/order",
      id: 3,
    },
    {
      name: "Table",
      icon: <TableBarIcon className="text-3xl text-gray-400" />,
      to: "/backoffice/table",
      id: 8,
    },
    {
      name: "Addon",
      icon: <ShoppingCartIcon className="text-3xl text-gray-400" />,
      to: "/backoffice/addon",
      id: 4,
    },
    {
      name: "Addon-Category",
      icon: <AddShoppingCartIcon className="text-3xl text-gray-400" />,
      to: "/backoffice/addon-category",
      id: 7,
    },
    {
      name: "Menu",
      icon: <InsertDriveFileIcon className="text-3xl text-gray-400" />,
      to: "/backoffice/menu",
      id: 5,
    },
    {
      name: "Menu-Category",
      icon: <NoteAddIcon className="text-3xl text-gray-400" />,
      to: "/backoffice/menu-category",
      id: 6,
    },
    {
      name: "Setting",
      icon: <SettingsIcon className="text-3xl text-gray-400" />,
      to: "/backoffice/setting",
      id: 7,
    },
  ];
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {sideBar.map((text, index) => (
            <Link href={text.to} key={index}>
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        {/* <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
