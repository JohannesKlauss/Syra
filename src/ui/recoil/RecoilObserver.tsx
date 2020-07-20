import React, { useState } from 'react';
import { Snapshot, useRecoilTransactionObserver_UNSTABLE } from 'recoil/dist';
import { Button } from '@material-ui/core';
import { channelStore } from '../../recoil/channelStore';

function RecoilObserver() {
  const [snapshot, setSnapshot] = useState<Snapshot>();

  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
    setSnapshot(snapshot);
  });

  return (
    <Button variant={'text'} onClick={() => console.log('RECOIL_SNAPSHOT', snapshot?.getLoadable(channelStore.ids))}>Dump Recoil Store</Button>
  );
}

export default RecoilObserver;
