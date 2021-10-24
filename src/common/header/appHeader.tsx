import * as React from "react";
import Link from "next/link";
import ElevationScroll from "./elevationScroll";
import { Menu } from "../../../config";
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
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/menu";
import MobileMenu from "./mobileMenu";

interface AppHeaderProps {}

const AppHeader: React.FunctionComponent<AppHeaderProps> = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const theme = useTheme();
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
        <AppBar
          sx={{
            bgcolor: "common.white",
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
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
                  <IconButton
                    sx={{ color: "common.black" }}
                    onClick={handleOnOpen}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
                <Typography color="text.primary">LOGO</Typography>
              </Box>
              {smUp && (
                <Box>
                  {Menu.map((menu) => (
                    <Link key={menu.name} href={menu.href} passHref>
                      <Button variant="text" sx={{ color: "common.black" }}>
                        {menu.name}
                      </Button>
                    </Link>
                  ))}
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
