import TopBar from './TopBar';
import * as React from 'react';

import { mockApollo, mockApolloResult } from '../../../stories/mockApollo';
import { MeDocument, MeQuery } from '../../../gql/generated';
import { MeMock } from '../../../stories/apolloMocks/user';

const Template = (args) => <TopBar {...args} />;

export default {
  title: 'molecules/TopBar',
  component: TopBar,
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