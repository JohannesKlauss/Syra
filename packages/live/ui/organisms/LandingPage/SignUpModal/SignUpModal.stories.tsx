import SignUpModal from "./SignUpModal";
import React from "react";

const Template = (args) => <SignUpModal {...args} />;

export default {
  title: "organisms/LandingPage/SignUpModal",
  component: SignUpModal
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  onClose: () => null,
  isOpen: true
};