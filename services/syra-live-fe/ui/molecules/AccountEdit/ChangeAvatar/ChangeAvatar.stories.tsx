import ChangeAvatar from './ChangeAvatar';
import * as React from 'react';

const Template = (args) => <ChangeAvatar {...args} />;

export default {
  title: 'molecules/AccountEdit/ChangeAvatar',
  component: ChangeAvatar,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo',
};