import React, { useCallback, useContext } from 'react';
import LetterButton from '../../atoms/Buttons/LetterButton';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';
import { projectStore } from '../../../recoil/projectStore';

const BUTTON_WIDTH = '33%';

function ChannelLetterButtons() {
  const id = useContext(ChannelContext);
  const isSplinterRecording = useRecoilValue(projectStore.isRecording);
  const [isSolo, setIsSolo] = useRecoilState(channelStore.isSolo(id));
  const [isMuted, setIsMuted] = useRecoilState(channelStore.isMuted(id));
  const [isArmed, setIsArmed] = useRecoilState(channelStore.isArmed(id));

  const onClickSolo = useCallback(() => setIsSolo(currVal => !currVal), [setIsSolo]);
  const onClickMute = useCallback(() => setIsMuted(currVal => !currVal), [setIsMuted]);

  const onClickRecord = useCallback(() => {
    if (isSplinterRecording) {
      return;
    }

    setIsArmed(currVal => !currVal);
  }, [setIsArmed, isSplinterRecording]);
  
  return (
    <>
      <LetterButton onClick={onClickSolo} isActive={isSolo} color={'primary'} width={BUTTON_WIDTH}>S</LetterButton>
      <LetterButton onClick={onClickMute} isActive={isMuted} color={'default'} width={BUTTON_WIDTH}>M</LetterButton>
      <LetterButton onClick={onClickRecord} isActive={isArmed} color={'secondary'} width={BUTTON_WIDTH}>R</LetterButton>
    </>
  );
}

export default React.memo(ChannelLetterButtons);
