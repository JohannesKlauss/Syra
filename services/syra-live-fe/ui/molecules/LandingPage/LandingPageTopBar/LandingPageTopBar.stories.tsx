import LandingPageTopBar from "./LandingPageTopBar";
import * as React from "react";

const Template = (args) => <LandingPageTopBar {...args} />;

export default {
  title: 'molecules/LandingPage/LandingPageTopBar',
  component: LandingPageTopBar,
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Button',
};