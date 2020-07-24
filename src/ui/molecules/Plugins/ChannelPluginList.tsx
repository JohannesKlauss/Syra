import React, { useCallback, useContext } from 'react';
import { Button, List, ListItem } from '@material-ui/core';
import { ChannelContext } from '../../../providers/ChannelContext';
import { useRecoilState } from 'recoil/dist';
import SoulPlugin from '../SoulPlugin/SoulPlugin';
import { channelStore } from '../../../recoil/channelStore';
import { makeStyles } from '@material-ui/core/styles';
import { createNewId } from '../../../utils/createNewId';
import { List as MovableList, arrayMove } from 'react-movable';

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
    setSoulPluginIds(currVal => [...currVal, createNewId(`${channelId}-plugin-`)]);
  }, [setSoulPluginIds, channelId]);

  return (
    <List>
      <MovableList
        values={soulPluginIds}
        onChange={({ oldIndex, newIndex }) => setSoulPluginIds(arrayMove(soulPluginIds, oldIndex, newIndex))}
        renderItem={({ value, props }) => <SoulPlugin {...props} id={value}/>}
        renderList={({ children, props }) => (
          <List {...props}>
            {children}
            <ListItem className={styles.listItem}>
              <Button onClick={onClick} fullWidth>Add Plugin</Button>
            </ListItem>
          </List>
        )}
      >
      </MovableList>
    </List>
  );
}

export default ChannelPluginList;
