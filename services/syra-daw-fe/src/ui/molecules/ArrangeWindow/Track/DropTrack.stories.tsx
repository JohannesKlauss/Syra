import DropTrack from "./DropTrack";
import * as React from "react";


const Template = (args) => <DropTrack {...args} />;

export default {
  title: "molecules/Track/DropTrack",
  component: DropTrack,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};