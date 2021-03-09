import React, { ForwardRefExoticComponent, useContext, useRef, useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Input,
  MenuGroup,
  MenuItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import { MdSettings } from "react-icons/md";
import { channelStore } from "../../../recoil/channelStore";
import { useRecoilState } from "recoil";
import { ChannelContext } from "../../../providers/ChannelContext";
import ChannelColorPicker from "./ChannelMenu/ChannelColorPicker";
import useDeleteChannel from "../../../hooks/recoil/channel/useDeleteChannel";

interface Props {

}

const ChannelSettings = React.forwardRef<HTMLButtonElement, Props>(({}, ref) => {
  const channelId = useContext(ChannelContext);
  const [name, setName] = useRecoilState(channelStore.name(channelId));
  const [oldName] = useState(name);
  const [color, setColor] = useRecoilState(channelStore.color(channelId));
  const deleteChannel = useDeleteChannel();
  const initialFocusRef = useRef<HTMLInputElement>(null);

  return (
    <Popover placement={'right-start'} isLazy initialFocusRef={initialFocusRef}>
      <PopoverTrigger>
        <IconButton icon={<MdSettings />} variant={'ghost'} size={'xs'} aria-label={'Channel Settings'} ref={ref} title={'Channel Settings'}/>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontSize={'sm'}>Channel Settings</PopoverHeader>
        <PopoverBody>
          <Input ref={initialFocusRef} isFullWidth size={'sm'} placeholder={'Channel name'} defaultValue={name} onChange={e => setName(e.target.value.length > 0 ? e.target.value : oldName)}/>

          <Box my={4}>
            <ChannelColorPicker activeColor={color} onChangeColor={setColor}/>
          </Box>

          <Button onClick={() => deleteChannel(channelId)} size={'xs'} colorScheme={'red'} isFullWidth>Delete Channel</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
});

export default ChannelSettings;
