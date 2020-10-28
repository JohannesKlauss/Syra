import * as React from 'react';
import AccountEditPage from '../../pages/account/edit';
import { mockApolloResult } from '../mockApollo';
import {
  FeedItemsByHandleDocument,
  FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables,
  MeDocument,
  MeQuery,
  UserProfileByHandleDocument, UserProfileByHandleQuery, UserProfileByHandleQueryVariables,
} from '../../gql/generated';
import { MeMock, UserProfileByHandleMock } from '../apolloMocks/user';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { withNextRouter } from 'storybook-addon-next-router';
import { FeedItemsByHandleMock } from '../apolloMocks/feedItem';

const Template = (args) => <AccountEditPage {...args} />;

export default {
  title: 'x pages/Account/Edit',
  component: AccountEditPage,
  decorators: [withApolloClient, withNextRouter]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
};

Default.parameters = {
  apolloClient: {
    mocks: [
      mockApolloResult<MeQuery>(MeDocument, MeMock),
      mockApolloResult<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>(UserProfileByHandleDocument, UserProfileByHandleMock, {
        handle: 'foo'
      }),
      mockApolloResult<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>(FeedItemsByHandleDocument, FeedItemsByHandleMock, {
        handle: 'foo'
      })
    ]
  },
  nextRouter: {
    path: '/profile/[handle]/edit',
    asPath: '/profile/foo/edit',
    query: {
      handle: 'foo',
    },
  },
};