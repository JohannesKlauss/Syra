import React, { HTMLAttributes, useCallback, useContext, useMemo } from 'react';
import { styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../../theme';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useDropzone } from 'react-dropzone';
import useRegionCreator from '../../../hooks/recoil/region/useRegionCreator';
import RegionList from './Region/RegionList';
import { hexToRgb } from '../../../utils/color';
import useIsDragOnDocument from '../../../hooks/ui/useIsDragOnDocument';
import usePixelToSeconds from '../../../hooks/ui/usePixelToSeconds';
import useSnapCtrlPixelCalc from '../../../hooks/ui/useSnapCtrlPixelCalc';

interface BaseContainerProps {
  backgroundColor: string;
}

const BaseContainer = styled(
  ({ backgroundColor, ...other }: BaseContainerProps & Omit<HTMLAttributes<HTMLDivElement>, keyof BaseContainerProps>) => <div {...other} />,
)({
  width: '100%',
  height: 70,
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
  const createRegion = useRegionCreator(channelId);
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
      await createRegion(files[0], pixelToSeconds(calcSnappedX(x)));
    }
  }, [createRegion, pixelToSeconds, calcSnappedX]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <BaseContainer {...getRootProps()} backgroundColor={background} id={`track-${channelId}`}>
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
