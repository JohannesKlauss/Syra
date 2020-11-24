import ChannelHeader from "./ChannelHeader";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <ChannelHeader {...args} />;

export default {
  title: "molecules/Channels/Horizontal/ChannelHeader",
  component: ChannelHeader,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};