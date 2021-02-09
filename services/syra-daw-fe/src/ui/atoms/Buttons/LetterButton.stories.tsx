import LetterButton from "./LetterButton";
import * as React from "react";

const Template = (args) => <LetterButton {...args} />;

export default {
  title: "atoms/Buttons/LetterButton",
  component: LetterButton,
  decorators: [],
  argTypes: {
    isActive: {
      control: 'boolean'
    },
    width: {
      control: 'number'
    }
  }
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  isActive: false,
  width: 30,
  color: 'red',
  children: 'R'
};