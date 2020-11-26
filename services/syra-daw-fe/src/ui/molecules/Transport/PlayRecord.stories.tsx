import PlayRecord from "./PlayRecord";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <PlayRecord {...args} />;

export default {
  title: "molecules/Transport/PlayRecord",
  component: PlayRecord,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};