import React from "react";
import { Box, Container, Button } from "@material-ui/core";

export default function Body() {
  return (
    <Container maxWidth="xs">
      <Box display="flex" textAlign="center">
        <Container maxWidth="md">
          <Box style={{ paddingTop: "150px" }}>
            <Box>
              <img
                alt="12"
                class="jss57"
                src={
                  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                }
                height="50px"
              />
            </Box>

            <Box
              style={{
                fontSize: "20px",

                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
                color: "#000000"
              }}
              mt={4}
            >
              Sign in
            </Box>
            <Box mt={1}>to continue to A-Z</Box>

            <Box
              style={{
                height: "60px",
                borderRadius: "3px",
                border: "solid 1px #ececec",
                backgroundColor: "#ffffff",
                fontSize: "12px",
                fontWeight: "normal",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "2"
              }}
              textAlign="left"
              mt={2}
            >
              Email or Phone number
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
            >
              <Box
                textAlign="left"
                color="blue"
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "2"
                }}
              >
                Forgot Email?
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              textAlign="left"
              style={{
                fontSize: "14px"
              }}
              mt={3}
            >
              To continue, Google will share your name, email address, language
              preference, and profile picture with A-Z. Before using this app,
              you can review A-Z's privacy policy and terms of service.
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Box color="blue" mt={4}>
                Create account
              </Box>
              <Box mt={2}>
                <Button
                  style={{
                    width: "146px",
                    height: "50px",
                    borderRadius: "3px",
                    backgroundColor: "#1f86bc",
                    color: "white"
                  }}
                  minHeight={50}
                  width={"auto"}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
