import React from 'react';
import { useRecoilState } from 'recoil';
import { IconButton } from '@material-ui/core';
import { projectStore } from '../../../recoil/projectStore';
import TimerIcon from '@material-ui/icons/Timer';
import useClick from '../../../hooks/tone/useClick';

function Click() {
  const [isClickMuted, setIsClickMuted] = useRecoilState(projectStore.isClickMuted);

  useClick();

  return (
    <IconButton color={isClickMuted ? 'default' : 'primary'} component="span" onClick={() => setIsClickMuted(currVal => !currVal)}>
      <TimerIcon/>
    </IconButton>
  );
}

export default Click;
