import { MyMixdownsQuery } from '../gql/generated';

export type PartialProject = MyMixdownsQuery['me']['ownsProjects'][0];
export type PartialMixdown = MyMixdownsQuery['me']['ownsProjects'][0]['mixdowns'][0];