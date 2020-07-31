import React, { useCallback, useRef } from 'react';
import { styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../../theme';
import { useDropzone } from 'react-dropzone';
import useChannelCreator from '../../../hooks/recoil/channel/useChannelCreator';
import { ChannelType } from '../../../types/Channel';
import useIsDragOnDocument from '../../../hooks/ui/useIsDragOnDocument';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useScrollPosition from '../../../hooks/ui/useScrollPosition';

const BaseContainer = styled('div')({
  width: 'calc(100vw - 230px)',
  height: 70,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  position: 'relative',
  willChange: 'transform',
  backgroundColor: splinterTheme.palette.background.paper,
  border: `1px dashed ${splinterTheme.palette.background.paper}`,
  userSelect: 'none',
  '&:focus': {
    outline: 'none',
  }
});

function DropTrack() {
  const createChannel = useChannelCreator();
  const isDragOnDocument = useIsDragOnDocument();
  const ref = useRef<HTMLDivElement>(null);
  const arrangeWindowRef = useRecoilValue(arrangeWindowStore.ref);
  useScrollPosition((pos) => {
    ref.current && ref.current.style.setProperty('transform', `translateX(${pos}px)`);
  }, [ref, arrangeWindowRef], arrangeWindowRef);

  const onDrop = useCallback(async (files: File[]) => {
    // TODO: WE SHOULD ALSO BE ABLE TO SUPPORT MIDI FILES LATER ON.
    files.forEach(file => {
      // TODO: CURRENTLY THIS DOESN'T WORK FOR MULTIPLE FILES BECAUSE THE CHANNEL ID STAYS THE SAME. SO EACH REGION GETS ATTACHED TO THE SAME CHANNEL.
      (async () => {
        const createRegion = createChannel(ChannelType.AUDIO, file.name.split('.')[0]);

        await createRegion(file);
      })();
    });
  }, [createChannel]);
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
