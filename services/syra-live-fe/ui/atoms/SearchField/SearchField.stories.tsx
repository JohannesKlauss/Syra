import SearchField from './SearchField';
import * as React from 'react';

const Template = (args) => <SearchField {...args} />;

export default {
  title: 'atoms/SearchField',
  component: SearchField,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};