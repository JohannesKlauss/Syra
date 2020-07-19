import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil/dist';
import { ChannelType } from '../../types/Channel';
import { ChannelContext } from '../../providers/ChannelContext';
import { Paper, styled } from '@material-ui/core';
import { channelStore } from '../../recoil/channelStore';
import AudioChannel from './AudioChannel';
import InstrumentChannel from './InstrumentChannel';

const Channel = styled(Paper)({
  maxWidth: 150,
  width: 150,
  marginLeft: 1,
});

interface Props {
  channelId: string;
}

function BaseChannel({channelId}: Props) {
  const type = useRecoilValue(channelStore.type(channelId));

  const ChannelComponent = useMemo(() => {
    switch(type) {
      case ChannelType.AUDIO:
        return <AudioChannel/>;
      case ChannelType.INSTRUMENT:
        return <InstrumentChannel/>;
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

export default React.memo(BaseChannel);
