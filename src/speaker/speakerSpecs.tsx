import * as React from "react";
import { Box, Tooltip, Zoom } from "@mui/material";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import SurroundSoundIcon from "@mui/icons-material/SurroundSound";
import SpeakerIcon from "@mui/icons-material/Speaker";
import SettingsIcon from "@mui/icons-material/Settings";

interface SpeakerSpecsProps {
  specs: {
    power: string | number;
    playBackTime: string | number;
    sound: string;
    bluetoothVersion: string | number;
    configuration: string;
  };
}

const SpeakerSpecs: React.FunctionComponent<SpeakerSpecsProps> = ({
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
          title="Power output"
          TransitionComponent={Zoom}
          arrow
          placement="top"
        >
          <Box sx={style}>
            <div id="icon">
              <SpeakerIcon />
            </div>
            <div id="name">{specs.power}W</div>
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
        <Tooltip
          title="Playback time"
          TransitionComponent={Zoom}
          arrow
          placement="top"
        >
          <Box sx={style}>
            <div id="icon">
              <BatteryChargingFullIcon />
            </div>
            <div id="name">{specs.playBackTime}hr</div>
          </Box>
        </Tooltip>
        <Tooltip
          title="Configuration type"
          TransitionComponent={Zoom}
          arrow
          placement="top"
        >
          <Box sx={style}>
            <div id="icon">
              <SettingsIcon />
            </div>
            <div id="name">{specs.configuration}</div>
          </Box>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
};

export default SpeakerSpecs;
