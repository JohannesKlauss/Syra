import ChannelHeader from "./ChannelHeader";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import sbWithChannel from "../../../../../../.storybook/decorators/sbWithChannel";

const Template = (args) => <ChannelHeader {...args} />;

export default {
  title: "molecules/Channels/Horizontal/ChannelHeader",
  component: ChannelHeader,
  decorators: [withApolloClient, sbWithChannel]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};