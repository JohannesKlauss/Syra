import React, { useMemo } from 'react';
import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import { ChannelType } from '../../../types/Channel';
import StraightenIcon from '@material-ui/icons/Straighten';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import FolderIcon from '@material-ui/icons/Folder';
import TuneIcon from '@material-ui/icons/Tune';

export default function useAvailableChannels() {
  return useMemo(() => ([
    { icon: <GraphicEqOutlinedIcon />, name: 'Audio', type: ChannelType.AUDIO },
    { icon: <StraightenIcon />, name: 'Instrument', type: ChannelType.INSTRUMENT },
    { icon: <MergeTypeIcon />, name: 'Aux', type: ChannelType.AUX },
    { icon: <FolderIcon />, name: 'Group', type: ChannelType.VCA_GROUP },
    { icon: <TuneIcon />, name: 'Mix', type: ChannelType.MIX_GROUP },
  ]), []);
}