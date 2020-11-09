import { MixdownQuery, MyMixdownsQuery } from '../../gql/generated';

const location = 'https://syra-dev-audio-static-1.fra1.digitaloceanspaces.com/9b6ada5b16dce699c59125735d80a828/790b560964ba328a022e24e8bcb16886';

export const MixdownMock: MixdownQuery = {
  mixdown: {
    __typename: 'Mixdown',
    id: 'dasdas',
    version: 4,
    createdAt: 1603406790,
    name: 'Final release',
    audio: {
      __typename: 'AudioAsset',
      id: 'dhdhfdgh',
      location,
      isPublic: true,
    },
    listens: 67,
    project: {
      __typename: 'Project',
      name: 'New Song idea',
      owner: {
        __typename: 'User',
        id: '432423',
        name: 'Johannes Klauss',
        avatar: null
      }
    }
  }
}

export const MyMixdownsMock: MyMixdownsQuery = {
  me: {
    __typename: 'User',
    id: 'foo',
    ownsProjects: [
      {
        __typename: 'Project',
        id: '1',
        name: "New song idea",
        updatedAt: 1603306790,
        isPrivate: true,
        mixdowns: [
          {
            __typename: 'Mixdown',
            id: '4',
            version: 4,
            createdAt: 1603406790,
            name: 'Final release',
            audio: {
              id: 'dhdhfdgh',
              location,
              isPublic: true,
            },
            listens: 67,
          },
          {
            __typename: 'Mixdown',
            id: '3',
            version: 3,
            name: 'Added base',
            audio: {
              id: 'dhdhfnjdgh',
              location,
              isPublic: true,
            },
            createdAt: 1603405790,
            listens: 18,
          },
          {
            __typename: 'Mixdown',
            id: '2',
            version: 2,
            name: 'idea1',
            audio: {
              id: 'dhdhfjfghfdgh',
              location,
              isPublic: true,
            },
            createdAt: 1603404790,
            listens: 34,
          },
          {
            __typename: 'Mixdown',
            id: '1',
            version: 1,
            name: 'Basic skit',
            audio: {
              id: 'dhdhfdgbhjkbkh',
              location,
              isPublic: true,
            },
            createdAt: 1603403790,
            listens: 3,
          }
        ]
      },
      {
        __typename: 'Project',
        id: '2',
        name: "Old song idea",
        updatedAt: 1603203790,
        isPrivate: false,
        mixdowns: [
          {
            __typename: 'Mixdown',
            id: '2',
            version: 2,
            name: 'Final Master',
            audio: {
              id: 'dhdhfdgvgfcdfxh',
              location,
              isPublic: true,
            },
            createdAt: 1603205790,
            listens: 23,
          },
          {
            __typename: 'Mixdown',
            id: '1',
            version: 1,
            name: 'Rough Mix',
            audio: {
              id: 'dhysdhfjgdhfdgh',
              location,
              isPublic: true,
            },
            createdAt: 1603204790,
            listens: 7,
          }
        ]
      }
    ]
  }
};