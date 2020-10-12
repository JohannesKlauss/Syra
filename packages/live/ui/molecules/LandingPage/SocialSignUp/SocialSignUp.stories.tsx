import SocialSignUp from "./SocialSignUp";
import * as React from "react";

const Template = (args) => <SocialSignUp {...args} />;

export default {
  title: "molecules/LandingPage/SocialSignUp",
  component: SocialSignUp
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  fontSize: '2xl',
  buttonSize: 'lg',
};