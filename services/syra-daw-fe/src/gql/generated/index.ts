import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: number;
};

export type Address = {
  __typename?: 'Address';
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  state: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
  User?: Maybe<Array<User>>;
  zip: Scalars['Int'];
};

export type AddressUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type AddressAvgAggregate = {
  __typename?: 'AddressAvgAggregate';
  zip: Scalars['Float'];
};

export type AddressCountAggregate = {
  __typename?: 'AddressCountAggregate';
  _all: Scalars['Int'];
  addressLine1?: Maybe<Scalars['Int']>;
  addressLine2?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  zip: Scalars['Int'];
};

export type AddressCreateInput = {
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  User?: Maybe<UserCreateManyWithoutAddressInput>;
  zip: Scalars['Int'];
};

export type AddressCreateOneWithoutUserInput = {
  connect?: Maybe<AddressWhereUniqueInput>;
  connectOrCreate?: Maybe<AddressCreateOrConnectWithoutUserInput>;
  create?: Maybe<AddressCreateWithoutUserInput>;
};

export type AddressCreateOrConnectWithoutUserInput = {
  create: AddressCreateWithoutUserInput;
  where: AddressWhereUniqueInput;
};

export type AddressCreateWithoutUserInput = {
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  state: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  zip: Scalars['Int'];
};

export type AddressMaxAggregate = {
  __typename?: 'AddressMaxAggregate';
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  zip: Scalars['Int'];
};

export type AddressMinAggregate = {
  __typename?: 'AddressMinAggregate';
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  zip: Scalars['Int'];
};

export type AddressOrderByInput = {
  addressLine1?: Maybe<SortOrder>;
  addressLine2?: Maybe<SortOrder>;
  city?: Maybe<SortOrder>;
  country?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  state?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  zip?: Maybe<SortOrder>;
};

export type AddressRelationFilter = {
  is?: Maybe<AddressWhereInput>;
  isNot?: Maybe<AddressWhereInput>;
};

export enum AddressScalarFieldEnum {
  AddressLine1 = 'addressLine1',
  AddressLine2 = 'addressLine2',
  City = 'city',
  Country = 'country',
  CreatedAt = 'createdAt',
  Id = 'id',
  State = 'state',
  UpdatedAt = 'updatedAt',
  Zip = 'zip',
}

export type AddressSumAggregate = {
  __typename?: 'AddressSumAggregate';
  zip: Scalars['Int'];
};

