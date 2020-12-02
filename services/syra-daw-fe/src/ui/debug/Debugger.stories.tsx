import Debugger from "./Debugger";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <Debugger {...args} />;

export default {
  title: "debug/Debugger",
  component: Debugger,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};