import AutoResizeTextarea from './AutoResizeTextarea';
import * as React from 'react';

const Template = (args) => <AutoResizeTextarea {...args} />;

export default {
  title: 'atoms/AutoResizeTextarea',
  component: AutoResizeTextarea,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};