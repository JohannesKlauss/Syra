import LogInForm from "./LogInForm";
import * as React from "react";

const Template = (args) => <LogInForm {...args} />;

export default {
  title: "molecules/LandingPage/LogInForm",
  component: LogInForm
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};