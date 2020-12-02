import AddChannelMenu from "./AddChannelMenu";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <AddChannelMenu {...args} />;

export default {
  title: "molecules/Channels/AddChannelMenu",
  component: AddChannelMenu,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};