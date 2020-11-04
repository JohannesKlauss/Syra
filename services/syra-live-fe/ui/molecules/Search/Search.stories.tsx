import Search from "./Search";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <Search {...args} />;

export default {
  title: "molecules/Search",
  component: Search,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};