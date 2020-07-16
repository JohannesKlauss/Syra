import React, { useEffect } from 'react';
import useToneJsTransport from '../../hooks/tone/useToneJsTransport';
import * as Tone from 'tone';
import { useRecoilState } from 'recoil/dist';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { IconButton } from '@material-ui/core';
import { projectStore } from '../../recoil/projectStore';

const osc = new Tone.Oscillator().toDestination();

function Click() {
  const [isClickMuted, setIsClickMuted] = useRecoilState(projectStore.isClickMuted);
  const transport = useToneJsTransport();

  useEffect(() => {
    if (isClickMuted) {
      return;
    }

    const id = transport.scheduleRepeat((time) => {
      osc.start(time + 0.05).stop(time + 0.1);
    }, "4n", "0");

    return () => {
      transport.clear(id);
    };
  }, [transport, isClickMuted]);

  return (
    <IconButton color={isClickMuted ? 'default' : 'primary'} component="span" onClick={() => setIsClickMuted(currVal => !currVal)}>
      <AccessTimeIcon/>
    </IconButton>
  );
}

export default Click;
