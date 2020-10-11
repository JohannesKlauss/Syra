import SocialSignUp from "./SocialSignUp";
import React from "react";

const Template = (args) => <SocialSignUp {...args} />;

export default {
  title: "molecules/SocialSignUp",
  component: SocialSignUp
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  fontSize: '2xl',
  buttonSize: 'lg',
};