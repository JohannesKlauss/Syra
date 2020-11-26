import AudioChannel from "./AudioChannel";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import withChannel from "../../../../../.storybook/decorators/withChannel";
import withFixedWidth from "../../../../../.storybook/decorators/withFixedWidth";

const Template = (args) => <AudioChannel {...args} />;

export default {
  title: "molecules/Channels/Horizontal/AudioChannel",
  component: AudioChannel,
  decorators: [withApolloClient, withChannel, withFixedWidth(160)]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};