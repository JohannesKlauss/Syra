import React, { useContext } from 'react';
import useRegionDawRecordingSync from '../../../../hooks/ui/region/useRegionDawRecordingSync';
import { RegionContext } from '../../../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../../recoil/regionStore';
import useRegionColor from '../../../../hooks/ui/region/useRegionColor';
import BaseRegion from '../BaseRegion';
import ManipulationContainer from '../Manipulations/ManipulationContainer';
import { RegionName, TopBar } from '../AudioRegion/AudioRegion.styled';
import { Flex } from '@chakra-ui/react';
import { SiMidi } from 'react-icons/si';
import useMidiRegionScheduler from '../../../../hooks/tone/useMidiRegionScheduler';
import ResizableBox from '../../../atoms/ResizableBox';
import useRegionWidth from '../../../../hooks/ui/region/useRegionWidth';
import useUpdateRegionPosition from '../../../../hooks/recoil/region/useUpdateRegionPosition';
import usePixelToTicks from '../../../../hooks/tone/usePixelToTicks';
import useTicksToPixel from '../../../../hooks/tone/useTicksToPixel';
import MidiRegionVisualization from './MidiRegionVisualization';
import { arrangeWindowStore } from "../../../../recoil/arrangeWindowStore";
import useChangeChannelOfRegion from "../../../../hooks/recoil/region/useChangeChannelOfRegion";

const MidiRegion: React.FC = () => {
  const regionId = useContext(RegionContext);
  const name = useRecoilValue(regionStore.name(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const color = useRegionColor(false);
  const regionWidth = useRegionWidth();
  const pixelToTicks = usePixelToTicks();
  const ticksToPixel = useTicksToPixel();
  const updatePosition = useUpdateRegionPosition();
  const updateAssignedChannel = useChangeChannelOfRegion(regionId);

  useRegionDawRecordingSync();
  useMidiRegionScheduler();

  const onPositionChanged = (start: number, duration: number, offsetDelta: number) => {
    updatePosition(pixelToTicks(start), pixelToTicks(duration), pixelToTicks(offsetDelta));
  };

  const onYChanged = (y: number) => {
    updateAssignedChannel(y / trackHeight);
  };

  return (
    <ResizableBox
      baseX={ticksToPixel(start)}
      baseWidth={regionWidth}
      minWidth={40}
      snapToY={trackHeight}
      onPositionChanged={onPositionChanged}
      onYChanged={onYChanged}
      allowOverExtendingStart
    >
      <BaseRegion>
        <TopBar color={color}>
          <Flex justify={'flex-start'} align={'center'} ml={2}>
            <SiMidi />
            <RegionName color={color}>{name}</RegionName>
          </Flex>
        </TopBar>
        <ManipulationContainer>
          <MidiRegionVisualization />
        </ManipulationContainer>
      </BaseRegion>
    </ResizableBox>
  );
};

export default MidiRegion;
