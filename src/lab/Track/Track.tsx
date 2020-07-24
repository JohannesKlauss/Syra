import React, { HTMLAttributes, useCallback, useContext, useMemo } from 'react';
import { styled, Typography } from '@material-ui/core';
import { splinterTheme } from '../../theme';
import { ChannelContext } from '../../providers/ChannelContext';
import { useDropzone } from 'react-dropzone';
import useRegionCreator from '../../hooks/recoil/region/useRegionCreator';
import RegionList from './Region/RegionList';
import { hexToRgb } from '../../utils/color';

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
    <BaseContainer backgroundColor={background} id={`track-${channelId}`}>
      <RegionList/>
    </BaseContainer>
  );
});

export default Track;
