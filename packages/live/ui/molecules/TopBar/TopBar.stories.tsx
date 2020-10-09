import TopBar from "./TopBar";
import React from "react";

const Template = (args) => <TopBar {...args} />;

export default {
  title: 'molecules/TopBar',
  component: TopBar,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Button',
};