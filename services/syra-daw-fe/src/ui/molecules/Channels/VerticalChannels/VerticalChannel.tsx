import React, { Suspense, useContext, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { channelStore } from "../../../../recoil/channelStore";
import { ChannelContext } from "../../../../providers/ChannelContext";
import ChannelLetterButtons from "../ChannelLetterButtons";
import useMuteChannelHotkey from "../../../../hooks/hotkeys/channel/useMuteChannelHotkey";
import useSoloChannelHotkey from "../../../../hooks/hotkeys/channel/useSoloChannelHotkey";
import { ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT } from "../../../../const/ui";
import ChannelName from "../ChannelName";
import BackboneAudioMixer from "../../BackboneMixer/BackboneAudioMixer";
import { Flex, Icon, useTheme } from "@chakra-ui/react";
import useRegionColor from "../../../../hooks/ui/region/useRegionColor";
import { ViewContext } from "../../../../providers/ViewContext";
import { gridStore } from "../../../../recoil/gridStore";
import { ChannelType } from "../../../../types/Channel";
import { GiSoundWaves } from "react-icons/gi";
import { SiMidi } from "react-icons/si";
import { FiSliders } from "react-icons/fi";

interface Props {
  index: number;
}

function VerticalChannel({ index }: Props) {
  const { view } = useContext(ViewContext);
  const channelId = useContext(ChannelContext);
  const type = useRecoilValue(channelStore.type(channelId));
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);
  const color = useRegionColor(false);
  const verticalZoomLevel = useRecoilValue(gridStore.verticalZoomLevel(view));
  const theme = useTheme();

  useMuteChannelHotkey();
  useSoloChannelHotkey();

  const icon = useMemo(() => {
    switch (type) {
      case ChannelType.AUDIO: return GiSoundWaves;
      case ChannelType.INSTRUMENT: return SiMidi;
      default: return FiSliders;
    }
  }, [type]);
  
  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? 'gray.700' : 'gray.900';
  }, [channelId, selectedChannelId]);

  return (
    <Flex
      w={'100%'}
      borderBottom={`1px solid ${theme.colors.gray[600]}`}
      bg={backgroundColor}
      borderLeft={`3px solid ${color}`}
      minH={ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[verticalZoomLevel]}
      h={ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[verticalZoomLevel]}
      maxH={ZOOM_LEVEL_ARRANGE_WINDOW_TRACK_HEIGHT[verticalZoomLevel]}
      p={2}
      px={4}
      flexDir={'column'}
      justify={'space-between'}
      onClick={() => setSelectedChannelId(channelId)}
    >
      <ChannelName channelPrefix={index} />
      <Flex bg={'transparent'} align={'center'} justify={'space-between'}>
        <Icon as={icon} mr={4} aria-label={'Channel Symbol'} w={'32px'} h={'32px'} color={color} />
        <ChannelLetterButtons />
      </Flex>

      <Suspense fallback={null}>
        <BackboneAudioMixer channelId={channelId} />
      </Suspense>
    </Flex>
  );
}

export default VerticalChannel;
