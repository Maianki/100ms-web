import { useEffect } from "react";
import {
  useHMSStore,
  selectLocalPeerRoleName,
  selectIsConnectedToRoom,
  selectPeerCount,
  useHMSActions,
} from "@100mslive/react-sdk";
import { usePlaylist } from "./usePlaylist";

export function PlayVideoPlaylistWhenAlone() {
  const hmsActions = useHMSActions();
  const localRole = useHMSStore(selectLocalPeerRoleName);
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const peerCount = useHMSStore(selectPeerCount);
  // const playlist = useHMSStore(selectVideoPlaylist.list);
  const alone = isConnected && peerCount === 1;
  const { actions, list } = usePlaylist("isVideoPlaylist");

  // const firstVideo = list[0];
  // const id = firstVideo?.id;

  useEffect(() => {
    let timerID = setTimeout(() => {
      if (alone && localRole === "patient") {
        console.log("----->", list);
        (async () => {
          console.log("hello");
          await actions.play("video1");
        })();
      } else {
        (async () => {
          console.log(actions);
          await hmsActions.videoPlaylist.stop("video1");
        })();
      }
    }, 1000);
    return () => clearTimeout(timerID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alone]);

  return null;
}
