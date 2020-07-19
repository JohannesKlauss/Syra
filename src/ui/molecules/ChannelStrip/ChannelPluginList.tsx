import React, { useCallback, useContext } from 'react';
import { Button, List, ListItem, styled } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilState } from 'recoil/dist';
import ChannelPlugin from './ChannelPlugin';
import { channelStore } from '../../../recoil/channelStore';
import { makeStyles } from '@material-ui/core/styles';
const uniqid = require('uniqid');

const useStyles = makeStyles({
  listItem: {
    paddingLeft: 3,
    paddingRight: 3,
  }
});

function ChannelPluginList() {
  const styles = useStyles();
  const channelId = useContext(ChannelContext);
  const [soulPluginIds, setSoulPluginIds] = useRecoilState(channelStore.pluginIds(channelId));

  const onClick = useCallback(() => {
    setSoulPluginIds(currVal => [...currVal, uniqid(`${channelId}-plugin-`)]);
  }, [setSoulPluginIds, channelId]);

  return (
    <List>
      {soulPluginIds.map((id) => (
        <ChannelPlugin key={id} id={id}/>
      ))}
      <ListItem className={styles.listItem}>
        <Button onClick={onClick} fullWidth>Add Plugin</Button>
      </ListItem>
    </List>
  );
}

export default ChannelPluginList;
