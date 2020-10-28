import React from 'react';
import TopBar from '../../ui/molecules/Feed/TopBar/TopBar';
import { useRouter } from 'next/router';
import { MeDocument, UserProfileByHandleDocument, useUserProfileByHandleQuery } from '../../gql/generated';
import { initializeApollo } from '../../apollo/client';
import { GetServerSideProps } from 'next';
import ProfileInfo from '../../ui/molecules/Profile/ProfileInfo/ProfileInfo';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import ProfileFeed from '../../ui/molecules/Profile/ProfileFeed/ProfileFeed';
import { Divider, Flex, Text } from '@chakra-ui/core';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const router = useRouter()
  const { t } = useTranslation();
  const { handle } = router.query;

  const { data, loading, error } = useUserProfileByHandleQuery({
    variables: {
      handle: handle as string,
    }
  });

  if (error) return null;
  if (loading) return null;

  return (
    <>
      <TopBar/>
      <PageBox>
        <ProfileInfo user={data}/>
        <Flex align={"center"} marginY={2}>
          <Divider flex={4}/>
          <Text marginX={4} fontSize={"md"} textAlign={"center"} color={'gray.400'}>{t('Feed')}</Text>
          <Divider flex={4}/>
        </Flex>
        <ProfileFeed handle={data.user.handle}/>
      </PageBox>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo(null, context.req.headers.cookie);

  await apolloClient.query({
    query: UserProfileByHandleDocument,
    variables: {
      handle: context.query.handle as string
    }
  });

  await apolloClient.query({
    query: MeDocument,
  });

  return {
    props: {
      namespacesRequired: ['default'],
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}