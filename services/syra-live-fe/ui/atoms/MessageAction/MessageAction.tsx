import React from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiMessage2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useMeQuery } from "../../../gql/generated";

interface Props {
  userId: string;
  isContracted?: boolean
}

function MessageAction({userId, isContracted}: Props) {
  const { push } = useRouter();
  const { t } = useTranslation();
  const { data } = useMeQuery();
  
  const initChat = async () => {
    if (!data) {
      return;
    }

    await push('/chat');
  };

  if (isContracted) {
    return (
      <IconButton
        onClick={initChat}
        icon={<RiMessage2Line/>}
        size={'sm'}
        title={'Message'}
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
