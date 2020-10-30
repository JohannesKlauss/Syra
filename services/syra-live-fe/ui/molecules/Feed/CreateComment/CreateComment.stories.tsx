import CreateComment from "./CreateComment";
import * as React from "react";
import { withApolloClient } from "storybook-addon-apollo-client";
import { mockApollo, mockApolloResult } from "../../../../stories/mockApollo";
import { MeDocument, MeQuery } from "../../../../gql/generated";
import { MeMock } from "../../../../stories/apolloMocks/user";

const Template = (args) => <CreateComment {...args} />;

export default {
  title: "molecules/Feed/CreateComment",
  component: CreateComment,
  decorators: [withApolloClient]
};

// Each story then reuses that template
export const Default = Template.bind({});

Default.args = {};

Default.parameters = mockApollo([
  mockApolloResult<MeQuery>(MeDocument, MeMock),
])