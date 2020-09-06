import React, { useCallback, useState } from 'react';
import { Snapshot, useRecoilTransactionObserver_UNSTABLE } from 'recoil/dist';
import { Button, Grid } from '@material-ui/core';
import { regionStore } from '../../recoil/regionStore';
import { channelStore } from '../../recoil/channelStore';
import { audioBufferStore } from '../../recoil/audioBufferStore';

// TODO: THIS WAS THOUGHT AS A DEV TOOL FOR RECOIL, BUT I GUESS WE SHOULD WAIT FOR THE OFFICIAL ONE.
function RegionObserver() {
  const [snapshot, setSnapshot] = useState<Snapshot>();

  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {
    setSnapshot(snapshot);
  });

  const dumpStore = useCallback(() => {
    const channelIds = snapshot?.getLoadable(channelStore.ids);
    let regionIds;
    let regionStates;

    if (channelIds?.contents) {
      regionIds = (channelIds.contents as string[]).map(channelId => snapshot?.getLoadable(regionStore.ids(channelId)));
    }

    // @ts-ignore
    if (regionIds[0]?.contents) {
      // @ts-ignore
      regionStates = (regionIds[0].contents as string[]).map(regionId => snapshot?.getLoadable(regionStore.regionState(regionId)));
    }

    // @ts-ignore
    console.log('RECOIL_SNAPSHOT', regionStates.map(state => state.contents));
  }, [snapshot]);

  const dumpBufferStore = useCallback(() => {
    console.log(snapshot?.getLoadable(audioBufferStore.ids).contents);
  }, [snapshot]);

  return (
    <Grid>
      <Button variant={'text'} onClick={dumpStore}>Dump Region Store</Button>
      <Button variant={'text'} onClick={dumpBufferStore}>Dump Buffer Store</Button>
    </Grid>
  );
}

export default RegionObserver;
