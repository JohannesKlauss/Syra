import React, { useContext } from 'react';
import { ChannelContext } from '../../../../providers/ChannelContext';
import { channelStore } from '../../../../recoil/channelStore';
import { useRecoilValue } from 'recoil';
import { ChannelType } from '../../../../types/Channel';
import MidiTrackContextMenu from "./MidiTrackContextMenu";
import AudioTrackContextMenu from "./AudioTrackContextMenu";

interface Props {}

const ChannelTrackContextMenu: React.FC<Props> = ({}) => {
  const channelId = useContext(ChannelContext);
  const channelType = useRecoilValue(channelStore.type(channelId));
  
  const component = channelType === ChannelType.INSTRUMENT ? <MidiTrackContextMenu/> : <AudioTrackContextMenu/>;

  return (
    <>
      {component}
    </>
  );
};

export default ChannelTrackContextMenu;
