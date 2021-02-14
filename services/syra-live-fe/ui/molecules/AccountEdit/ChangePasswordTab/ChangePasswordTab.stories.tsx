import ChangePasswordTab from './ChangePasswordTab';
import * as React from 'react';
import { mockApollo, mockApolloResult } from "../../../../stories/mockApollo";
import { MeDocument, MeQuery } from "../../../../gql/generated";
import { MeMock } from "../../../../stories/apolloMocks/user";

const Template = (args) => <ChangePasswordTab {...args} />;

export default {
  title: 'molecules/AccountEdit/ChangePasswordTab',
  component: ChangePasswordTab,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, MeMock)
]);

Default.args = {};