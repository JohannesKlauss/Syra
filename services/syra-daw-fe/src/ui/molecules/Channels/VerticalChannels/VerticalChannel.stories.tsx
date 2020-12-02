import VerticalChannel from "./VerticalChannel";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <VerticalChannel {...args} />;

export default {
  title: "molecules/Channels/Vertical/VerticalChannel",
  component: VerticalChannel,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};