import TransportView from "./TransportView";
import * as React from "react";


const Template = (args) => <TransportView {...args} />;

export default {
  title: "molecules/Transport/TransportView",
  component: TransportView,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};