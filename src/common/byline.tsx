import { Avatar, Box, Typography } from "@mui/material";
import * as React from "react";
interface BylineProps {}

const Byline: React.FunctionComponent<BylineProps> = () => {
  return (
    <Box
      sx={{
        my: 1,
        display: "flex",
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar>A</Avatar>
        <Typography>Company Name</Typography>
      </Box>
      <Box>
        <time>Sun Sep 26 2021</time>
      </Box>
    </Box>
  );
};

export default Byline;
