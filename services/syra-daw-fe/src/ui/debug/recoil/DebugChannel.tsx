import React, { useContext } from 'react';
import { useRecoilState } from 'recoil';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { channelTypeMap } from '../../../const/channels';
import ChannelColorPicker from '../../molecules/Channels/ChannelMenu/ChannelColorPicker';
import { Text, Button, Checkbox, Input, SimpleGrid } from '@chakra-ui/react';

function DebugChannel() {
  const channelId = useContext(ChannelContext);
  const [name, setName] = useRecoilState(channelStore.name(channelId));
  const [type, setType] = useRecoilState(channelStore.type(channelId));
  const [color, setColor] = useRecoilState(channelStore.color(channelId));
  const [isArmed, setIsArmed] = useRecoilState(channelStore.isArmed(channelId));
  const [isSolo, setIsSolo] = useRecoilState(channelStore.isSolo(channelId));
  const [isMuted, setIsMuted] = useRecoilState(channelStore.isMuted(channelId));

  return (
    <SimpleGrid columns={2} spacing={4} bg={'gray.900'} p={4}>
      <Text>Id:</Text>
      <Text>{channelId}</Text>

      <Text>Name:</Text>
      <Input value={name} onChange={e => setName(e.target.value)} />

      <Text>Type:</Text>
      <Button leftIcon={channelTypeMap[type]!.icon} variant={'ghost'}>{channelTypeMap[type]!.name}</Button>

      <Text>Color:</Text>
      <ChannelColorPicker activeColor={color} onChangeColor={(newColor) => setColor(newColor)}/>

      <Text>Is Muted:</Text>
      <Checkbox isChecked={isMuted} onChange={e => setIsMuted(e.target.checked)}/>

      <Text>Is Solo:</Text>
      <Checkbox isChecked={isSolo} onChange={e => setIsSolo(e.target.checked)}/>

      <Text>Is Armed:</Text>
      <Checkbox isChecked={isArmed} onChange={e => setIsArmed(e.target.checked)}/>
    </SimpleGrid>
  );
}

export default DebugChannel;
