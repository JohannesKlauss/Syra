import LogInSignUp from "./LogInSignUp";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <LogInSignUp {...args} />;

export default {
  title: "molecules/LandingPage/LogInSignUp",
  component: LogInSignUp,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};