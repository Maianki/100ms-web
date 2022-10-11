import React, { Fragment, useState } from "react";
import { Tooltip } from "@100mslive/react-ui";
import { MdOutlineCameraswitch } from "react-icons/md";
import {
  useDevices,
  DeviceType,
  useHMSStore,
  selectIsLocalVideoEnabled,
} from "@100mslive/react-sdk";
import IconButton from "../IconButton";

export function ToggleCamera() {
  const isVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const [isBackCameraEnabled, setIsBackCameraEnabled] = useState(false);
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices();

  const toggleBackCamera = () => {
    if (isVideoEnabled && allDevices.videoInput.length === 2) {
      const devices = allDevices.videoInput.filter(
        video => video.deviceId !== selectedDeviceIDs?.videoInput
      );
      updateDevice({
        deviceId: devices[0].deviceId,
        deviceType: DeviceType.videoInput,
      });
      setIsBackCameraEnabled(prev => !prev);
    }
  };

  console.log("all Devices", allDevices.videoInput);
  console.log("current devices id", selectedDeviceIDs?.videoInput);
  return (
    <Fragment>
      <Tooltip title={`Turn ${isBackCameraEnabled ? "front" : "back"} camera`}>
        <IconButton
          key="toggleBackCamera"
          onClick={toggleBackCamera}
          data-testid="switch_camera_btn"
        >
          {isBackCameraEnabled ? (
            <MdOutlineCameraswitch data-testid="switch_camera_btn" />
          ) : (
            <MdOutlineCameraswitch data-testid="switch_camera_btn" />
          )}
        </IconButton>
      </Tooltip>
    </Fragment>
  );
}
