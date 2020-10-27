import { MeQuery, UserProfileByHandleQuery } from '../../gql/generated';

export const MeMock: MeQuery = {
  me: {

    avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo',
    email: 'klauss.johannes@gmail.com',
    bio: 'Just a short selfdescription about myself.',
    handle: 'johannesklauss',
    website: 'https://syra.live',
    interests: [
      {value: 'DAWs'},
      {value: 'Programming'},
      {value: 'Guitar'},
      {value: 'Synths'},
    ],
    followedBy: [
      {
        handle: 'test',
        name: 'Test'
      },
      {
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
    avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo',
    email: 'klauss.johannes@gmail.com',
    bio: 'Just a short selfdescription about myself.',
    handle: 'johannesklauss',
    website: 'https://syra.live',
    interests: [
      {value: 'DAWs'},
      {value: 'Programming'},
      {value: 'Guitar'},
      {value: 'Synths'},
    ],
    followedByCount: 45,
    followingCount: 34,
    isFollowing: true,
    followedBy: [
      {
        handle: 'test',
        name: 'Test'
      },
      {
        handle: 'Syra',
        name: 'Syra'
      }
    ],
    id: 'foo',
    name: 'Johannes Klauss',
  }
}