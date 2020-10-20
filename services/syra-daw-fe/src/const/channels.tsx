import GraphicEqOutlinedIcon from '@material-ui/icons/GraphicEqOutlined';
import { ChannelType } from '../types/Channel';
import StraightenIcon from '@material-ui/icons/Straighten';
import MergeTypeIcon from '@material-ui/icons/MergeType';
import FolderIcon from '@material-ui/icons/Folder';
import TuneIcon from '@material-ui/icons/Tune';
import React from 'react';

type ChannelTypeMap = Partial<Record<ChannelType, { icon: JSX.Element, name: string }>>;
export const channelTypeMap: ChannelTypeMap = {
  [ChannelType.AUDIO]: {
    icon: <GraphicEqOutlinedIcon/>,
    name: 'Audio',
  },
  [ChannelType.INSTRUMENT]: {
    icon: <StraightenIcon/>,
    name: 'Instrument'
  },
  [ChannelType.AUX]: {
    icon: <MergeTypeIcon/>,
    name: 'Aux'
  },
  [ChannelType.VCA_GROUP]: {
    icon: <FolderIcon/>,
    name: 'Group'
  },
  [ChannelType.MIX_GROUP]: {
    icon: <TuneIcon/>,
    name: 'Mix'
  },
  [ChannelType.MASTER]: {
    icon: <TuneIcon/>,
    name: 'Master',
  }
};