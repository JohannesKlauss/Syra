import React from "react";
import { Badge, Box, IconButton } from "@chakra-ui/react";
import { RiMessage2Line } from 'react-icons/ri';
import useNewMessageNotifier from "../../../../hooks/notifications/useNewMessageNotifier";
import { useRouter } from "next/router";
import useUnreadMessages from "../../../../hooks/notifications/useUnreadMessages";

interface Props {

}

function NewMessageNotifier({}: Props) {
  useNewMessageNotifier();
  const unreadMessages = useUnreadMessages();
  const { push } = useRouter();

  return (
    <Box mr={4} pos={'relative'}>
      <IconButton variant={'ghost'} aria-label={"Show messages"} icon={<RiMessage2Line/>} onClick={() => push('/chat')}/>
      {unreadMessages > 0 && <Badge pos={'absolute'} right={0} colorScheme={'red'} variant={'solid'} rounded={'full'}>{unreadMessages}</Badge>}
    </Box>
  );
}

export default NewMessageNotifier;
