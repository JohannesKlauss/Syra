import React, { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { regionStore } from '../../../recoil/regionStore';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Text, SimpleGrid, Checkbox } from '@chakra-ui/react';
import {IoIosCheckmarkCircle} from "react-icons/io";
import { MdError } from 'react-icons/md';

function DebugRegion() {
  const regionId = useContext(RegionContext);
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const name = useRecoilValue(regionStore.name(regionId));
  const [isSolo, setIsSolo] = useRecoilState(regionStore.isSolo(regionId));
  const [isMuted, setIsMuted] = useRecoilState(regionStore.isMuted(regionId));
  const [isRecording, setIsRecording] = useRecoilState(regionStore.isRecording(regionId));
  const [duration, setDuration] = useRecoilState(regionStore.duration(regionId));
  const [offset, setOffset] = useRecoilState(regionStore.offset(regionId));

  return (
    <SimpleGrid columns={2} spacing={4} bg={'gray.900'} p={4}>
      <Text>Id:</Text>
      <Text>{regionId}</Text>

      <Text>Name:</Text>
      <Text>{name}</Text>

      <Text>Has Buffer:</Text>
      {audioBuffer?.duration ? <IoIosCheckmarkCircle color={'teal'}/> : <MdError color={'red'}/>}

      <Text>Buffer duration:</Text>
      <Text>{audioBuffer?.duration ? `${audioBuffer.duration} seconds` : '-'}</Text>

      <Text>Is Muted:</Text>
      <Checkbox isChecked={isMuted} onChange={e => setIsMuted(e.target.checked)}/>

      <Text>Is Solo:</Text>
      <Checkbox isChecked={isSolo} onChange={e => setIsSolo(e.target.checked)}/>

      <Text>Is Recording:</Text>
      <Checkbox isChecked={isRecording} onChange={e => setIsRecording(e.target.checked)}/>
    </SimpleGrid>
  );
}

export default DebugRegion;
