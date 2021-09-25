import * as React from "react";
import { Box, Tooltip, Zoom } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import MicIcon from "@mui/icons-material/Mic";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import WifiIcon from "@mui/icons-material/Wifi";
import HeadphonesBatteryIcon from "@mui/icons-material/HeadphonesBattery";
interface ProductSpecsProps {
  specs: {
    batteryLife: string | number;
    range: string | number;
    bluetoothVersion?: string | number;
    mic?: boolean;
  };
}

const ProductSpecs: React.FunctionComponent<ProductSpecsProps> = ({
  specs,
}) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  } as const;
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: 2,
        }}
      >
        <Tooltip
          title="Battery life"
          TransitionComponent={Zoom}
          arrow
          placement="top"
        >
          <Box sx={style}>
            <div id="icon">
              <HeadphonesBatteryIcon />
            </div>
            <div id="name">{specs.batteryLife} hrs</div>
          </Box>
        </Tooltip>
        <Tooltip title="Range" TransitionComponent={Zoom} arrow placement="top">
          <Box sx={style}>
            <div id="icon">
              <WifiIcon />
            </div>
            <div id="name">{specs.range}m</div>
          </Box>
        </Tooltip>
        <Tooltip
          title="Bluetooth version"
          TransitionComponent={Zoom}
          arrow
          placement="top"
        >
          <Box sx={style}>
            <div id="icon">
              <BluetoothIcon />
            </div>
            <div id="name">v{specs.bluetoothVersion}</div>
          </Box>
        </Tooltip>
        <Tooltip title="Mic" TransitionComponent={Zoom} arrow placement="top">
          <Box sx={style}>
            <div id="icon">
              <MicIcon />
            </div>
            <div id="name">
              {specs.mic ? (
                <CheckCircleIcon sx={{ color: "green" }} />
              ) : (
                <CancelIcon sx={{ color: "red" }} />
              )}
            </div>
          </Box>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
};

export default ProductSpecs;
