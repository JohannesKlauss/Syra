import AddChannelMenu from "./AddChannelMenu";
import * as React from "react";


const Template = (args) => <AddChannelMenu {...args} />;

export default {
  title: "molecules/Channels/AddChannelMenu",
  component: AddChannelMenu,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};