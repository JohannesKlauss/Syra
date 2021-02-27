import React from 'react';
import PlayRecord from './PlayRecord';
import TimeSignature from './TimeSignature';
import Click from './Click';
import ViewToggles from '../ViewToggles/ViewToggles';
import TimeInformation from './TimeInformation';
import Tempo from './Tempo';
import BarsAndBeats from './BarsAndBeats';
import { Box, Flex } from '@chakra-ui/react';
import MemberSettings from "../Social/MemberSettings";
import VersionInformation from '../Platform/VersionInformation';

function TransportView() {
  return (
    <Flex justify={'space-between'} align={'center'} py={4} borderTop={'1px solid #4FD1C5'} bg={'gray.800'} userSelect={'none'}>
      <Flex w={'33%'} justify={'center'}>
        <ViewToggles />
        <PlayRecord />
      </Flex>
      <Flex px={4} w={'33%'} justify={'space-between'} align={'center'} bg={'gray.900'} rounded={'md'} boxShadow={'inner'}>
        <Box w={'30%'}>
          <TimeInformation />
        </Box>
        <BarsAndBeats />
        <Tempo />
        <TimeSignature />
      </Flex>
      <Flex w={'33%'} justify={'space-between'} align={'center'} px={4}>
        <Click />
        <MemberSettings/>
        <VersionInformation/>
      </Flex>
    </Flex>
  );
}

export default TransportView;
