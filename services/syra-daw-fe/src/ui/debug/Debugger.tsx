import React, { useEffect, useState } from 'react';
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { regionStore } from '../../recoil/regionStore';
import { channelStore } from '../../recoil/channelStore';
import { ChannelContext } from '../../providers/ChannelContext';
import { RegionContext } from '../../providers/RegionContext';
import DebugNodes from './DebugNodes';
import DebugChannel from './recoil/DebugChannel';
import DebugRegion from './recoil/DebugRegion';

function Debugger() {
  const [selectedChannelId, setSelectedChannelId] = useState('');
  const [selectedRegionId, setSelectedRegionId] = useState('');

  const channelIds = useRecoilValue(channelStore.ids);
  const regionIds = useRecoilValue(regionStore.ids(selectedChannelId));

  const channelCb = useRecoilCallback(({snapshot}) => () => {
    const ids = snapshot.getLoadable(channelStore.ids).contents as string[];

    const obj: {[name: string]: string} = {};

    ids.forEach(id => obj[id] = snapshot.getLoadable(channelStore.name(id)).contents as string);

    return obj;
  }, []);

  const regionCb = useRecoilCallback(({snapshot}) => (channelId: string) => {
    const ids = snapshot.getLoadable(regionStore.ids(channelId)).contents as string[];

    const obj: {[name: string]: string} = {};

    ids.forEach(id => obj[id] = snapshot.getLoadable(regionStore.name(id)).contents as string);

    return obj;
  }, []);

  const channelNames = channelCb();
  const regionNames = regionCb(selectedChannelId);

  const selectedId = useRecoilValue(channelStore.selectedId);

  useEffect(() => {
    setSelectedChannelId(selectedId);
  }, [selectedId]);

  useEffect(() => {
    if (selectedRegionId === '' && regionIds.length > 0) {
      setSelectedRegionId(regionIds[0]);
    }
  }, [selectedChannelId, regionIds, selectedRegionId]);

  return (
    <Container maxWidth={'xl'}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant="h4">Debugger</Typography>
          <Typography variant="subtitle2">NOTE: This will alter a lot of the core functionality. Using this debugger will
            likely create a need to reload the project before it's usable with the normal UI again.</Typography>
        </Grid>
        <Grid item sm={6}>
          <FormControl>
            <InputLabel id="channelId">Channel</InputLabel>
            <Select autoWidth labelId={'channelId'} value={selectedChannelId}
                    onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                      setSelectedChannelId(e.target.value as string);
                      setSelectedRegionId('');
                    }}>
              {channelIds.map(id => <MenuItem value={id} key={id}>{channelNames[id]}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6}>
          <FormControl>
            <InputLabel id="regionId">Region</InputLabel>
            <Select autoWidth labelId={'regionId'} value={selectedRegionId}
                    onChange={(e: React.ChangeEvent<{ value: unknown }>) => setSelectedRegionId(e.target.value as string)}>
              {regionIds.map(id => <MenuItem value={id} key={id}>{regionNames[id]}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <ChannelContext.Provider value={selectedChannelId}>
          <Grid item sm={6}>
            <DebugChannel/>
          </Grid>
          <RegionContext.Provider value={selectedRegionId}>
            <Grid item sm={6}>
              <DebugRegion/>
            </Grid>
            <Grid item sm={12}>
              {selectedRegionId !== '' && <DebugNodes/>}
            </Grid>
          </RegionContext.Provider>
        </ChannelContext.Provider>
      </Grid>
    </Container>
  );
}

export default Debugger;
