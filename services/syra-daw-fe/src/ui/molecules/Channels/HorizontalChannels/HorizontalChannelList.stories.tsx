import HorizontalChannelList from "./HorizontalChannelList";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import withChannelList from "../../../../../.storybook/decorators/withChannelList";

const Template = (args) => <HorizontalChannelList {...args} />;

export default {
  title: "molecules/Channels/Horizontal/HorizontalChannelList",
  component: HorizontalChannelList,
  decorators: [withApolloClient, withChannelList]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};