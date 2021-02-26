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
      title={`Bypass Plugin`}
      colorScheme={isPluginActive ? 'teal' : 'gray'}
      roundedBottomRight={0}
      roundedTopRight={0}
      onClick={() => setIsPluginActive(currVal => !currVal)}
    />
  );
};

export default PluginBypassButton;
