import ChannelBody from "./ChannelBody";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import withChannel from "../../../../../../.storybook/decorators/withChannel";
import withFixedWidth from "../../../../../../.storybook/decorators/withFixedWidth";

const Template = (args) => <ChannelBody {...args} />;

export default {
  title: "molecules/Channels/Horizontal/ChannelBody",
  component: ChannelBody,
  decorators: [withApolloClient, withChannel, withFixedWidth(160)]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};