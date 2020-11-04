import SearchResults from "./SearchResults";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <SearchResults {...args} />;

export default {
  title: "molecules/SearchResults",
  component: SearchResults,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};