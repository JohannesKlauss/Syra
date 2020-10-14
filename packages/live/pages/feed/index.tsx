import React, { useEffect } from 'react';
import LandingClaim from "../../ui/molecules/LandingPage/LandingClaim/LandingClaim";
import Benefits from "../../ui/molecules/LandingPage/Benefits/Benefits";
import { Text } from "@chakra-ui/core";
import { benefits } from '../../static/benefits';
import { useMeQuery, useUserQuery } from '@syra/gql-client';
import { gql, useQuery } from '@apollo/client';

export default function Feed() {
  const {
    data,
    loading,
    error
  } = useQuery(gql`
      query Me {
          me {
              id
              avatar
              name
              lastOnline
              email
              tier
              createdAt
              role
          }
      }
  `);

  useEffect(() => {
    console.log('data', data);
    console.log('loading', loading);
    console.log('error', error);
  }, [data, loading, error]);

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
