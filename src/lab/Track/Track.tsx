import React, { HTMLAttributes, useCallback, useContext, useEffect, useMemo } from 'react';
import { styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { ChannelContext } from '../../providers/ChannelContext';
import { useDropzone } from 'react-dropzone';
import useRegionCreator from '../../hooks/recoil/region/useRegionCreator';
import RegionList from './Region/RegionList';
import { hexToRgb } from '../../utils/color';
import useIsDragOnDocument from '../../hooks/ui/useIsDragOnDocument';

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

  const background = useMemo(() => {
    const rgb = hexToRgb(backgroundColor);

    return `rgba(${rgb.red}, ${rgb.blue}, ${rgb.green}, 0.7)`;
  }, [backgroundColor]);

  const onDrop = useCallback(async (files: File[]) => {
    // TODO: WE SHOULD ALSO BE ABLE TO SUPPORT MIDI FILES LATER ON.
    files.forEach(file => {
      (async () => await createRegion(file))();
    });
  }, [createRegion]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <BaseContainer {...getRootProps()} backgroundColor={background} id={`track-${channelId}`}>
      <input {...getInputProps()} />
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
