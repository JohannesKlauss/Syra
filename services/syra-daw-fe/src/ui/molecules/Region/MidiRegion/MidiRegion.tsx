import React, { useContext, useEffect, useState } from "react";
import useRegionDawRecordingSync from "../../../../hooks/ui/region/useRegionDawRecordingSync";
import { RegionContext } from "../../../../providers/RegionContext";
import { useRecoilValue } from "recoil";
import { regionStore } from "../../../../recoil/regionStore";
import useQuarterToPixel from "../../../../hooks/ui/useQuarterToPixel";
import { useIsHotkeyPressed } from "react-hotkeys-hook";
import useRegionColor from "../../../../hooks/ui/region/useRegionColor";
import BaseRegion from "../BaseRegion";
import ManipulationContainer from "../Manipulations/ManipulationContainer";
import { RegionName, TopBar } from "../AudioRegion/AudioRegion.styled";
import { Flex } from '@chakra-ui/react';
import { SiMidi } from 'react-icons/si';

const MidiRegion: React.FC = () => {
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

  useEffect(() => {
    if (!isMoving) {
      setTop(0);
    }
  }, [isMoving]);

  const isDuplicating = isPressed('alt') && isMoving;

  return (
    <BaseRegion top={top} left={left} isMoving={isMoving}>
      <TopBar color={color}>
        <Flex justify={'flex-start'} align={'center'} ml={2}>
          <SiMidi/>
          <RegionName color={color}>{name}</RegionName>
        </Flex>
      </TopBar>
      <ManipulationContainer onUpdateLeftOffset={left => setLeft(left)}
                             onChangeIsMoving={isMoving => setIsMoving(isMoving)}
                             onUpdateTopOffset={cssTop => setTop(cssTop)}>
        Midi!
      </ManipulationContainer>
    </BaseRegion>
  );
};

export default MidiRegion;
