import { Box, Typography } from "@mui/material";
import * as React from "react";
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <Box component="footer" sx={{ marginTop: "auto" }}>
      <Typography>Made with love</Typography>
    </Box>
  );
};

export default Footer;
