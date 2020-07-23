import React, { useCallback } from 'react';
import { styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { useDropzone } from 'react-dropzone';
import useChannelCreator from '../../hooks/recoil/channel/useChannelCreator';
import { ChannelType } from '../../types/Channel';

const BaseContainer = styled('div')({
  width: 'calc(100vw - 230px)',
  height: 70,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  position: 'relative',
  backgroundColor: splinterTheme.palette.background.paper,
  border: `1px dashed ${splinterTheme.palette.background.paper}`,
});

function DropTrack() {
  const createChannel = useChannelCreator();

  const onDrop = useCallback(async (files: File[]) => {
    // TODO: WE SHOULD ALSO BE ABLE TO SUPPORT MIDI FILES LATER ON.
    files.forEach(file => {
      // TODO: CURRENTLY THIS DOESN'T WORK FOR MULTIPLE FILES BECAUSE THE CHANNEL ID
      (async () => {
        const createRegion = createChannel(ChannelType.AUDIO, file.name.split('.')[0]);

        await createRegion(file);
      })();
    });
  }, [createChannel]);
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
