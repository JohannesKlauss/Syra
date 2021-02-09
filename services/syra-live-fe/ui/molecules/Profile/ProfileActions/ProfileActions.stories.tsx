import ProfileActions from './ProfileActions';
import * as React from 'react';


const Template = (args) => <ProfileActions {...args} />;

export default {
  title: 'molecules/Profile/ProfileActions',
  component: ProfileActions,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};