import { useCallback } from 'react';
import { TLogInForm } from '../../../molecules/LandingPage/LogInForm/LogInForm';

export default function useLoginLocal() {
  return useCallback(async (data: TLogInForm) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login/local', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const body = await res.json();

    return body.message === 'success';
  }, []);
}