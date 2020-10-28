import React from 'react';
import { GetServerSideProps } from 'next';
import { MeDocument, useMeQuery } from '../../gql/generated';
import PageBox from '../../ui/atoms/PageBox/PageBox';
import TopBar from '../../ui/molecules/Feed/TopBar/TopBar';
import { initializeApollo } from '../../apollo/client';
import AccountEdit from '../../ui/organisms/AccountEdit/AccountEdit';

export default function AccountEditPage() {
  const { data, loading, error } = useMeQuery();

  if (error) return null;
  if (loading) return null;

  return (
    <>
      <TopBar/>
      <PageBox>
        <AccountEdit/>
      </PageBox>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo(null, context.req.headers.cookie);

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