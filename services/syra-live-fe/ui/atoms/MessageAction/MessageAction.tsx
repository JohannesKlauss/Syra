import React from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiMessage2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useMeQuery } from "../../../gql/generated";
import useStreamChat from "../../../hooks/useStreamChat";

interface Props {
  userId: string;
  isContracted?: boolean
}

function MessageAction({userId, isContracted}: Props) {
  const { push } = useRouter();
  const { t } = useTranslation();
  const [chatClient, isInitialized] = useStreamChat();
  const { data } = useMeQuery();
  
  const initChat = async () => {
    if (!data || !isInitialized) {
      return;
    }

    const conversation = chatClient.channel('messaging', {
      members: [data.me.id, userId],
    });

    await conversation.create();
    await push('/chat');
  };

  if (isContracted) {
    return (
      <IconButton
        onClick={initChat}
        icon={<RiMessage2Line/>}
        size={'sm'}
        aria-label={t('Message')}
      />
    )
  }

  return (
    <Button onClick={initChat} marginRight={4} size={'sm'} leftIcon={<RiMessage2Line/>}>
      {t('Write message')}
    </Button>
  );
}

export default MessageAction;
