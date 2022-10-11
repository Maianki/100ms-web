import { useEffect } from "react";
import { useHMSStore, selectLocalPeerRole } from "@100mslive/react-sdk";
import { useWhenAloneInRoom } from "../../common/hooks";
import { usePlaylist } from "./usePlaylist";

export function usePlayVideoPlaylistWhenAlone() {
  const localRole = useHMSStore(selectLocalPeerRole);
  const { alone } = useWhenAloneInRoom(100);
  const { actions, list } = usePlaylist("isVideoPlaylist");

  useEffect(() => {
    if (alone && localRole?.name === "patient") {
      (async () => {
        await actions.play(list[0].id);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