export type AddressUpdateInput = {
  addressLine1?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  country?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  state?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  User?: Maybe<UserUpdateManyWithoutAddressInput>;
  zip?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AddressUpdateManyMutationInput = {
  addressLine1?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  country?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  state?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zip?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AddressUpdateOneWithoutUserInput = {
  connect?: Maybe<AddressWhereUniqueInput>;
  connectOrCreate?: Maybe<AddressCreateOrConnectWithoutUserInput>;
  create?: Maybe<AddressCreateWithoutUserInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutUserInput>;
  upsert?: Maybe<AddressUpsertWithoutUserInput>;
};

export type AddressUpdateWithoutUserInput = {
  addressLine1?: Maybe<StringFieldUpdateOperationsInput>;
  addressLine2?: Maybe<NullableStringFieldUpdateOperationsInput>;
  city?: Maybe<StringFieldUpdateOperationsInput>;
  country?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  state?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  zip?: Maybe<IntFieldUpdateOperationsInput>;
};

export type AddressUpsertWithoutUserInput = {
  create: AddressCreateWithoutUserInput;
  update: AddressUpdateWithoutUserInput;
};

export type AddressWhereInput = {
  addressLine1?: Maybe<StringFilter>;
  addressLine2?: Maybe<StringNullableFilter>;
  AND?: Maybe<Array<AddressWhereInput>>;
  city?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AddressWhereInput>>;
  OR?: Maybe<Array<AddressWhereInput>>;
  state?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  User?: Maybe<UserListRelationFilter>;
  zip?: Maybe<IntFilter>;
};

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AggregateAddress = {
  __typename?: 'AggregateAddress';
  avg?: Maybe<AddressAvgAggregate>;
  count?: Maybe<AddressCountAggregate>;
  max?: Maybe<AddressMaxAggregate>;
  min?: Maybe<AddressMinAggregate>;
  sum?: Maybe<AddressSumAggregate>;
};

export type AggregateBand = {
  __typename?: 'AggregateBand';
  count?: Maybe<BandCountAggregate>;
  max?: Maybe<BandMaxAggregate>;
  min?: Maybe<BandMinAggregate>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  count?: Maybe<CommentCountAggregate>;
  max?: Maybe<CommentMaxAggregate>;
  min?: Maybe<CommentMinAggregate>;
};

export type AggregateCommentLike = {
  __typename?: 'AggregateCommentLike';
  count?: Maybe<CommentLikeCountAggregate>;
  max?: Maybe<CommentLikeMaxAggregate>;
  min?: Maybe<CommentLikeMinAggregate>;
};

export type AggregateFeedItem = {
  __typename?: 'AggregateFeedItem';
  count?: Maybe<FeedItemCountAggregate>;
  max?: Maybe<FeedItemMaxAggregate>;
  min?: Maybe<FeedItemMinAggregate>;
};

export type AggregateFeedItemLike = {
  __typename?: 'AggregateFeedItemLike';
  count?: Maybe<FeedItemLikeCountAggregate>;
  max?: Maybe<FeedItemLikeMaxAggregate>;
  min?: Maybe<FeedItemLikeMinAggregate>;
};

export type AggregateFeedItemRevision = {
  __typename?: 'AggregateFeedItemRevision';
  count?: Maybe<FeedItemRevisionCountAggregate>;
  max?: Maybe<FeedItemRevisionMaxAggregate>;
  min?: Maybe<FeedItemRevisionMinAggregate>;
};

export type AggregateMixdown = {
  __typename?: 'AggregateMixdown';
  avg?: Maybe<MixdownAvgAggregate>;
  count?: Maybe<MixdownCountAggregate>;
  max?: Maybe<MixdownMaxAggregate>;
  min?: Maybe<MixdownMinAggregate>;
  sum?: Maybe<MixdownSumAggregate>;
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  count?: Maybe<ProjectCountAggregate>;
  max?: Maybe<ProjectMaxAggregate>;
  min?: Maybe<ProjectMinAggregate>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  count?: Maybe<TagCountAggregate>;
  max?: Maybe<TagMaxAggregate>;
  min?: Maybe<TagMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<UserCountAggregate>;
  max?: Maybe<UserMaxAggregate>;
  min?: Maybe<UserMinAggregate>;
};

export type AggregateUsersOnProjects = {
  __typename?: 'AggregateUsersOnProjects';
  count?: Maybe<UsersOnProjectsCountAggregate>;
  max?: Maybe<UsersOnProjectsMaxAggregate>;
  min?: Maybe<UsersOnProjectsMinAggregate>;
};

export type AudioAsset = {
  __typename?: 'AudioAsset';
  id: Scalars['String'];
  isPublic?: Maybe<Scalars['Boolean']>;
  location: Scalars['String'];
  name: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};

export type AudioAssetCreateManyWithoutOwnerInput = {
  connect?: Maybe<Array<AudioAssetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AudioAssetCreateOrConnectWithoutownerInput>>;
  create?: Maybe<Array<AudioAssetCreateWithoutOwnerInput>>;
};

export type AudioAssetCreateOneWithoutMixdownInput = {
  connect?: Maybe<AudioAssetWhereUniqueInput>;
  connectOrCreate?: Maybe<AudioAssetCreateOrConnectWithoutMixdownInput>;
  create?: Maybe<AudioAssetCreateWithoutMixdownInput>;
};

export type AudioAssetCreateOrConnectWithoutMixdownInput = {
  create: AudioAssetCreateWithoutMixdownInput;
  where: AudioAssetWhereUniqueInput;
};

export type AudioAssetCreateOrConnectWithoutownerInput = {
  create: AudioAssetCreateWithoutOwnerInput;
  where: AudioAssetWhereUniqueInput;
};

export type AudioAssetCreateWithoutMixdownInput = {
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  location: Scalars['String'];
  name: Scalars['String'];
  owner?: Maybe<UserCreateOneWithoutAudioAssetInput>;
};

export type AudioAssetCreateWithoutOwnerInput = {
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  location: Scalars['String'];
  Mixdown?: Maybe<MixdownCreateManyWithoutAudioInput>;
  name: Scalars['String'];
};

export type AudioAssetListRelationFilter = {
  every?: Maybe<AudioAssetWhereInput>;
  none?: Maybe<AudioAssetWhereInput>;
  some?: Maybe<AudioAssetWhereInput>;
};

export type AudioAssetOrderByInput = {
  id?: Maybe<SortOrder>;
  isPublic?: Maybe<SortOrder>;
  location?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AudioAssetRelationFilter = {
  is?: Maybe<AudioAssetWhereInput>;
  isNot?: Maybe<AudioAssetWhereInput>;
};

export enum AudioAssetScalarFieldEnum {
  Id = 'id',
  IsPublic = 'isPublic',
  Location = 'location',
  Name = 'name',
  UserId = 'userId',
}

export type AudioAssetScalarWhereInput = {
  AND?: Maybe<Array<AudioAssetScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  isPublic?: Maybe<BoolNullableFilter>;
  location?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AudioAssetScalarWhereInput>>;
  OR?: Maybe<Array<AudioAssetScalarWhereInput>>;
  userId?: Maybe<StringNullableFilter>;
};

export type AudioAssetUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AudioAssetUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<AudioAssetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AudioAssetCreateOrConnectWithoutownerInput>>;
  create?: Maybe<Array<AudioAssetCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<AudioAssetWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AudioAssetScalarWhereInput>>;
  disconnect?: Maybe<Array<AudioAssetWhereUniqueInput>>;
  set?: Maybe<Array<AudioAssetWhereUniqueInput>>;
  update?: Maybe<Array<AudioAssetUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<AudioAssetUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<AudioAssetUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type AudioAssetUpdateManyWithWhereWithoutOwnerInput = {
  data: AudioAssetUpdateManyMutationInput;
  where: AudioAssetScalarWhereInput;
};

export type AudioAssetUpdateOneRequiredWithoutMixdownInput = {
  connect?: Maybe<AudioAssetWhereUniqueInput>;
  connectOrCreate?: Maybe<AudioAssetCreateOrConnectWithoutMixdownInput>;
  create?: Maybe<AudioAssetCreateWithoutMixdownInput>;
  update?: Maybe<AudioAssetUpdateWithoutMixdownInput>;
  upsert?: Maybe<AudioAssetUpsertWithoutMixdownInput>;
};

export type AudioAssetUpdateWithoutMixdownInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutAudioAssetInput>;
};

export type AudioAssetUpdateWithoutOwnerInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutAudioInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AudioAssetUpdateWithWhereUniqueWithoutOwnerInput = {
  data: AudioAssetUpdateWithoutOwnerInput;
  where: AudioAssetWhereUniqueInput;
};

export type AudioAssetUpsertWithoutMixdownInput = {
  create: AudioAssetCreateWithoutMixdownInput;
  update: AudioAssetUpdateWithoutMixdownInput;
};

export type AudioAssetUpsertWithWhereUniqueWithoutOwnerInput = {
  create: AudioAssetCreateWithoutOwnerInput;
  update: AudioAssetUpdateWithoutOwnerInput;
  where: AudioAssetWhereUniqueInput;
};

export type AudioAssetWhereInput = {
  AND?: Maybe<Array<AudioAssetWhereInput>>;
  id?: Maybe<StringFilter>;
  isPublic?: Maybe<BoolNullableFilter>;
  location?: Maybe<StringFilter>;
  Mixdown?: Maybe<MixdownListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AudioAssetWhereInput>>;
  OR?: Maybe<Array<AudioAssetWhereInput>>;
  owner?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringNullableFilter>;
};

export type AudioAssetWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Band = {
  __typename?: 'Band';
  createdAt: Scalars['Timestamp'];
  createdBy: User;
  id: Scalars['String'];
  isPublic: Scalars['Boolean'];
  members?: Maybe<Array<UsersOnBands>>;
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
  userId: Scalars['String'];
};

export type BandMembersArgs = {
  cursor?: Maybe<UsersOnBandsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnBandsScalarFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnBandsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnBandsWhereInput>;
};

export type BandCountAggregate = {
  __typename?: 'BandCountAggregate';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPublic?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type BandCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  createdBy: UserCreateOneWithoutOwnsBandsInput;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnBandsCreateManyWithoutBandInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type BandCreateManyWithoutCreatedByInput = {
  connect?: Maybe<Array<BandWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<BandCreateOrConnectWithoutcreatedByInput>>;
  create?: Maybe<Array<BandCreateWithoutCreatedByInput>>;
};

export type BandCreateOneWithoutMembersInput = {
  connect?: Maybe<BandWhereUniqueInput>;
  connectOrCreate?: Maybe<BandCreateOrConnectWithoutmembersInput>;
  create?: Maybe<BandCreateWithoutMembersInput>;
};

export type BandCreateOrConnectWithoutcreatedByInput = {
  create: BandCreateWithoutCreatedByInput;
  where: BandWhereUniqueInput;
};

export type BandCreateOrConnectWithoutmembersInput = {
  create: BandCreateWithoutMembersInput;
  where: BandWhereUniqueInput;
};

export type BandCreateWithoutCreatedByInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnBandsCreateManyWithoutBandInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type BandCreateWithoutMembersInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  createdBy: UserCreateOneWithoutOwnsBandsInput;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type BandListRelationFilter = {
  every?: Maybe<BandWhereInput>;
  none?: Maybe<BandWhereInput>;
  some?: Maybe<BandWhereInput>;
};

export type BandMaxAggregate = {
  __typename?: 'BandMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
};

export type BandMinAggregate = {
  __typename?: 'BandMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
};

export type BandOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isPublic?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type BandRelationFilter = {
  is?: Maybe<BandWhereInput>;
  isNot?: Maybe<BandWhereInput>;
};

export enum BandScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPublic = 'isPublic',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type BandScalarWhereInput = {
  AND?: Maybe<Array<BandScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPublic?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<BandScalarWhereInput>>;
  OR?: Maybe<Array<BandScalarWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type BandUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: Maybe<UserUpdateOneRequiredWithoutOwnsBandsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UsersOnBandsUpdateManyWithoutBandInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BandUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BandUpdateManyWithoutCreatedByInput = {
  connect?: Maybe<Array<BandWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<BandCreateOrConnectWithoutcreatedByInput>>;
  create?: Maybe<Array<BandCreateWithoutCreatedByInput>>;
  delete?: Maybe<Array<BandWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BandScalarWhereInput>>;
  disconnect?: Maybe<Array<BandWhereUniqueInput>>;
  set?: Maybe<Array<BandWhereUniqueInput>>;
  update?: Maybe<Array<BandUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: Maybe<Array<BandUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: Maybe<Array<BandUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type BandUpdateManyWithWhereWithoutCreatedByInput = {
  data: BandUpdateManyMutationInput;
  where: BandScalarWhereInput;
};

export type BandUpdateOneRequiredWithoutMembersInput = {
  connect?: Maybe<BandWhereUniqueInput>;
  connectOrCreate?: Maybe<BandCreateOrConnectWithoutmembersInput>;
  create?: Maybe<BandCreateWithoutMembersInput>;
  update?: Maybe<BandUpdateWithoutMembersInput>;
  upsert?: Maybe<BandUpsertWithoutMembersInput>;
};

export type BandUpdateWithoutCreatedByInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UsersOnBandsUpdateManyWithoutBandInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BandUpdateWithoutMembersInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: Maybe<UserUpdateOneRequiredWithoutOwnsBandsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BandUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: BandUpdateWithoutCreatedByInput;
  where: BandWhereUniqueInput;
};

export type BandUpsertWithoutMembersInput = {
  create: BandCreateWithoutMembersInput;
  update: BandUpdateWithoutMembersInput;
};

export type BandUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: BandCreateWithoutCreatedByInput;
  update: BandUpdateWithoutCreatedByInput;
  where: BandWhereUniqueInput;
};

export type BandWhereInput = {
  AND?: Maybe<Array<BandWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  createdBy?: Maybe<UserRelationFilter>;
  id?: Maybe<StringFilter>;
  isPublic?: Maybe<BoolFilter>;
  members?: Maybe<UsersOnBandsListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<BandWhereInput>>;
  OR?: Maybe<Array<BandWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type BandWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  authorId: Scalars['String'];
  commentCount?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Timestamp'];
  feedItem?: Maybe<FeedItem>;
  feedItemId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isMeLiking?: Maybe<Scalars['Boolean']>;
  likeCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Array<CommentLike>>;
  parentComment?: Maybe<Comment>;
  parentCommentId?: Maybe<Scalars['String']>;
  subComments?: Maybe<Array<Comment>>;
  text: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type CommentLikesArgs = {
  cursor?: Maybe<CommentLikeWhereUniqueInput>;
  distinct?: Maybe<Array<CommentLikeScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type CommentSubCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  feedItemId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parentCommentId?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CommentCreateInput = {
  author: UserCreateOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentCreateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentCreateManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutauthorInput>>;
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
};

export type CommentCreateManyWithoutFeedItemInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutfeedItemInput>>;
  create?: Maybe<Array<CommentCreateWithoutFeedItemInput>>;
};

export type CommentCreateManyWithoutParentCommentInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutparentCommentInput>>;
  create?: Maybe<Array<CommentCreateWithoutParentCommentInput>>;
};

export type CommentCreateOneWithoutLikesInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutlikesInput>;
  create?: Maybe<CommentCreateWithoutLikesInput>;
};

export type CommentCreateOneWithoutSubCommentsInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutsubCommentsInput>;
  create?: Maybe<CommentCreateWithoutSubCommentsInput>;
};

export type CommentCreateOrConnectWithoutauthorInput = {
  create: CommentCreateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutfeedItemInput = {
  create: CommentCreateWithoutFeedItemInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutlikesInput = {
  create: CommentCreateWithoutLikesInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutparentCommentInput = {
  create: CommentCreateWithoutParentCommentInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutsubCommentsInput = {
  create: CommentCreateWithoutSubCommentsInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentCreateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentCreateManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateWithoutFeedItemInput = {
  author: UserCreateOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentCreateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentCreateManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateWithoutLikesInput = {
  author: UserCreateOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  parentComment?: Maybe<CommentCreateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentCreateManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateWithoutParentCommentInput = {
  author: UserCreateOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateManyWithoutCommentInput>;
  subComments?: Maybe<CommentCreateManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateWithoutSubCommentsInput = {
  author: UserCreateOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentCreateOneWithoutSubCommentsInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentLike = {
  __typename?: 'CommentLike';
  comment: Comment;
  commentId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  user: User;
  userId: Scalars['String'];
};

export type CommentLikeCountAggregate = {
  __typename?: 'CommentLikeCountAggregate';
  _all: Scalars['Int'];
  commentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CommentLikeCreateInput = {
  comment: CommentCreateOneWithoutLikesInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutCommentLikeInput;
};

export type CommentLikeCreateManyWithoutCommentInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentLikeCreateOrConnectWithoutcommentInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutCommentInput>>;
};

export type CommentLikeCreateManyWithoutUserInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentLikeCreateOrConnectWithoutuserInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutUserInput>>;
};

export type CommentLikeCreateOrConnectWithoutcommentInput = {
  create: CommentLikeCreateWithoutCommentInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeCreateOrConnectWithoutuserInput = {
  create: CommentLikeCreateWithoutUserInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeCreateWithoutCommentInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutCommentLikeInput;
};

export type CommentLikeCreateWithoutUserInput = {
  comment: CommentCreateOneWithoutLikesInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentLikeListRelationFilter = {
  every?: Maybe<CommentLikeWhereInput>;
  none?: Maybe<CommentLikeWhereInput>;
  some?: Maybe<CommentLikeWhereInput>;
};

export type CommentLikeMaxAggregate = {
  __typename?: 'CommentLikeMaxAggregate';
  commentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
};

export type CommentLikeMinAggregate = {
  __typename?: 'CommentLikeMinAggregate';
  commentId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
};

export type CommentLikeOrderByInput = {
  commentId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum CommentLikeScalarFieldEnum {
  CommentId = 'commentId',
  CreatedAt = 'createdAt',
  UserId = 'userId',
}

export type CommentLikeScalarWhereInput = {
  AND?: Maybe<Array<CommentLikeScalarWhereInput>>;
  commentId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<CommentLikeScalarWhereInput>>;
  OR?: Maybe<Array<CommentLikeScalarWhereInput>>;
  userId?: Maybe<StringFilter>;
};

export type CommentLikeUpdateInput = {
  comment?: Maybe<CommentUpdateOneRequiredWithoutLikesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentLikeInput>;
};

export type CommentLikeUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentLikeUpdateManyWithoutCommentInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentLikeCreateOrConnectWithoutcommentInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutCommentInput>>;
  delete?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  set?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  update?: Maybe<Array<CommentLikeUpdateWithWhereUniqueWithoutCommentInput>>;
  updateMany?: Maybe<Array<CommentLikeUpdateManyWithWhereWithoutCommentInput>>;
  upsert?: Maybe<Array<CommentLikeUpsertWithWhereUniqueWithoutCommentInput>>;
};

export type CommentLikeUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentLikeCreateOrConnectWithoutuserInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutUserInput>>;
  delete?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  set?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  update?: Maybe<Array<CommentLikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CommentLikeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<CommentLikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentLikeUpdateManyWithWhereWithoutCommentInput = {
  data: CommentLikeUpdateManyMutationInput;
  where: CommentLikeScalarWhereInput;
};

export type CommentLikeUpdateManyWithWhereWithoutUserInput = {
  data: CommentLikeUpdateManyMutationInput;
  where: CommentLikeScalarWhereInput;
};

export type CommentLikeUpdateWithoutCommentInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentLikeInput>;
};

export type CommentLikeUpdateWithoutUserInput = {
  comment?: Maybe<CommentUpdateOneRequiredWithoutLikesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentLikeUpdateWithWhereUniqueWithoutCommentInput = {
  data: CommentLikeUpdateWithoutCommentInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentLikeUpdateWithoutUserInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeUpsertWithWhereUniqueWithoutCommentInput = {
  create: CommentLikeCreateWithoutCommentInput;
  update: CommentLikeUpdateWithoutCommentInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentLikeCreateWithoutUserInput;
  update: CommentLikeUpdateWithoutUserInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeUserIdCommentIdCompoundUniqueInput = {
  commentId: Scalars['String'];
  userId: Scalars['String'];
};

export type CommentLikeWhereInput = {
  AND?: Maybe<Array<CommentLikeWhereInput>>;
  comment?: Maybe<CommentRelationFilter>;
  commentId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<CommentLikeWhereInput>>;
  OR?: Maybe<Array<CommentLikeWhereInput>>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type CommentLikeWhereUniqueInput = {
  userId_commentId?: Maybe<CommentLikeUserIdCommentIdCompoundUniqueInput>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  parentCommentId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  parentCommentId?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentOrderByInput = {
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  feedItemId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  parentCommentId?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type CommentRelationFilter = {
  is?: Maybe<CommentWhereInput>;
  isNot?: Maybe<CommentWhereInput>;
};

export enum CommentScalarFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  FeedItemId = 'feedItemId',
  Id = 'id',
  ParentCommentId = 'parentCommentId',
  Text = 'text',
  UpdatedAt = 'updatedAt',
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  authorId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItemId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  parentCommentId?: Maybe<StringNullableFilter>;
  text?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentUpdateInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutCommentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneWithoutCommentsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  likes?: Maybe<CommentLikeUpdateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentUpdateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentUpdateManyWithoutParentCommentInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutauthorInput>>;
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type CommentUpdateManyWithoutFeedItemInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutfeedItemInput>>;
  create?: Maybe<Array<CommentCreateWithoutFeedItemInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutFeedItemInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutFeedItemInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutFeedItemInput>>;
};

export type CommentUpdateManyWithoutParentCommentInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutparentCommentInput>>;
  create?: Maybe<Array<CommentCreateWithoutParentCommentInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutParentCommentInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutParentCommentInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutParentCommentInput>>;
};

export type CommentUpdateManyWithWhereWithoutAuthorInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutFeedItemInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutParentCommentInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateOneRequiredWithoutLikesInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutlikesInput>;
  create?: Maybe<CommentCreateWithoutLikesInput>;
  update?: Maybe<CommentUpdateWithoutLikesInput>;
  upsert?: Maybe<CommentUpsertWithoutLikesInput>;
};

export type CommentUpdateOneWithoutSubCommentsInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutsubCommentsInput>;
  create?: Maybe<CommentCreateWithoutSubCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CommentUpdateWithoutSubCommentsInput>;
  upsert?: Maybe<CommentUpsertWithoutSubCommentsInput>;
};

export type CommentUpdateWithoutAuthorInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneWithoutCommentsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  likes?: Maybe<CommentLikeUpdateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentUpdateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentUpdateManyWithoutParentCommentInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutFeedItemInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutCommentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  likes?: Maybe<CommentLikeUpdateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentUpdateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentUpdateManyWithoutParentCommentInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutLikesInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutCommentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneWithoutCommentsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  parentComment?: Maybe<CommentUpdateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentUpdateManyWithoutParentCommentInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutParentCommentInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutCommentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneWithoutCommentsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  likes?: Maybe<CommentLikeUpdateManyWithoutCommentInput>;
  subComments?: Maybe<CommentUpdateManyWithoutParentCommentInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutSubCommentsInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutCommentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneWithoutCommentsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  likes?: Maybe<CommentLikeUpdateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentUpdateOneWithoutSubCommentsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutFeedItemInput = {
  data: CommentUpdateWithoutFeedItemInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutParentCommentInput = {
  data: CommentUpdateWithoutParentCommentInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithoutLikesInput = {
  create: CommentCreateWithoutLikesInput;
  update: CommentUpdateWithoutLikesInput;
};

export type CommentUpsertWithoutSubCommentsInput = {
  create: CommentCreateWithoutSubCommentsInput;
  update: CommentUpdateWithoutSubCommentsInput;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  update: CommentUpdateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutFeedItemInput = {
  create: CommentCreateWithoutFeedItemInput;
  update: CommentUpdateWithoutFeedItemInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutParentCommentInput = {
  create: CommentCreateWithoutParentCommentInput;
  update: CommentUpdateWithoutParentCommentInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItem?: Maybe<FeedItemRelationFilter>;
  feedItemId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  likes?: Maybe<CommentLikeListRelationFilter>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  parentComment?: Maybe<CommentRelationFilter>;
  parentCommentId?: Maybe<StringNullableFilter>;
  subComments?: Maybe<CommentListRelationFilter>;
  text?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Timestamp']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type EarlyAccessCode = {
  __typename?: 'EarlyAccessCode';
  claimedBy?: Maybe<User>;
  code: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  isValid: Scalars['Boolean'];
  updatedAt: Scalars['Timestamp'];
  userId?: Maybe<Scalars['String']>;
};

export type EarlyAccessCodeCreateManyWithoutClaimedByInput = {
  connect?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<EarlyAccessCodeCreateOrConnectWithoutclaimedByInput>>;
  create?: Maybe<Array<EarlyAccessCodeCreateWithoutClaimedByInput>>;
};

export type EarlyAccessCodeCreateOrConnectWithoutclaimedByInput = {
  create: EarlyAccessCodeCreateWithoutClaimedByInput;
  where: EarlyAccessCodeWhereUniqueInput;
};

export type EarlyAccessCodeCreateWithoutClaimedByInput = {
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isValid?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type EarlyAccessCodeListRelationFilter = {
  every?: Maybe<EarlyAccessCodeWhereInput>;
  none?: Maybe<EarlyAccessCodeWhereInput>;
  some?: Maybe<EarlyAccessCodeWhereInput>;
};

export type EarlyAccessCodeOrderByInput = {
  code?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isValid?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum EarlyAccessCodeScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsValid = 'isValid',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type EarlyAccessCodeScalarWhereInput = {
  AND?: Maybe<Array<EarlyAccessCodeScalarWhereInput>>;
  code?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isValid?: Maybe<BoolFilter>;
  NOT?: Maybe<Array<EarlyAccessCodeScalarWhereInput>>;
  OR?: Maybe<Array<EarlyAccessCodeScalarWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringNullableFilter>;
};

export type EarlyAccessCodeUpdateManyMutationInput = {
  code?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isValid?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EarlyAccessCodeUpdateManyWithoutClaimedByInput = {
  connect?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<EarlyAccessCodeCreateOrConnectWithoutclaimedByInput>>;
  create?: Maybe<Array<EarlyAccessCodeCreateWithoutClaimedByInput>>;
  delete?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EarlyAccessCodeScalarWhereInput>>;
  disconnect?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  set?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  update?: Maybe<Array<EarlyAccessCodeUpdateWithWhereUniqueWithoutClaimedByInput>>;
  updateMany?: Maybe<Array<EarlyAccessCodeUpdateManyWithWhereWithoutClaimedByInput>>;
  upsert?: Maybe<Array<EarlyAccessCodeUpsertWithWhereUniqueWithoutClaimedByInput>>;
};

export type EarlyAccessCodeUpdateManyWithWhereWithoutClaimedByInput = {
  data: EarlyAccessCodeUpdateManyMutationInput;
  where: EarlyAccessCodeScalarWhereInput;
};

export type EarlyAccessCodeUpdateWithoutClaimedByInput = {
  code?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isValid?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EarlyAccessCodeUpdateWithWhereUniqueWithoutClaimedByInput = {
  data: EarlyAccessCodeUpdateWithoutClaimedByInput;
  where: EarlyAccessCodeWhereUniqueInput;
};

export type EarlyAccessCodeUpsertWithWhereUniqueWithoutClaimedByInput = {
  create: EarlyAccessCodeCreateWithoutClaimedByInput;
  update: EarlyAccessCodeUpdateWithoutClaimedByInput;
  where: EarlyAccessCodeWhereUniqueInput;
};

export type EarlyAccessCodeWhereInput = {
  AND?: Maybe<Array<EarlyAccessCodeWhereInput>>;
  claimedBy?: Maybe<UserRelationFilter>;
  code?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isValid?: Maybe<BoolFilter>;
  NOT?: Maybe<Array<EarlyAccessCodeWhereInput>>;
  OR?: Maybe<Array<EarlyAccessCodeWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringNullableFilter>;
};

export type EarlyAccessCodeWhereUniqueInput = {
  code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  author: User;
  authorId: Scalars['String'];
  commentCount?: Maybe<Scalars['Int']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
  isMeLiking?: Maybe<Scalars['Boolean']>;
  isPublished: Scalars['Boolean'];
  likeCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Array<FeedItemLike>>;
  mixdown?: Maybe<Mixdown>;
  mixdownId?: Maybe<Scalars['String']>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<Array<FeedItemRevision>>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Timestamp'];
};

export type FeedItemCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type FeedItemLikesArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemLikeScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type FeedItemRevisionsArgs = {
  cursor?: Maybe<FeedItemRevisionWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemRevisionScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemRevisionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type FeedItemCountAggregate = {
  __typename?: 'FeedItemCountAggregate';
  _all: Scalars['Int'];
  authorId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPublished?: Maybe<Scalars['Int']>;
  mixdownId?: Maybe<Scalars['Int']>;
  publishAt?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type FeedItemCreateInput = {
  author: UserCreateOneWithoutFeedInput;
  comments?: Maybe<CommentCreateManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownCreateOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemCreateOrConnectWithoutauthorInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutAuthorInput>>;
};

export type FeedItemCreateManyWithoutMixdownInput = {
  connect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemCreateOrConnectWithoutmixdownInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutMixdownInput>>;
};

export type FeedItemCreateOneWithoutCommentsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutcommentsInput>;
  create?: Maybe<FeedItemCreateWithoutCommentsInput>;
};

export type FeedItemCreateOneWithoutLikesInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutlikesInput>;
  create?: Maybe<FeedItemCreateWithoutLikesInput>;
};

export type FeedItemCreateOneWithoutRevisionsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutrevisionsInput>;
  create?: Maybe<FeedItemCreateWithoutRevisionsInput>;
};

export type FeedItemCreateOrConnectWithoutauthorInput = {
  create: FeedItemCreateWithoutAuthorInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutcommentsInput = {
  create: FeedItemCreateWithoutCommentsInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutlikesInput = {
  create: FeedItemCreateWithoutLikesInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutmixdownInput = {
  create: FeedItemCreateWithoutMixdownInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutrevisionsInput = {
  create: FeedItemCreateWithoutRevisionsInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateWithoutAuthorInput = {
  comments?: Maybe<CommentCreateManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownCreateOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateWithoutCommentsInput = {
  author: UserCreateOneWithoutFeedInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownCreateOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateWithoutLikesInput = {
  author: UserCreateOneWithoutFeedInput;
  comments?: Maybe<CommentCreateManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  mixdown?: Maybe<MixdownCreateOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateWithoutMixdownInput = {
  author: UserCreateOneWithoutFeedInput;
  comments?: Maybe<CommentCreateManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateManyWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateWithoutRevisionsInput = {
  author: UserCreateOneWithoutFeedInput;
  comments?: Maybe<CommentCreateManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownCreateOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemLike = {
  __typename?: 'FeedItemLike';
  createdAt: Scalars['Timestamp'];
  feedItem: FeedItem;
  feedItemId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type FeedItemLikeCountAggregate = {
  __typename?: 'FeedItemLikeCountAggregate';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  feedItemId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type FeedItemLikeCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem: FeedItemCreateOneWithoutLikesInput;
  user: UserCreateOneWithoutFeedItemLikeInput;
};

export type FeedItemLikeCreateManyWithoutFeedItemInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemLikeCreateOrConnectWithoutfeedItemInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutFeedItemInput>>;
};

export type FeedItemLikeCreateManyWithoutUserInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemLikeCreateOrConnectWithoutuserInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutUserInput>>;
};

export type FeedItemLikeCreateOrConnectWithoutfeedItemInput = {
  create: FeedItemLikeCreateWithoutFeedItemInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeCreateOrConnectWithoutuserInput = {
  create: FeedItemLikeCreateWithoutUserInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeCreateWithoutFeedItemInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutFeedItemLikeInput;
};

export type FeedItemLikeCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem: FeedItemCreateOneWithoutLikesInput;
};

export type FeedItemLikeListRelationFilter = {
  every?: Maybe<FeedItemLikeWhereInput>;
  none?: Maybe<FeedItemLikeWhereInput>;
  some?: Maybe<FeedItemLikeWhereInput>;
};

export type FeedItemLikeMaxAggregate = {
  __typename?: 'FeedItemLikeMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type FeedItemLikeMinAggregate = {
  __typename?: 'FeedItemLikeMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type FeedItemLikeOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  feedItemId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum FeedItemLikeScalarFieldEnum {
  CreatedAt = 'createdAt',
  FeedItemId = 'feedItemId',
  UserId = 'userId',
}

export type FeedItemLikeScalarWhereInput = {
  AND?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItemId?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  OR?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  userId?: Maybe<StringFilter>;
};

export type FeedItemLikeUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneRequiredWithoutLikesInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutFeedItemLikeInput>;
};

export type FeedItemLikeUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemLikeUpdateManyWithoutFeedItemInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemLikeCreateOrConnectWithoutfeedItemInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutFeedItemInput>>;
  delete?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemLikeUpdateWithWhereUniqueWithoutFeedItemInput>>;
  updateMany?: Maybe<Array<FeedItemLikeUpdateManyWithWhereWithoutFeedItemInput>>;
  upsert?: Maybe<Array<FeedItemLikeUpsertWithWhereUniqueWithoutFeedItemInput>>;
};

export type FeedItemLikeUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemLikeCreateOrConnectWithoutuserInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutUserInput>>;
  delete?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemLikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<FeedItemLikeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<FeedItemLikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FeedItemLikeUpdateManyWithWhereWithoutFeedItemInput = {
  data: FeedItemLikeUpdateManyMutationInput;
  where: FeedItemLikeScalarWhereInput;
};

export type FeedItemLikeUpdateManyWithWhereWithoutUserInput = {
  data: FeedItemLikeUpdateManyMutationInput;
  where: FeedItemLikeScalarWhereInput;
};

export type FeedItemLikeUpdateWithoutFeedItemInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutFeedItemLikeInput>;
};

export type FeedItemLikeUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneRequiredWithoutLikesInput>;
};

export type FeedItemLikeUpdateWithWhereUniqueWithoutFeedItemInput = {
  data: FeedItemLikeUpdateWithoutFeedItemInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: FeedItemLikeUpdateWithoutUserInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeUpsertWithWhereUniqueWithoutFeedItemInput = {
  create: FeedItemLikeCreateWithoutFeedItemInput;
  update: FeedItemLikeUpdateWithoutFeedItemInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: FeedItemLikeCreateWithoutUserInput;
  update: FeedItemLikeUpdateWithoutUserInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeUserIdFeedItemIdCompoundUniqueInput = {
  feedItemId: Scalars['String'];
  userId: Scalars['String'];
};

export type FeedItemLikeWhereInput = {
  AND?: Maybe<Array<FeedItemLikeWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItem?: Maybe<FeedItemRelationFilter>;
  feedItemId?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FeedItemLikeWhereInput>>;
  OR?: Maybe<Array<FeedItemLikeWhereInput>>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type FeedItemLikeWhereUniqueInput = {
  userId_feedItemId?: Maybe<FeedItemLikeUserIdFeedItemIdCompoundUniqueInput>;
};

export type FeedItemListRelationFilter = {
  every?: Maybe<FeedItemWhereInput>;
  none?: Maybe<FeedItemWhereInput>;
  some?: Maybe<FeedItemWhereInput>;
};

export type FeedItemMaxAggregate = {
  __typename?: 'FeedItemMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  mixdownId?: Maybe<Scalars['String']>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemMinAggregate = {
  __typename?: 'FeedItemMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  mixdownId?: Maybe<Scalars['String']>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemOrderByInput = {
  authorId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isPublished?: Maybe<SortOrder>;
  mixdownId?: Maybe<SortOrder>;
  publishAt?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type FeedItemRelationFilter = {
  is?: Maybe<FeedItemWhereInput>;
  isNot?: Maybe<FeedItemWhereInput>;
};

export type FeedItemRevision = {
  __typename?: 'FeedItemRevision';
  createdAt: Scalars['Timestamp'];
  feedItemId: Scalars['String'];
  id: Scalars['String'];
  parentItem: FeedItem;
  text: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type FeedItemRevisionCountAggregate = {
  __typename?: 'FeedItemRevisionCountAggregate';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  feedItemId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type FeedItemRevisionCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  parentItem: FeedItemCreateOneWithoutRevisionsInput;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemRevisionCreateManyWithoutParentItemInput = {
  connect?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemRevisionCreateOrConnectWithoutparentItemInput>>;
  create?: Maybe<Array<FeedItemRevisionCreateWithoutParentItemInput>>;
};

export type FeedItemRevisionCreateOrConnectWithoutparentItemInput = {
  create: FeedItemRevisionCreateWithoutParentItemInput;
  where: FeedItemRevisionWhereUniqueInput;
};

export type FeedItemRevisionCreateWithoutParentItemInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemRevisionListRelationFilter = {
  every?: Maybe<FeedItemRevisionWhereInput>;
  none?: Maybe<FeedItemRevisionWhereInput>;
  some?: Maybe<FeedItemRevisionWhereInput>;
};

export type FeedItemRevisionMaxAggregate = {
  __typename?: 'FeedItemRevisionMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemRevisionMinAggregate = {
  __typename?: 'FeedItemRevisionMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemRevisionOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  feedItemId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum FeedItemRevisionScalarFieldEnum {
  CreatedAt = 'createdAt',
  FeedItemId = 'feedItemId',
  Id = 'id',
  Text = 'text',
  UpdatedAt = 'updatedAt',
}

export type FeedItemRevisionScalarWhereInput = {
  AND?: Maybe<Array<FeedItemRevisionScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItemId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FeedItemRevisionScalarWhereInput>>;
  OR?: Maybe<Array<FeedItemRevisionScalarWhereInput>>;
  text?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FeedItemRevisionUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  parentItem?: Maybe<FeedItemUpdateOneRequiredWithoutRevisionsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemRevisionUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemRevisionUpdateManyWithoutParentItemInput = {
  connect?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemRevisionCreateOrConnectWithoutparentItemInput>>;
  create?: Maybe<Array<FeedItemRevisionCreateWithoutParentItemInput>>;
  delete?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemRevisionScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemRevisionUpdateWithWhereUniqueWithoutParentItemInput>>;
  updateMany?: Maybe<Array<FeedItemRevisionUpdateManyWithWhereWithoutParentItemInput>>;
  upsert?: Maybe<Array<FeedItemRevisionUpsertWithWhereUniqueWithoutParentItemInput>>;
};

export type FeedItemRevisionUpdateManyWithWhereWithoutParentItemInput = {
  data: FeedItemRevisionUpdateManyMutationInput;
  where: FeedItemRevisionScalarWhereInput;
};

export type FeedItemRevisionUpdateWithoutParentItemInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemRevisionUpdateWithWhereUniqueWithoutParentItemInput = {
  data: FeedItemRevisionUpdateWithoutParentItemInput;
  where: FeedItemRevisionWhereUniqueInput;
};

export type FeedItemRevisionUpsertWithWhereUniqueWithoutParentItemInput = {
  create: FeedItemRevisionCreateWithoutParentItemInput;
  update: FeedItemRevisionUpdateWithoutParentItemInput;
  where: FeedItemRevisionWhereUniqueInput;
};

export type FeedItemRevisionWhereInput = {
  AND?: Maybe<Array<FeedItemRevisionWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItemId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<FeedItemRevisionWhereInput>>;
  OR?: Maybe<Array<FeedItemRevisionWhereInput>>;
  parentItem?: Maybe<FeedItemRelationFilter>;
  text?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FeedItemRevisionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum FeedItemScalarFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPublished = 'isPublished',
  MixdownId = 'mixdownId',
  PublishAt = 'publishAt',
  Text = 'text',
  UpdatedAt = 'updatedAt',
}

export type FeedItemScalarWhereInput = {
  AND?: Maybe<Array<FeedItemScalarWhereInput>>;
  authorId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPublished?: Maybe<BoolFilter>;
  mixdownId?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<FeedItemScalarWhereInput>>;
  OR?: Maybe<Array<FeedItemScalarWhereInput>>;
  publishAt?: Maybe<DateTimeNullableFilter>;
  text?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FeedItemUpdateInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutFeedInput>;
  comments?: Maybe<CommentUpdateManyWithoutFeedItemInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublished?: Maybe<BoolFieldUpdateOperationsInput>;
  likes?: Maybe<FeedItemLikeUpdateManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownUpdateOneWithoutFeedItemInput>;
  publishAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  revisions?: Maybe<FeedItemRevisionUpdateManyWithoutParentItemInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublished?: Maybe<BoolFieldUpdateOperationsInput>;
  publishAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemCreateOrConnectWithoutauthorInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<FeedItemUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: Maybe<Array<FeedItemUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type FeedItemUpdateManyWithoutMixdownInput = {
  connect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemCreateOrConnectWithoutmixdownInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutMixdownInput>>;
  delete?: Maybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemUpdateWithWhereUniqueWithoutMixdownInput>>;
  updateMany?: Maybe<Array<FeedItemUpdateManyWithWhereWithoutMixdownInput>>;
  upsert?: Maybe<Array<FeedItemUpsertWithWhereUniqueWithoutMixdownInput>>;
};

export type FeedItemUpdateManyWithWhereWithoutAuthorInput = {
  data: FeedItemUpdateManyMutationInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateManyWithWhereWithoutMixdownInput = {
  data: FeedItemUpdateManyMutationInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateOneRequiredWithoutLikesInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutlikesInput>;
  create?: Maybe<FeedItemCreateWithoutLikesInput>;
  update?: Maybe<FeedItemUpdateWithoutLikesInput>;
  upsert?: Maybe<FeedItemUpsertWithoutLikesInput>;
};

export type FeedItemUpdateOneRequiredWithoutRevisionsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutrevisionsInput>;
  create?: Maybe<FeedItemCreateWithoutRevisionsInput>;
  update?: Maybe<FeedItemUpdateWithoutRevisionsInput>;
  upsert?: Maybe<FeedItemUpsertWithoutRevisionsInput>;
};

export type FeedItemUpdateOneWithoutCommentsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutcommentsInput>;
  create?: Maybe<FeedItemCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FeedItemUpdateWithoutCommentsInput>;
  upsert?: Maybe<FeedItemUpsertWithoutCommentsInput>;
};

export type FeedItemUpdateWithoutAuthorInput = {
  comments?: Maybe<CommentUpdateManyWithoutFeedItemInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublished?: Maybe<BoolFieldUpdateOperationsInput>;
  likes?: Maybe<FeedItemLikeUpdateManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownUpdateOneWithoutFeedItemInput>;
  publishAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  revisions?: Maybe<FeedItemRevisionUpdateManyWithoutParentItemInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemUpdateWithoutCommentsInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutFeedInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublished?: Maybe<BoolFieldUpdateOperationsInput>;
  likes?: Maybe<FeedItemLikeUpdateManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownUpdateOneWithoutFeedItemInput>;
  publishAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  revisions?: Maybe<FeedItemRevisionUpdateManyWithoutParentItemInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemUpdateWithoutLikesInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutFeedInput>;
  comments?: Maybe<CommentUpdateManyWithoutFeedItemInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublished?: Maybe<BoolFieldUpdateOperationsInput>;
  mixdown?: Maybe<MixdownUpdateOneWithoutFeedItemInput>;
  publishAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  revisions?: Maybe<FeedItemRevisionUpdateManyWithoutParentItemInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemUpdateWithoutMixdownInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutFeedInput>;
  comments?: Maybe<CommentUpdateManyWithoutFeedItemInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublished?: Maybe<BoolFieldUpdateOperationsInput>;
  likes?: Maybe<FeedItemLikeUpdateManyWithoutFeedItemInput>;
  publishAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  revisions?: Maybe<FeedItemRevisionUpdateManyWithoutParentItemInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemUpdateWithoutRevisionsInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutFeedInput>;
  comments?: Maybe<CommentUpdateManyWithoutFeedItemInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublished?: Maybe<BoolFieldUpdateOperationsInput>;
  likes?: Maybe<FeedItemLikeUpdateManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownUpdateOneWithoutFeedItemInput>;
  publishAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemUpdateWithWhereUniqueWithoutAuthorInput = {
  data: FeedItemUpdateWithoutAuthorInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpdateWithWhereUniqueWithoutMixdownInput = {
  data: FeedItemUpdateWithoutMixdownInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpsertWithoutCommentsInput = {
  create: FeedItemCreateWithoutCommentsInput;
  update: FeedItemUpdateWithoutCommentsInput;
};

export type FeedItemUpsertWithoutLikesInput = {
  create: FeedItemCreateWithoutLikesInput;
  update: FeedItemUpdateWithoutLikesInput;
};

export type FeedItemUpsertWithoutRevisionsInput = {
  create: FeedItemCreateWithoutRevisionsInput;
  update: FeedItemUpdateWithoutRevisionsInput;
};

export type FeedItemUpsertWithWhereUniqueWithoutAuthorInput = {
  create: FeedItemCreateWithoutAuthorInput;
  update: FeedItemUpdateWithoutAuthorInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpsertWithWhereUniqueWithoutMixdownInput = {
  create: FeedItemCreateWithoutMixdownInput;
  update: FeedItemUpdateWithoutMixdownInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemWhereInput = {
  AND?: Maybe<Array<FeedItemWhereInput>>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<StringFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPublished?: Maybe<BoolFilter>;
  likes?: Maybe<FeedItemLikeListRelationFilter>;
  mixdown?: Maybe<MixdownRelationFilter>;
  mixdownId?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<FeedItemWhereInput>>;
  OR?: Maybe<Array<FeedItemWhereInput>>;
  publishAt?: Maybe<DateTimeNullableFilter>;
  revisions?: Maybe<FeedItemRevisionListRelationFilter>;
  text?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FeedItemWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type JsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type Mixdown = {
  __typename?: 'Mixdown';
  audio: AudioAsset;
  audioAssetId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  FeedItem?: Maybe<Array<FeedItem>>;
  id: Scalars['String'];
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  project: Project;
  projectId: Scalars['String'];
  triggerdBy: User;
  updatedAt: Scalars['Timestamp'];
  userId: Scalars['String'];
  version: Scalars['Int'];
};

export type MixdownFeedItemArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type MixdownAvgAggregate = {
  __typename?: 'MixdownAvgAggregate';
  listens: Scalars['Float'];
  version: Scalars['Float'];
};

export type MixdownCountAggregate = {
  __typename?: 'MixdownCountAggregate';
  _all: Scalars['Int'];
  audioAssetId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPusblished?: Maybe<Scalars['Int']>;
  listens: Scalars['Int'];
  name?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  version: Scalars['Int'];
};

export type MixdownCreateInput = {
  audio: AudioAssetCreateOneWithoutMixdownInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  FeedItem?: Maybe<FeedItemCreateManyWithoutMixdownInput>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project: ProjectCreateOneWithoutMixdownsInput;
  triggerdBy: UserCreateOneWithoutMixdownInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownCreateManyWithoutAudioInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutaudioInput>>;
  create?: Maybe<Array<MixdownCreateWithoutAudioInput>>;
};

export type MixdownCreateManyWithoutProjectInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<MixdownCreateWithoutProjectInput>>;
};

export type MixdownCreateManyWithoutTriggerdByInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithouttriggerdByInput>>;
  create?: Maybe<Array<MixdownCreateWithoutTriggerdByInput>>;
};

export type MixdownCreateOneWithoutFeedItemInput = {
  connect?: Maybe<MixdownWhereUniqueInput>;
  connectOrCreate?: Maybe<MixdownCreateOrConnectWithoutFeedItemInput>;
  create?: Maybe<MixdownCreateWithoutFeedItemInput>;
};

export type MixdownCreateOrConnectWithoutaudioInput = {
  create: MixdownCreateWithoutAudioInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownCreateOrConnectWithoutFeedItemInput = {
  create: MixdownCreateWithoutFeedItemInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownCreateOrConnectWithoutprojectInput = {
  create: MixdownCreateWithoutProjectInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownCreateOrConnectWithouttriggerdByInput = {
  create: MixdownCreateWithoutTriggerdByInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownCreateWithoutAudioInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  FeedItem?: Maybe<FeedItemCreateManyWithoutMixdownInput>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project: ProjectCreateOneWithoutMixdownsInput;
  triggerdBy: UserCreateOneWithoutMixdownInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownCreateWithoutFeedItemInput = {
  audio: AudioAssetCreateOneWithoutMixdownInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project: ProjectCreateOneWithoutMixdownsInput;
  triggerdBy: UserCreateOneWithoutMixdownInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownCreateWithoutProjectInput = {
  audio: AudioAssetCreateOneWithoutMixdownInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  FeedItem?: Maybe<FeedItemCreateManyWithoutMixdownInput>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  triggerdBy: UserCreateOneWithoutMixdownInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownCreateWithoutTriggerdByInput = {
  audio: AudioAssetCreateOneWithoutMixdownInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  FeedItem?: Maybe<FeedItemCreateManyWithoutMixdownInput>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project: ProjectCreateOneWithoutMixdownsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownListRelationFilter = {
  every?: Maybe<MixdownWhereInput>;
  none?: Maybe<MixdownWhereInput>;
  some?: Maybe<MixdownWhereInput>;
};

export type MixdownMaxAggregate = {
  __typename?: 'MixdownMaxAggregate';
  audioAssetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
  version: Scalars['Int'];
};

export type MixdownMinAggregate = {
  __typename?: 'MixdownMinAggregate';
  audioAssetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
  version: Scalars['Int'];
};

export type MixdownOrderByInput = {
  audioAssetId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isPusblished?: Maybe<SortOrder>;
  listens?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  version?: Maybe<SortOrder>;
};

export type MixdownRelationFilter = {
  is?: Maybe<MixdownWhereInput>;
  isNot?: Maybe<MixdownWhereInput>;
};

export enum MixdownScalarFieldEnum {
  AudioAssetId = 'audioAssetId',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPusblished = 'isPusblished',
  Listens = 'listens',
  Name = 'name',
  ProjectId = 'projectId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  Version = 'version',
}

export type MixdownScalarWhereInput = {
  AND?: Maybe<Array<MixdownScalarWhereInput>>;
  audioAssetId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPusblished?: Maybe<BoolNullableFilter>;
  listens?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<MixdownScalarWhereInput>>;
  OR?: Maybe<Array<MixdownScalarWhereInput>>;
  projectId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  version?: Maybe<IntFilter>;
};

export type MixdownSumAggregate = {
  __typename?: 'MixdownSumAggregate';
  listens: Scalars['Int'];
  version: Scalars['Int'];
};

export type MixdownUpdateInput = {
  audio?: Maybe<AudioAssetUpdateOneRequiredWithoutMixdownInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  FeedItem?: Maybe<FeedItemUpdateManyWithoutMixdownInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMixdownsInput>;
  triggerdBy?: Maybe<UserUpdateOneRequiredWithoutMixdownInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MixdownUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MixdownUpdateManyWithoutAudioInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutaudioInput>>;
  create?: Maybe<Array<MixdownCreateWithoutAudioInput>>;
  delete?: Maybe<Array<MixdownWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MixdownScalarWhereInput>>;
  disconnect?: Maybe<Array<MixdownWhereUniqueInput>>;
  set?: Maybe<Array<MixdownWhereUniqueInput>>;
  update?: Maybe<Array<MixdownUpdateWithWhereUniqueWithoutAudioInput>>;
  updateMany?: Maybe<Array<MixdownUpdateManyWithWhereWithoutAudioInput>>;
  upsert?: Maybe<Array<MixdownUpsertWithWhereUniqueWithoutAudioInput>>;
};

export type MixdownUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<MixdownCreateWithoutProjectInput>>;
  delete?: Maybe<Array<MixdownWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MixdownScalarWhereInput>>;
  disconnect?: Maybe<Array<MixdownWhereUniqueInput>>;
  set?: Maybe<Array<MixdownWhereUniqueInput>>;
  update?: Maybe<Array<MixdownUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<MixdownUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<MixdownUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type MixdownUpdateManyWithoutTriggerdByInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithouttriggerdByInput>>;
  create?: Maybe<Array<MixdownCreateWithoutTriggerdByInput>>;
  delete?: Maybe<Array<MixdownWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MixdownScalarWhereInput>>;
  disconnect?: Maybe<Array<MixdownWhereUniqueInput>>;
  set?: Maybe<Array<MixdownWhereUniqueInput>>;
  update?: Maybe<Array<MixdownUpdateWithWhereUniqueWithoutTriggerdByInput>>;
  updateMany?: Maybe<Array<MixdownUpdateManyWithWhereWithoutTriggerdByInput>>;
  upsert?: Maybe<Array<MixdownUpsertWithWhereUniqueWithoutTriggerdByInput>>;
};

export type MixdownUpdateManyWithWhereWithoutAudioInput = {
  data: MixdownUpdateManyMutationInput;
  where: MixdownScalarWhereInput;
};

export type MixdownUpdateManyWithWhereWithoutProjectInput = {
  data: MixdownUpdateManyMutationInput;
  where: MixdownScalarWhereInput;
};

export type MixdownUpdateManyWithWhereWithoutTriggerdByInput = {
  data: MixdownUpdateManyMutationInput;
  where: MixdownScalarWhereInput;
};

export type MixdownUpdateOneWithoutFeedItemInput = {
  connect?: Maybe<MixdownWhereUniqueInput>;
  connectOrCreate?: Maybe<MixdownCreateOrConnectWithoutFeedItemInput>;
  create?: Maybe<MixdownCreateWithoutFeedItemInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MixdownUpdateWithoutFeedItemInput>;
  upsert?: Maybe<MixdownUpsertWithoutFeedItemInput>;
};

export type MixdownUpdateWithoutAudioInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  FeedItem?: Maybe<FeedItemUpdateManyWithoutMixdownInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMixdownsInput>;
  triggerdBy?: Maybe<UserUpdateOneRequiredWithoutMixdownInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MixdownUpdateWithoutFeedItemInput = {
  audio?: Maybe<AudioAssetUpdateOneRequiredWithoutMixdownInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMixdownsInput>;
  triggerdBy?: Maybe<UserUpdateOneRequiredWithoutMixdownInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MixdownUpdateWithoutProjectInput = {
  audio?: Maybe<AudioAssetUpdateOneRequiredWithoutMixdownInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  FeedItem?: Maybe<FeedItemUpdateManyWithoutMixdownInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  triggerdBy?: Maybe<UserUpdateOneRequiredWithoutMixdownInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MixdownUpdateWithoutTriggerdByInput = {
  audio?: Maybe<AudioAssetUpdateOneRequiredWithoutMixdownInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  FeedItem?: Maybe<FeedItemUpdateManyWithoutMixdownInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMixdownsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MixdownUpdateWithWhereUniqueWithoutAudioInput = {
  data: MixdownUpdateWithoutAudioInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpdateWithWhereUniqueWithoutProjectInput = {
  data: MixdownUpdateWithoutProjectInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpdateWithWhereUniqueWithoutTriggerdByInput = {
  data: MixdownUpdateWithoutTriggerdByInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpsertWithoutFeedItemInput = {
  create: MixdownCreateWithoutFeedItemInput;
  update: MixdownUpdateWithoutFeedItemInput;
};

export type MixdownUpsertWithWhereUniqueWithoutAudioInput = {
  create: MixdownCreateWithoutAudioInput;
  update: MixdownUpdateWithoutAudioInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpsertWithWhereUniqueWithoutProjectInput = {
  create: MixdownCreateWithoutProjectInput;
  update: MixdownUpdateWithoutProjectInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpsertWithWhereUniqueWithoutTriggerdByInput = {
  create: MixdownCreateWithoutTriggerdByInput;
  update: MixdownUpdateWithoutTriggerdByInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownWhereInput = {
  AND?: Maybe<Array<MixdownWhereInput>>;
  audio?: Maybe<AudioAssetRelationFilter>;
  audioAssetId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  FeedItem?: Maybe<FeedItemListRelationFilter>;
  id?: Maybe<StringFilter>;
  isPusblished?: Maybe<BoolNullableFilter>;
  listens?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  NOT?: Maybe<Array<MixdownWhereInput>>;
  OR?: Maybe<Array<MixdownWhereInput>>;
  project?: Maybe<ProjectRelationFilter>;
  projectId?: Maybe<StringFilter>;
  triggerdBy?: Maybe<UserRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  version?: Maybe<IntFilter>;
};

export type MixdownWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: Address;
  createBand: Band;
  createComment: Comment;
  createCommentLike: CommentLike;
  createFeedItem: FeedItem;
  createFeedItemLike: FeedItemLike;
  createFeedItemRevision: FeedItemRevision;
  createMixdown: Mixdown;
  createProject: Project;
  createTag: Tag;
  createUser: User;
  createUsersOnProjects: UsersOnProjects;
  deleteAddress?: Maybe<Address>;
  deleteBand?: Maybe<Band>;
  deleteComment?: Maybe<Comment>;
  deleteCommentLike?: Maybe<CommentLike>;
  deleteFeedItem?: Maybe<FeedItem>;
  deleteFeedItemLike?: Maybe<FeedItemLike>;
  deleteFeedItemRevision?: Maybe<FeedItemRevision>;
  deleteManyAddress: BatchPayload;
  deleteManyBand: BatchPayload;
  deleteManyComment: BatchPayload;
  deleteManyCommentLike: BatchPayload;
  deleteManyFeedItem: BatchPayload;
  deleteManyFeedItemLike: BatchPayload;
  deleteManyFeedItemRevision: BatchPayload;
  deleteManyMixdown: BatchPayload;
  deleteManyProject: BatchPayload;
  deleteManyTag: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteManyUsersOnProjects: BatchPayload;
  deleteMixdown?: Maybe<Mixdown>;
  deleteProject?: Maybe<Project>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  deleteUsersOnProjects?: Maybe<UsersOnProjects>;
  publishChange: PublishProjectChangeArgs;
  signUpUser: User;
  updateAddress?: Maybe<Address>;
  updateBand?: Maybe<Band>;
  updateComment?: Maybe<Comment>;
  updateCommentLike?: Maybe<CommentLike>;
  updateFeedItem?: Maybe<FeedItem>;
  updateFeedItemLike?: Maybe<FeedItemLike>;
  updateFeedItemRevision?: Maybe<FeedItemRevision>;
  updateManyAddress: BatchPayload;
  updateManyBand: BatchPayload;
  updateManyComment: BatchPayload;
  updateManyCommentLike: BatchPayload;
  updateManyFeedItem: BatchPayload;
  updateManyFeedItemLike: BatchPayload;
  updateManyFeedItemRevision: BatchPayload;
  updateManyMixdown: BatchPayload;
  updateManyProject: BatchPayload;
  updateManyTag: BatchPayload;
  updateManyUser: BatchPayload;
  updateManyUsersOnProjects: BatchPayload;
  updateMixdown?: Maybe<Mixdown>;
  updateProject?: Maybe<Project>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  updateUsersOnProjects?: Maybe<UsersOnProjects>;
  upsertAddress: Address;
  upsertBand: Band;
  upsertComment: Comment;
  upsertCommentLike: CommentLike;
  upsertFeedItem: FeedItem;
  upsertFeedItemLike: FeedItemLike;
  upsertFeedItemRevision: FeedItemRevision;
  upsertMixdown: Mixdown;
  upsertProject: Project;
  upsertTag: Tag;
  upsertUser: User;
  upsertUsersOnProjects: UsersOnProjects;
};

export type MutationCreateAddressArgs = {
  data: AddressCreateInput;
};

export type MutationCreateBandArgs = {
  data: BandCreateInput;
};

export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};

export type MutationCreateCommentLikeArgs = {
  data: CommentLikeCreateInput;
};

export type MutationCreateFeedItemArgs = {
  data: FeedItemCreateInput;
};

export type MutationCreateFeedItemLikeArgs = {
  data: FeedItemLikeCreateInput;
};

export type MutationCreateFeedItemRevisionArgs = {
  data: FeedItemRevisionCreateInput;
};

export type MutationCreateMixdownArgs = {
  data: MixdownCreateInput;
};

export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationCreateTagArgs = {
  data: TagCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateUsersOnProjectsArgs = {
  data: UsersOnProjectsCreateInput;
};

export type MutationDeleteAddressArgs = {
  where: AddressWhereUniqueInput;
};

export type MutationDeleteBandArgs = {
  where: BandWhereUniqueInput;
};

export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type MutationDeleteCommentLikeArgs = {
  where: CommentLikeWhereUniqueInput;
};

export type MutationDeleteFeedItemArgs = {
  where: FeedItemWhereUniqueInput;
};

export type MutationDeleteFeedItemLikeArgs = {
  where: FeedItemLikeWhereUniqueInput;
};

export type MutationDeleteFeedItemRevisionArgs = {
  where: FeedItemRevisionWhereUniqueInput;
};

export type MutationDeleteManyAddressArgs = {
  where?: Maybe<AddressWhereInput>;
};

export type MutationDeleteManyBandArgs = {
  where?: Maybe<BandWhereInput>;
};

export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};

export type MutationDeleteManyCommentLikeArgs = {
  where?: Maybe<CommentLikeWhereInput>;
};

export type MutationDeleteManyFeedItemArgs = {
  where?: Maybe<FeedItemWhereInput>;
};

export type MutationDeleteManyFeedItemLikeArgs = {
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type MutationDeleteManyFeedItemRevisionArgs = {
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type MutationDeleteManyMixdownArgs = {
  where?: Maybe<MixdownWhereInput>;
};

export type MutationDeleteManyProjectArgs = {
  where?: Maybe<ProjectWhereInput>;
};

export type MutationDeleteManyTagArgs = {
  where?: Maybe<TagWhereInput>;
};

export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationDeleteManyUsersOnProjectsArgs = {
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type MutationDeleteMixdownArgs = {
  where: MixdownWhereUniqueInput;
};

export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteUsersOnProjectsArgs = {
  where: UsersOnProjectsWhereUniqueInput;
};

export type MutationPublishChangeArgs = {
  authorId?: Maybe<Scalars['String']>;
  change: Scalars['JSONObject'];
  date: Scalars['Timestamp'];
  id: Scalars['String'];
  projectId: Scalars['String'];
};

export type MutationSignUpUserArgs = {
  data: UserSignUpInput;
};

export type MutationUpdateAddressArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};

export type MutationUpdateBandArgs = {
  data: BandUpdateInput;
  where: BandWhereUniqueInput;
};

export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type MutationUpdateCommentLikeArgs = {
  data: CommentLikeUpdateInput;
  where: CommentLikeWhereUniqueInput;
};

export type MutationUpdateFeedItemArgs = {
  data: FeedItemUpdateInput;
  where: FeedItemWhereUniqueInput;
};

export type MutationUpdateFeedItemLikeArgs = {
  data: FeedItemLikeUpdateInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type MutationUpdateFeedItemRevisionArgs = {
  data: FeedItemRevisionUpdateInput;
  where: FeedItemRevisionWhereUniqueInput;
};

export type MutationUpdateManyAddressArgs = {
  data: AddressUpdateManyMutationInput;
  where?: Maybe<AddressWhereInput>;
};

export type MutationUpdateManyBandArgs = {
  data: BandUpdateManyMutationInput;
  where?: Maybe<BandWhereInput>;
};

export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};

export type MutationUpdateManyCommentLikeArgs = {
  data: CommentLikeUpdateManyMutationInput;
  where?: Maybe<CommentLikeWhereInput>;
};

export type MutationUpdateManyFeedItemArgs = {
  data: FeedItemUpdateManyMutationInput;
  where?: Maybe<FeedItemWhereInput>;
};

export type MutationUpdateManyFeedItemLikeArgs = {
  data: FeedItemLikeUpdateManyMutationInput;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type MutationUpdateManyFeedItemRevisionArgs = {
  data: FeedItemRevisionUpdateManyMutationInput;
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type MutationUpdateManyMixdownArgs = {
  data: MixdownUpdateManyMutationInput;
  where?: Maybe<MixdownWhereInput>;
};

export type MutationUpdateManyProjectArgs = {
  data: ProjectUpdateManyMutationInput;
  where?: Maybe<ProjectWhereInput>;
};

export type MutationUpdateManyTagArgs = {
  data: TagUpdateManyMutationInput;
  where?: Maybe<TagWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationUpdateManyUsersOnProjectsArgs = {
  data: UsersOnProjectsUpdateManyMutationInput;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type MutationUpdateMixdownArgs = {
  data: MixdownUpdateInput;
  where: MixdownWhereUniqueInput;
};

export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateUsersOnProjectsArgs = {
  data: UsersOnProjectsUpdateInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type MutationUpsertAddressArgs = {
  create: AddressCreateInput;
  update: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};

export type MutationUpsertBandArgs = {
  create: BandCreateInput;
  update: BandUpdateInput;
  where: BandWhereUniqueInput;
};

export type MutationUpsertCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type MutationUpsertCommentLikeArgs = {
  create: CommentLikeCreateInput;
  update: CommentLikeUpdateInput;
  where: CommentLikeWhereUniqueInput;
};

export type MutationUpsertFeedItemArgs = {
  create: FeedItemCreateInput;
  update: FeedItemUpdateInput;
  where: FeedItemWhereUniqueInput;
};

export type MutationUpsertFeedItemLikeArgs = {
  create: FeedItemLikeCreateInput;
  update: FeedItemLikeUpdateInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type MutationUpsertFeedItemRevisionArgs = {
  create: FeedItemRevisionCreateInput;
  update: FeedItemRevisionUpdateInput;
  where: FeedItemRevisionWhereUniqueInput;
};

export type MutationUpsertMixdownArgs = {
  create: MixdownCreateInput;
  update: MixdownUpdateInput;
  where: MixdownWhereUniqueInput;
};

export type MutationUpsertProjectArgs = {
  create: ProjectCreateInput;
  update: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpsertTagArgs = {
  create: TagCreateInput;
  update: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpsertUsersOnProjectsArgs = {
  create: UsersOnProjectsCreateInput;
  update: UsersOnProjectsUpdateInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Timestamp']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  content: Scalars['JSON'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
  isInitialized: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  members?: Maybe<Array<UsersOnProjects>>;
  mixdowns?: Maybe<Array<Mixdown>>;
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type ProjectMembersArgs = {
  cursor?: Maybe<UsersOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnProjectsScalarFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type ProjectMixdownsArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownScalarFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  _all: Scalars['Int'];
  content?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isInitialized?: Maybe<Scalars['Int']>;
  isPrivate?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProjectCreateInput = {
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownCreateManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutownerInput>>;
  create?: Maybe<Array<ProjectCreateWithoutOwnerInput>>;
};

export type ProjectCreateOneWithoutMembersInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutmembersInput>;
  create?: Maybe<ProjectCreateWithoutMembersInput>;
};

export type ProjectCreateOneWithoutMixdownsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutmixdownsInput>;
  create?: Maybe<ProjectCreateWithoutMixdownsInput>;
};

export type ProjectCreateOrConnectWithoutmembersInput = {
  create: ProjectCreateWithoutMembersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutmixdownsInput = {
  create: ProjectCreateWithoutMixdownsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutownerInput = {
  create: ProjectCreateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutMembersInput = {
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  mixdowns?: Maybe<MixdownCreateManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateWithoutMixdownsInput = {
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateWithoutOwnerInput = {
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownCreateManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectListRelationFilter = {
  every?: Maybe<ProjectWhereInput>;
  none?: Maybe<ProjectWhereInput>;
  some?: Maybe<ProjectWhereInput>;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectOrderByInput = {
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isInitialized?: Maybe<SortOrder>;
  isPrivate?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProjectRelationFilter = {
  is?: Maybe<ProjectWhereInput>;
  isNot?: Maybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsInitialized = 'isInitialized',
  IsPrivate = 'isPrivate',
  Name = 'name',
  OwnerId = 'ownerId',
  UpdatedAt = 'updatedAt',
}

export type ProjectScalarWhereInput = {
  AND?: Maybe<Array<ProjectScalarWhereInput>>;
  content?: Maybe<JsonFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isInitialized?: Maybe<BoolFilter>;
  isPrivate?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ProjectScalarWhereInput>>;
  OR?: Maybe<Array<ProjectScalarWhereInput>>;
  ownerId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectUpdateInput = {
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isInitialized?: Maybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UsersOnProjectsUpdateManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutOwnsProjectsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyMutationInput = {
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isInitialized?: Maybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutownerInput>>;
  create?: Maybe<Array<ProjectCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateOneRequiredWithoutMembersInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutmembersInput>;
  create?: Maybe<ProjectCreateWithoutMembersInput>;
  update?: Maybe<ProjectUpdateWithoutMembersInput>;
  upsert?: Maybe<ProjectUpsertWithoutMembersInput>;
};

export type ProjectUpdateOneRequiredWithoutMixdownsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutmixdownsInput>;
  create?: Maybe<ProjectCreateWithoutMixdownsInput>;
  update?: Maybe<ProjectUpdateWithoutMixdownsInput>;
  upsert?: Maybe<ProjectUpsertWithoutMixdownsInput>;
};

export type ProjectUpdateWithoutMembersInput = {
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isInitialized?: Maybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  mixdowns?: Maybe<MixdownUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutOwnsProjectsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutMixdownsInput = {
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isInitialized?: Maybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UsersOnProjectsUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutOwnsProjectsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutOwnerInput = {
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isInitialized?: Maybe<BoolFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UsersOnProjectsUpdateManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ProjectUpdateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutMembersInput = {
  create: ProjectCreateWithoutMembersInput;
  update: ProjectUpdateWithoutMembersInput;
};

export type ProjectUpsertWithoutMixdownsInput = {
  create: ProjectCreateWithoutMixdownsInput;
  update: ProjectUpdateWithoutMixdownsInput;
};

export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ProjectCreateWithoutOwnerInput;
  update: ProjectUpdateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  content?: Maybe<JsonFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isInitialized?: Maybe<BoolFilter>;
  isPrivate?: Maybe<BoolFilter>;
  members?: Maybe<UsersOnProjectsListRelationFilter>;
  mixdowns?: Maybe<MixdownListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  owner?: Maybe<UserRelationFilter>;
  ownerId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PublishProjectChangeArgs = {
  __typename?: 'PublishProjectChangeArgs';
  authorId?: Maybe<Scalars['String']>;
  change: Scalars['JSONObject'];
  date: Scalars['Timestamp'];
  id: Scalars['String'];
  projectId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addresses: Array<Address>;
  aggregateAddress: AggregateAddress;
  aggregateBand: AggregateBand;
  aggregateComment: AggregateComment;
  aggregateCommentLike: AggregateCommentLike;
  aggregateFeedItem: AggregateFeedItem;
  aggregateFeedItemLike: AggregateFeedItemLike;
  aggregateFeedItemRevision: AggregateFeedItemRevision;
  aggregateMixdown: AggregateMixdown;
  aggregateProject: AggregateProject;
  aggregateTag: AggregateTag;
  aggregateUser: AggregateUser;
  aggregateUsersOnProjects: AggregateUsersOnProjects;
  band?: Maybe<Band>;
  bands: Array<Band>;
  comment?: Maybe<Comment>;
  commentLike?: Maybe<CommentLike>;
  commentLikes: Array<CommentLike>;
  comments: Array<Comment>;
  feedItem?: Maybe<FeedItem>;
  feedItemLike?: Maybe<FeedItemLike>;
  feedItemLikes: Array<FeedItemLike>;
  feedItemRevision?: Maybe<FeedItemRevision>;
  feedItemRevisions: Array<FeedItemRevision>;
  feedItems: Array<FeedItem>;
  findFirstAddress?: Maybe<Address>;
  findFirstBand?: Maybe<Band>;
  findFirstComment?: Maybe<Comment>;
  findFirstCommentLike?: Maybe<CommentLike>;
  findFirstFeedItem?: Maybe<FeedItem>;
  findFirstFeedItemLike?: Maybe<FeedItemLike>;
  findFirstFeedItemRevision?: Maybe<FeedItemRevision>;
  findFirstMixdown?: Maybe<Mixdown>;
  findFirstProject?: Maybe<Project>;
  findFirstTag?: Maybe<Tag>;
  findFirstUser?: Maybe<User>;
  findFirstUsersOnProjects?: Maybe<UsersOnProjects>;
  findManyUsersOnProjects: Array<UsersOnProjects>;
  findUniqueUsersOnProjects?: Maybe<UsersOnProjects>;
  followRecommendations: Array<User>;
  me: User;
  mixdown?: Maybe<Mixdown>;
  mixdowns: Array<Mixdown>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryAddressArgs = {
  where: AddressWhereUniqueInput;
};

export type QueryAddressesArgs = {
  cursor?: Maybe<AddressWhereUniqueInput>;
  distinct?: Maybe<Array<AddressScalarFieldEnum>>;
  orderBy?: Maybe<Array<AddressOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};

export type QueryAggregateAddressArgs = {
  cursor?: Maybe<AddressWhereUniqueInput>;
  orderBy?: Maybe<Array<AddressOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};

export type QueryAggregateBandArgs = {
  cursor?: Maybe<BandWhereUniqueInput>;
  orderBy?: Maybe<Array<BandOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BandWhereInput>;
};

export type QueryAggregateCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryAggregateCommentLikeArgs = {
  cursor?: Maybe<CommentLikeWhereUniqueInput>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type QueryAggregateFeedItemArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type QueryAggregateFeedItemLikeArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type QueryAggregateFeedItemRevisionArgs = {
  cursor?: Maybe<FeedItemRevisionWhereUniqueInput>;
  orderBy?: Maybe<Array<FeedItemRevisionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type QueryAggregateMixdownArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type QueryAggregateProjectArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type QueryAggregateTagArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};

export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type QueryAggregateUsersOnProjectsArgs = {
  cursor?: Maybe<UsersOnProjectsWhereUniqueInput>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type QueryBandArgs = {
  where: BandWhereUniqueInput;
};

export type QueryBandsArgs = {
  cursor?: Maybe<BandWhereUniqueInput>;
  distinct?: Maybe<Array<BandScalarFieldEnum>>;
  orderBy?: Maybe<Array<BandOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BandWhereInput>;
};

export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};

export type QueryCommentLikeArgs = {
  where: CommentLikeWhereUniqueInput;
};

export type QueryCommentLikesArgs = {
  cursor?: Maybe<CommentLikeWhereUniqueInput>;
  distinct?: Maybe<Array<CommentLikeScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type QueryCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryFeedItemArgs = {
  where: FeedItemWhereUniqueInput;
};

export type QueryFeedItemLikeArgs = {
  where: FeedItemLikeWhereUniqueInput;
};

export type QueryFeedItemLikesArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemLikeScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type QueryFeedItemRevisionArgs = {
  where: FeedItemRevisionWhereUniqueInput;
};

export type QueryFeedItemRevisionsArgs = {
  cursor?: Maybe<FeedItemRevisionWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemRevisionScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemRevisionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type QueryFeedItemsArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type QueryFindFirstAddressArgs = {
  cursor?: Maybe<AddressWhereUniqueInput>;
  distinct?: Maybe<Array<AddressScalarFieldEnum>>;
  orderBy?: Maybe<Array<AddressOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};

export type QueryFindFirstBandArgs = {
  cursor?: Maybe<BandWhereUniqueInput>;
  distinct?: Maybe<Array<BandScalarFieldEnum>>;
  orderBy?: Maybe<Array<BandOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BandWhereInput>;
};

export type QueryFindFirstCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryFindFirstCommentLikeArgs = {
  cursor?: Maybe<CommentLikeWhereUniqueInput>;
  distinct?: Maybe<Array<CommentLikeScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type QueryFindFirstFeedItemArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type QueryFindFirstFeedItemLikeArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemLikeScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type QueryFindFirstFeedItemRevisionArgs = {
  cursor?: Maybe<FeedItemRevisionWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemRevisionScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemRevisionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type QueryFindFirstMixdownArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownScalarFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type QueryFindFirstProjectArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type QueryFindFirstTagArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<Array<TagScalarFieldEnum>>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type QueryFindFirstUsersOnProjectsArgs = {
  cursor?: Maybe<UsersOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnProjectsScalarFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type QueryFindManyUsersOnProjectsArgs = {
  cursor?: Maybe<UsersOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnProjectsScalarFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type QueryFindUniqueUsersOnProjectsArgs = {
  where: UsersOnProjectsWhereUniqueInput;
};

export type QueryMixdownArgs = {
  where: MixdownWhereUniqueInput;
};

export type QueryMixdownsArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownScalarFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type QueryProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};

export type QueryTagsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<Array<TagScalarFieldEnum>>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  changes: PublishProjectChangeArgs;
  newComment: Comment;
  onlineStatus: Scalars['Boolean'];
};

export type SubscriptionChangesArgs = {
  projectId: Scalars['String'];
};

export type SubscriptionNewCommentArgs = {
  feedItemId: Scalars['String'];
};

export type SubscriptionOnlineStatusArgs = {
  userId: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  User?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type TagCountAggregate = {
  __typename?: 'TagCountAggregate';
  _all: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

export type TagCreateInput = {
  id?: Maybe<Scalars['String']>;
  User?: Maybe<UserCreateOneWithoutInterestsInput>;
  value: Scalars['String'];
};

export type TagCreateManyWithoutUserInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<TagCreateWithoutUserInput>>;
};

export type TagCreateOrConnectWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type TagListRelationFilter = {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
};

export type TagMaxAggregate = {
  __typename?: 'TagMaxAggregate';
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TagMinAggregate = {
  __typename?: 'TagMinAggregate';
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TagOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

export enum TagScalarFieldEnum {
  Id = 'id',
  UserId = 'userId',
  Value = 'value',
}

export type TagScalarWhereInput = {
  AND?: Maybe<Array<TagScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  userId?: Maybe<StringNullableFilter>;
  value?: Maybe<StringFilter>;
};

export type TagUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  User?: Maybe<UserUpdateOneWithoutInterestsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<TagCreateWithoutUserInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TagUpdateManyWithWhereWithoutUserInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateWithWhereUniqueWithoutUserInput = {
  data: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  update: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  id?: Maybe<StringFilter>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  User?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringNullableFilter>;
  value?: Maybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  AudioAsset?: Maybe<Array<AudioAsset>>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<Array<Comment>>;
  CommentLike?: Maybe<Array<CommentLike>>;
  createdAt: Scalars['Timestamp'];
  EarlyAccessCode?: Maybe<Array<EarlyAccessCode>>;
  email: Scalars['String'];
  feed?: Maybe<Array<FeedItem>>;
  FeedItemLike?: Maybe<Array<FeedItemLike>>;
  followedBy?: Maybe<Array<User>>;
  followedByCount?: Maybe<Scalars['Int']>;
  following?: Maybe<Array<User>>;
  followingCount?: Maybe<Scalars['Int']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  interests?: Maybe<Array<Tag>>;
  isMeFollowing?: Maybe<Scalars['Boolean']>;
  isMyself?: Maybe<Scalars['Boolean']>;
  isOnline: Scalars['Boolean'];
  memberOfBands?: Maybe<Array<UsersOnBands>>;
  memberOfProjects?: Maybe<Array<UsersOnProjects>>;
  Mixdown?: Maybe<Array<Mixdown>>;
  name: Scalars['String'];
  ownsBands?: Maybe<Array<Band>>;
  ownsProjects?: Maybe<Array<Project>>;
  role: Role;
  updatedAt: Scalars['Timestamp'];
  website?: Maybe<Scalars['String']>;
};

export type UserAudioAssetArgs = {
  cursor?: Maybe<AudioAssetWhereUniqueInput>;
  distinct?: Maybe<Array<AudioAssetScalarFieldEnum>>;
  orderBy?: Maybe<Array<AudioAssetOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AudioAssetWhereInput>;
};

export type UserCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type UserCommentLikeArgs = {
  cursor?: Maybe<CommentLikeWhereUniqueInput>;
  distinct?: Maybe<Array<CommentLikeScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type UserEarlyAccessCodeArgs = {
  cursor?: Maybe<EarlyAccessCodeWhereUniqueInput>;
  distinct?: Maybe<Array<EarlyAccessCodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<EarlyAccessCodeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EarlyAccessCodeWhereInput>;
};

export type UserFeedArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type UserFeedItemLikeArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemLikeScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type UserFollowedByArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type UserFollowingArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type UserInterestsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<Array<TagScalarFieldEnum>>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};

export type UserMemberOfBandsArgs = {
  cursor?: Maybe<UsersOnBandsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnBandsScalarFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnBandsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnBandsWhereInput>;
};

export type UserMemberOfProjectsArgs = {
  cursor?: Maybe<UsersOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnProjectsScalarFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type UserMixdownArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownScalarFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type UserOwnsBandsArgs = {
  cursor?: Maybe<BandWhereUniqueInput>;
  distinct?: Maybe<Array<BandScalarFieldEnum>>;
  orderBy?: Maybe<Array<BandOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BandWhereInput>;
};

export type UserOwnsProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  addressId?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  handle?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isOnline?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateManyWithoutAddressInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutaddressInput>>;
  create?: Maybe<Array<UserCreateWithoutAddressInput>>;
};

export type UserCreateManyWithoutFollowedByInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfollowedByInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
};

export type UserCreateManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfollowingInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
};

export type UserCreateOneWithoutAudioAssetInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAudioAssetInput>;
  create?: Maybe<UserCreateWithoutAudioAssetInput>;
};

export type UserCreateOneWithoutCommentInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentInput>;
  create?: Maybe<UserCreateWithoutCommentInput>;
};

export type UserCreateOneWithoutCommentLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentLikeInput>;
  create?: Maybe<UserCreateWithoutCommentLikeInput>;
};

export type UserCreateOneWithoutFeedInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutfeedInput>;
  create?: Maybe<UserCreateWithoutFeedInput>;
};

export type UserCreateOneWithoutFeedItemLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFeedItemLikeInput>;
  create?: Maybe<UserCreateWithoutFeedItemLikeInput>;
};

export type UserCreateOneWithoutInterestsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutinterestsInput>;
  create?: Maybe<UserCreateWithoutInterestsInput>;
};

export type UserCreateOneWithoutMemberOfBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutmemberOfBandsInput>;
  create?: Maybe<UserCreateWithoutMemberOfBandsInput>;
};

export type UserCreateOneWithoutMemberOfProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutmemberOfProjectsInput>;
  create?: Maybe<UserCreateWithoutMemberOfProjectsInput>;
};

export type UserCreateOneWithoutMixdownInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMixdownInput>;
  create?: Maybe<UserCreateWithoutMixdownInput>;
};

export type UserCreateOneWithoutOwnsBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutownsBandsInput>;
  create?: Maybe<UserCreateWithoutOwnsBandsInput>;
};

export type UserCreateOneWithoutOwnsProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutownsProjectsInput>;
  create?: Maybe<UserCreateWithoutOwnsProjectsInput>;
};

export type UserCreateOrConnectWithoutaddressInput = {
  create: UserCreateWithoutAddressInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAudioAssetInput = {
  create: UserCreateWithoutAudioAssetInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentInput = {
  create: UserCreateWithoutCommentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentLikeInput = {
  create: UserCreateWithoutCommentLikeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutfeedInput = {
  create: UserCreateWithoutFeedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFeedItemLikeInput = {
  create: UserCreateWithoutFeedItemLikeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutfollowedByInput = {
  create: UserCreateWithoutFollowedByInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutfollowingInput = {
  create: UserCreateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutinterestsInput = {
  create: UserCreateWithoutInterestsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutmemberOfBandsInput = {
  create: UserCreateWithoutMemberOfBandsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutmemberOfProjectsInput = {
  create: UserCreateWithoutMemberOfProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMixdownInput = {
  create: UserCreateWithoutMixdownInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutownsBandsInput = {
  create: UserCreateWithoutOwnsBandsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutownsProjectsInput = {
  create: UserCreateWithoutOwnsProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAddressInput = {
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutAudioAssetInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutCommentInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutCommentLikeInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutFeedInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutFeedItemLikeInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutFollowedByInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutFollowingInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutInterestsInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutMemberOfBandsInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutMemberOfProjectsInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutMixdownInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutOwnsBandsInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsProjects?: Maybe<ProjectCreateManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutOwnsProjectsInput = {
  address?: Maybe<AddressCreateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetCreateManyWithoutOwnerInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  Comment?: Maybe<CommentCreateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateManyWithoutClaimedByInput>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateManyWithoutUserInput>;
  followedBy?: Maybe<UserCreateManyWithoutFollowingInput>;
  following?: Maybe<UserCreateManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateManyWithoutTriggerdByInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateManyWithoutCreatedByInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  addressId?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  addressId?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  addressId?: Maybe<SortOrder>;
  avatar?: Maybe<SortOrder>;
  bio?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  handle?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isOnline?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  website?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AddressId = 'addressId',
  Avatar = 'avatar',
  Bio = 'bio',
  CreatedAt = 'createdAt',
  Email = 'email',
  Handle = 'handle',
  Id = 'id',
  IsOnline = 'isOnline',
  Name = 'name',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  Website = 'website',
}

export type UserScalarWhereInput = {
  addressId?: Maybe<StringNullableFilter>;
  AND?: Maybe<Array<UserScalarWhereInput>>;
  avatar?: Maybe<StringNullableFilter>;
  bio?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  handle?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  isOnline?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  password?: Maybe<StringFilter>;
  role?: Maybe<EnumRoleFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
};

export type UserSignUpInput = {
  accessCode: Scalars['String'];
  email: Scalars['String'];
  handle: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UsersOnBands = {
  __typename?: 'UsersOnBands';
  bandId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  userId: Scalars['String'];
};

export type UsersOnBandsCreateManyWithoutBandInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnBandsCreateOrConnectWithoutbandInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutBandInput>>;
};

export type UsersOnBandsCreateManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnBandsCreateOrConnectWithoutuserInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutUserInput>>;
};

export type UsersOnBandsCreateOrConnectWithoutbandInput = {
  create: UsersOnBandsCreateWithoutBandInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsCreateOrConnectWithoutuserInput = {
  create: UsersOnBandsCreateWithoutUserInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsCreateWithoutBandInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutMemberOfBandsInput;
};

export type UsersOnBandsCreateWithoutUserInput = {
  band: BandCreateOneWithoutMembersInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export type UsersOnBandsListRelationFilter = {
  every?: Maybe<UsersOnBandsWhereInput>;
  none?: Maybe<UsersOnBandsWhereInput>;
  some?: Maybe<UsersOnBandsWhereInput>;
};

export type UsersOnBandsOrderByInput = {
  bandId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum UsersOnBandsScalarFieldEnum {
  BandId = 'bandId',
  CreatedAt = 'createdAt',
  UserId = 'userId',
}

export type UsersOnBandsScalarWhereInput = {
  AND?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  bandId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  OR?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  userId?: Maybe<StringFilter>;
};

export type UsersOnBandsUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersOnBandsUpdateManyWithoutBandInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnBandsCreateOrConnectWithoutbandInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutBandInput>>;
  delete?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnBandsUpdateWithWhereUniqueWithoutBandInput>>;
  updateMany?: Maybe<Array<UsersOnBandsUpdateManyWithWhereWithoutBandInput>>;
  upsert?: Maybe<Array<UsersOnBandsUpsertWithWhereUniqueWithoutBandInput>>;
};

export type UsersOnBandsUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnBandsCreateOrConnectWithoutuserInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutUserInput>>;
  delete?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnBandsUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UsersOnBandsUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<UsersOnBandsUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UsersOnBandsUpdateManyWithWhereWithoutBandInput = {
  data: UsersOnBandsUpdateManyMutationInput;
  where: UsersOnBandsScalarWhereInput;
};

export type UsersOnBandsUpdateManyWithWhereWithoutUserInput = {
  data: UsersOnBandsUpdateManyMutationInput;
  where: UsersOnBandsScalarWhereInput;
};

export type UsersOnBandsUpdateWithoutBandInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutMemberOfBandsInput>;
};

export type UsersOnBandsUpdateWithoutUserInput = {
  band?: Maybe<BandUpdateOneRequiredWithoutMembersInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersOnBandsUpdateWithWhereUniqueWithoutBandInput = {
  data: UsersOnBandsUpdateWithoutBandInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsUpdateWithWhereUniqueWithoutUserInput = {
  data: UsersOnBandsUpdateWithoutUserInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsUpsertWithWhereUniqueWithoutBandInput = {
  create: UsersOnBandsCreateWithoutBandInput;
  update: UsersOnBandsUpdateWithoutBandInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsUpsertWithWhereUniqueWithoutUserInput = {
  create: UsersOnBandsCreateWithoutUserInput;
  update: UsersOnBandsUpdateWithoutUserInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsUserIdBandIdCompoundUniqueInput = {
  bandId: Scalars['String'];
  userId: Scalars['String'];
};

export type UsersOnBandsWhereInput = {
  AND?: Maybe<Array<UsersOnBandsWhereInput>>;
  band?: Maybe<BandRelationFilter>;
  bandId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<UsersOnBandsWhereInput>>;
  OR?: Maybe<Array<UsersOnBandsWhereInput>>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type UsersOnBandsWhereUniqueInput = {
  userId_bandId?: Maybe<UsersOnBandsUserIdBandIdCompoundUniqueInput>;
};

export type UsersOnProjects = {
  __typename?: 'UsersOnProjects';
  createdAt: Scalars['Timestamp'];
  project: Project;
  projectId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type UsersOnProjectsCountAggregate = {
  __typename?: 'UsersOnProjectsCountAggregate';
  _all: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UsersOnProjectsCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  project: ProjectCreateOneWithoutMembersInput;
  user: UserCreateOneWithoutMemberOfProjectsInput;
};

export type UsersOnProjectsCreateManyWithoutProjectInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnProjectsCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutProjectInput>>;
};

export type UsersOnProjectsCreateManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnProjectsCreateOrConnectWithoutuserInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutUserInput>>;
};

export type UsersOnProjectsCreateOrConnectWithoutprojectInput = {
  create: UsersOnProjectsCreateWithoutProjectInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsCreateOrConnectWithoutuserInput = {
  create: UsersOnProjectsCreateWithoutUserInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsCreateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutMemberOfProjectsInput;
};

export type UsersOnProjectsCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  project: ProjectCreateOneWithoutMembersInput;
};

export type UsersOnProjectsListRelationFilter = {
  every?: Maybe<UsersOnProjectsWhereInput>;
  none?: Maybe<UsersOnProjectsWhereInput>;
  some?: Maybe<UsersOnProjectsWhereInput>;
};

export type UsersOnProjectsMaxAggregate = {
  __typename?: 'UsersOnProjectsMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  projectId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UsersOnProjectsMinAggregate = {
  __typename?: 'UsersOnProjectsMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  projectId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type UsersOnProjectsOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum UsersOnProjectsScalarFieldEnum {
  CreatedAt = 'createdAt',
  ProjectId = 'projectId',
  UserId = 'userId',
}

export type UsersOnProjectsScalarWhereInput = {
  AND?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  OR?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  projectId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type UsersOnProjectsUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMembersInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutMemberOfProjectsInput>;
};

export type UsersOnProjectsUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersOnProjectsUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnProjectsCreateOrConnectWithoutprojectInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutProjectInput>>;
  delete?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<UsersOnProjectsUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type UsersOnProjectsUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnProjectsCreateOrConnectWithoutuserInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutUserInput>>;
  delete?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UsersOnProjectsUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UsersOnProjectsUpdateManyWithWhereWithoutProjectInput = {
  data: UsersOnProjectsUpdateManyMutationInput;
  where: UsersOnProjectsScalarWhereInput;
};

export type UsersOnProjectsUpdateManyWithWhereWithoutUserInput = {
  data: UsersOnProjectsUpdateManyMutationInput;
  where: UsersOnProjectsScalarWhereInput;
};

export type UsersOnProjectsUpdateWithoutProjectInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutMemberOfProjectsInput>;
};

export type UsersOnProjectsUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMembersInput>;
};

export type UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput = {
  data: UsersOnProjectsUpdateWithoutProjectInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput = {
  data: UsersOnProjectsUpdateWithoutUserInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput = {
  create: UsersOnProjectsCreateWithoutProjectInput;
  update: UsersOnProjectsUpdateWithoutProjectInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput = {
  create: UsersOnProjectsCreateWithoutUserInput;
  update: UsersOnProjectsUpdateWithoutUserInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUserIdProjectIdCompoundUniqueInput = {
  projectId: Scalars['String'];
  userId: Scalars['String'];
};

export type UsersOnProjectsWhereInput = {
  AND?: Maybe<Array<UsersOnProjectsWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<UsersOnProjectsWhereInput>>;
  OR?: Maybe<Array<UsersOnProjectsWhereInput>>;
  project?: Maybe<ProjectRelationFilter>;
  projectId?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type UsersOnProjectsWhereUniqueInput = {
  userId_projectId?: Maybe<UsersOnProjectsUserIdProjectIdCompoundUniqueInput>;
};

export type UserUpdateInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithoutAddressInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutaddressInput>>;
  create?: Maybe<Array<UserCreateWithoutAddressInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutAddressInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type UserUpdateManyWithoutFollowedByInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfollowedByInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowedByInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowedByInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowedByInput>>;
};

export type UserUpdateManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutfollowingInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowingInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
};

export type UserUpdateManyWithWhereWithoutAddressInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutFollowedByInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutFollowingInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateOneRequiredWithoutCommentInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentInput>;
  create?: Maybe<UserCreateWithoutCommentInput>;
  update?: Maybe<UserUpdateWithoutCommentInput>;
  upsert?: Maybe<UserUpsertWithoutCommentInput>;
};

export type UserUpdateOneRequiredWithoutCommentLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentLikeInput>;
  create?: Maybe<UserCreateWithoutCommentLikeInput>;
  update?: Maybe<UserUpdateWithoutCommentLikeInput>;
  upsert?: Maybe<UserUpsertWithoutCommentLikeInput>;
};

export type UserUpdateOneRequiredWithoutFeedInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutfeedInput>;
  create?: Maybe<UserCreateWithoutFeedInput>;
  update?: Maybe<UserUpdateWithoutFeedInput>;
  upsert?: Maybe<UserUpsertWithoutFeedInput>;
};

export type UserUpdateOneRequiredWithoutFeedItemLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFeedItemLikeInput>;
  create?: Maybe<UserCreateWithoutFeedItemLikeInput>;
  update?: Maybe<UserUpdateWithoutFeedItemLikeInput>;
  upsert?: Maybe<UserUpsertWithoutFeedItemLikeInput>;
};

export type UserUpdateOneRequiredWithoutMemberOfBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutmemberOfBandsInput>;
  create?: Maybe<UserCreateWithoutMemberOfBandsInput>;
  update?: Maybe<UserUpdateWithoutMemberOfBandsInput>;
  upsert?: Maybe<UserUpsertWithoutMemberOfBandsInput>;
};

export type UserUpdateOneRequiredWithoutMemberOfProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutmemberOfProjectsInput>;
  create?: Maybe<UserCreateWithoutMemberOfProjectsInput>;
  update?: Maybe<UserUpdateWithoutMemberOfProjectsInput>;
  upsert?: Maybe<UserUpsertWithoutMemberOfProjectsInput>;
};

export type UserUpdateOneRequiredWithoutMixdownInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMixdownInput>;
  create?: Maybe<UserCreateWithoutMixdownInput>;
  update?: Maybe<UserUpdateWithoutMixdownInput>;
  upsert?: Maybe<UserUpsertWithoutMixdownInput>;
};

export type UserUpdateOneRequiredWithoutOwnsBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutownsBandsInput>;
  create?: Maybe<UserCreateWithoutOwnsBandsInput>;
  update?: Maybe<UserUpdateWithoutOwnsBandsInput>;
  upsert?: Maybe<UserUpsertWithoutOwnsBandsInput>;
};

export type UserUpdateOneRequiredWithoutOwnsProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutownsProjectsInput>;
  create?: Maybe<UserCreateWithoutOwnsProjectsInput>;
  update?: Maybe<UserUpdateWithoutOwnsProjectsInput>;
  upsert?: Maybe<UserUpsertWithoutOwnsProjectsInput>;
};

export type UserUpdateOneWithoutAudioAssetInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAudioAssetInput>;
  create?: Maybe<UserCreateWithoutAudioAssetInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutAudioAssetInput>;
  upsert?: Maybe<UserUpsertWithoutAudioAssetInput>;
};

export type UserUpdateOneWithoutInterestsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutinterestsInput>;
  create?: Maybe<UserCreateWithoutInterestsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutInterestsInput>;
  upsert?: Maybe<UserUpsertWithoutInterestsInput>;
};

export type UserUpdateWithoutAddressInput = {
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAudioAssetInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentLikeInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFeedInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFeedItemLikeInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowedByInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowingInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutInterestsInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMemberOfBandsInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMemberOfProjectsInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMixdownInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOwnsBandsInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOwnsProjectsInput = {
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  AudioAsset?: Maybe<AudioAssetUpdateManyWithoutOwnerInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithWhereUniqueWithoutAddressInput = {
  data: UserUpdateWithoutAddressInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowedByInput = {
  data: UserUpdateWithoutFollowedByInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  data: UserUpdateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAudioAssetInput = {
  create: UserCreateWithoutAudioAssetInput;
  update: UserUpdateWithoutAudioAssetInput;
};

export type UserUpsertWithoutCommentInput = {
  create: UserCreateWithoutCommentInput;
  update: UserUpdateWithoutCommentInput;
};

export type UserUpsertWithoutCommentLikeInput = {
  create: UserCreateWithoutCommentLikeInput;
  update: UserUpdateWithoutCommentLikeInput;
};

export type UserUpsertWithoutFeedInput = {
  create: UserCreateWithoutFeedInput;
  update: UserUpdateWithoutFeedInput;
};

export type UserUpsertWithoutFeedItemLikeInput = {
  create: UserCreateWithoutFeedItemLikeInput;
  update: UserUpdateWithoutFeedItemLikeInput;
};

export type UserUpsertWithoutInterestsInput = {
  create: UserCreateWithoutInterestsInput;
  update: UserUpdateWithoutInterestsInput;
};

export type UserUpsertWithoutMemberOfBandsInput = {
  create: UserCreateWithoutMemberOfBandsInput;
  update: UserUpdateWithoutMemberOfBandsInput;
};

export type UserUpsertWithoutMemberOfProjectsInput = {
  create: UserCreateWithoutMemberOfProjectsInput;
  update: UserUpdateWithoutMemberOfProjectsInput;
};

export type UserUpsertWithoutMixdownInput = {
  create: UserCreateWithoutMixdownInput;
  update: UserUpdateWithoutMixdownInput;
};

export type UserUpsertWithoutOwnsBandsInput = {
  create: UserCreateWithoutOwnsBandsInput;
  update: UserUpdateWithoutOwnsBandsInput;
};

export type UserUpsertWithoutOwnsProjectsInput = {
  create: UserCreateWithoutOwnsProjectsInput;
  update: UserUpdateWithoutOwnsProjectsInput;
};

export type UserUpsertWithWhereUniqueWithoutAddressInput = {
  create: UserCreateWithoutAddressInput;
  update: UserUpdateWithoutAddressInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowedByInput = {
  create: UserCreateWithoutFollowedByInput;
  update: UserUpdateWithoutFollowedByInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  update: UserUpdateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  address?: Maybe<AddressRelationFilter>;
  addressId?: Maybe<StringNullableFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  AudioAsset?: Maybe<AudioAssetListRelationFilter>;
  avatar?: Maybe<StringNullableFilter>;
  bio?: Maybe<StringNullableFilter>;
  Comment?: Maybe<CommentListRelationFilter>;
  CommentLike?: Maybe<CommentLikeListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeListRelationFilter>;
  email?: Maybe<StringFilter>;
  feed?: Maybe<FeedItemListRelationFilter>;
  FeedItemLike?: Maybe<FeedItemLikeListRelationFilter>;
  followedBy?: Maybe<UserListRelationFilter>;
  following?: Maybe<UserListRelationFilter>;
  handle?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  interests?: Maybe<TagListRelationFilter>;
  isOnline?: Maybe<BoolFilter>;
  memberOfBands?: Maybe<UsersOnBandsListRelationFilter>;
  memberOfProjects?: Maybe<UsersOnProjectsListRelationFilter>;
  Mixdown?: Maybe<MixdownListRelationFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  ownsBands?: Maybe<BandListRelationFilter>;
  ownsProjects?: Maybe<ProjectListRelationFilter>;
  password?: Maybe<StringFilter>;
  role?: Maybe<EnumRoleFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ProjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type ProjectQuery = { __typename?: 'Query' } & {
  project?: Maybe<
    { __typename?: 'Project' } & Pick<Project, 'id' | 'createdAt' | 'name' | 'isInitialized' | 'content'> & {
        owner: { __typename?: 'User' } & Pick<User, 'id' | 'name'>;
        members?: Maybe<
          Array<
            { __typename?: 'UsersOnProjects' } & {
              user: { __typename?: 'User' } & Pick<User, 'name' | 'id' | 'avatar'>;
            }
          >
        >;
      }
  >;
};

export type ChangesSubscriptionVariables = Exact<{
  projectId: Scalars['String'];
}>;

export type ChangesSubscription = { __typename?: 'Subscription' } & {
  changes: { __typename?: 'PublishProjectChangeArgs' } & Pick<PublishProjectChangeArgs, 'id' | 'authorId' | 'change'>;
};

export type PublishChangeMutationVariables = Exact<{
  changeId: Scalars['String'];
  projectId: Scalars['String'];
  date: Scalars['Timestamp'];
  change: Scalars['JSONObject'];
  me?: Maybe<Scalars['String']>;
}>;

export type PublishChangeMutation = { __typename?: 'Mutation' } & {
  publishChange: { __typename?: 'PublishProjectChangeArgs' } & Pick<PublishProjectChangeArgs, 'id'>;
};

export type UpdateProjectContentMutationVariables = Exact<{
  content: Scalars['JSON'];
  id: Scalars['String'];
}>;

export type UpdateProjectContentMutation = { __typename?: 'Mutation' } & {
  updateProject?: Maybe<{ __typename?: 'Project' } & Pick<Project, 'id'>>;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<
    User,
    | 'id'
    | 'name'
    | 'email'
    | 'avatar'
    | 'bio'
    | 'website'
    | 'handle'
    | 'followedByCount'
    | 'followingCount'
    | 'isMyself'
  >;
};

export const ProjectDocument = gql`
  query project($id: String!) {
    project(where: { id: $id }) {
      id
      createdAt
      name
      owner {
        id
        name
      }
      isInitialized
      members(where: { projectId: { equals: $id } }) {
        user {
          name
          id
          avatar
        }
      }
      content
    }
  }
`;

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProjectQuery(baseOptions: Apollo.QueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
  return Apollo.useQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, baseOptions);
}
export function useProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProjectQuery, ProjectQueryVariables>) {
  return Apollo.useLazyQuery<ProjectQuery, ProjectQueryVariables>(ProjectDocument, baseOptions);
}
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>;
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>;
export type ProjectQueryResult = Apollo.QueryResult<ProjectQuery, ProjectQueryVariables>;
export const ChangesDocument = gql`
  subscription changes($projectId: String!) {
    changes(projectId: $projectId) {
      id
      authorId
      change
    }
  }
`;

/**
 * __useChangesSubscription__
 *
 * To run a query within a React component, call `useChangesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChangesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChangesSubscription({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useChangesSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<ChangesSubscription, ChangesSubscriptionVariables>,
) {
  return Apollo.useSubscription<ChangesSubscription, ChangesSubscriptionVariables>(ChangesDocument, baseOptions);
}
export type ChangesSubscriptionHookResult = ReturnType<typeof useChangesSubscription>;
export type ChangesSubscriptionResult = Apollo.SubscriptionResult<ChangesSubscription>;
export const PublishChangeDocument = gql`
  mutation publishChange(
    $changeId: String!
    $projectId: String!
    $date: Timestamp!
    $change: JSONObject!
    $me: String
  ) {
    publishChange(id: $changeId, date: $date, projectId: $projectId, change: $change, authorId: $me) {
      id
    }
  }
`;
export type PublishChangeMutationFn = Apollo.MutationFunction<PublishChangeMutation, PublishChangeMutationVariables>;

/**
 * __usePublishChangeMutation__
 *
 * To run a mutation, you first call `usePublishChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishChangeMutation, { data, loading, error }] = usePublishChangeMutation({
 *   variables: {
 *      changeId: // value for 'changeId'
 *      projectId: // value for 'projectId'
 *      date: // value for 'date'
 *      change: // value for 'change'
 *      me: // value for 'me'
 *   },
 * });
 */
export function usePublishChangeMutation(
  baseOptions?: Apollo.MutationHookOptions<PublishChangeMutation, PublishChangeMutationVariables>,
) {
  return Apollo.useMutation<PublishChangeMutation, PublishChangeMutationVariables>(PublishChangeDocument, baseOptions);
}
export type PublishChangeMutationHookResult = ReturnType<typeof usePublishChangeMutation>;
export type PublishChangeMutationResult = Apollo.MutationResult<PublishChangeMutation>;
export type PublishChangeMutationOptions = Apollo.BaseMutationOptions<
  PublishChangeMutation,
  PublishChangeMutationVariables
>;
export const UpdateProjectContentDocument = gql`
  mutation updateProjectContent($content: JSON!, $id: String!) {
    updateProject(where: { id: $id }, data: { content: $content, isInitialized: { set: true } }) {
      id
    }
  }
`;
export type UpdateProjectContentMutationFn = Apollo.MutationFunction<
  UpdateProjectContentMutation,
  UpdateProjectContentMutationVariables
>;

/**
 * __useUpdateProjectContentMutation__
 *
 * To run a mutation, you first call `useUpdateProjectContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectContentMutation, { data, loading, error }] = useUpdateProjectContentMutation({
 *   variables: {
 *      content: // value for 'content'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateProjectContentMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateProjectContentMutation, UpdateProjectContentMutationVariables>,
) {
  return Apollo.useMutation<UpdateProjectContentMutation, UpdateProjectContentMutationVariables>(
    UpdateProjectContentDocument,
    baseOptions,
  );
}
export type UpdateProjectContentMutationHookResult = ReturnType<typeof useUpdateProjectContentMutation>;
export type UpdateProjectContentMutationResult = Apollo.MutationResult<UpdateProjectContentMutation>;
export type UpdateProjectContentMutationOptions = Apollo.BaseMutationOptions<
  UpdateProjectContentMutation,
  UpdateProjectContentMutationVariables
>;
export const MeDocument = gql`
  query me {
    me {
      id
      name
      email
      avatar
      bio
      website
      handle
      followedByCount
      followingCount
      isMyself
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;