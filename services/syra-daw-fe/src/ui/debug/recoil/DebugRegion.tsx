import React, { useContext } from 'react';
import { RegionContext } from '../../../providers/RegionContext';
import { regionStore } from '../../../recoil/regionStore';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Text, SimpleGrid, Checkbox, Input } from '@chakra-ui/core';
import {IoIosCheckmarkCircle} from "react-icons/io";
import { MdError } from 'react-icons/md';

function DebugRegion() {
  const regionId = useContext(RegionContext);

  const [start, setStart] = useRecoilState(regionStore.start(regionId));
  const audioBuffer = useRecoilValue(regionStore.audioBuffer(regionId));
  const audioBufferPointer = useRecoilValue(regionStore.audioBufferPointer(regionId));
  const name = useRecoilValue(regionStore.name(regionId));
  const [isSolo, setIsSolo] = useRecoilState(regionStore.isSolo(regionId));
  const [isMuted, setIsMuted] = useRecoilState(regionStore.isMuted(regionId));
  const [isRecording, setIsRecording] = useRecoilState(regionStore.isRecording(regionId));
  const [trimStart, setTrimStart] = useRecoilState(regionStore.trimStart(regionId));
  const [trimEnd, setTrimEnd] = useRecoilState(regionStore.trimEnd(regionId));

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

      <Text>Buffer pointer:</Text>
      <Text>{audioBufferPointer}</Text>

      <Text>Is Muted:</Text>
      <Checkbox isChecked={isMuted} onChange={e => setIsMuted(e.target.checked)}/>

      <Text>Is Solo:</Text>
      <Checkbox isChecked={isSolo} onChange={e => setIsSolo(e.target.checked)}/>

      <Text>Is Recording:</Text>
      <Checkbox isChecked={isRecording} onChange={e => setIsRecording(e.target.checked)}/>

      <Text>Start:</Text>
      <Input type={'number'} value={start} onChange={e => setStart(parseFloat(e.target.value))}/>

      <Text>Trim Start:</Text>
      <Input type={'number'} value={trimStart} onChange={e => setTrimStart(parseFloat(e.target.value))}/>

      <Text>Trim End:</Text>
      <Input type={'number'} value={trimEnd} onChange={e => setTrimEnd(parseFloat(e.target.value))}/>
    </SimpleGrid>
  );
}

export default DebugRegion;
