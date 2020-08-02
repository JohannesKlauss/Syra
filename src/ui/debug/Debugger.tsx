import React, { useEffect, useState } from 'react';
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { useRecoilValue } from 'recoil/dist';
import { regionStore } from '../../recoil/regionStore';
import { channelStore } from '../../recoil/channelStore';
import { ChannelContext } from '../../providers/ChannelContext';
import { RegionContext } from '../../providers/RegionContext';
import DebugPlayers from './toneJsNodes/DebugPlayers';
import DebugNodes from './DebugNodes';

interface Props {

}

function Debugger({}: Props) {
  const [selectedChannelId, setSelectedChannelId] = useState('');
  const [selectedRegionId, setSelectedRegionId] = useState('');

  const channelIds = useRecoilValue(channelStore.ids);
  const regionIds = useRecoilValue(regionStore.ids(selectedChannelId));

  const selectedId = useRecoilValue(channelStore.selectedId);

  useEffect(() => {
    setSelectedChannelId(selectedId);
  }, [selectedId]);

  useEffect(() => {
    if (selectedRegionId === '' && regionIds.length > 0) {
      setSelectedRegionId(regionIds[0]);
    }
  }, [selectedChannelId, regionIds]);

  return (
    <Container maxWidth={'xl'}>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant="h4">Splinter Debugger</Typography>
          <Typography variant="subtitle2">NOTE: This will alter a lot of the core functionality. Using this debugger will
            likely create a need to reload the project before it's usable with the normal UI again.</Typography>
        </Grid>
        <Grid item sm={4}>
          <FormControl>
            <InputLabel id="channelId">Channel Id</InputLabel>
            <Select autoWidth labelId={'channelId'} value={selectedChannelId}
                    onChange={(e: React.ChangeEvent<{ value: unknown }>) => {
                      setSelectedChannelId(e.target.value as string);
                      setSelectedRegionId('');
                    }}>
              {channelIds.map(id => <MenuItem value={id} key={id}>{id}</MenuItem>)}
            </Select>
          </FormControl>

        </Grid>
        <Grid item sm={4}>
          <FormControl>
            <InputLabel id="regionId">Region Id</InputLabel>
            <Select autoWidth labelId={'regionId'} value={selectedRegionId}
                    onChange={(e: React.ChangeEvent<{ value: unknown }>) => setSelectedRegionId(e.target.value as string)}>
              {regionIds.map(id => <MenuItem value={id} key={id}>{id}</MenuItem>)}
            </Select>
          </FormControl>

        </Grid>
        <ChannelContext.Provider value={selectedChannelId}>
          <RegionContext.Provider value={selectedRegionId}>
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
