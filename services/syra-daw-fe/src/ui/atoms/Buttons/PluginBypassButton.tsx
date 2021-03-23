import React from "react";
import { IconButton } from "@chakra-ui/react";
import { IoIosPower } from 'react-icons/io';
import { useRecoilState, useSetRecoilState } from "recoil";
import { channelStore } from "../../../recoil/channelStore";

interface Props {
  pluginId: string;
  isActive?: boolean;
}

const PluginBypassButton: React.FC<Props> = ({pluginId, isActive}) => {
  const setIsPluginActive = useSetRecoilState(channelStore.isPluginActive(pluginId));

  return (
    <IconButton
      icon={<IoIosPower />}
      size={'xs'}
      aria-label={`Toggle Bypass Plugin`}
      title={`Toggle Bypass Plugin`}
      colorScheme={isActive ? 'teal' : 'gray'}
      roundedBottomRight={0}
      roundedTopRight={0}
      onClick={() => setIsPluginActive(currVal => !currVal)}
    />
  );
};

export default PluginBypassButton;
