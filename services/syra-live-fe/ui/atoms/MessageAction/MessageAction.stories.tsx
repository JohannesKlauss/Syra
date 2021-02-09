import MessageAction from "./MessageAction";
import * as React from "react";


const Template = (args) => <MessageAction {...args} />;

export default {
  title: "atoms/MessageAction",
  component: MessageAction,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};