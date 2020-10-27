import ProfileInfo from './ProfileInfo';
import * as React from 'react';
import { MeMock, UserProfileByHandleMock } from '../../../../stories/apolloMocks/user';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { mockApollo, mockApolloResult } from '../../../../stories/mockApollo';
import {
  MeDocument,
  MeQuery,
  UserProfileByHandleDocument, UserProfileByHandleQuery, UserProfileByHandleQueryVariables,
} from '../../../../gql/generated';

const Template = (args) => <ProfileInfo {...args} />;

export default {
  title: 'molecules/Profile/ProfileInfo',
  component: ProfileInfo,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  user: UserProfileByHandleMock,
}

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, MeMock),
  mockApolloResult<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>(UserProfileByHandleDocument, UserProfileByHandleMock, {
    handle: 'foo'
  }),
]);