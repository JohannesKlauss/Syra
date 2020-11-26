import Piano from "./Piano";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <Piano {...args} />;

export default {
  title: "molecules/Piano",
  component: Piano,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  min: 36,
  max: 67
};