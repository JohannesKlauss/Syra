import SoulPlugin from "./SoulPlugin";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import sbWithChannel from "../../../../.storybook/decorators/sbWithChannel";

const Template = (args) => <SoulPlugin {...args} />;

export default {
  title: "molecules/SoulPlugin/SoulPlugin",
  component: SoulPlugin,
  decorators: [withApolloClient, sbWithChannel]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};