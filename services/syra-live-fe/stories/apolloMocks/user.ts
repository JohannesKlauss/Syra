import { MeFollowingQuery, MeQuery, UserProfileByHandleQuery } from "../../gql/generated";

export const MeMock: MeQuery = {
  me: {
    __typename: 'User',
    avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo',
    email: 'klauss.johannes@gmail.com',
    bio: 'Just a short self description about myself.',
    handle: 'foo',
    website: 'https://syra.live',
    isMyself: true,
    interests: [
      {value: 'DAWs', __typename: 'Tag'},
      {value: 'Programming', __typename: 'Tag'},
      {value: 'Guitar', __typename: 'Tag'},
      {value: 'Synths', __typename: 'Tag'},
    ],
    followedBy: [
      {
        __typename: 'User',
        id: 'foo',
        handle: 'test',
        name: 'Test'
      },
      {
        __typename: 'User',
        id: 'bar',
        handle: 'Syra',
        name: 'Syra'
      }
    ],
    followedByCount: 45,
    followingCount: 34,
    id: 'foo',
    name: 'Johannes Klauss',
  }
};

export const UserProfileByHandleMock: UserProfileByHandleQuery = {
  user: {
    __typename: 'User',
    avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo',
    email: 'klauss.johannes@gmail.com',
    bio: 'Just a short selfdescription about myself.',
    handle: 'foo',
    website: 'https://syra.live',
    isMyself: false,
    interests: [
      {value: 'DAWs', __typename: 'Tag'},
      {value: 'Programming', __typename: 'Tag'},
      {value: 'Guitar', __typename: 'Tag'},
      {value: 'Synths', __typename: 'Tag'},
    ],
    followedByCount: 45,
    followingCount: 34,
    isMeFollowing: true,
    followedBy: [
      {
        __typename: 'User',
        id: 'foo',
        handle: 'test',
        name: 'Test'
      },
      {
        __typename: 'User',
        id: 'bar',
        handle: 'Syra',
        name: 'Syra'
      }
    ],
    id: 'foo',
    name: 'Johannes Klauss',
  }
}

export const MeFollowingMock: MeFollowingQuery = {
  me: {
    __typename: 'User',
    following: [
      {
        __typename: 'User',
        id: 'foo',
        avatar: null,
        handle: 'foobar',
        name: 'Foo Bar'
      },
      {
        __typename: 'User',
        id: 'bar',
        avatar: null,
        handle: 'foobar2',
        name: 'Foo Bar 2'
      },
      {
        __typename: 'User',
        id: 'baz',
        avatar: null,
        handle: 'foobar3',
        name: 'Foo Bar 3'
      },
      {
        __typename: 'User',
        id: 'foobar',
        avatar: null,
        handle: 'foobar4',
        name: 'Foo Bar 4'
      }
    ]
  }
}