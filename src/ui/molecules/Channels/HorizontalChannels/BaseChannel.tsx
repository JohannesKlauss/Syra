import React, { useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil/dist';
import { ChannelType } from '../../../../types/Channel';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { Paper, styled, useTheme } from '@material-ui/core';
import { channelStore } from '../../../../recoil/channelStore';
import AudioChannel from './AudioChannel';
import InstrumentChannel from './InstrumentChannel';
import useDeleteChannel from '../../../../hooks/recoil/channel/useDeleteChannel';
import { useHotkeys } from 'react-hotkeys-hook';

interface BaseContainerProps {
  backgroundColor: string;
}

const BaseContainer = styled(Paper)({
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
  const hotkeysRef = useHotkeys('backspace', useDeleteChannel(channelId));

  const backgroundColor = useMemo(() => {
    return channelId === selectedChannelId ? '#606060' : theme.palette.background.paper;
  }, [channelId, selectedChannelId]);

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
      <BaseContainer backgroundColor={backgroundColor} onClick={() => setSelectedChannelId(channelId)}
                     innerRef={hotkeysRef} tabIndex={0}>
        {ChannelComponent}
      </BaseContainer>
    </ChannelContext.Provider>
  );
}

export default React.memo(BaseChannel);
