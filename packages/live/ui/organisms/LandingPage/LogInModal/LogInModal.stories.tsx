import LogInModal from "./LogInModal";
import React from "react";

const Template = (args) => <LogInModal {...args} />;

export default {
  title: "organisms/LandingPage/LogInModal",
  component: LogInModal
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  isOpen: true,
};