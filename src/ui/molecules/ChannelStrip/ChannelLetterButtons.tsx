import React, { useCallback, useContext } from 'react';
import LetterButton from '../../atoms/Buttons/LetterButton';
import { Paper, styled } from '@material-ui/core';
import { useRecoilState } from 'recoil/dist';
import { ChannelContext } from '../../../providers/ChannelContext';
import { channelStore } from '../../../recoil/channelStore';

const Container = styled(Paper)({
  padding: 10,
});

const BUTTON_WIDTH = '33%';

function ChannelLetterButtons() {
  const id = useContext(ChannelContext);
  const [isSolo, setIsSolo] = useRecoilState(channelStore.isSolo(id));
  const [isMuted, setIsMuted] = useRecoilState(channelStore.isMuted(id));
  const [isArmed, setIsArmed] = useRecoilState(channelStore.isArmed(id));

  const onClickSolo = useCallback(() => setIsSolo(currVal => !currVal), [setIsSolo]);
  const onClickMute = useCallback(() => setIsMuted(currVal => !currVal), [setIsMuted]);
  const onClickRecord = useCallback(() => setIsArmed(currVal => !currVal), [setIsArmed]);
  
  return (
    <Container>
      <LetterButton onClick={onClickSolo} isActive={isSolo} color={'primary'} width={BUTTON_WIDTH}>S</LetterButton>
      <LetterButton onClick={onClickMute} isActive={isMuted} color={'default'} width={BUTTON_WIDTH}>M</LetterButton>
      <LetterButton onClick={onClickRecord} isActive={isArmed} color={'secondary'} width={BUTTON_WIDTH}>R</LetterButton>
    </Container>
  );
}

export default React.memo(ChannelLetterButtons);
