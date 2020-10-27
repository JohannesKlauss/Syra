import * as React from 'react';
import Profile from '../../pages/profile/[handle]';
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

const Template = (args) => <Profile {...args} />;

export default {
  title: 'x pages/Profile',
  component: Profile,
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
    path: '/profile/[handle]',
    asPath: '/profile/foo',
    query: {
      handle: 'foo',
    },
  },
};