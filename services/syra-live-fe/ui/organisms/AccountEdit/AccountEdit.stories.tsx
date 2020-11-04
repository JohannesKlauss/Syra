import AccountEdit from './AccountEdit';
import * as React from 'react';

const Template = (args) => <AccountEdit {...args} />;

export default {
  title: 'organisms/AccountEdit/AccountEdit',
  component: AccountEdit,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};