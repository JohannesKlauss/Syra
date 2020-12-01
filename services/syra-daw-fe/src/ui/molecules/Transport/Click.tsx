import React from 'react';
import { useRecoilState } from 'recoil';
import { projectStore } from '../../../recoil/projectStore';
import useClick from '../../../hooks/tone/useClick';
import { IconButton } from '@chakra-ui/react';
import { RiPulseFill } from 'react-icons/ri';

function Click() {
  const [isClickMuted, setIsClickMuted] = useRecoilState(projectStore.isClickMuted);

  useClick();

  return (
    <IconButton
      aria-label={'Toggle metronome'}
      icon={<RiPulseFill />}
      colorScheme={isClickMuted ? 'gray' : 'teal'}
      component="span"
      onClick={() => setIsClickMuted((currVal) => !currVal)}
    />
  );
}

export default Click;
