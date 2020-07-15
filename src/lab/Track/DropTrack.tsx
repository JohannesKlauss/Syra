import React, { useCallback } from 'react';
import { styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import useAudioContext from '../../hooks/audio/useAudioContext';
import * as Tone from 'tone';
import { useDropzone } from 'react-dropzone';
import useChannelCreator from '../../hooks/recoil/useChannelCreator';
import { ChannelType } from '../../types/Channel';
import useToneJsTransport from '../../hooks/tone/useToneJsTransport';

const BaseContainer = styled('div')({
  width: 400,
  height: 70,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px dashed ${splinterTheme.palette.background.paper}`,
});

function DropTrack() {
  const audioContext = useAudioContext();
  const createChannel = useChannelCreator();
  const transport = useToneJsTransport();

  const onDrop = useCallback(async files => {
    // TODO: FOR NOW JUST PROCESS THE FIRST FILE, BECAUSE ADDITIONAL FILES WOULD REQUIRE CREATING ADDITIONAL CHANNELS.
    // TODO: WE FIRST HAVE TO FIGURE OUT AN ARCHITECTURE FOR THIS WHOLE useDropzone THING.
    // TODO: WE SHOULD ALSO BE ABLE TO SUPPORT MIDI FILES LATER ON.
    if (files.length > 0) {
      const file = files[0];

      const audioBuffer = await audioContext.decodeAudioData(await file.arrayBuffer());
      const toneBuffer = await new Tone.Buffer(audioBuffer);

      if (toneBuffer.duration > 0) {
        createChannel(ChannelType.AUDIO);
      }

      transport.schedule(() => {
        console.log('hi we scheduled things');
      }, "2:0:0");

      transport.schedule(() => {
        console.log('hi we scheduled things');
      }, "4:0:0");

      transport.schedule(() => {
        console.log('hi we scheduled things');
      }, "6:0:0");
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

  return (
    <BaseContainer {...getRootProps()}>
      <input {...getInputProps()}/>
      <Typography variant="overline" color={isDragActive ? 'primary' : 'initial'}
                  display="block">Drop audio here to add new track</Typography>
    </BaseContainer>
  );
}

export default React.memo(DropTrack);
