import React, { useCallback, useContext } from 'react';
import LetterButton from '../../atoms/Buttons/LetterButton';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { transportStore } from '../../../recoil/transportStore';
import { Flex } from '@chakra-ui/react';

function ChannelLetterButtons() {
  const id = useContext(ChannelContext);
  const isDawRecording = useRecoilValue(transportStore.isRecording);
  const [isSolo, setIsSolo] = useRecoilState(channelStore.isSolo(id));
  const [isMuted, setIsMuted] = useRecoilState(channelStore.isMuted(id));
  const [isArmed, setIsArmed] = useRecoilState(channelStore.isArmed(id));
  const [isInputMonitoringActive, setIsInputMonitoringActive] = useRecoilState(channelStore.isInputMonitoringActive(id));

  const onClickSolo = useCallback(() => setIsSolo(currVal => !currVal), [setIsSolo]);
  const onClickMute = useCallback(() => setIsMuted(currVal => !currVal), [setIsMuted]);
  const onClickInputMonitoring = useCallback(() => setIsInputMonitoringActive(currVal => !currVal), [setIsInputMonitoringActive]);

  const onClickRecord = useCallback(() => {
    if (isDawRecording) {
      return;
    }

    setIsArmed(currVal => !currVal);
  }, [setIsArmed, isDawRecording]);

  return (
    <Flex w={'100%'} justify={'space-between'}>
      <LetterButton onClick={onClickSolo} isActive={isSolo} color={'yellow'}>S</LetterButton>
      <LetterButton onClick={onClickMute} isActive={isMuted} color={'gray'}>M</LetterButton>
      <LetterButton onClick={onClickRecord} isActive={isArmed} color={'red'}>R</LetterButton>
      <LetterButton onClick={onClickInputMonitoring} isActive={isInputMonitoringActive} color={'orange'}>I</LetterButton>
    </Flex>
  );
}

export default React.memo(ChannelLetterButtons);
