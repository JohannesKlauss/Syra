import { Button, Flex } from '@chakra-ui/react';
import React, { useMemo } from "react";
import PluginBypassButton from './PluginBypassButton';
import { useRecoilState } from "recoil";
import { channelStore } from "../../../recoil/channelStore";
import PluginMenuButton from './PluginMenuButton';

interface Props {
  pluginId: string;
  isInstrument?: boolean
  onClick: () => void;
}

const PluginButton: React.FC<Props> = ({pluginId, isInstrument, onClick}) => {
  const [activePlugin] = useRecoilState(channelStore.soulInstance(pluginId));
  const [isPluginActive] = useRecoilState(channelStore.isPluginActive(pluginId));

  const isActive = useMemo(() => isPluginActive && activePlugin !== undefined, [activePlugin, isPluginActive]);

  return (
    <Flex align={'center'} w={'100%'} mt={'2px'}>
      <PluginBypassButton pluginId={pluginId} isActive={isActive}/>
      <Button size={'xs'} as={'div'} cursor={'pointer'} flex={2} colorScheme={isActive ? 'teal' : 'gray'} onClick={onClick} rounded={0}>
        {activePlugin?.soulPatch.descriptor.description.name ?? '-'}
      </Button>
      <PluginMenuButton isInstrument={isInstrument} pluginId={pluginId} isActive={isActive}/>
    </Flex>
  );
};

export default PluginButton;
