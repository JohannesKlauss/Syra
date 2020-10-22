import { useCallback } from 'react';
import { TLogInForm } from '../../../molecules/LandingPage/LogInForm/LogInForm';
import axios from 'axios';

export default function useLoginLocal() {
  return useCallback(async (data: TLogInForm) => {
    const res = await axios.post(process.env.NEXT_PUBLIC_LIVE_GQL_URL + '/auth/login/local', data, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Credentials': 'true'
      }
    });

    return res.data.message === 'success';
  }, []);
}