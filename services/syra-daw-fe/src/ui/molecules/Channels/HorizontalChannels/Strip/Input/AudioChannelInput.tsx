import React, { useContext } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { IoIosPower } from 'react-icons/io';
import DropdownButton from '../../../../../atoms/Buttons/DropdownButton';
import { channelStore } from "../../../../../../recoil/channelStore";
import { useRecoilState } from "recoil";
import { ChannelContext } from "../../../../../../providers/ChannelContext";

function AudioChannelInput() {
  const channelId = useContext(ChannelContext);
  const [isRecorderActive, setIsRecorderActive] = useRecoilState(channelStore.isRecorderActive(channelId));

  return (
    <Flex align={'center'} w={'100%'} mt={'2px'}>
      <IconButton
        icon={<IoIosPower />}
        size={'xs'}
        aria-label={`Toggle Snap`}
        title={`Toggle Snap`}
        colorScheme={isRecorderActive ? 'teal' : 'gray'}
        roundedBottomRight={0}
        roundedTopRight={0}
        onClick={() => setIsRecorderActive((currVal) => !currVal)}
      />
      <DropdownButton
        label={'Input 1'}
        colorScheme={isRecorderActive ? 'teal' : 'gray'}
        size={'xs'}
        mt={0}
        flex={2}
        roundedBottomLeft={0}
        roundedTopLeft={0}
        menuFontSize={'xs'}
        menuItems={[{label: 'Input 1', onClick: () => null}]}
      >
        Input 1
      </DropdownButton>
    </Flex>
  );
}

export default AudioChannelInput;
