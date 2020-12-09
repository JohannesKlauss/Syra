import { useCallback, useContext } from "react";
import useCreateAudioRegion from "./useCreateAudioRegion";
import usePixelToQuarter from "../../ui/usePixelToQuarter";
import useSnapCtrlPixelCalc from "../../ui/useSnapCtrlPixelCalc";
import { ChannelContext } from "../../../providers/ChannelContext";

export default function useOnDropCreateRegion() {
  const channelId = useContext(ChannelContext);
  const createRegion = useCreateAudioRegion();
  const pixelToQuarter = usePixelToQuarter();
  const calcSnappedX = useSnapCtrlPixelCalc();

  return useCallback(async (files: File[], _, e) => {
    const x = e.clientX - e.target.getBoundingClientRect().left; // x position within the track.

    if (files.length > 0) {
      // On a existing track we only use the first file.
      // TODO: THE SUBSEQUENT files should be move to the tracks beneath this one or create complete new channels.
      console.log('type', files[0].type);

      await createRegion(channelId, files[0], pixelToQuarter(calcSnappedX(x)));
    }
  }, [createRegion, pixelToQuarter, calcSnappedX, channelId]);
}