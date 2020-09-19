import React, { HTMLAttributes, useCallback, useContext, useMemo } from 'react';
import { styled, Theme, Typography } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useDropzone } from 'react-dropzone';
import RegionList from './Regions/RegionList';
import { hexToRgb } from '../../../utils/color';
import useIsDragOnDocument from '../../../hooks/ui/useIsDragOnDocument';
import usePixelToSeconds from '../../../hooks/ui/usePixelToSeconds';
import useSnapCtrlPixelCalc from '../../../hooks/ui/useSnapCtrlPixelCalc';
import { useRecoilValue } from 'recoil';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useCreateAudioRegion from '../../../hooks/recoil/region/useCreateAudioRegion';
import MarqueeContainer from './MarqueeContainer';

interface BaseContainerProps {
  backgroundColor: string;
  height: number;
}

const BaseContainer = styled(
  ({ backgroundColor, height, ...other }: BaseContainerProps & Omit<HTMLAttributes<HTMLDivElement>, keyof BaseContainerProps>) => <div {...other} />,
)({
  opacity: 0.8,
  width: '100%',
  height: ({height}: BaseContainerProps) => height,
  backgroundColor: ({ backgroundColor }: BaseContainerProps) => backgroundColor,
  position: 'relative',
  '&:focus': {
    outline: 'none',
  }
});

interface DropIndicatorProps {
  doShow: boolean;
}

const DropIndicator = styled(
  ({ doShow, ...other }: DropIndicatorProps & Omit<HTMLAttributes<HTMLDivElement>, keyof DropIndicatorProps>) => <div {...other} />,
)<Theme, DropIndicatorProps>(({theme, doShow}) => ({
  display: doShow ? 'flex' : 'none',
  opacity: 0.5,
  paddingLeft: 150,
  top: 0,
  left: 0,
  height: '100%',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
}));

interface Props {
  backgroundColor: string;
}

const Track = React.memo(({ backgroundColor }: Props) => {
  const channelId = useContext(ChannelContext);
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const createRegion = useCreateAudioRegion();
  const isDragOnDocument = useIsDragOnDocument();
  const pixelToSeconds = usePixelToSeconds();
  const calcSnappedX = useSnapCtrlPixelCalc();

  const background = useMemo(() => {
    const rgb = hexToRgb(backgroundColor);

    return `rgba(${rgb.red}, ${rgb.blue}, ${rgb.green}, 0.7)`;
  }, [backgroundColor]);

  // TODO: WE SHOULD ALSO BE ABLE TO SUPPORT MIDI FILES LATER ON.
  const onDrop = useCallback(async (files: File[], _, e) => {
    const x = e.clientX - e.target.getBoundingClientRect().left; // x position within the track.

    if (files.length > 0) {
      // On a existing track we only use the first file.
      // TODO: THE SUBSEQUENT files should be move to the tracks beneath this one or create complete new channels.
      await createRegion(channelId, files[0], pixelToSeconds(calcSnappedX(x)));
    }
  }, [createRegion, pixelToSeconds, calcSnappedX, channelId]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // TODO: BECAUSE OF A WEIRD ERROR WE REMOVED THE {...getRootProps()} FOR NOW.
  return (
    <BaseContainer backgroundColor={background} id={`track-${channelId}`} height={trackHeight}>
      {isDragOnDocument && <input {...getInputProps()} />}
      <DropIndicator doShow={isDragOnDocument}>
        <Typography variant="overline" color={isDragActive ? 'primary' : 'initial'} display={'block'}>
          Drop Track to add to region.
        </Typography>
      </DropIndicator>
      <RegionList/>
      <MarqueeContainer/>
    </BaseContainer>
  );
});

export default Track;
