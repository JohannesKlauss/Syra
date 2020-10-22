import { GetMyMixdownsQuery } from '../../gql/generated';

export const GetMyMixdownsMock: GetMyMixdownsQuery = {
  me: {
    ownsProjects: [
      {
        id: '1',
        name: "New song idea",
        updatedAt: 1603306790,
        mixdowns: [
          {
            id: '4',
            version: 4,
            createdAt: 1603406790,
            listens: 67,
          },
          {
            id: '3',
            version: 3,
            createdAt: 1603405790,
            listens: 18,
          },
          {
            id: '2',
            version: 2,
            createdAt: 1603404790,
            listens: 34,
          },
          {
            id: '1',
            version: 1,
            createdAt: 1603403790,
            listens: 3,
          }
        ]
      },
      {
        id: '2',
        name: "Old song idea",
        updatedAt: 1603203790,
        mixdowns: [
          {
            id: '2',
            version: 2,
            createdAt: 1603205790,
            listens: 23,
          },
          {
            id: '1',
            version: 1,
            createdAt: 1603204790,
            listens: 7,
          }
        ]
      }
    ]
  }
};