import ResetPassword from './ResetPassword';
import * as React from 'react';

const Template = (args) => <ResetPassword {...args} />;

export default {
  title: 'molecules/ResetPassword',
  component: ResetPassword,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};
