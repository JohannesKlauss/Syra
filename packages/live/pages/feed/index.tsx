import React, { useEffect } from 'react';
import LandingClaim from "../../ui/molecules/LandingPage/LandingClaim/LandingClaim";
import Benefits from "../../ui/molecules/LandingPage/Benefits/Benefits";
import { Text } from "@chakra-ui/core";
import { benefits } from '../../static/benefits';

export default function Feed() {

  useEffect(() => {
    (async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/profile', {
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Credentials': 'true'
        }
      });

      const body = await res.json();

      console.log('response', body);

      const res2 = await fetch(process.env.NEXT_PUBLIC_API_URL + '/version');

      const body2 = await res2.json();

      console.log('response', body2);
    })();
  }, []);

  return (
    <>
      <LandingClaim py={12}/>
      <Benefits py={12} benefits={benefits}/>
    </>
  );
}

Feed.getInitialProps = async () => ({
  namespacesRequired: ['default'],
})
