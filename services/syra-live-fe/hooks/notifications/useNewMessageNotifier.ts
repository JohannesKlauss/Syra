import useStreamChat from "../useStreamChat";
import useApiResToast from "../ui/useApiResToast";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function useNewMessageNotifier() {
  const [ chatClient, isInitialized ] = useStreamChat();
  const toast = useApiResToast();
  const { t } = useTranslation();

  useEffect(() => {
    let handler;

    if (isInitialized) {
      handler = chatClient.on('notification.message_new', event => {
        toast(`${event.channel.name ?? t('New Message')}`, 'info', `${event.message.user.name}: ${event.message.text}`);
      });
    }

    return () => {
      chatClient.off(handler);
    }
  }, [isInitialized]);
}