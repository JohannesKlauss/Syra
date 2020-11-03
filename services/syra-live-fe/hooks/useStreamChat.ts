import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import axios from 'axios';
import { useMeQuery } from '../gql/generated';
import publicRuntimeConfig from "../const/config";

export default function useStreamChat(): [StreamChat, boolean] {
  const { data } = useMeQuery();
  const [isInitialized, setIsInitialized] = useState(false);
  const [chatClient] = useState<StreamChat>(new StreamChat(publicRuntimeConfig.NEXT_PUBLIC_STREAM_CHAT_KEY));

  useEffect(() => {
    if (data && !isInitialized) {
      (async () => {
        const {
          data: { userToken },
        } = await axios.get(`${publicRuntimeConfig.NEXT_PUBLIC_LIVE_GQL_URL}/chat/token`, {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Credentials': 'true',
          },
        });

        await chatClient.setUser(
          {
            id: data.me.id,
            name: data.me.name,
            image: data.me.avatar,
          },
          userToken,
        );

        setIsInitialized(true);
      })();
    }
  }, [data, chatClient, isInitialized]);

  return [chatClient, isInitialized];
}
