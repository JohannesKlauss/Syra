import TrimStartHandle from "./TrimStartHandle";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <TrimStartHandle {...args} />;

export default {
  title: "molecules/Track/Region/Manipulations/TrimStartHandle",
  component: TrimStartHandle,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};