import React, { useContext } from "react";
import { ChannelContext } from "../../../../providers/ChannelContext";
import { useRecoilState } from "recoil";
import { channelStore } from "../../../../recoil/channelStore";
import useDeleteChannel from "../../../../hooks/recoil/channel/useDeleteChannel";
import { MenuItem, MenuGroup } from "@chakra-ui/react";
import ChannelColorPicker from "./ChannelColorPicker";

interface Props {

}

const ChannelContextMenu: React.FC<Props> = () => {
  const channelId = useContext(ChannelContext);
  const [color, setColor] = useRecoilState(channelStore.color(channelId));
  const deleteChannel = useDeleteChannel();

  return (
    <MenuGroup>
      <MenuItem>
        <ChannelColorPicker activeColor={color} onChangeColor={setColor}/>
      </MenuItem>
      <MenuItem onClick={() => deleteChannel(channelId)}><span>Delete</span></MenuItem>
    </MenuGroup>
  );
};

export default ChannelContextMenu;
