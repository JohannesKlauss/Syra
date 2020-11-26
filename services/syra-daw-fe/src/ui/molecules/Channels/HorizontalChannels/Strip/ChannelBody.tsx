import React, { useCallback, useContext, useState } from 'react';
import ChannelPluginList from '../../../Plugins/ChannelPluginList';
import Pan from '../../../../atoms/Slider/Pan';
import VolumeFader from '../../../../atoms/Slider/VolumeFader';
import ChannelLetterButtons from '../../ChannelLetterButtons';
import { ChannelContext } from '../../../../../providers/ChannelContext';
import { channelStore } from '../../../../../recoil/channelStore';
import { useRecoilValue } from 'recoil';
import LevelMeterVertical from '../../../../atoms/Meter/LevelMeterVertical';
import ChannelName from '../../ChannelName';
import useBackboneChannel from '../../../../../hooks/tone/BackboneMixer/useBackboneChannel';
import LevelMeterText from '../../../../atoms/Meter/LevelMeterText';
import { Box, Divider, Flex } from '@chakra-ui/react';
import VolumeFaderText from "../../../../atoms/Slider/VolumeFaderText";

const ChannelBody: React.FC = React.memo(() => {
  const channelId = useContext(ChannelContext);
  const channelColor = useRecoilValue(channelStore.color(channelId));
  const [volumeFaderValue, setVolumeFaderValue] = useState(0);

  const { volume, pan } = useBackboneChannel(channelId);

  const onChangeVolume = useCallback(newVal => {
    volume.set({volume: newVal});

    setVolumeFaderValue(newVal < -95 ? '-∞' : newVal.toFixed(1));
  }, [volume]);

  return (
    <Box bg={'gray.700'}>
      <Divider mb={2}/>
      <ChannelPluginList/>
      <Divider my={2}/>

      <Pan onChange={newVal => pan.set({pan: newVal / 100})}/>

      <Flex justify={'space-around'} align={'center'}>
        <VolumeFaderText value={volumeFaderValue}/>
        <LevelMeterText/>
      </Flex>
      <Flex justify={'space-around'} align={'center'}>
        <VolumeFader onChange={onChangeVolume}/>
        <LevelMeterVertical/>
      </Flex>

      <Divider borderColor={channelColor}/>

      <Box p={4} bg={'transparent'}>
        <ChannelLetterButtons/>
      </Box>

      <ChannelName backgroundColor={channelColor}/>
    </Box>
  );
});

export default ChannelBody;
