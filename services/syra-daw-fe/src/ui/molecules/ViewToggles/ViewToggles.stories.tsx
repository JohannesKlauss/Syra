import ViewToggles from "./ViewToggles";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <ViewToggles {...args} />;

export default {
  title: "molecules/ViewToggles/ViewToggles",
  component: ViewToggles,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};