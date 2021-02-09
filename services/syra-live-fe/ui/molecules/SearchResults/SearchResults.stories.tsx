import SearchResults from "./SearchResults";
import * as React from "react";


const Template = (args) => <SearchResults {...args} />;

export default {
  title: "molecules/SearchResults",
  component: SearchResults,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};