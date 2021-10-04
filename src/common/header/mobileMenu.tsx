import Link from "next/link";
import {
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  SwipeableDrawerProps,
} from "@mui/material";
import * as React from "react";

interface MobileMenuProps extends SwipeableDrawerProps {}

const MobileMenu: React.FunctionComponent<MobileMenuProps> = ({
  onClose,
  onOpen,
  open,
}) => {
  return (
    <React.Fragment>
      <SwipeableDrawer open={open} onOpen={onOpen} onClose={onClose}>
        <List sx={{ minWidth: 240 }}>
          <Link href="/" passHref>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href="/earbuds" passHref>
            <ListItem button>
              <ListItemText primary="Earbuds" />
            </ListItem>
          </Link>
          <Link href="/speakers" passHref>
            <ListItem button>
              <ListItemText primary="Speakers" />
            </ListItem>
          </Link>
          <Link href="/headphones" passHref>
            <ListItem button>
              <ListItemText primary="Headphones" />
            </ListItem>
          </Link>
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default MobileMenu;
