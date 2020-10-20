import React, { useMemo } from 'react';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import { ChannelType } from '../../../types/Channel';
import StraightenIcon from '@material-ui/icons/Straighten';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import FolderIcon from '@material-ui/icons/Folder';
import TuneIcon from '@material-ui/icons/Tune';
import { buttonInfo } from '../../../utils/text';

export default function useAvailableChannels() {
  return useMemo(() => ([
    { icon: <GraphicEqOutlinedIcon />, name: 'Audio', type: ChannelType.AUDIO, title: buttonInfo('Add Audio Channel', 'Alt+Cmd+A') },
    { icon: <StraightenIcon />, name: 'Instrument', type: ChannelType.INSTRUMENT,  title: buttonInfo('Add Instrument Channel', 'Alt+Cmd+S') },
    { icon: <MergeTypeIcon />, name: 'Aux', type: ChannelType.AUX,  title: buttonInfo('Add Aux Channel', 'Alt+Cmd+B') },
    { icon: <FolderIcon />, name: 'Group', type: ChannelType.VCA_GROUP, title: buttonInfo('Add VCA Group Channel', 'Alt+Cmd+D') },
    { icon: <TuneIcon />, name: 'Mix', type: ChannelType.MIX_GROUP, title: buttonInfo('Add Mix Group Channel', 'Alt+Cmd+F') },
  ]), []);
}