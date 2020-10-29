import EditProfileTab from './EditProfileTab';
import * as React from 'react';
import { MeMock } from '../../../../stories/apolloMocks/user';

const Template = (args) => <EditProfileTab {...args} />;

export default {
  title: 'molecules/AccountEdit/EditProfileTab',
  component: EditProfileTab,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  me: MeMock.me,
};