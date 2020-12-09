import React from "react";
import { IconButton } from "@chakra-ui/react";
import { IoIosPower } from 'react-icons/io';
import { useRecoilState } from "recoil";
import { channelStore } from "../../../recoil/channelStore";

interface Props {
  pluginId: string;
}

const PluginBypassButton: React.FC<Props> = ({pluginId}) => {
  const [isPluginActive, setIsPluginActive] = useRecoilState(channelStore.isPluginActive(pluginId));

  return (
    <IconButton
      icon={<IoIosPower />}
      size={'xs'}
      aria-label={`Bypass Plugin`}
      colorScheme={isPluginActive ? 'teal' : 'gray'}
      onClick={() => setIsPluginActive(currVal => !currVal)}
    />
  );
};

export default PluginBypassButton;