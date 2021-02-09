import Home from '../../pages';
import * as React from 'react';


const Template = (args) => <Home {...args} />;

export default {
  title: 'x pages/Home',
  component: Home,
  decorators: [],
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};
