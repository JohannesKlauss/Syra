import React, { useContext, useEffect } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import DropdownButton from "../../../../../atoms/Buttons/DropdownButton";
import { ChannelContext } from "../../../../../../providers/ChannelContext";
import { channelStore } from "../../../../../../recoil/channelStore";
import { useRecoilState } from "recoil";
import { ChannelMode } from "../../../../../../types/Channel";
import { MonoIcon } from "../../../../../../icons/MonoIcon";
import { StereoIcon } from "../../../../../../icons/StereoIcon";
import useSyraEngineChannel from "../../../../../../hooks/engine/useSyraEngineChannel";

function AudioChannelInput() {
  const channelId = useContext(ChannelContext);
  const channel = useSyraEngineChannel(channelId);
  const [mode, setMode] = useRecoilState(channelStore.mode(channelId));

  useEffect(() => {
    channel.channelMode = mode;
  }, [mode, channel]);

  return (
    <Flex align={'center'} w={'100%'} mt={'2px'}>
      <IconButton
        icon={mode === ChannelMode.MONO ? <MonoIcon/> : <StereoIcon/>}
        size={'xs'}
        aria-label={`Toggle Mono/Stereo`}
        title={`Toggle Mono/Stereo`}
        colorScheme={'teal'}
        roundedBottomRight={0}
        roundedTopRight={0}
        onClick={() => setMode((currVal) => (currVal === ChannelMode.MONO ? ChannelMode.STEREO : ChannelMode.MONO))}
      />
      <DropdownButton
        label={mode === ChannelMode.MONO ? 'Input 1' : 'Input 1-2'}
        colorScheme={'teal'}
        size={'xs'}
        mt={0}
        flex={2}
        roundedBottomLeft={0}
        roundedTopLeft={0}
        menuFontSize={'xs'}
        menuItems={[{ label: mode === ChannelMode.MONO ? 'Input 1' : 'Input 1-2', onClick: () => null }]}
      >
        Input 1
      </DropdownButton>
    </Flex>
  );
}

export default AudioChannelInput;
