import TopBar from "./TopBar";
import * as React from "react";

const Template = (args) => <TopBar {...args} />;

export default {
  title: 'molecules/LandingPage/TopBar',
  component: TopBar,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Button',
};