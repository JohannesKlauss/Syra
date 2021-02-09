import ArrangeWindowV2 from "./ArrangeWindowV2";
import * as React from "react";

const Template = (args) => <ArrangeWindowV2 {...args} />;

export default {
  title: "organisms/views/ArrangeWindowV2",
  component: ArrangeWindowV2,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};