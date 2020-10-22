import { useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function useLogout() {
  const { push } = useRouter();

  return useCallback(async () => {
    const res = await axios.get(process.env.NEXT_PUBLIC_LIVE_GQL_URL + '/auth/logout',{
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Credentials': 'true'
      }
    });

    if (res.data.message === 'ok') {
      await push('/');
    }
  }, [push]);
}