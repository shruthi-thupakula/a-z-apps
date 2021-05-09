import React from "react";
import { Box, Container } from "@material-ui/core";

export default function Whatsapp() {
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
                  "data:image/jpeg;base64,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"
                }
                height="75px"
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
              Phone number
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
                  fontSize: "16px",

                  fontStyle: "normal",
                  lineHeight: "2"
                }}
              >
                OTP
              </Box>
            </Box>
            <Box
              textAlign="left"
              style={{
                fontSize: "14px"
              }}
            >
              ____ ____ ____ ____ ____ ____
            </Box>
            <Box
              textAlign="right"
              mt={1}
              color="blue"
              style={{
                fontSize: "14px",

                fontStyle: "normal",
                lineHeight: "2"
              }}
            >
              Resend
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  );
}
