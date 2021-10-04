import * as React from "react";
import { Box, Tooltip, Zoom } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import MicIcon from "@mui/icons-material/Mic";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import HeadphonesBatteryIcon from "@mui/icons-material/HeadphonesBattery";
import SurroundSoundIcon from "@mui/icons-material/SurroundSound";
import SpeakerIcon from "@mui/icons-material/Speaker";

interface HeadphoneSpecsProps {
  specs: {
    playbackTime: string | number;
    sound: string;
    bass: string;
    bluetoothVersion?: string | number;
    mic?: boolean;
  };
}

const HeadphoneSpecs: React.FunctionComponent<HeadphoneSpecsProps> = ({
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
          title="Playback time"
          TransitionComponent={Zoom}
          arrow
          placement="top"
        >
          <Box sx={style}>
            <div id="icon">
              <HeadphonesBatteryIcon />
            </div>
            <div id="name">{specs.playbackTime}hr</div>
          </Box>
        </Tooltip>
        <Tooltip
          title="Sound type"
          TransitionComponent={Zoom}
          arrow
          placement="top"
        >
          <Box sx={style}>
            <div id="icon">
              <SurroundSoundIcon />
            </div>
            <div id="name">{specs.sound}</div>
          </Box>
        </Tooltip>
        <Tooltip title="Bass" TransitionComponent={Zoom} arrow placement="top">
          <Box sx={style}>
            <div id="icon">
              <SpeakerIcon />
            </div>
            <div id="name">{specs.bass}</div>
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

export default HeadphoneSpecs;
