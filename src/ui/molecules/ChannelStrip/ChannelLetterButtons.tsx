import React, { useCallback, useContext } from 'react';
import LetterButton from '../../atoms/ChannelButtons/LetterButton';
import { Paper, styled } from '@material-ui/core';
import { useRecoilState } from 'recoil/dist';
import { isChannelArmed, isChannelMuted, isChannelSolo } from '../../../recoil/selectors/channel';
import { ChannelContext } from '../../../providers/ChannelContext';

interface Props {

}

const Container = styled(Paper)({
  padding: 10,
});

const BUTTON_WIDTH = '33%';

function ChannelLetterButtons({}: Props) {
  const id = useContext(ChannelContext);
  const [isSolo, setIsSolo] = useRecoilState(isChannelSolo(id));
  const [isMuted, setIsMuted] = useRecoilState(isChannelMuted(id));
  const [isArmed, setIsArmed] = useRecoilState(isChannelArmed(id));

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
