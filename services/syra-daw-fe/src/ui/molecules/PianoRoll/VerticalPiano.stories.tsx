import VerticalPiano from "./VerticalPiano";
import * as React from "react";

const Template = (args) => <VerticalPiano {...args} />;

export default {
  title: "molecules/PianoRoll/VerticalPiano",
  component: VerticalPiano,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};