import { CreateFeedItemMutation, FeedItemByIdQuery, FeedItemsByHandleQuery } from "../../gql/generated";

export const CreateFeedItemMock: CreateFeedItemMutation = {
  createFeedItem: {
    __typename: 'FeedItem',
    commentCount: 0,
    createdAt: 1603801408,
    id: 'foo',
    likeCount: 0,
    updatedAt: 1603801408
  }
}

export const FeedItemByIdMockFoo: FeedItemByIdQuery = {
  feedItem: {
    __typename: 'FeedItem',
    updatedAt: 1603801408,
    likeCount: 34,
    id: 'foo',
    commentCount: 12,
    author: {
      __typename: 'User',
      name: 'Johannes Klauss',
      handle: 'johannesklauss',
      avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo'
    },
    mixdown: {
      __typename: 'Mixdown',
      createdAt: 1603801408,
      listens: 45,
      id: 'foo',
      audio: {
        __typename: 'AudioAsset',
        location: 'https://syra-dev-audio-static-1.fra1.digitaloceanspaces.com/9b6ada5b16dce699c59125735d80a828/ee57326a7e155e0dc706364ad390e528',
      },
      project: {
        __typename: 'Project',
        name: 'New Syra Song',
        isPrivate: false,
        id: 'foo'
      }
    },
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  }
}

export const FeedItemByIdMockBar: FeedItemByIdQuery = {
  feedItem: {
    __typename: 'FeedItem',
    updatedAt: 1603801408,
    likeCount: 34,
    id: 'bar',
    commentCount: 12,
    author: {
      __typename: 'User',
      name: 'Johannes Klauss',
      handle: 'johannesklauss',
      avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu_DctzkJyd0vl_0irH3OXgL-ntQfsxjdnqV59S_Rw=s192-c-mo'
    },
    mixdown: {
      __typename: 'Mixdown',
      createdAt: 1603801408,
      listens: 45,
      id: 'foo',
      audio: {
        __typename: 'AudioAsset',
        location: 'https://syra-dev-audio-static-1.fra1.digitaloceanspaces.com/9b6ada5b16dce699c59125735d80a828/ee57326a7e155e0dc706364ad390e528',
      },
      project: {
        __typename: 'Project',
        name: 'New Syra Song',
        isPrivate: false,
        id: 'foo'
      }
    },
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  }
}

export const FeedItemsByHandleMock: FeedItemsByHandleQuery = {
  feedItems: [
    {
      __typename: 'FeedItem',
      id: 'foo'
    },
    {
      __typename: 'FeedItem',
      id: 'bar'
    }
  ]
}