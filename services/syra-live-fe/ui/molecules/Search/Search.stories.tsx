import Search from "./Search";
import * as React from "react";


const Template = (args) => <Search {...args} />;

export default {
  title: "molecules/Search",
  component: Search,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};