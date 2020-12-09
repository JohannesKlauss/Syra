import PianoRoll from "./PianoRoll";
import * as React from "react";

const Template = (args) => <PianoRoll {...args} />;

export default {
  title: "organisms/PianoRoll",
  component: PianoRoll,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};