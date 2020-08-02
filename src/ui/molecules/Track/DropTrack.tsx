import React, { useCallback, useRef } from 'react';
import { styled, Typography } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { ChannelType } from '../../../types/Channel';
import useIsDragOnDocument from '../../../hooks/ui/useIsDragOnDocument';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useScrollPosition from '../../../hooks/ui/useScrollPosition';
import useCreateChannel from '../../../hooks/recoil/channel/useCreateChannel';
import useCreateRegion from '../../../hooks/recoil/region/useCreateRegion';

const BaseContainer = styled('div')(({theme}) => ({
  width: 'calc(100vw - 230px)',
  height: 70,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  position: 'relative',
  willChange: 'transform',
  backgroundColor: theme.palette.background.paper,
  border: `1px dashed ${theme.palette.background.paper}`,
  userSelect: 'none',
  '&:focus': {
    outline: 'none',
  }
}));

function DropTrack() {
  const createChannel = useCreateChannel();
  const createRegion = useCreateRegion();
  const isDragOnDocument = useIsDragOnDocument();
  const ref = useRef<HTMLDivElement>(null);
  const arrangeWindowRef = useRecoilValue(arrangeWindowStore.ref);
  useScrollPosition((pos) => {
    ref.current && ref.current.style.setProperty('transform', `translateX(${pos}px)`);
  }, [ref, arrangeWindowRef], arrangeWindowRef);

  const onDrop = useCallback(async (files: File[]) => {
    files.forEach((file, i) => {
      (async () => {
        const channelId = await createChannel(ChannelType.AUDIO, i, file.name.split('.')[0]);
        await createRegion(channelId, file, 0);
      })();
    });
  }, [createChannel, createRegion]);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <BaseContainer {...getRootProps()} data-cy={'drop-track-zone'} ref={ref}>
      <input {...getInputProps()} data-cy={'drop-track-input'}/>
      <Typography variant="overline" color={isDragOnDocument ? 'primary' : 'initial'}
                  display="block">Drop audio here to add new track</Typography>
    </BaseContainer>
  );
}

DropTrack.whyDidYouRender = false;

export default React.memo(DropTrack);
