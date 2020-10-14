import React, { useEffect } from 'react';
import LandingClaim from "../../ui/molecules/LandingPage/LandingClaim/LandingClaim";
import Benefits from "../../ui/molecules/LandingPage/Benefits/Benefits";
import { Text } from "@chakra-ui/core";
import { benefits } from '../../static/benefits';
import axios from 'axios';

export default function Feed() {

  useEffect(() => {
    (async () => {
      let res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/profile', {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Credentials': 'true'
        }
      })

      console.log('response', res.data);
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
