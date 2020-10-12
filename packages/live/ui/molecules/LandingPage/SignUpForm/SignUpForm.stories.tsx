import SignUpForm from "./SignUpForm";
import * as React from "react";

const Template = (args) => <SignUpForm {...args} />;

export default {
  title: "molecules/LandingPage/SignUpForm",
  component: SignUpForm
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};