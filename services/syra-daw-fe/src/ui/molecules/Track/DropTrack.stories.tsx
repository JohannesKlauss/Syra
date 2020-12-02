import DropTrack from "./DropTrack";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <DropTrack {...args} />;

export default {
  title: "molecules/Track/DropTrack",
  component: DropTrack,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};