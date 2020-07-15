import React, { useCallback, useContext } from 'react';
import { Box, styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { ChannelContext } from '../../providers/ChannelContext';
import { useDropzone } from 'react-dropzone';
import useAudioContext from '../../hooks/audio/useAudioContext';
import * as Tone from 'tone';

interface BaseContainerProps {
  backgroundColor: string;
}

const BaseContainer = styled('div')({
  width: '100%',
  height: 70,
  borderBottom: `1px solid ${splinterTheme.palette.background.paper}`,
  backgroundColor: ({ backgroundColor }: BaseContainerProps) => backgroundColor,
});

interface Props {
  backgroundColor: string;
}

const Track = React.memo(({ backgroundColor }: Props) => {
  const channelId = useContext(ChannelContext);
  const audioContext = useAudioContext();

  const onDrop = useCallback(async files => {
    console.log('files added', files);

    // TODO: FOR NOW JUST PROCESS THE FIRST FILE, BECAUSE ADDITIONAL FILES WOULD REQUIRE CREATING ADDITIONAL CHANNELS.
    // TODO: WE FIRST HAVE TO FIGURE OUT AN ARCHITECTURE FOR THIS WHOLE useDropzone THING.
    if (files.length > 0) {
      const file = files[0];

      const audioBuffer = await audioContext.decodeAudioData(await file.arrayBuffer());
      const toneBuffer = await new Tone.Buffer(audioBuffer);

      console.log('toneBuffer duration', toneBuffer.duration);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

  return (
    <BaseContainer backgroundColor={backgroundColor} {...getRootProps()}>
      <input {...getInputProps()}/>
      <Typography variant="overline"
                  display="block">{isDragActive ? 'Drop audio here' : `Test for channel ${channelId}`}</Typography>
    </BaseContainer>
  );
});

export default Track;
