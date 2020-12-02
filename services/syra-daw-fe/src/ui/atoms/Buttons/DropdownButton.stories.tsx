import DropdownButton from "./DropdownButton";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";

const Template = (args) => <DropdownButton {...args} />;

export default {
  title: "atoms/Buttons/DropdownButton",
  component: DropdownButton,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  menuItems: [
    {
      label: '1/4',
      onClick: () => null,
    },
    {
      label: '1/2',
      onClick: () => null,
    },
    {
      label: '1 Bar',
      onClick: () => null,
    }
  ],
  color: 'teal',
  size: 'sm',
  label: '1 Bar'
};