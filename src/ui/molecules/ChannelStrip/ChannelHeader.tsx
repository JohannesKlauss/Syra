import React, { useContext, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { useRecoilState } from 'recoil/dist';
import { channelName } from '../../../recoil/selectors/channel';
import { ChannelContext } from '../../../providers/ChannelContext';

function ChannelHeader() {
  const channelId = useContext(ChannelContext);
  const [name, setName] = useRecoilState(channelName(channelId));

  // TODO: THIS IS A HACK, BECAUSE RECOIL UPDATES ALL OF THE DEFAULT VALUES ON THE channelName ATOM FAMILY IF IT HASN'T PREVIOUSLY BEEN SET.
  useEffect(() => {
    setName(name);
  }, [setName, name]);

  return (
      <TextField value={name} onChange={e => setName(e.target.value)}/>
  );
}

export default React.memo(ChannelHeader);
