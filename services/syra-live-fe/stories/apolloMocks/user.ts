import { MeQuery, UserProfileByHandleQuery } from '../../gql/generated';

export const MeMock: MeQuery = {
  me: {
    __typename: 'User',
    avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo',
    email: 'klauss.johannes@gmail.com',
    bio: 'Just a short selfdescription about myself.',
    handle: 'foo',
    website: 'https://syra.live',
    interests: [
      {value: 'DAWs', __typename: 'Tag'},
      {value: 'Programming', __typename: 'Tag'},
      {value: 'Guitar', __typename: 'Tag'},
      {value: 'Synths', __typename: 'Tag'},
    ],
    followedBy: [
      {
        __typename: 'User',
        handle: 'test',
        name: 'Test'
      },
      {
        __typename: 'User',
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
    interests: [
      {value: 'DAWs', __typename: 'Tag'},
      {value: 'Programming', __typename: 'Tag'},
      {value: 'Guitar', __typename: 'Tag'},
      {value: 'Synths', __typename: 'Tag'},
    ],
    followedByCount: 45,
    followingCount: 34,
    isFollowing: true,
    followedBy: [
      {
        __typename: 'User',
        handle: 'test',
        name: 'Test'
      },
      {
        __typename: 'User',
        handle: 'Syra',
        name: 'Syra'
      }
    ],
    id: 'foo',
    name: 'Johannes Klauss',
  }
}