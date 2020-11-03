import { useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import publicRuntimeConfig from "../../../../const/config";

export default function useLogout() {
  const { push } = useRouter();

  return useCallback(async () => {
    const res = await axios.get(publicRuntimeConfig.NEXT_PUBLIC_LIVE_GQL_URL + '/auth/logout',{
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