import React, { useMemo, useState } from 'react';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import FolderIcon from '@material-ui/icons/Folder';
import TuneIcon from '@material-ui/icons/Tune';
import StraightenIcon from '@material-ui/icons/Straighten';
import { Backdrop } from '@material-ui/core';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { ChannelType } from '../../../types/Channel';
import useChannelCreator from '../../../hooks/recoil/useChannelCreator';

function NewChannelFab() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = useChannelCreator();

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
