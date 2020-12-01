import ArrangeWindow from "./ArrangeWindow";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <ArrangeWindow {...args} />;

export default {
  title: "molecules/ArrangeWindow",
  component: ArrangeWindow,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};