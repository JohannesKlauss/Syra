import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { ChannelType } from '../../../../types/Channel';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { Box, BoxProps, styled, useTheme } from '@material-ui/core';
import { channelStore } from '../../../../recoil/channelStore';
import AudioChannel from './AudioChannel';
import InstrumentChannel from './InstrumentChannel';

interface BaseContainerProps {
  backgroundColor: string;
}

const BaseContainer = styled(
  ({ backgroundColor, ...other }: BaseContainerProps & Omit<BoxProps, keyof BaseContainerProps>) => <Box {...other} />,
)({
  maxWidth: 150,
  width: 150,
  marginLeft: 1,
  backgroundColor: ({ backgroundColor }: BaseContainerProps) => backgroundColor,
  '&:focus': {
    outline: 'none',
  }
});

interface Props {
  channelId: string;
}

function BaseChannel({ channelId }: Props) {
  const theme = useTheme();
  const type = useRecoilValue(channelStore.type(channelId));
  const [selectedChannelId, setSelectedChannelId] = useRecoilState(channelStore.selectedId);

  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? '#606060' : theme.palette.background.paper;
  }, [channelId, selectedChannelId, theme]);

  const ChannelComponent = useMemo(() => {
    switch (type) {
      case ChannelType.AUDIO:
        return <AudioChannel/>;
      case ChannelType.INSTRUMENT:
        return <InstrumentChannel/>;
    }
  }, [type]);

  return (
    <ChannelContext.Provider value={channelId}>
      <BaseContainer backgroundColor={backgroundColor} onClick={() => setSelectedChannelId(channelId)}>
        {ChannelComponent}
      </BaseContainer>
    </ChannelContext.Provider>
  );
}

export default React.memo(BaseChannel);
