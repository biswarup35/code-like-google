import Link from "next/link";
import { Menu } from "../../../config";
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
          {Menu.map((menu) => (
            <Link key={menu.name} href={menu.href} passHref>
              <ListItem button>
                <ListItemText primary={menu.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default MobileMenu;
