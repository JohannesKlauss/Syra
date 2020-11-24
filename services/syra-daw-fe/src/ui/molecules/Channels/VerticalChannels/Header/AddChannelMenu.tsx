import React from 'react';
import useAvailableChannels from '../../../../../hooks/ui/channels/useAvailableChannels';
import useCreateChannel from '../../../../../hooks/recoil/channel/useCreateChannel';
import { ChannelType } from '../../../../../types/Channel';
import { useHotkeys } from 'react-hotkeys-hook';
import { Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import {AiOutlinePlus} from 'react-icons/ai';

function AddChannelMenu() {
  const actions = useAvailableChannels();
  const createChannel = useCreateChannel();

  const onClick = async (type: ChannelType) => {
    await createChannel(type);
  };

  useHotkeys('alt+cmd+a', () => {(async () => await createChannel(ChannelType.AUDIO))()});
  useHotkeys('alt+cmd+s', () => {(async () => await createChannel(ChannelType.INSTRUMENT))()});

  return (
    <Menu>
      <MenuButton as={IconButton} aria-label={"Add Channel"} icon={<AiOutlinePlus/>}/>
      <MenuList>
        {actions.map(action => (
          <MenuItem onClick={() => onClick(action.type)} key={action.type}>
            <Flex>
              {action.icon}
              <Text>{action.name}</Text>
            </Flex>
          </MenuItem>
        ))}
    </MenuList>
    </Menu>
  );
}

export default AddChannelMenu;
