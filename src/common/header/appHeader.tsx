import * as React from "react";
import Link from "next/link";
import ElevationScroll from "./elevationScroll";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/menu";
import MobileMenu from "./mobileMenu";

interface AppHeaderProps {}

const AppHeader: React.FunctionComponent<AppHeaderProps> = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const [open, setOpen] = React.useState(false);

  const handleOnOpen = () => {
    setOpen(true);
  };
  const handleOnClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar variant="dense">
            <Container maxWidth="lg" sx={{ display: "flex" }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {smUp || (
                  <IconButton color="inherit" onClick={handleOnOpen}>
                    <MenuIcon />
                  </IconButton>
                )}
                <Typography>LOGO</Typography>
              </Box>
              {smUp && (
                <Box>
                  <Link href="/" passHref>
                    <Button variant="text" color="inherit">
                      Home
                    </Button>
                  </Link>
                  <Link href="/earbuds" passHref>
                    <Button variant="text" color="inherit">
                      Earbuds
                    </Button>
                  </Link>
                  <Link href="/speakers" passHref>
                    <Button variant="text" color="inherit">
                      Speakers
                    </Button>
                  </Link>
                </Box>
              )}
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <MobileMenu open={open} onClose={handleOnClose} onOpen={handleOnOpen} />
    </React.Fragment>
  );
};

export default AppHeader;
