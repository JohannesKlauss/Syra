import AvatarMenu from './AvatarMenu';
import * as React from 'react';
import { MeDocument, MeQuery } from '../../../../gql/generated';
import { withApolloClient } from 'storybook-addon-apollo-client';
import { mockApollo, mockApolloResult } from '../../../../stories/mockApollo';
import { meMock } from '../../../../stories/apolloMocks/user';

const Template = (args) => <AvatarMenu {...args} />;

export default {
  title: 'molecules/feed/AvatarMenu',
  component: AvatarMenu,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  hasNotifications: true
};

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, meMock)
]);