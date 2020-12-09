import PlayRecord from "./PlayRecord";
import * as React from "react";


const Template = (args) => <PlayRecord {...args} />;

export default {
  title: "molecules/Transport/PlayRecord",
  component: PlayRecord,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};