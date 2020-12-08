import React, { useCallback, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { soulPluginStore } from "../../../recoil/soulPluginStore";
import { createSoulInstance } from "../../../soul/createSoulInstance";
import { channelStore } from "../../../recoil/channelStore";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { VscChevronDown } from 'react-icons/vsc';

interface Props {
  pluginId: string;
  isInstrument?: boolean;
}

const PluginMenuButton: React.FC<Props> = ({pluginId, isInstrument}) => {
  const [activePlugin, setActivePlugin] = useRecoilState(channelStore.soulInstance(pluginId));
  const [isPluginActive] = useRecoilState(channelStore.isPluginActive(pluginId));
  const patchList = useRecoilValue(
    isInstrument ? soulPluginStore.availableSoulInstruments : soulPluginStore.availableSoulPlugins,
  );

  const onChangePatch = useCallback(
    async (UID: string) => {
      const patch = patchList.find((patch) => patch.UID === UID);

      if (patch) {
        setActivePlugin(await createSoulInstance(patch, isInstrument));
      }
    },
    [patchList, setActivePlugin, isInstrument],
  );
  
  const menuItems = useMemo(
    () =>
      patchList.map((patch) => ({
        label: patch.displayName,
        onClick: async () => await onChangePatch(patch.UID),
      })),
    [onChangePatch, patchList],
  );
  
  return (
    <Menu>
      <MenuButton
        size={'xs'}
        as={Button}
        colorScheme={isPluginActive ? 'teal': 'gray'}
      >
        <VscChevronDown />
      </MenuButton>
      <MenuList>
        {menuItems.map(({ onClick, label }) => (
          <MenuItem key={label} onClick={onClick}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PluginMenuButton;
