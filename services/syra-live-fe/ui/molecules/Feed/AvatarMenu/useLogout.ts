import { useCallback } from 'react';
import axios from 'axios';
import publicRuntimeConfig from "../../../../const/config";
import useStreamChat from "../../../../hooks/useStreamChat";

export default function useLogout() {
  const [chatClient] = useStreamChat();

  return useCallback(async () => {
    const res = await axios.get(publicRuntimeConfig.NEXT_PUBLIC_LIVE_GQL_URL + '/auth/logout',{
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Credentials': 'true'
      }
    });

    if (res.data.message === 'ok') {
      await chatClient.disconnect();
      // We use the hard coded version because the cookie doesn't get set when using useRouter.
      window.location.href = '/';
    }
  }, []);
}