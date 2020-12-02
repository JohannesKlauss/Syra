import ArrangeGrid from "./ArrangeGrid";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import sbWithChannelList from "../../../../.storybook/decorators/sbWithChannelList";

const Template = (args) => <ArrangeGrid {...args} />;

export default {
  title: "molecules/ArrangeWindow/ArrangeGrid",
  component: ArrangeGrid,
  decorators: [withApolloClient, sbWithChannelList]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};