import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}

          <Typography variant="h3" className={classes.title}>
            facebook
          </Typography>

          {/* <form>
            <div style={{ display: "flex" }}>
              <div>
                <label>
                  Email Id <br />
                  <input type="text" name="email id" />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <br />
                  <input type="text" name="password" />
                  <br />
                  Forgotten password?
                </label>{" "}
              </div>
            </div>
          </form>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
