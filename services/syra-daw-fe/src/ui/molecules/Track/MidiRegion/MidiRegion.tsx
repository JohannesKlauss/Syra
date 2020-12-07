import React, { useContext, useEffect, useState } from "react";
import useRegionDawRecordingSync from "../../../../hooks/ui/region/useRegionDawRecordingSync";
import useRegionScheduler from "../../../../hooks/tone/useRegionScheduler";
import useRegionSelfDestruct from "../../../../hooks/recoil/region/useRegionSelfDestruct";
import { RegionContext } from "../../../../providers/RegionContext";
import { useRecoilValue } from "recoil";
import { regionStore } from "../../../../recoil/regionStore";
import useQuarterToPixel from "../../../../hooks/ui/useQuarterToPixel";
import { useIsHotkeyPressed } from "react-hotkeys-hook";
import useRegionColor from "../../../../hooks/ui/region/useRegionColor";

interface Props {

}

const MidiRegion: React.FC<Props> = ({}) => {
  const regionId = useContext(RegionContext);
  const isMuted = useRecoilValue(regionStore.isMuted(regionId));
  const isSelected = useRecoilValue(regionStore.isSelected(regionId));
  const name = useRecoilValue(regionStore.name(regionId));
  const trimStart = useRecoilValue(regionStore.trimStart(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const quarterToPixel = useQuarterToPixel();
  const isPressed = useIsHotkeyPressed();
  const color = useRegionColor(false);
  const [left, setLeft] = useState(quarterToPixel(trimStart + start));
  const [top, setTop] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useRegionDawRecordingSync();
  useRegionScheduler();
  useRegionSelfDestruct(regionId);

  useEffect(() => {
    if (!isMoving) {
      setTop(0);
    }
  }, [isMoving]);

  const isDuplicating = isPressed('alt') && isMoving;

  return (
    <>
    </>
  );
};

export default MidiRegion;
