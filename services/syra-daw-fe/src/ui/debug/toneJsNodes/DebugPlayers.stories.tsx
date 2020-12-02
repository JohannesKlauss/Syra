import DebugPlayers from "./DebugPlayers";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <DebugPlayers {...args} />;

export default {
  title: "debug/ToneJsNodes/DebugPlayers",
  component: DebugPlayers,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};