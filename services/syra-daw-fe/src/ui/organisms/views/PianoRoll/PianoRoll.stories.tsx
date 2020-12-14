import PianoRoll from "./PianoRoll";
import * as React from "react";

const Template = (args) => <PianoRoll {...args} />;

export default {
  title: "organisms/views/PianoRoll",
  component: PianoRoll,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  minNote: 12,
  maxNote: 115,
};