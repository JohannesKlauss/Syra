import VerticalChannelList from "./VerticalChannelList";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import withChannelList from "../../../../../.storybook/decorators/sbWithChannelList";

const Template = (args) => <VerticalChannelList {...args} />;

export default {
  title: "molecules/Channels/Vertical/VerticalChannelList",
  component: VerticalChannelList,
  decorators: [withApolloClient, withChannelList]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};