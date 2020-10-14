import * as React from 'react';
import Feed from '../../pages/feed';

const Template = (args) => <Feed {...args} />;

export default {
  title: 'x pages/Feed',
  component: Feed,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};