import React from "react";
import { Box, Container, Grid, Button } from "@material-ui/core";

export default function AzLogin() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box textAlign="center">
            <Container maxWidth="lg">
              <Box style={{ paddingTop: "120px" }}>
                <Box
                  style={{
                    fontSize: "52px",
                    fontWeight: "bold",

                    fontFamily: "Squada One",
                    color: "#ed1a1a"
                  }}
                  mt={4}
                >
                  A-Z
                </Box>
                <Box
                  style={{
                    fontSize: "20px",
                    fontWeight: "600"
                  }}
                  mt={5}
                >
                  Login with
                </Box>

                <Box mt={2}>
                  <Button
                    style={{
                      width: "146px",
                      height: "50px",
                      borderRadius: "3px",
                      backgroundColor: "#f3f7f8"
                    }}
                    minHeight={50}
                    width={"auto"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      src={"https://img.icons8.com/color/2x/google-logo.png"}
                      height="25px"
                      width="auto"
                    />
                  </Button>
                  <Box m={2}>
                    <Button
                      style={{
                        width: "146px",
                        height: "50px",
                        borderRadius: "3px",
                        backgroundColor: "#f3f7f8"
                      }}
                      minHeight={50}
                      width={"auto"}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mt={2}
                    >
                      <img
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMJ_mPXYh9WkURhPGpLr6xGrlN5fnUCIz7MLa1G3kfWdp2ZOvG"
                        }
                        height="35px"
                        width="auto"
                      />
                    </Button>
                  </Box>
                  <Button
                    style={{
                      width: "146px",
                      height: "50px",
                      borderRadius: "3px",
                      backgroundColor: "#f3f7f8"
                    }}
                    minHeight={50}
                    width={"auto"}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      src={
                        "https://seeklogo.com/images/W/whatsapp-icon-logo-8CA4FB831E-seeklogo.com.png"
                      }
                      height="30px"
                      width="auto"
                    />
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
