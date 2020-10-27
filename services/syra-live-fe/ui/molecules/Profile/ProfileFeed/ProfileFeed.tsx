import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePublicProjectsByHandleQuery } from '../../../../gql/generated';
import { Skeleton } from '@chakra-ui/core';

interface Props {
  handle: string
}

function ProfileFeed({handle}: Props) {
  const { t } = useTranslation();
  const { data, loading, error } = usePublicProjectsByHandleQuery({variables: {handle}});

  if (loading) return <Skeleton h={24}/>
  if (error) return null;

  return (
    <>
      
    </>
  );
}

export default ProfileFeed;
