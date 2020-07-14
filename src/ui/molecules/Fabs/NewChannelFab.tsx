import React, { useCallback, useMemo, useState } from 'react';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import FolderIcon from '@material-ui/icons/Folder';
import TuneIcon from '@material-ui/icons/Tune';
import StraightenIcon from '@material-ui/icons/Straighten';
import { Backdrop } from '@material-ui/core';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { useSetRecoilState } from 'recoil/dist';
import { ChannelType } from '../../../types/Channel';
import { channelStore } from '../../../recoil/channelStore';
const uniqid = require('uniqid');

const CHANNEL_ID_PREFIX = 'channel-';

const createNewChannelId = () => uniqid(CHANNEL_ID_PREFIX);

function NewChannelFab() {
  const [nextChannelId, setNextChannelId] = useState(createNewChannelId());
  const [isOpen, setIsOpen] = useState(false);
  const setChannelIds = useSetRecoilState(channelStore.ids);
  const setChannelType = useSetRecoilState(channelStore.type(nextChannelId));

  const onClick = useCallback((type: ChannelType) => {
    setChannelIds(currVal => [...currVal, nextChannelId]);
    setChannelType(type);

    setNextChannelId(createNewChannelId());
  }, [setChannelIds, nextChannelId, setNextChannelId, setChannelType]);

  const actions = useMemo(() => ([
    { icon: <GraphicEqOutlinedIcon />, name: 'Audio', type: ChannelType.AUDIO },
    { icon: <StraightenIcon />, name: 'Instrument', type: ChannelType.INSTRUMENT },
    { icon: <MergeTypeIcon />, name: 'Aux', type: ChannelType.AUX },
    { icon: <FolderIcon />, name: 'Group', type: ChannelType.VCA_GROUP },
    { icon: <TuneIcon />, name: 'Mix', type: ChannelType.MIX_GROUP },
  ]), []);

  return (
    <>
      <Backdrop open={isOpen} />
      <SpeedDial
        ariaLabel="Create new Channel"
        icon={<SpeedDialIcon />}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
        open={isOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            tooltipPlacement={'right'}
            onClick={() => onClick(action.type)}
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default NewChannelFab;
