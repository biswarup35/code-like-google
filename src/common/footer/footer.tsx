import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <Box component="footer" sx={{ marginTop: "auto" }}>
      <Box sx={{ py: 5, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Typography align="center">Footer content</Typography>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "common.black", py: 1 }}>
        <Typography align="center" color="common.white">
          Made with love &#10084;&#65039;
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
