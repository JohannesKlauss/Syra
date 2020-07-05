import React, { useCallback, useRef, useState } from 'react';
import useAudioContext from '../hooks/audio/useAudioContext';
import { Button, IconButton, Typography } from '@material-ui/core';
import useSoulPatch from '../hooks/soul/useSoulPatch';
import * as Tone from 'tone';
import ParameterList from '../ui/molecules/Parameters/ParameterList';
import { PauseCircleFilled, PlayCircleFilled } from '@material-ui/icons';

interface Props {
  patchName: string;
}

const SoulAudioInputTest = React.memo(({patchName}: Props) => {
  const context = useAudioContext();
  const [soulPatchNode, soulPatch] = useSoulPatch(`soul/plugins/${patchName}.wasm`);
  const playerRef = useRef<Tone.Player>();
  const [isPlaying, setIsPlaying] = useState(false);

  const onClick = useCallback(async () => {
    if (context.state !== 'running') {
      await context.resume();
    }

    if (soulPatchNode == null) {
      return;
    }

    const player = new Tone.Player('audio/default.wav');

    player.chain(soulPatchNode, Tone.Destination);
    player.loop = true;

    playerRef.current = player;
  }, [soulPatchNode, context]);

  const onIconClick = useCallback(() => {
    if (playerRef.current?.state === 'started') {
      setIsPlaying(false);
      playerRef.current.stop();
    } else if (playerRef.current) {
      setIsPlaying(true);
      playerRef.current.start();
    }
  }, [playerRef]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Plugin Test
      </Typography>
      <Button variant="contained" onClick={onClick}>Load Gain Plugin with Volume Slider</Button>
      <IconButton color="primary" component="span" onClick={onIconClick}>
        {isPlaying ? <PauseCircleFilled/> : <PlayCircleFilled/>}
      </IconButton>

      <br/>

      {soulPatchNode && soulPatch &&
      <ParameterList port={soulPatchNode.port} parameters={soulPatch.descriptor.parameters}/>}
    </>
  );
});

// @ts-ignore
SoulAudioInputTest.whyDidYouRender = true;

export default SoulAudioInputTest;
