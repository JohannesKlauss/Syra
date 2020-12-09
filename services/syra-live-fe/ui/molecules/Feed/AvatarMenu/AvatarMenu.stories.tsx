import AvatarMenu from './AvatarMenu';
import * as React from 'react';
import { MeDocument, MeQuery } from '../../../../gql/generated';

import { mockApollo, mockApolloResult } from '../../../../stories/mockApollo';
import { MeMock } from '../../../../stories/apolloMocks/user';

const Template = (args) => <AvatarMenu {...args} />;

export default {
  title: 'molecules/Feed/AvatarMenu',
  component: AvatarMenu,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  hasNotifications: true
};

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, MeMock)
]);