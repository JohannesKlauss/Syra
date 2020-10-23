import { MixdownQuery, MyMixdownsQuery } from '../../gql/generated';

export const MixdownMock: MixdownQuery = {
  mixdown: {
    id: '4',
    version: 4,
    createdAt: 1603406790,
    name: 'Final release',
    audioUri: 'https://syra-audio-s.fra1.digitaloceanspaces.com/01%20SWXW%20v2-MP3-REF.mp3',
    listens: 67,
    project: {
      name: 'New Song idea',
      owner: {
        id: '432423',
        name: 'Johannes Klauss'
      }
    }
  }
}

export const MyMixdownsMock: MyMixdownsQuery = {
  me: {
    ownsProjects: [
      {
        id: '1',
        name: "New song idea",
        updatedAt: 1603306790,
        isPrivate: true,
        mixdowns: [
          {
            id: '4',
            version: 4,
            createdAt: 1603406790,
            name: 'Final release',
            audioUri: 'https://syra-audio-s.fra1.digitaloceanspaces.com/01%20SWXW%20v2-MP3-REF.mp3',
            listens: 67,
          },
          {
            id: '3',
            version: 3,
            name: 'Added base',
            audioUri: 'https://syra-audio-s.fra1.digitaloceanspaces.com/01%20SWXW%20v2-MP3-REF.mp3',
            createdAt: 1603405790,
            listens: 18,
          },
          {
            id: '2',
            version: 2,
            name: 'idea1',
            audioUri: 'https://syra-audio-s.fra1.digitaloceanspaces.com/01%20SWXW%20v2-MP3-REF.mp3',
            createdAt: 1603404790,
            listens: 34,
          },
          {
            id: '1',
            version: 1,
            name: 'Basic skit',
            audioUri: 'https://syra-audio-s.fra1.digitaloceanspaces.com/01%20SWXW%20v2-MP3-REF.mp3',
            createdAt: 1603403790,
            listens: 3,
          }
        ]
      },
      {
        id: '2',
        name: "Old song idea",
        updatedAt: 1603203790,
        isPrivate: false,
        mixdowns: [
          {
            id: '2',
            version: 2,
            name: 'Final Master',
            audioUri: 'https://syra-audio-s.fra1.digitaloceanspaces.com/01%20SWXW%20v2-MP3-REF.mp3',
            createdAt: 1603205790,
            listens: 23,
          },
          {
            id: '1',
            version: 1,
            name: 'Rough Mix',
            audioUri: 'https://syra-audio-s.fra1.digitaloceanspaces.com/01%20SWXW%20v2-MP3-REF.mp3',
            createdAt: 1603204790,
            listens: 7,
          }
        ]
      }
    ]
  }
};