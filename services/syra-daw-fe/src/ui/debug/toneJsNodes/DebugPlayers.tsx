import React, { useContext, useState } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { useRecoilValue } from 'recoil';
import { regionStore } from '../../../recoil/regionStore';
import { ChannelContext } from '../../../providers/ChannelContext';
import { MdError } from 'react-icons/md';
import {
  Button,
  Checkbox,
  SimpleGrid,
  Slider,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
  Text,
  Flex,
} from '@chakra-ui/react';
import { IoIosCheckmarkCircle } from "react-icons/io";
import useSyraEngineChannel from "../../../hooks/engine/useSyraEngineChannel";
import { AudioChannel } from "../../../engine/channels/AudioChannel";

function DebugPlayers() {
  const regionId = useContext(RegionContext);
  const channelId = useContext(ChannelContext);

  const [isPlaying, setIsPlaying] = useState(false);

  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));

  const { regionManager } = useSyraEngineChannel(channelId) as AudioChannel;

  if (!regionManager.has(regionId)) {
    return (
      <Flex align={'center'}>
        <MdError color={'red'}/>
        <Text ml={2}>No Player assigned to this region</Text>
      </Flex>
    )
  }
  
  return (
    <SimpleGrid columns={2} spacing={4}>
      <Text>Actions</Text>
      <Button isDisabled={!regionManager.has(regionId)} onClick={() => {
        if (!isPlaying) {
          regionManager.player(regionId).unsync().start(0.001);
          setIsPlaying(true);
        }
        else {
          regionManager.player(regionId).stop().sync();
          setIsPlaying(false);
        }
      }}>
        {isPlaying ? 'Stop' : 'Start'} Player
      </Button>

      <Text>Id:</Text>
      <Text>{regionManager.name}</Text>

      <Text>Has Buffer:</Text>
      {audioBuffer?.duration ? <IoIosCheckmarkCircle color={'teal'}/> : <MdError color={'red'}/>}

      <Text>Buffer duration:</Text>
      <Text>{audioBuffer?.duration ? `${audioBuffer.duration} seconds` : '-'}</Text>

      <Text>Buffer pointer:</Text>
      <Text>{audioBufferPointer}</Text>

      <Text>Tone.js Audio Buffer:</Text>
      {regionManager.player(regionId).buffer.duration ? <IoIosCheckmarkCircle color={'teal'}/> : <MdError color={'red'}/>}

      <Text>Tone.js Audio Buffer duration:</Text>
      <Text>{regionManager.player(regionId).buffer.duration ? `${regionManager.player(regionId).buffer.duration} seconds` : '-'}</Text>

      <Text>Player state:</Text>
      <Text>{regionManager.player(regionId).state}</Text>

      <Text>Is muted:</Text>
      <Checkbox isChecked={regionManager.player(regionId).mute} onChange={e => regionManager.player(regionId).set({mute: e.target.checked})}/>

      <Text>Volume:</Text>
      <Slider defaultValue={regionManager.player(regionId).volume.value} min={-100} max={6} step={0.1} onChange={volume => regionManager.player(regionId).set({volume})}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </SimpleGrid>
  );
}

export default DebugPlayers;
