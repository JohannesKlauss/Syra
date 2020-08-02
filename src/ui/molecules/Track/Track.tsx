import React, { HTMLAttributes, useCallback, useContext, useMemo } from 'react';
import { styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../../theme';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useDropzone } from 'react-dropzone';
import RegionList from './Regions/RegionList';
import { hexToRgb } from '../../../utils/color';
import useIsDragOnDocument from '../../../hooks/ui/useIsDragOnDocument';
import usePixelToSeconds from '../../../hooks/ui/usePixelToSeconds';
import useSnapCtrlPixelCalc from '../../../hooks/ui/useSnapCtrlPixelCalc';
import { useRecoilValue } from 'recoil/dist';
import { arrangeWindowStore } from '../../../recoil/arrangeWindowStore';
import useCreateRegion from '../../../hooks/recoil/region/useCreateRegion';

interface BaseContainerProps {
  backgroundColor: string;
  height: number;
}

const BaseContainer = styled(
  ({ backgroundColor, height, ...other }: BaseContainerProps & Omit<HTMLAttributes<HTMLDivElement>, keyof BaseContainerProps>) => <div {...other} />,
)({
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
)({
  display: ({doShow}: DropIndicatorProps) => doShow ? 'flex' : 'none',
  opacity: 0.5,
  paddingLeft: 150,
  top: 0,
  left: 0,
  height: '100%',
  alignItems: 'center',
  backgroundColor: splinterTheme.palette.background.paper,
});

interface Props {
  backgroundColor: string;
}

const Track = React.memo(({ backgroundColor }: Props) => {
  const channelId = useContext(ChannelContext);
  const trackHeight = useRecoilValue(arrangeWindowStore.trackHeight);
  const createRegion = useCreateRegion();
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
      // On a Region we only use the first file.
      // TODO: THE SUBSEQUENT files should be move to the tracks beneath this one or create complete new channels.
      await createRegion(channelId, files[0], pixelToSeconds(calcSnappedX(x)));
    }
  }, [createRegion, pixelToSeconds, calcSnappedX, channelId]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <BaseContainer {...getRootProps()} backgroundColor={background} id={`track-${channelId}`} height={trackHeight}>
      {isDragOnDocument && <input {...getInputProps()} />}
      <DropIndicator doShow={isDragOnDocument}>
        <Typography variant="overline" color={isDragActive ? 'primary' : 'initial'} display={'block'}>
          Drop Track to add to region.
        </Typography>
      </DropIndicator>
      <RegionList/>
    </BaseContainer>
  );
});

export default Track;
