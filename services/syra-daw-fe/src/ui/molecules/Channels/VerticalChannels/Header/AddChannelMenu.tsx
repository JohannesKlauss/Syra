import React from 'react';
import useAvailableChannels from '../../../../../hooks/ui/channels/useAvailableChannels';
import useCreateChannel from '../../../../../hooks/recoil/channel/useCreateChannel';
import { ChannelMode, ChannelType } from '../../../../../types/Channel';
import { useHotkeys } from 'react-hotkeys-hook';
import { Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { IoIosAdd } from 'react-icons/io';

function AddChannelMenu() {
  const actions = useAvailableChannels();
  const createChannel = useCreateChannel();

  const onClick = async (type: ChannelType) => {
    await createChannel(type);
  };

  useHotkeys('alt+cmd+a', () => {
    (async () => await createChannel(ChannelType.AUDIO))();
  });
  useHotkeys('alt+cmd+s', () => {
    (async () => await createChannel(ChannelType.INSTRUMENT, ChannelMode.STEREO))();
  });

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        tabIndex={-1}
        onKeyDown={(e) => e.preventDefault()}
        _focus={{ outline: 'none' }}
        aria-label={'Add Channel'}
        title={'Add Channel'}
        size={'xs'}
        icon={<IoIosAdd />}
        onMouseDown={(e) => e.preventDefault()}
      />
      <MenuList>
        {actions.map((action) => (
          <MenuItem onClick={() => onClick(action.type)} key={action.type}>
            <Flex align={'center'}>
              {action.icon}
              <Text ml={2} fontSize={'xs'}>
                {action.name}
              </Text>
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default AddChannelMenu;
