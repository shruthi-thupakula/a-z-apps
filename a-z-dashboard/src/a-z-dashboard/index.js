import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CommuteIcon from "@material-ui/icons/Commute";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
 import Target from "./Target";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Box textAlign="left" ml={1}>
          <img
            class="jss57"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpy36zeeooLbNfbJx3dZJw4WLWkDy8I7558F7WfPtME196FkoY"
            alt="a-z"
            height="75px"
          />
        </Box>
        {/* <Box
                  style={{
                    fontSize: "52px",
                    fontWeight: "bold",

                    fontFamily: "Squada One",
                    color: "#ed1a1a"
                  }}
                  
                >
                  A-Z
                </Box> */}
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",

            flexDirection: "column"
          }}
        >
          <Box>
            <List>
              {[
                { name: "Food", icon: <FastfoodIcon /> },
                { name: "Shopping", icon: <ShoppingBasketIcon /> },
                { name: "Rides", icon: <MotorcycleIcon /> },
                { name: "Wallets", icon: <AccountBalanceWalletIcon /> },
                { name: "Parivahan", icon: <CommuteIcon /> },
                { name: "My Acoount", icon: <AccountCircleIcon /> }
              ].map((item, index) => (
                <ListItem button key={item.name}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <LockOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Drawer>
      <main className={classes.content}>
         <Target /> 
         </main>
    </div>
  );
}
