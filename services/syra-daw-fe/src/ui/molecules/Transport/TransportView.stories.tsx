import TransportView from "./TransportView";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <TransportView {...args} />;

export default {
  title: "molecules/Transport/TransportView",
  component: TransportView,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};