import ChangePasswordTab from './ChangePasswordTab';
import * as React from 'react';

const Template = (args) => <ChangePasswordTab {...args} />;

export default {
  title: 'molecules/AccountEdit/ChangePasswordTab',
  component: ChangePasswordTab,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};