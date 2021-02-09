import VerticalChannel from "./VerticalChannel";
import * as React from "react";


const Template = (args) => <VerticalChannel {...args} />;

export default {
  title: "molecules/Channels/Vertical/VerticalChannel",
  component: VerticalChannel,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};