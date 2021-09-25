import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
interface Props {
  children: React.ReactElement;
}
const ElevationScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

interface AppHeaderProps {}

const AppHeader: React.FunctionComponent<AppHeaderProps> = () => {
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar variant="dense">
            <Container maxWidth="lg">
              <Typography>Hello</Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar variant="dense" />
    </React.Fragment>
  );
};

export default AppHeader;
