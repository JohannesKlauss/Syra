import { FirstLevelCommentsQuery, SecondLevelCommentsQuery } from "../../gql/generated";

export const FirsLevelCommentsMock: FirstLevelCommentsQuery = {
  comments: [
    {
      __typename: 'Comment',
      author: {
        __typename: 'User',
        name: 'Johannes Klauss',
        handle: 'johannesklauss',
        avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo',
      },
      id: 'foo',
      likeCount: 45,
      isMeLiking: false,
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      updatedAt: 1603801408,
      commentCount: 5,
    },
  ],
};

export const SecondLevelCommentsMock: SecondLevelCommentsQuery = {
  comments: [
    {
      __typename: 'Comment',
      author: {
        __typename: 'User',
        name: 'Johannes Klauss',
        handle: 'johannesklauss',
        avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo',
      },
      id: 'foo',
      likeCount: 45,
      isMeLiking: false,
      text:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      updatedAt: 1603801408,
    },
  ],
};