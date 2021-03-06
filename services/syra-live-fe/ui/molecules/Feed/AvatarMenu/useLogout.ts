import { useCallback } from 'react';
import axios from 'axios';

export default function useLogout() {

  return useCallback(async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_LIVE_GQL_URL + '/auth/logout',{
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Credentials': 'true'
      }
    });

    if (res.data.message === 'ok') {
      // We use the hard coded version because the cookie doesn't get set when using useRouter.
      window.location.href = '/';
    }
  }, []);
}