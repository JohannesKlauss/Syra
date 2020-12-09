import Comment from "./Comment";
import * as React from "react";

import { mockApollo } from "../../../../stories/mockApollo";

const Template = (args) => <Comment {...args} />;

export default {
  title: "molecules/Feed/Comment",
  component: Comment,
  decorators: []
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
  comment: {
    __typename: 'Comment',
    author: {
      __typename: 'User',
      name: 'Johannes Klauss',
      handle: 'johannesklauss',
      avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo',
    },
    id: 'foo',
    likeCount: 45,
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
    updatedAt: 1603801408,
  }
};
