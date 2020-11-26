import SoulPlugin from "./SoulPlugin";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import withChannel from "../../../../.storybook/decorators/withChannel";

const Template = (args) => <SoulPlugin {...args} />;

export default {
  title: "molecules/SoulPlugin/SoulPlugin",
  component: SoulPlugin,
  decorators: [withApolloClient, withChannel]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};