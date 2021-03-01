import React, { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../recoil/regionStore';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useRegionColor from '../../../hooks/ui/region/useRegionColor';
import useRegionWidth from '../../../hooks/ui/region/useRegionWidth';
import usePixelToTicks from '../../../hooks/tone/usePixelToTicks';
import useTicksToPixel from '../../../hooks/tone/useTicksToPixel';
import useUpdateRegionPosition from '../../../hooks/recoil/region/useUpdateRegionPosition';
import useDuplicateRegion from '../../../hooks/recoil/region/useDuplicateRegion';
import useChangeChannelOfRegion from '../../../hooks/recoil/region/useChangeChannelOfRegion';
import useRegionDawRecordingSync from '../../../hooks/ui/region/useRegionDawRecordingSync';
import useMidiRegionScheduler from '../../../hooks/tone/useMidiRegionScheduler';
import ClonableResizableBox from '../../atoms/ClonableResizableBox';
import BaseRegion from './BaseRegion';
import { RegionName, TopBar } from './AudioRegion/AudioRegion.styled';
import { Flex, Icon } from '@chakra-ui/react';
import ManipulationContainer from './Manipulations/ManipulationContainer';
import MidiRegionVisualization from './MidiRegion/MidiRegionVisualization';
import { channelStore } from '../../../recoil/channelStore';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelTypeMap } from '../../../const/channels';
import { ChannelType } from '../../../types/Channel';
import useAudioRegionScheduler from '../../../hooks/tone/useAudioRegionScheduler';
import { MdCloudDone, MdCloudUpload } from 'react-icons/md';
import { determineTextColor } from '../../../utils/color';

interface Props {}

const Region: React.FC<Props> = ({}) => {
  const channelId = useContext(ChannelContext);
  const regionId = useContext(RegionContext);
  const name = useRecoilValue(regionStore.name(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const isInSync = useRecoilValue(regionStore.isInSync(regionId));
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const color = useRegionColor(false);
  const regionWidth = useRegionWidth();
  const pixelToTicks = usePixelToTicks();
  const ticksToPixel = useTicksToPixel();
  const updatePosition = useUpdateRegionPosition();
  const duplicateRegion = useDuplicateRegion();
  const updateAssignedChannel = useChangeChannelOfRegion();
  const type = useRecoilValue(channelStore.type(channelId));

  useRegionDawRecordingSync();

  // You should never call hooks conditionally, but type will always remain the same.
  // So we are always calling either midi scheduling or audio scheduling for the life time of a region.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  type === ChannelType.INSTRUMENT ? useMidiRegionScheduler() : useAudioRegionScheduler();

  const onPositionChanged = (start: number, duration: number, offsetDelta: number) => {
    updatePosition(pixelToTicks(start), pixelToTicks(duration), pixelToTicks(offsetDelta));
  };

  const onYChanged = (y: number) => {
    updateAssignedChannel(regionId, y / trackHeight);
  };

  const onClonedRegion = (x: number, y: number) => {
    duplicateRegion(regionId, pixelToTicks(x));
    updateAssignedChannel(regionId, y / trackHeight);
  };

  return (
    <ClonableResizableBox
      baseX={ticksToPixel(start)}
      baseWidth={regionWidth}
      minWidth={40}
      snapToY={trackHeight}
      onPositionChanged={onPositionChanged}
      onYChanged={onYChanged}
      onBoxCloned={onClonedRegion}
      allowOverExtendingStart={type === ChannelType.INSTRUMENT}
    >
      <BaseRegion>
        <TopBar color={color}>
          <Flex justify={'flex-start'} align={'center'} ml={2}>
            {channelTypeMap[type]?.icon}
            <RegionName color={color}>{name}</RegionName>
            <Icon
              ml={'auto'}
              mr={2}
              as={isInSync ? MdCloudDone : MdCloudUpload}
              color={determineTextColor(color)}
              title={isInSync ? 'File is synchronized' : 'File is uploading'}
            />
          </Flex>
        </TopBar>
        <ManipulationContainer>
          <MidiRegionVisualization />
        </ManipulationContainer>
      </BaseRegion>
    </ClonableResizableBox>
  );
};

export default Region;