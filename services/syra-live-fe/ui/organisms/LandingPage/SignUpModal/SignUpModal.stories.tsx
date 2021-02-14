import SignUpModal from "./SignUpModal";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <SignUpModal {...args} />;

export default {
  title: "organisms/LandingPage/SignUpModal",
  component: SignUpModal,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  onClose: () => null,
  isOpen: true
};