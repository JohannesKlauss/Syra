import EmptyFeed from "./EmptyFeed";
import * as React from "react";

const Template = (args) => <EmptyFeed {...args} />;

export default {
  title: "atoms/EmptyFeed",
  component: EmptyFeed
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};