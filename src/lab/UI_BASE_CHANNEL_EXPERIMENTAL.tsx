import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { channelType } from '../recoil/selectors/channel';
import { ChannelType } from '../types/Channel';
import UI_AUDIO_CHANNEL_EXPERIMENTAL from './UI_AUDIO_CHANNEL_EXPERIMENTAL';
import UI_INSTRUMENT_CHANNEL_EXPERIMENTAL from './UI_INSTRUMENT_CHANNEL_EXPERIMENTAL';
import { ChannelContext } from '../providers/ChannelContext';
import { Paper, styled } from '@material-ui/core';

const Channel = styled(Paper)({
  maxWidth: 110,
  marginLeft: 1,
});

interface Props {
  channelId: string;
}

function UI_BASE_CHANNEL_EXPERIMENTAL({channelId}: Props) {
  const type = useRecoilValue(channelType(channelId));

  const ChannelComponent = useMemo(() => {
    switch(type) {
      case ChannelType.AUDIO:
        return <UI_AUDIO_CHANNEL_EXPERIMENTAL/>;
      case ChannelType.INSTRUMENT:
        return <UI_INSTRUMENT_CHANNEL_EXPERIMENTAL/>;
    }
  }, [type]);

  return (
    <ChannelContext.Provider value={channelId}>
      <Channel>
        {ChannelComponent}
      </Channel>
    </ChannelContext.Provider>
  );
}

export default React.memo(UI_BASE_CHANNEL_EXPERIMENTAL);
