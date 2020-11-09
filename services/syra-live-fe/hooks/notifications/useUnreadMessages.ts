import { useEffect, useState } from "react";
import useStreamChat from "../useStreamChat";

export default function useUnreadMessages() {
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [chatClient, isInitialized] = useStreamChat();

  useEffect(() => {
    let handler;

    if (isInitialized) {
      setUnreadMessages(chatClient.user.total_unread_count as number);

      handler = chatClient.on(event => {
        if (event.total_unread_count !== undefined) {
          setUnreadMessages(event.total_unread_count as number);
        }
      });
    }

    return () => {
      chatClient.off(handler);
    }
  }, [isInitialized]);

  return unreadMessages;
}