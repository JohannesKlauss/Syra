import React, { useContext } from "react";
import { RegionContext } from "../../../providers/RegionContext";
import { useRecoilValue } from "recoil";
import { regionStore } from "../../../recoil/regionStore";
import { arrangeWindowStore } from "../../../recoil/arrangeWindowStore";
import useRegionColor from "../../../hooks/ui/region/useRegionColor";
import useRegionWidth from "../../../hooks/ui/region/useRegionWidth";
import usePixelToTicks from "../../../hooks/tone/usePixelToTicks";
import useTicksToPixel from "../../../hooks/tone/useTicksToPixel";
import useUpdateRegionPosition from "../../../hooks/recoil/region/useUpdateRegionPosition";
import useDuplicateRegion from "../../../hooks/recoil/region/useDuplicateRegion";
import useChangeChannelOfRegion from "../../../hooks/recoil/region/useChangeChannelOfRegion";
import useRegionDawRecordingSync from "../../../hooks/ui/region/useRegionDawRecordingSync";
import useMidiRegionScheduler from "../../../hooks/engine/useMidiRegionScheduler";
import ClonableResizableBox from "../../atoms/ClonableResizableBox";
import BaseRegion from "./BaseRegion";
import { RegionName, TopBar } from "./AudioRegion/AudioRegion.styled";
import { Flex, Icon } from "@chakra-ui/react";
import ManipulationContainer from "./Manipulations/ManipulationContainer";
import MidiRegionVisualization from "./MidiRegion/MidiRegionVisualization";
import { channelStore } from "../../../recoil/channelStore";
import { ChannelContext } from "../../../providers/ChannelContext";
import { channelTypeMap } from "../../../const/channels";
import { ChannelType } from "../../../types/Channel";
import useAudioRegionScheduler from "../../../hooks/engine/useAudioRegionScheduler";
import { MdCloudDone, MdCloudDownload, MdCloudUpload } from "react-icons/md";
import AudioRegion from "./AudioRegion/AudioRegion";
import { audioBufferStore } from "../../../recoil/audioBufferStore";

interface Props {}

const Region: React.FC<Props> = () => {
  const channelId = useContext(ChannelContext);
  const regionId = useContext(RegionContext);
  const name = useRecoilValue(regionStore.name(regionId));
  const start = useRecoilValue(regionStore.start(regionId));
  const isInSync = useRecoilValue(regionStore.isInSync(regionId));
  const type = useRecoilValue(channelStore.type(channelId));
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(type === ChannelType.AUDIO ? regionId : ''));
  const peakWaveform = useRecoilValue(regionStore.peakWaveform(type === ChannelType.AUDIO ? regionId : ''));
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const durationInTicks = useRecoilValue(audioBufferStore.durationInTicks(audioBufferPointer));
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const color = useRegionColor(false);
  const regionWidth = useRegionWidth();
  const pixelToTicks = usePixelToTicks();
  const ticksToPixel = useTicksToPixel();
  const updatePosition = useUpdateRegionPosition();
  const duplicateRegion = useDuplicateRegion();
  const updateAssignedChannel = useChangeChannelOfRegion();

  useRegionDawRecordingSync();

  // You should never call hooks conditionally, but the variable type will always remain the same for a region (an audio region cannot be converted to a midi region).
  // So we are always calling either midi scheduling or audio scheduling for the life time of a region.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  type === ChannelType.INSTRUMENT ? useMidiRegionScheduler() : useAudioRegionScheduler();

  const onPositionChanged = (start: number, duration: number, offsetDelta: number) => {
    updatePosition(pixelToTicks(start), pixelToTicks(duration), pixelToTicks(offsetDelta));
  };

  const onYChanged = (y: number): boolean => {
    return updateAssignedChannel(regionId, y / trackHeight);
  };

  const onClonedRegion = (x: number, y: number) => {
    duplicateRegion(regionId, pixelToTicks(x));
    return updateAssignedChannel(regionId, y / trackHeight);
  };
  
  let cloudIcon = MdCloudDone;
  
  if (type === ChannelType.AUDIO) {
    if (!isInSync) {
      cloudIcon = MdCloudUpload;
    } else if (audioBuffer === null || audioBuffer.duration === 0 || peakWaveform === null) {
      cloudIcon = MdCloudDownload;
    }
  }

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
      maxWidth={type === ChannelType.INSTRUMENT ? undefined : ticksToPixel(durationInTicks)}
    >
      <BaseRegion>
        <TopBar color={color}>
          <Flex justify={'flex-start'} align={'center'} ml={2}>
            {channelTypeMap[type]?.icon}
            <RegionName color={color}>{name}</RegionName>
            <Icon
              ml={'auto'}
              mr={2}
              as={cloudIcon}
              title={isInSync || type === ChannelType.INSTRUMENT ? 'File is synchronized' : 'File is uploading'}
            />
          </Flex>
        </TopBar>
        <ManipulationContainer>
          {type === ChannelType.INSTRUMENT ? <MidiRegionVisualization /> : <AudioRegion/>}
        </ManipulationContainer>
      </BaseRegion>
    </ClonableResizableBox>
  );
};

export default Region;
