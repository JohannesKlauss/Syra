import { ChannelType } from '../types/Channel';
import React from 'react';
import {SiMidi, SiMastercard} from "react-icons/si";
import {GiSoundWaves} from "react-icons/gi";
import {FaLayerGroup} from "react-icons/fa";
import {FiSliders} from "react-icons/fi";
import {MdCallMerge} from "react-icons/md";

type ChannelTypeMap = Partial<Record<ChannelType, { icon: JSX.Element, name: string }>>;
export const channelTypeMap: ChannelTypeMap = {
  [ChannelType.AUDIO]: {
    icon: <GiSoundWaves/>,
    name: 'Audio',
  },
  [ChannelType.INSTRUMENT]: {
    icon: <SiMidi/>,
    name: 'Instrument'
  },
  [ChannelType.AUX]: {
    icon: <MdCallMerge/>,
    name: 'Aux'
  },
  [ChannelType.VCA_GROUP]: {
    icon: <FaLayerGroup/>,
    name: 'Group'
  },
  [ChannelType.MIX_GROUP]: {
    icon: <FiSliders/>,
    name: 'Mix'
  },
  [ChannelType.MASTER]: {
    icon: <SiMastercard/>,
    name: 'Master',
  }
};