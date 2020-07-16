import React, { useCallback } from 'react';
import { styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import useAudioContext from '../../hooks/audio/useAudioContext';
import { useDropzone } from 'react-dropzone';
import useChannelCreator from '../../hooks/recoil/useChannelCreator';
import { ChannelType } from '../../types/Channel';

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

  const onDrop = useCallback(async (files: File[]) => {
    // TODO: WE SHOULD ALSO BE ABLE TO SUPPORT MIDI FILES LATER ON.
    files.forEach(file => {
      // TODO: CURRENTLY THIS DOESN'T WORK FOR MULTIPLE FILES BECAUSE THE CHANNEL ID
      (async () => {
        const createRegion = createChannel(ChannelType.AUDIO);

        await createRegion(file);
      })();
    });
  }, [audioContext, createChannel]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <BaseContainer {...getRootProps()}>
      <input {...getInputProps()}/>
      <Typography variant="overline" color={isDragActive ? 'primary' : 'initial'}
                  display="block">Drop audio here to add new track</Typography>
    </BaseContainer>
  );
}

export default React.memo(DropTrack);
