import React, { useCallback, useContext } from 'react';
import { styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { ChannelContext } from '../../providers/ChannelContext';
import { useDropzone } from 'react-dropzone';
import useRegionCreator from '../../hooks/recoil/useRegionCreator';
import RegionList from './Region/RegionList';

interface BaseContainerProps {
  backgroundColor: string;
}

const BaseContainer = styled('div')({
  width: '100%',
  height: 70,
  borderBottom: `1px solid ${splinterTheme.palette.background.paper}`,
  backgroundColor: ({ backgroundColor }: BaseContainerProps) => backgroundColor,
  position: 'relative',
});

interface DropIndicatorProps {
  doShow: boolean;
}

const DropIndicator = styled('div')({
  opacity: ({doShow}: DropIndicatorProps) => doShow ? 1 : 0,
  top: 0,
  left: 0,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: splinterTheme.palette.background.paper,
  transform: 'opacity 0.5'
});

interface Props {
  backgroundColor: string;
}

const Track = React.memo(({ backgroundColor }: Props) => {
  const channelId = useContext(ChannelContext);
  const createRegion = useRegionCreator(channelId);

  const onDrop = useCallback(async (files: File[]) => {
    // TODO: WE SHOULD ALSO BE ABLE TO SUPPORT MIDI FILES LATER ON.
    files.forEach(file => {
      (async () => await createRegion(file))();
    });
  }, [createRegion]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <BaseContainer backgroundColor={backgroundColor} {...getRootProps()}>
      <input {...getInputProps()}/>
      <DropIndicator doShow={isDragActive}>
        <Typography variant="overline" color={'primary'}
                    display="block">Drop audio here to add to track</Typography>
      </DropIndicator>
      <RegionList/>
    </BaseContainer>
  );
});

export default Track;
