import Pan from "./Pan";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <Pan {...args} />;

export default {
  title: "atoms/Slider/Pan",
  component: Pan,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};