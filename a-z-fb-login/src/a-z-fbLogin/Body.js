import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { Button, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),

    width: 200
  }
}));

export default function Body() {
  return (
    <div>
      <Box mt={3}>
        <img
          src={
            "https://i.pinimg.com/originals/64/c3/fd/64c3fdcb0c665044bebe5029750a97dc.png"
          }
          height="75px"
          width="auto"
          alt="logo"
        />
      </Box>
      <Box mt={3}>Login to your Facebook account to connect to A-Z</Box>
      <Box mt={2}>
        {" "}
        <form>
          <label>
            <TextField
              id="Number"
              label="Mobile no or email adress"
              variant="outlined"
            />
            <br />
          </label>
          <br />
          <label>
            <TextField
              id="New Password"
              label="Facebook Password"
              variant="outlined"
            />
          </label>
        </form>
      </Box>

      <br />

      <Button variant="contained" color="primary">
        Log in
      </Button>
      <Box mt={2}>Create account</Box>
      <Box mt={2}>Not now</Box>
    </div>
  );
}
