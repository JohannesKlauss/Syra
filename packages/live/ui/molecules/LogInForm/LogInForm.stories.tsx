import LogInForm from "./LogInForm";
import React from "react";

const Template = (args) => <LogInForm {...args} />;

export default {
  title: "molecules/LogInForm",
  component: LogInForm
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};