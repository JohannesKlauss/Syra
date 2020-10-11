import SignUpForm from "./SignUpForm";
import React from "react";

const Template = (args) => <SignUpForm {...args} />;

export default {
  title: "molecules/SignUpForm",
  component: SignUpForm
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};