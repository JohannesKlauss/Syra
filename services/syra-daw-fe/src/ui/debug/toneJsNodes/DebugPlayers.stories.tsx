import DebugPlayers from "./DebugPlayers";
import * as React from "react";


const Template = (args) => <DebugPlayers {...args} />;

export default {
  title: "debug/ToneJsNodes/DebugPlayers",
  component: DebugPlayers,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};