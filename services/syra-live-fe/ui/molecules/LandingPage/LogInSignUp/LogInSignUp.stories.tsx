import LogInSignUp from "./LogInSignUp";
import * as React from "react";


const Template = (args) => <LogInSignUp {...args} />;

export default {
  title: "molecules/LandingPage/LogInSignUp",
  component: LogInSignUp,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};