import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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
  distinct?: Maybe<Array<UserDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type AddressAvgAggregate = {
  __typename?: 'AddressAvgAggregate';
  zip: Scalars['Float'];
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
  create?: Maybe<AddressCreateWithoutUserInput>;
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

export enum AddressDistinctFieldEnum {
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

export type AddressMaxAggregate = {
  __typename?: 'AddressMaxAggregate';
  zip: Scalars['Int'];
};

export type AddressMinAggregate = {
  __typename?: 'AddressMinAggregate';
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
  create?: Maybe<AddressCreateWithoutUserInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutUserDataInput>;
  upsert?: Maybe<AddressUpsertWithoutUserInput>;
};

export type AddressUpdateWithoutUserDataInput = {
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
  update: AddressUpdateWithoutUserDataInput;
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
  count: Scalars['Int'];
  max?: Maybe<AddressMaxAggregate>;
  min?: Maybe<AddressMinAggregate>;
  sum?: Maybe<AddressSumAggregate>;
};

export type AggregateBand = {
  __typename?: 'AggregateBand';
  count: Scalars['Int'];
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  count: Scalars['Int'];
};

export type AggregateCommentLike = {
  __typename?: 'AggregateCommentLike';
  count: Scalars['Int'];
};

export type AggregateFeedItem = {
  __typename?: 'AggregateFeedItem';
  count: Scalars['Int'];
};

export type AggregateFeedItemLike = {
  __typename?: 'AggregateFeedItemLike';
  count: Scalars['Int'];
};

export type AggregateFeedItemRevision = {
  __typename?: 'AggregateFeedItemRevision';
  count: Scalars['Int'];
};

export type AggregateMixdown = {
  __typename?: 'AggregateMixdown';
  avg?: Maybe<MixdownAvgAggregate>;
  count: Scalars['Int'];
  max?: Maybe<MixdownMaxAggregate>;
  min?: Maybe<MixdownMinAggregate>;
  sum?: Maybe<MixdownSumAggregate>;
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  count: Scalars['Int'];
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  count: Scalars['Int'];
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count: Scalars['Int'];
};

export type AggregateUsersOnProjects = {
  __typename?: 'AggregateUsersOnProjects';
  count: Scalars['Int'];
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
  create?: Maybe<Array<AudioAssetCreateWithoutOwnerInput>>;
};

export type AudioAssetCreateOneWithoutMixdownInput = {
  connect?: Maybe<AudioAssetWhereUniqueInput>;
  create?: Maybe<AudioAssetCreateWithoutMixdownInput>;
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

export enum AudioAssetDistinctFieldEnum {
  Id = 'id',
  IsPublic = 'isPublic',
  Location = 'location',
  Name = 'name',
  UserId = 'userId',
}

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

export type AudioAssetUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AudioAssetUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<AudioAssetWhereUniqueInput>>;
  create?: Maybe<Array<AudioAssetCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<AudioAssetWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AudioAssetScalarWhereInput>>;
  disconnect?: Maybe<Array<AudioAssetWhereUniqueInput>>;
  set?: Maybe<Array<AudioAssetWhereUniqueInput>>;
  update?: Maybe<Array<AudioAssetUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<AudioAssetUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<AudioAssetUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type AudioAssetUpdateManyWithWhereNestedInput = {
  data: AudioAssetUpdateManyDataInput;
  where: AudioAssetScalarWhereInput;
};

export type AudioAssetUpdateOneRequiredWithoutMixdownInput = {
  connect?: Maybe<AudioAssetWhereUniqueInput>;
  create?: Maybe<AudioAssetCreateWithoutMixdownInput>;
  update?: Maybe<AudioAssetUpdateWithoutMixdownDataInput>;
  upsert?: Maybe<AudioAssetUpsertWithoutMixdownInput>;
};

export type AudioAssetUpdateWithoutMixdownDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutAudioAssetInput>;
};

export type AudioAssetUpdateWithoutOwnerDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutAudioInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AudioAssetUpdateWithWhereUniqueWithoutOwnerInput = {
  data: AudioAssetUpdateWithoutOwnerDataInput;
  where: AudioAssetWhereUniqueInput;
};

export type AudioAssetUpsertWithoutMixdownInput = {
  create: AudioAssetCreateWithoutMixdownInput;
  update: AudioAssetUpdateWithoutMixdownDataInput;
};

export type AudioAssetUpsertWithWhereUniqueWithoutOwnerInput = {
  create: AudioAssetCreateWithoutOwnerInput;
  update: AudioAssetUpdateWithoutOwnerDataInput;
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
  distinct?: Maybe<Array<UsersOnBandsDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnBandsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnBandsWhereInput>;
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
  create?: Maybe<Array<BandCreateWithoutCreatedByInput>>;
};

export type BandCreateOneWithoutMembersInput = {
  connect?: Maybe<BandWhereUniqueInput>;
  create?: Maybe<BandCreateWithoutMembersInput>;
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

export enum BandDistinctFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPublic = 'isPublic',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type BandListRelationFilter = {
  every?: Maybe<BandWhereInput>;
  none?: Maybe<BandWhereInput>;
  some?: Maybe<BandWhereInput>;
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

export type BandUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<BoolFieldUpdateOperationsInput>;
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
  create?: Maybe<Array<BandCreateWithoutCreatedByInput>>;
  delete?: Maybe<Array<BandWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BandScalarWhereInput>>;
  disconnect?: Maybe<Array<BandWhereUniqueInput>>;
  set?: Maybe<Array<BandWhereUniqueInput>>;
  update?: Maybe<Array<BandUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: Maybe<Array<BandUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<BandUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type BandUpdateManyWithWhereNestedInput = {
  data: BandUpdateManyDataInput;
  where: BandScalarWhereInput;
};

export type BandUpdateOneRequiredWithoutMembersInput = {
  connect?: Maybe<BandWhereUniqueInput>;
  create?: Maybe<BandCreateWithoutMembersInput>;
  update?: Maybe<BandUpdateWithoutMembersDataInput>;
  upsert?: Maybe<BandUpsertWithoutMembersInput>;
};

export type BandUpdateWithoutCreatedByDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UsersOnBandsUpdateManyWithoutBandInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BandUpdateWithoutMembersDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: Maybe<UserUpdateOneRequiredWithoutOwnsBandsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type BandUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: BandUpdateWithoutCreatedByDataInput;
  where: BandWhereUniqueInput;
};

export type BandUpsertWithoutMembersInput = {
  create: BandCreateWithoutMembersInput;
  update: BandUpdateWithoutMembersDataInput;
};

export type BandUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: BandCreateWithoutCreatedByInput;
  update: BandUpdateWithoutCreatedByDataInput;
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
  distinct?: Maybe<Array<CommentLikeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type CommentSubCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
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
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
};

export type CommentCreateManyWithoutFeedItemInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  create?: Maybe<Array<CommentCreateWithoutFeedItemInput>>;
};

export type CommentCreateManyWithoutParentCommentInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  create?: Maybe<Array<CommentCreateWithoutParentCommentInput>>;
};

export type CommentCreateOneWithoutLikesInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  create?: Maybe<CommentCreateWithoutLikesInput>;
};

export type CommentCreateOneWithoutSubCommentsInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  create?: Maybe<CommentCreateWithoutSubCommentsInput>;
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

export enum CommentDistinctFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  FeedItemId = 'feedItemId',
  Id = 'id',
  ParentCommentId = 'parentCommentId',
  Text = 'text',
  UpdatedAt = 'updatedAt',
}

export type CommentLike = {
  __typename?: 'CommentLike';
  comment: Comment;
  commentId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  user: User;
  userId: Scalars['String'];
};

export type CommentLikeCreateInput = {
  comment: CommentCreateOneWithoutLikesInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutCommentLikeInput;
};

export type CommentLikeCreateManyWithoutCommentInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutCommentInput>>;
};

export type CommentLikeCreateManyWithoutUserInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutUserInput>>;
};

export type CommentLikeCreateWithoutCommentInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutCommentLikeInput;
};

export type CommentLikeCreateWithoutUserInput = {
  comment: CommentCreateOneWithoutLikesInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export enum CommentLikeDistinctFieldEnum {
  CommentId = 'commentId',
  CreatedAt = 'createdAt',
  UserId = 'userId',
}

export type CommentLikeListRelationFilter = {
  every?: Maybe<CommentLikeWhereInput>;
  none?: Maybe<CommentLikeWhereInput>;
  some?: Maybe<CommentLikeWhereInput>;
};

export type CommentLikeOrderByInput = {
  commentId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

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

export type CommentLikeUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentLikeUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentLikeUpdateManyWithoutCommentInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutCommentInput>>;
  delete?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  set?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  update?: Maybe<Array<CommentLikeUpdateWithWhereUniqueWithoutCommentInput>>;
  updateMany?: Maybe<Array<CommentLikeUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CommentLikeUpsertWithWhereUniqueWithoutCommentInput>>;
};

export type CommentLikeUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutUserInput>>;
  delete?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  set?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  update?: Maybe<Array<CommentLikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CommentLikeUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CommentLikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentLikeUpdateManyWithWhereNestedInput = {
  data: CommentLikeUpdateManyDataInput;
  where: CommentLikeScalarWhereInput;
};

export type CommentLikeUpdateWithoutCommentDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentLikeInput>;
};

export type CommentLikeUpdateWithoutUserDataInput = {
  comment?: Maybe<CommentUpdateOneRequiredWithoutLikesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentLikeUpdateWithWhereUniqueWithoutCommentInput = {
  data: CommentLikeUpdateWithoutCommentDataInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentLikeUpdateWithoutUserDataInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeUpsertWithWhereUniqueWithoutCommentInput = {
  create: CommentLikeCreateWithoutCommentInput;
  update: CommentLikeUpdateWithoutCommentDataInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentLikeCreateWithoutUserInput;
  update: CommentLikeUpdateWithoutUserDataInput;
  where: CommentLikeWhereUniqueInput;
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
  userId_commentId?: Maybe<UserIdCommentIdCompoundUniqueInput>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
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

export type CommentUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
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
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type CommentUpdateManyWithoutFeedItemInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  create?: Maybe<Array<CommentCreateWithoutFeedItemInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutFeedItemInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutFeedItemInput>>;
};

export type CommentUpdateManyWithoutParentCommentInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  create?: Maybe<Array<CommentCreateWithoutParentCommentInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutParentCommentInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutParentCommentInput>>;
};

export type CommentUpdateManyWithWhereNestedInput = {
  data: CommentUpdateManyDataInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateOneRequiredWithoutLikesInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  create?: Maybe<CommentCreateWithoutLikesInput>;
  update?: Maybe<CommentUpdateWithoutLikesDataInput>;
  upsert?: Maybe<CommentUpsertWithoutLikesInput>;
};

export type CommentUpdateOneWithoutSubCommentsInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  create?: Maybe<CommentCreateWithoutSubCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CommentUpdateWithoutSubCommentsDataInput>;
  upsert?: Maybe<CommentUpsertWithoutSubCommentsInput>;
};

export type CommentUpdateWithoutAuthorDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneWithoutCommentsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  likes?: Maybe<CommentLikeUpdateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentUpdateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentUpdateManyWithoutParentCommentInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutFeedItemDataInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutCommentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  likes?: Maybe<CommentLikeUpdateManyWithoutCommentInput>;
  parentComment?: Maybe<CommentUpdateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentUpdateManyWithoutParentCommentInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutLikesDataInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutCommentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneWithoutCommentsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  parentComment?: Maybe<CommentUpdateOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentUpdateManyWithoutParentCommentInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutParentCommentDataInput = {
  author?: Maybe<UserUpdateOneRequiredWithoutCommentInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneWithoutCommentsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  likes?: Maybe<CommentLikeUpdateManyWithoutCommentInput>;
  subComments?: Maybe<CommentUpdateManyWithoutParentCommentInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutSubCommentsDataInput = {
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
  data: CommentUpdateWithoutAuthorDataInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutFeedItemInput = {
  data: CommentUpdateWithoutFeedItemDataInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutParentCommentInput = {
  data: CommentUpdateWithoutParentCommentDataInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithoutLikesInput = {
  create: CommentCreateWithoutLikesInput;
  update: CommentUpdateWithoutLikesDataInput;
};

export type CommentUpsertWithoutSubCommentsInput = {
  create: CommentCreateWithoutSubCommentsInput;
  update: CommentUpdateWithoutSubCommentsDataInput;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  update: CommentUpdateWithoutAuthorDataInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutFeedItemInput = {
  create: CommentCreateWithoutFeedItemInput;
  update: CommentUpdateWithoutFeedItemDataInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutParentCommentInput = {
  create: CommentCreateWithoutParentCommentInput;
  update: CommentUpdateWithoutParentCommentDataInput;
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
  create?: Maybe<Array<EarlyAccessCodeCreateWithoutClaimedByInput>>;
};

export type EarlyAccessCodeCreateWithoutClaimedByInput = {
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isValid?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export enum EarlyAccessCodeDistinctFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsValid = 'isValid',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

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

export type EarlyAccessCodeUpdateManyDataInput = {
  code?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isValid?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EarlyAccessCodeUpdateManyWithoutClaimedByInput = {
  connect?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  create?: Maybe<Array<EarlyAccessCodeCreateWithoutClaimedByInput>>;
  delete?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EarlyAccessCodeScalarWhereInput>>;
  disconnect?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  set?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  update?: Maybe<Array<EarlyAccessCodeUpdateWithWhereUniqueWithoutClaimedByInput>>;
  updateMany?: Maybe<Array<EarlyAccessCodeUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<EarlyAccessCodeUpsertWithWhereUniqueWithoutClaimedByInput>>;
};

export type EarlyAccessCodeUpdateManyWithWhereNestedInput = {
  data: EarlyAccessCodeUpdateManyDataInput;
  where: EarlyAccessCodeScalarWhereInput;
};

export type EarlyAccessCodeUpdateWithoutClaimedByDataInput = {
  code?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isValid?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EarlyAccessCodeUpdateWithWhereUniqueWithoutClaimedByInput = {
  data: EarlyAccessCodeUpdateWithoutClaimedByDataInput;
  where: EarlyAccessCodeWhereUniqueInput;
};

export type EarlyAccessCodeUpsertWithWhereUniqueWithoutClaimedByInput = {
  create: EarlyAccessCodeCreateWithoutClaimedByInput;
  update: EarlyAccessCodeUpdateWithoutClaimedByDataInput;
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
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type FeedItemLikesArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemLikeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type FeedItemRevisionsArgs = {
  cursor?: Maybe<FeedItemRevisionWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemRevisionDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemRevisionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemRevisionWhereInput>;
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
  create?: Maybe<Array<FeedItemCreateWithoutAuthorInput>>;
};

export type FeedItemCreateManyWithoutMixdownInput = {
  connect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutMixdownInput>>;
};

export type FeedItemCreateOneWithoutCommentsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  create?: Maybe<FeedItemCreateWithoutCommentsInput>;
};

export type FeedItemCreateOneWithoutLikesInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  create?: Maybe<FeedItemCreateWithoutLikesInput>;
};

export type FeedItemCreateOneWithoutRevisionsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  create?: Maybe<FeedItemCreateWithoutRevisionsInput>;
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

export enum FeedItemDistinctFieldEnum {
  AuthorId = 'authorId',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPublished = 'isPublished',
  MixdownId = 'mixdownId',
  PublishAt = 'publishAt',
  Text = 'text',
  UpdatedAt = 'updatedAt',
}

export type FeedItemLike = {
  __typename?: 'FeedItemLike';
  createdAt: Scalars['Timestamp'];
  feedItem: FeedItem;
  feedItemId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type FeedItemLikeCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem: FeedItemCreateOneWithoutLikesInput;
  user: UserCreateOneWithoutFeedItemLikeInput;
};

export type FeedItemLikeCreateManyWithoutFeedItemInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutFeedItemInput>>;
};

export type FeedItemLikeCreateManyWithoutUserInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutUserInput>>;
};

export type FeedItemLikeCreateWithoutFeedItemInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutFeedItemLikeInput;
};

export type FeedItemLikeCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem: FeedItemCreateOneWithoutLikesInput;
};

export enum FeedItemLikeDistinctFieldEnum {
  CreatedAt = 'createdAt',
  FeedItemId = 'feedItemId',
  UserId = 'userId',
}

export type FeedItemLikeListRelationFilter = {
  every?: Maybe<FeedItemLikeWhereInput>;
  none?: Maybe<FeedItemLikeWhereInput>;
  some?: Maybe<FeedItemLikeWhereInput>;
};

export type FeedItemLikeOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  feedItemId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

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

export type FeedItemLikeUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemLikeUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemLikeUpdateManyWithoutFeedItemInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutFeedItemInput>>;
  delete?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemLikeUpdateWithWhereUniqueWithoutFeedItemInput>>;
  updateMany?: Maybe<Array<FeedItemLikeUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<FeedItemLikeUpsertWithWhereUniqueWithoutFeedItemInput>>;
};

export type FeedItemLikeUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutUserInput>>;
  delete?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemLikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<FeedItemLikeUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<FeedItemLikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FeedItemLikeUpdateManyWithWhereNestedInput = {
  data: FeedItemLikeUpdateManyDataInput;
  where: FeedItemLikeScalarWhereInput;
};

export type FeedItemLikeUpdateWithoutFeedItemDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutFeedItemLikeInput>;
};

export type FeedItemLikeUpdateWithoutUserDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneRequiredWithoutLikesInput>;
};

export type FeedItemLikeUpdateWithWhereUniqueWithoutFeedItemInput = {
  data: FeedItemLikeUpdateWithoutFeedItemDataInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: FeedItemLikeUpdateWithoutUserDataInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeUpsertWithWhereUniqueWithoutFeedItemInput = {
  create: FeedItemLikeCreateWithoutFeedItemInput;
  update: FeedItemLikeUpdateWithoutFeedItemDataInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: FeedItemLikeCreateWithoutUserInput;
  update: FeedItemLikeUpdateWithoutUserDataInput;
  where: FeedItemLikeWhereUniqueInput;
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
  userId_feedItemId?: Maybe<UserIdFeedItemIdCompoundUniqueInput>;
};

export type FeedItemListRelationFilter = {
  every?: Maybe<FeedItemWhereInput>;
  none?: Maybe<FeedItemWhereInput>;
  some?: Maybe<FeedItemWhereInput>;
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

export type FeedItemRevisionCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  parentItem: FeedItemCreateOneWithoutRevisionsInput;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemRevisionCreateManyWithoutParentItemInput = {
  connect?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  create?: Maybe<Array<FeedItemRevisionCreateWithoutParentItemInput>>;
};

export type FeedItemRevisionCreateWithoutParentItemInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export enum FeedItemRevisionDistinctFieldEnum {
  CreatedAt = 'createdAt',
  FeedItemId = 'feedItemId',
  Id = 'id',
  Text = 'text',
  UpdatedAt = 'updatedAt',
}

export type FeedItemRevisionListRelationFilter = {
  every?: Maybe<FeedItemRevisionWhereInput>;
  none?: Maybe<FeedItemRevisionWhereInput>;
  some?: Maybe<FeedItemRevisionWhereInput>;
};

export type FeedItemRevisionOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  feedItemId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

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

export type FeedItemRevisionUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
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
  create?: Maybe<Array<FeedItemRevisionCreateWithoutParentItemInput>>;
  delete?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemRevisionScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemRevisionUpdateWithWhereUniqueWithoutParentItemInput>>;
  updateMany?: Maybe<Array<FeedItemRevisionUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<FeedItemRevisionUpsertWithWhereUniqueWithoutParentItemInput>>;
};

export type FeedItemRevisionUpdateManyWithWhereNestedInput = {
  data: FeedItemRevisionUpdateManyDataInput;
  where: FeedItemRevisionScalarWhereInput;
};

export type FeedItemRevisionUpdateWithoutParentItemDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemRevisionUpdateWithWhereUniqueWithoutParentItemInput = {
  data: FeedItemRevisionUpdateWithoutParentItemDataInput;
  where: FeedItemRevisionWhereUniqueInput;
};

export type FeedItemRevisionUpsertWithWhereUniqueWithoutParentItemInput = {
  create: FeedItemRevisionCreateWithoutParentItemInput;
  update: FeedItemRevisionUpdateWithoutParentItemDataInput;
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

export type FeedItemUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublished?: Maybe<BoolFieldUpdateOperationsInput>;
  publishAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
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
  create?: Maybe<Array<FeedItemCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<FeedItemUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<FeedItemUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type FeedItemUpdateManyWithoutMixdownInput = {
  connect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutMixdownInput>>;
  delete?: Maybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemUpdateWithWhereUniqueWithoutMixdownInput>>;
  updateMany?: Maybe<Array<FeedItemUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<FeedItemUpsertWithWhereUniqueWithoutMixdownInput>>;
};

export type FeedItemUpdateManyWithWhereNestedInput = {
  data: FeedItemUpdateManyDataInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateOneRequiredWithoutLikesInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  create?: Maybe<FeedItemCreateWithoutLikesInput>;
  update?: Maybe<FeedItemUpdateWithoutLikesDataInput>;
  upsert?: Maybe<FeedItemUpsertWithoutLikesInput>;
};

export type FeedItemUpdateOneRequiredWithoutRevisionsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  create?: Maybe<FeedItemCreateWithoutRevisionsInput>;
  update?: Maybe<FeedItemUpdateWithoutRevisionsDataInput>;
  upsert?: Maybe<FeedItemUpsertWithoutRevisionsInput>;
};

export type FeedItemUpdateOneWithoutCommentsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  create?: Maybe<FeedItemCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FeedItemUpdateWithoutCommentsDataInput>;
  upsert?: Maybe<FeedItemUpsertWithoutCommentsInput>;
};

export type FeedItemUpdateWithoutAuthorDataInput = {
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

export type FeedItemUpdateWithoutCommentsDataInput = {
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

export type FeedItemUpdateWithoutLikesDataInput = {
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

export type FeedItemUpdateWithoutMixdownDataInput = {
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

export type FeedItemUpdateWithoutRevisionsDataInput = {
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
  data: FeedItemUpdateWithoutAuthorDataInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpdateWithWhereUniqueWithoutMixdownInput = {
  data: FeedItemUpdateWithoutMixdownDataInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpsertWithoutCommentsInput = {
  create: FeedItemCreateWithoutCommentsInput;
  update: FeedItemUpdateWithoutCommentsDataInput;
};

export type FeedItemUpsertWithoutLikesInput = {
  create: FeedItemCreateWithoutLikesInput;
  update: FeedItemUpdateWithoutLikesDataInput;
};

export type FeedItemUpsertWithoutRevisionsInput = {
  create: FeedItemCreateWithoutRevisionsInput;
  update: FeedItemUpdateWithoutRevisionsDataInput;
};

export type FeedItemUpsertWithWhereUniqueWithoutAuthorInput = {
  create: FeedItemCreateWithoutAuthorInput;
  update: FeedItemUpdateWithoutAuthorDataInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpsertWithWhereUniqueWithoutMixdownInput = {
  create: FeedItemCreateWithoutMixdownInput;
  update: FeedItemUpdateWithoutMixdownDataInput;
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
  distinct?: Maybe<Array<FeedItemDistinctFieldEnum>>;
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
  create?: Maybe<Array<MixdownCreateWithoutAudioInput>>;
};

export type MixdownCreateManyWithoutProjectInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  create?: Maybe<Array<MixdownCreateWithoutProjectInput>>;
};

export type MixdownCreateManyWithoutTriggerdByInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  create?: Maybe<Array<MixdownCreateWithoutTriggerdByInput>>;
};

export type MixdownCreateOneWithoutFeedItemInput = {
  connect?: Maybe<MixdownWhereUniqueInput>;
  create?: Maybe<MixdownCreateWithoutFeedItemInput>;
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

export enum MixdownDistinctFieldEnum {
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

export type MixdownListRelationFilter = {
  every?: Maybe<MixdownWhereInput>;
  none?: Maybe<MixdownWhereInput>;
  some?: Maybe<MixdownWhereInput>;
};

export type MixdownMaxAggregate = {
  __typename?: 'MixdownMaxAggregate';
  listens: Scalars['Int'];
  version: Scalars['Int'];
};

export type MixdownMinAggregate = {
  __typename?: 'MixdownMinAggregate';
  listens: Scalars['Int'];
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

export type MixdownUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
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
  create?: Maybe<Array<MixdownCreateWithoutAudioInput>>;
  delete?: Maybe<Array<MixdownWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MixdownScalarWhereInput>>;
  disconnect?: Maybe<Array<MixdownWhereUniqueInput>>;
  set?: Maybe<Array<MixdownWhereUniqueInput>>;
  update?: Maybe<Array<MixdownUpdateWithWhereUniqueWithoutAudioInput>>;
  updateMany?: Maybe<Array<MixdownUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<MixdownUpsertWithWhereUniqueWithoutAudioInput>>;
};

export type MixdownUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  create?: Maybe<Array<MixdownCreateWithoutProjectInput>>;
  delete?: Maybe<Array<MixdownWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MixdownScalarWhereInput>>;
  disconnect?: Maybe<Array<MixdownWhereUniqueInput>>;
  set?: Maybe<Array<MixdownWhereUniqueInput>>;
  update?: Maybe<Array<MixdownUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<MixdownUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<MixdownUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type MixdownUpdateManyWithoutTriggerdByInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  create?: Maybe<Array<MixdownCreateWithoutTriggerdByInput>>;
  delete?: Maybe<Array<MixdownWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MixdownScalarWhereInput>>;
  disconnect?: Maybe<Array<MixdownWhereUniqueInput>>;
  set?: Maybe<Array<MixdownWhereUniqueInput>>;
  update?: Maybe<Array<MixdownUpdateWithWhereUniqueWithoutTriggerdByInput>>;
  updateMany?: Maybe<Array<MixdownUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<MixdownUpsertWithWhereUniqueWithoutTriggerdByInput>>;
};

export type MixdownUpdateManyWithWhereNestedInput = {
  data: MixdownUpdateManyDataInput;
  where: MixdownScalarWhereInput;
};

export type MixdownUpdateOneWithoutFeedItemInput = {
  connect?: Maybe<MixdownWhereUniqueInput>;
  create?: Maybe<MixdownCreateWithoutFeedItemInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<MixdownUpdateWithoutFeedItemDataInput>;
  upsert?: Maybe<MixdownUpsertWithoutFeedItemInput>;
};

export type MixdownUpdateWithoutAudioDataInput = {
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

export type MixdownUpdateWithoutFeedItemDataInput = {
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

export type MixdownUpdateWithoutProjectDataInput = {
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

export type MixdownUpdateWithoutTriggerdByDataInput = {
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
  data: MixdownUpdateWithoutAudioDataInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpdateWithWhereUniqueWithoutProjectInput = {
  data: MixdownUpdateWithoutProjectDataInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpdateWithWhereUniqueWithoutTriggerdByInput = {
  data: MixdownUpdateWithoutTriggerdByDataInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpsertWithoutFeedItemInput = {
  create: MixdownCreateWithoutFeedItemInput;
  update: MixdownUpdateWithoutFeedItemDataInput;
};

export type MixdownUpsertWithWhereUniqueWithoutAudioInput = {
  create: MixdownCreateWithoutAudioInput;
  update: MixdownUpdateWithoutAudioDataInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpsertWithWhereUniqueWithoutProjectInput = {
  create: MixdownCreateWithoutProjectInput;
  update: MixdownUpdateWithoutProjectDataInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownUpsertWithWhereUniqueWithoutTriggerdByInput = {
  create: MixdownCreateWithoutTriggerdByInput;
  update: MixdownUpdateWithoutTriggerdByDataInput;
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
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
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
  distinct?: Maybe<Array<UsersOnProjectsDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type ProjectMixdownsArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownDistinctFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type ProjectCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownCreateManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  create?: Maybe<Array<ProjectCreateWithoutOwnerInput>>;
};

export type ProjectCreateOneWithoutMembersInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  create?: Maybe<ProjectCreateWithoutMembersInput>;
};

export type ProjectCreateOneWithoutMixdownsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  create?: Maybe<ProjectCreateWithoutMixdownsInput>;
};

export type ProjectCreateWithoutMembersInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  mixdowns?: Maybe<MixdownCreateManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateWithoutMixdownsInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateWithoutOwnerInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownCreateManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export enum ProjectDistinctFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPrivate = 'isPrivate',
  Name = 'name',
  OwnerId = 'ownerId',
  UpdatedAt = 'updatedAt',
}

export type ProjectListRelationFilter = {
  every?: Maybe<ProjectWhereInput>;
  none?: Maybe<ProjectWhereInput>;
  some?: Maybe<ProjectWhereInput>;
};

export type ProjectOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  isPrivate?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  ownerId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ProjectRelationFilter = {
  is?: Maybe<ProjectWhereInput>;
  isNot?: Maybe<ProjectWhereInput>;
};

export type ProjectScalarWhereInput = {
  AND?: Maybe<Array<ProjectScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPrivate?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<ProjectScalarWhereInput>>;
  OR?: Maybe<Array<ProjectScalarWhereInput>>;
  ownerId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UsersOnProjectsUpdateManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutOwnsProjectsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  create?: Maybe<Array<ProjectCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ProjectUpdateManyWithWhereNestedInput = {
  data: ProjectUpdateManyDataInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateOneRequiredWithoutMembersInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  create?: Maybe<ProjectCreateWithoutMembersInput>;
  update?: Maybe<ProjectUpdateWithoutMembersDataInput>;
  upsert?: Maybe<ProjectUpsertWithoutMembersInput>;
};

export type ProjectUpdateOneRequiredWithoutMixdownsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  create?: Maybe<ProjectCreateWithoutMixdownsInput>;
  update?: Maybe<ProjectUpdateWithoutMixdownsDataInput>;
  upsert?: Maybe<ProjectUpsertWithoutMixdownsInput>;
};

export type ProjectUpdateWithoutMembersDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  mixdowns?: Maybe<MixdownUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutOwnsProjectsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutMixdownsDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UsersOnProjectsUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneRequiredWithoutOwnsProjectsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutOwnerDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPrivate?: Maybe<BoolFieldUpdateOperationsInput>;
  members?: Maybe<UsersOnProjectsUpdateManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownUpdateManyWithoutProjectInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ProjectUpdateWithoutOwnerDataInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutMembersInput = {
  create: ProjectCreateWithoutMembersInput;
  update: ProjectUpdateWithoutMembersDataInput;
};

export type ProjectUpsertWithoutMixdownsInput = {
  create: ProjectCreateWithoutMixdownsInput;
  update: ProjectUpdateWithoutMixdownsDataInput;
};

export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ProjectCreateWithoutOwnerInput;
  update: ProjectUpdateWithoutOwnerDataInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
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
  findOneUsersOnProjects?: Maybe<UsersOnProjects>;
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
  distinct?: Maybe<Array<AddressDistinctFieldEnum>>;
  orderBy?: Maybe<Array<AddressOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};

export type QueryAggregateAddressArgs = {
  cursor?: Maybe<AddressWhereUniqueInput>;
  distinct?: Maybe<Array<AddressDistinctFieldEnum>>;
  orderBy?: Maybe<Array<AddressOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};

export type QueryAggregateBandArgs = {
  cursor?: Maybe<BandWhereUniqueInput>;
  distinct?: Maybe<Array<BandDistinctFieldEnum>>;
  orderBy?: Maybe<Array<BandOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BandWhereInput>;
};

export type QueryAggregateCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryAggregateCommentLikeArgs = {
  cursor?: Maybe<CommentLikeWhereUniqueInput>;
  distinct?: Maybe<Array<CommentLikeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type QueryAggregateFeedItemArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type QueryAggregateFeedItemLikeArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemLikeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type QueryAggregateFeedItemRevisionArgs = {
  cursor?: Maybe<FeedItemRevisionWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemRevisionDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemRevisionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type QueryAggregateMixdownArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownDistinctFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type QueryAggregateProjectArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectDistinctFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type QueryAggregateTagArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<Array<TagDistinctFieldEnum>>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};

export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type QueryAggregateUsersOnProjectsArgs = {
  cursor?: Maybe<UsersOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnProjectsDistinctFieldEnum>>;
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
  distinct?: Maybe<Array<BandDistinctFieldEnum>>;
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
  distinct?: Maybe<Array<CommentLikeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type QueryCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
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
  distinct?: Maybe<Array<FeedItemLikeDistinctFieldEnum>>;
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
  distinct?: Maybe<Array<FeedItemRevisionDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemRevisionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type QueryFeedItemsArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type QueryFindFirstAddressArgs = {
  cursor?: Maybe<AddressWhereUniqueInput>;
  distinct?: Maybe<Array<AddressDistinctFieldEnum>>;
  orderBy?: Maybe<Array<AddressOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};

export type QueryFindFirstBandArgs = {
  cursor?: Maybe<BandWhereUniqueInput>;
  distinct?: Maybe<Array<BandDistinctFieldEnum>>;
  orderBy?: Maybe<Array<BandOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BandWhereInput>;
};

export type QueryFindFirstCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryFindFirstCommentLikeArgs = {
  cursor?: Maybe<CommentLikeWhereUniqueInput>;
  distinct?: Maybe<Array<CommentLikeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type QueryFindFirstFeedItemArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type QueryFindFirstFeedItemLikeArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemLikeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type QueryFindFirstFeedItemRevisionArgs = {
  cursor?: Maybe<FeedItemRevisionWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemRevisionDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemRevisionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type QueryFindFirstMixdownArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownDistinctFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type QueryFindFirstProjectArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectDistinctFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type QueryFindFirstTagArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<Array<TagDistinctFieldEnum>>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type QueryFindFirstUsersOnProjectsArgs = {
  cursor?: Maybe<UsersOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnProjectsDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type QueryFindManyUsersOnProjectsArgs = {
  cursor?: Maybe<UsersOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnProjectsDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type QueryFindOneUsersOnProjectsArgs = {
  where: UsersOnProjectsWhereUniqueInput;
};

export type QueryMixdownArgs = {
  where: MixdownWhereUniqueInput;
};

export type QueryMixdownsArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownDistinctFieldEnum>>;
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
  distinct?: Maybe<Array<ProjectDistinctFieldEnum>>;
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
  distinct?: Maybe<Array<TagDistinctFieldEnum>>;
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
  distinct?: Maybe<Array<UserDistinctFieldEnum>>;
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

export type Tag = {
  __typename?: 'Tag';
  User?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type TagCreateInput = {
  id?: Maybe<Scalars['String']>;
  User?: Maybe<UserCreateOneWithoutInterestsInput>;
  value: Scalars['String'];
};

export type TagCreateManyWithoutUserInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  create?: Maybe<Array<TagCreateWithoutUserInput>>;
};

export type TagCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export enum TagDistinctFieldEnum {
  Id = 'id',
  UserId = 'userId',
  Value = 'value',
}

export type TagListRelationFilter = {
  every?: Maybe<TagWhereInput>;
  none?: Maybe<TagWhereInput>;
  some?: Maybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
};

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

export type TagUpdateManyDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  create?: Maybe<Array<TagCreateWithoutUserInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TagUpdateManyWithWhereNestedInput = {
  data: TagUpdateManyDataInput;
  where: TagScalarWhereInput;
};

export type TagUpdateWithoutUserDataInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateWithWhereUniqueWithoutUserInput = {
  data: TagUpdateWithoutUserDataInput;
  where: TagWhereUniqueInput;
};

export type TagUpsertWithWhereUniqueWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  update: TagUpdateWithoutUserDataInput;
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
  handle?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interests?: Maybe<Array<Tag>>;
  isMeFollowing?: Maybe<Scalars['Boolean']>;
  isMyself?: Maybe<Scalars['Boolean']>;
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
  distinct?: Maybe<Array<AudioAssetDistinctFieldEnum>>;
  orderBy?: Maybe<Array<AudioAssetOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AudioAssetWhereInput>;
};

export type UserCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type UserCommentLikeArgs = {
  cursor?: Maybe<CommentLikeWhereUniqueInput>;
  distinct?: Maybe<Array<CommentLikeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type UserEarlyAccessCodeArgs = {
  cursor?: Maybe<EarlyAccessCodeWhereUniqueInput>;
  distinct?: Maybe<Array<EarlyAccessCodeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<EarlyAccessCodeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EarlyAccessCodeWhereInput>;
};

export type UserFeedArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type UserFeedItemLikeArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemLikeDistinctFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type UserFollowedByArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type UserFollowingArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type UserInterestsArgs = {
  cursor?: Maybe<TagWhereUniqueInput>;
  distinct?: Maybe<Array<TagDistinctFieldEnum>>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};

export type UserMemberOfBandsArgs = {
  cursor?: Maybe<UsersOnBandsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnBandsDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnBandsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnBandsWhereInput>;
};

export type UserMemberOfProjectsArgs = {
  cursor?: Maybe<UsersOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<UsersOnProjectsDistinctFieldEnum>>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type UserMixdownArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownDistinctFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type UserOwnsBandsArgs = {
  cursor?: Maybe<BandWhereUniqueInput>;
  distinct?: Maybe<Array<BandDistinctFieldEnum>>;
  orderBy?: Maybe<Array<BandOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BandWhereInput>;
};

export type UserOwnsProjectsArgs = {
  cursor?: Maybe<ProjectWhereUniqueInput>;
  distinct?: Maybe<Array<ProjectDistinctFieldEnum>>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  create?: Maybe<Array<UserCreateWithoutAddressInput>>;
};

export type UserCreateManyWithoutFollowedByInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
};

export type UserCreateManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
};

export type UserCreateOneWithoutAudioAssetInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutAudioAssetInput>;
};

export type UserCreateOneWithoutCommentInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCommentInput>;
};

export type UserCreateOneWithoutCommentLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCommentLikeInput>;
};

export type UserCreateOneWithoutFeedInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutFeedInput>;
};

export type UserCreateOneWithoutFeedItemLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutFeedItemLikeInput>;
};

export type UserCreateOneWithoutInterestsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutInterestsInput>;
};

export type UserCreateOneWithoutMemberOfBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutMemberOfBandsInput>;
};

export type UserCreateOneWithoutMemberOfProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutMemberOfProjectsInput>;
};

export type UserCreateOneWithoutMixdownInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutMixdownInput>;
};

export type UserCreateOneWithoutOwnsBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutOwnsBandsInput>;
};

export type UserCreateOneWithoutOwnsProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutOwnsProjectsInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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
  handle?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateManyWithoutUserInput>;
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

export enum UserDistinctFieldEnum {
  AddressId = 'addressId',
  Avatar = 'avatar',
  Bio = 'bio',
  CreatedAt = 'createdAt',
  Email = 'email',
  Handle = 'handle',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  Website = 'website',
}

export type UserIdBandIdCompoundUniqueInput = {
  bandId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserIdCommentIdCompoundUniqueInput = {
  commentId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserIdFeedItemIdCompoundUniqueInput = {
  feedItemId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserIdProjectIdCompoundUniqueInput = {
  projectId: Scalars['String'];
  userId: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserOrderByInput = {
  addressId?: Maybe<SortOrder>;
  avatar?: Maybe<SortOrder>;
  bio?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  handle?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
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

export type UserScalarWhereInput = {
  addressId?: Maybe<StringNullableFilter>;
  AND?: Maybe<Array<UserScalarWhereInput>>;
  avatar?: Maybe<StringNullableFilter>;
  bio?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  handle?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
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
  create?: Maybe<Array<UsersOnBandsCreateWithoutBandInput>>;
};

export type UsersOnBandsCreateManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutUserInput>>;
};

export type UsersOnBandsCreateWithoutBandInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutMemberOfBandsInput;
};

export type UsersOnBandsCreateWithoutUserInput = {
  band: BandCreateOneWithoutMembersInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export enum UsersOnBandsDistinctFieldEnum {
  BandId = 'bandId',
  CreatedAt = 'createdAt',
  UserId = 'userId',
}

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

export type UsersOnBandsScalarWhereInput = {
  AND?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  bandId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  NOT?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  OR?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  userId?: Maybe<StringFilter>;
};

export type UsersOnBandsUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersOnBandsUpdateManyWithoutBandInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutBandInput>>;
  delete?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnBandsUpdateWithWhereUniqueWithoutBandInput>>;
  updateMany?: Maybe<Array<UsersOnBandsUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UsersOnBandsUpsertWithWhereUniqueWithoutBandInput>>;
};

export type UsersOnBandsUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutUserInput>>;
  delete?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnBandsUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UsersOnBandsUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UsersOnBandsUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UsersOnBandsUpdateManyWithWhereNestedInput = {
  data: UsersOnBandsUpdateManyDataInput;
  where: UsersOnBandsScalarWhereInput;
};

export type UsersOnBandsUpdateWithoutBandDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutMemberOfBandsInput>;
};

export type UsersOnBandsUpdateWithoutUserDataInput = {
  band?: Maybe<BandUpdateOneRequiredWithoutMembersInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersOnBandsUpdateWithWhereUniqueWithoutBandInput = {
  data: UsersOnBandsUpdateWithoutBandDataInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsUpdateWithWhereUniqueWithoutUserInput = {
  data: UsersOnBandsUpdateWithoutUserDataInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsUpsertWithWhereUniqueWithoutBandInput = {
  create: UsersOnBandsCreateWithoutBandInput;
  update: UsersOnBandsUpdateWithoutBandDataInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsUpsertWithWhereUniqueWithoutUserInput = {
  create: UsersOnBandsCreateWithoutUserInput;
  update: UsersOnBandsUpdateWithoutUserDataInput;
  where: UsersOnBandsWhereUniqueInput;
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
  userId_bandId?: Maybe<UserIdBandIdCompoundUniqueInput>;
};

export type UsersOnProjects = {
  __typename?: 'UsersOnProjects';
  createdAt: Scalars['Timestamp'];
  project: Project;
  projectId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type UsersOnProjectsCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  project: ProjectCreateOneWithoutMembersInput;
  user: UserCreateOneWithoutMemberOfProjectsInput;
};

export type UsersOnProjectsCreateManyWithoutProjectInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutProjectInput>>;
};

export type UsersOnProjectsCreateManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutUserInput>>;
};

export type UsersOnProjectsCreateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateOneWithoutMemberOfProjectsInput;
};

export type UsersOnProjectsCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  project: ProjectCreateOneWithoutMembersInput;
};

export enum UsersOnProjectsDistinctFieldEnum {
  CreatedAt = 'createdAt',
  ProjectId = 'projectId',
  UserId = 'userId',
}

export type UsersOnProjectsListRelationFilter = {
  every?: Maybe<UsersOnProjectsWhereInput>;
  none?: Maybe<UsersOnProjectsWhereInput>;
  some?: Maybe<UsersOnProjectsWhereInput>;
};

export type UsersOnProjectsOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

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

export type UsersOnProjectsUpdateManyDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersOnProjectsUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersOnProjectsUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutProjectInput>>;
  delete?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<UsersOnProjectsUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type UsersOnProjectsUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutUserInput>>;
  delete?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UsersOnProjectsUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UsersOnProjectsUpdateManyWithWhereNestedInput = {
  data: UsersOnProjectsUpdateManyDataInput;
  where: UsersOnProjectsScalarWhereInput;
};

export type UsersOnProjectsUpdateWithoutProjectDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutMemberOfProjectsInput>;
};

export type UsersOnProjectsUpdateWithoutUserDataInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMembersInput>;
};

export type UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput = {
  data: UsersOnProjectsUpdateWithoutProjectDataInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput = {
  data: UsersOnProjectsUpdateWithoutUserDataInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpsertWithWhereUniqueWithoutProjectInput = {
  create: UsersOnProjectsCreateWithoutProjectInput;
  update: UsersOnProjectsUpdateWithoutProjectDataInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput = {
  create: UsersOnProjectsCreateWithoutUserInput;
  update: UsersOnProjectsUpdateWithoutUserDataInput;
  where: UsersOnProjectsWhereUniqueInput;
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
  userId_projectId?: Maybe<UserIdProjectIdCompoundUniqueInput>;
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateManyDataInput = {
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithoutAddressInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutAddressInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type UserUpdateManyWithoutFollowedByInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowedByInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowedByInput>>;
};

export type UserUpdateManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  data: UserUpdateManyDataInput;
  where: UserScalarWhereInput;
};

export type UserUpdateOneRequiredWithoutCommentInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCommentInput>;
  update?: Maybe<UserUpdateWithoutCommentDataInput>;
  upsert?: Maybe<UserUpsertWithoutCommentInput>;
};

export type UserUpdateOneRequiredWithoutCommentLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCommentLikeInput>;
  update?: Maybe<UserUpdateWithoutCommentLikeDataInput>;
  upsert?: Maybe<UserUpsertWithoutCommentLikeInput>;
};

export type UserUpdateOneRequiredWithoutFeedInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutFeedInput>;
  update?: Maybe<UserUpdateWithoutFeedDataInput>;
  upsert?: Maybe<UserUpsertWithoutFeedInput>;
};

export type UserUpdateOneRequiredWithoutFeedItemLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutFeedItemLikeInput>;
  update?: Maybe<UserUpdateWithoutFeedItemLikeDataInput>;
  upsert?: Maybe<UserUpsertWithoutFeedItemLikeInput>;
};

export type UserUpdateOneRequiredWithoutMemberOfBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutMemberOfBandsInput>;
  update?: Maybe<UserUpdateWithoutMemberOfBandsDataInput>;
  upsert?: Maybe<UserUpsertWithoutMemberOfBandsInput>;
};

export type UserUpdateOneRequiredWithoutMemberOfProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutMemberOfProjectsInput>;
  update?: Maybe<UserUpdateWithoutMemberOfProjectsDataInput>;
  upsert?: Maybe<UserUpsertWithoutMemberOfProjectsInput>;
};

export type UserUpdateOneRequiredWithoutMixdownInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutMixdownInput>;
  update?: Maybe<UserUpdateWithoutMixdownDataInput>;
  upsert?: Maybe<UserUpsertWithoutMixdownInput>;
};

export type UserUpdateOneRequiredWithoutOwnsBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutOwnsBandsInput>;
  update?: Maybe<UserUpdateWithoutOwnsBandsDataInput>;
  upsert?: Maybe<UserUpsertWithoutOwnsBandsInput>;
};

export type UserUpdateOneRequiredWithoutOwnsProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutOwnsProjectsInput>;
  update?: Maybe<UserUpdateWithoutOwnsProjectsDataInput>;
  upsert?: Maybe<UserUpsertWithoutOwnsProjectsInput>;
};

export type UserUpdateOneWithoutAudioAssetInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutAudioAssetInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutAudioAssetDataInput>;
  upsert?: Maybe<UserUpsertWithoutAudioAssetInput>;
};

export type UserUpdateOneWithoutInterestsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutInterestsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutInterestsDataInput>;
  upsert?: Maybe<UserUpsertWithoutInterestsInput>;
};

export type UserUpdateWithoutAddressDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutAudioAssetDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutCommentDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutCommentLikeDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutFeedDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutFeedItemLikeDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutFollowedByDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutFollowingDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutInterestsDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
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

export type UserUpdateWithoutMemberOfBandsDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutMemberOfProjectsDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutMixdownDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutOwnsBandsDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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

export type UserUpdateWithoutOwnsProjectsDataInput = {
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
  handle?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
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
  data: UserUpdateWithoutAddressDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowedByInput = {
  data: UserUpdateWithoutFollowedByDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutFollowingInput = {
  data: UserUpdateWithoutFollowingDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAudioAssetInput = {
  create: UserCreateWithoutAudioAssetInput;
  update: UserUpdateWithoutAudioAssetDataInput;
};

export type UserUpsertWithoutCommentInput = {
  create: UserCreateWithoutCommentInput;
  update: UserUpdateWithoutCommentDataInput;
};

export type UserUpsertWithoutCommentLikeInput = {
  create: UserCreateWithoutCommentLikeInput;
  update: UserUpdateWithoutCommentLikeDataInput;
};

export type UserUpsertWithoutFeedInput = {
  create: UserCreateWithoutFeedInput;
  update: UserUpdateWithoutFeedDataInput;
};

export type UserUpsertWithoutFeedItemLikeInput = {
  create: UserCreateWithoutFeedItemLikeInput;
  update: UserUpdateWithoutFeedItemLikeDataInput;
};

export type UserUpsertWithoutInterestsInput = {
  create: UserCreateWithoutInterestsInput;
  update: UserUpdateWithoutInterestsDataInput;
};

export type UserUpsertWithoutMemberOfBandsInput = {
  create: UserCreateWithoutMemberOfBandsInput;
  update: UserUpdateWithoutMemberOfBandsDataInput;
};

export type UserUpsertWithoutMemberOfProjectsInput = {
  create: UserCreateWithoutMemberOfProjectsInput;
  update: UserUpdateWithoutMemberOfProjectsDataInput;
};

export type UserUpsertWithoutMixdownInput = {
  create: UserCreateWithoutMixdownInput;
  update: UserUpdateWithoutMixdownDataInput;
};

export type UserUpsertWithoutOwnsBandsInput = {
  create: UserCreateWithoutOwnsBandsInput;
  update: UserUpdateWithoutOwnsBandsDataInput;
};

export type UserUpsertWithoutOwnsProjectsInput = {
  create: UserCreateWithoutOwnsProjectsInput;
  update: UserUpdateWithoutOwnsProjectsDataInput;
};

export type UserUpsertWithWhereUniqueWithoutAddressInput = {
  create: UserCreateWithoutAddressInput;
  update: UserUpdateWithoutAddressDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowedByInput = {
  create: UserCreateWithoutFollowedByInput;
  update: UserUpdateWithoutFollowedByDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  update: UserUpdateWithoutFollowingDataInput;
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
  handle?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  interests?: Maybe<TagListRelationFilter>;
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
  name?: Maybe<Scalars['String']>;
};

export type BlockCommentFragment = { __typename?: 'Comment' } & Pick<
  Comment,
  'id' | 'text' | 'updatedAt' | 'likeCount' | 'isMeLiking'
> & { author: { __typename?: 'User' } & Pick<User, 'avatar' | 'name' | 'handle'> };

export type CreatedCommentFragment = { __typename?: 'Comment' } & Pick<Comment, 'id' | 'likeCount' | 'updatedAt'>;

export type FirstLevelCommentsQueryVariables = Exact<{
  feedItemId: Scalars['String'];
}>;

export type FirstLevelCommentsQuery = { __typename?: 'Query' } & {
  comments: Array<{ __typename?: 'Comment' } & Pick<Comment, 'commentCount'> & BlockCommentFragment>;
};

export type SecondLevelCommentsQueryVariables = Exact<{
  commentId: Scalars['String'];
}>;

export type SecondLevelCommentsQuery = { __typename?: 'Query' } & {
  comments: Array<{ __typename?: 'Comment' } & BlockCommentFragment>;
};

export type PostCommentToFeedItemMutationVariables = Exact<{
  feedItemId: Scalars['String'];
  text: Scalars['String'];
  me?: Maybe<Scalars['String']>;
}>;

export type PostCommentToFeedItemMutation = { __typename?: 'Mutation' } & {
  createComment: { __typename?: 'Comment' } & Pick<Comment, 'commentCount'> & CreatedCommentFragment;
};

export type PostCommentToCommentMutationVariables = Exact<{
  commentId: Scalars['String'];
  text: Scalars['String'];
  me?: Maybe<Scalars['String']>;
}>;

export type PostCommentToCommentMutation = { __typename?: 'Mutation' } & {
  createComment: { __typename?: 'Comment' } & CreatedCommentFragment;
};

export type LikeCommentMutationVariables = Exact<{
  commentId: Scalars['String'];
  me?: Maybe<Scalars['String']>;
}>;

export type LikeCommentMutation = { __typename?: 'Mutation' } & {
  createCommentLike: { __typename?: 'CommentLike' } & Pick<CommentLike, 'commentId'>;
};

export type UnlikeCommentMutationVariables = Exact<{
  commentId: Scalars['String'];
  me: Scalars['String'];
}>;

export type UnlikeCommentMutation = { __typename?: 'Mutation' } & {
  deleteCommentLike?: Maybe<{ __typename?: 'CommentLike' } & Pick<CommentLike, 'commentId'>>;
};

export type FeedCommentFragment = { __typename?: 'Comment' } & Pick<
  Comment,
  'id' | 'likeCount' | 'text' | 'updatedAt'
> & { author: { __typename?: 'User' } & FeedUserFragment };

export type DisplayFeedItemFragment = { __typename?: 'FeedItem' } & Pick<
  FeedItem,
  'id' | 'likeCount' | 'commentCount' | 'updatedAt' | 'text' | 'isMeLiking'
> & {
    author: { __typename?: 'User' } & FeedUserFragment;
    mixdown?: Maybe<{ __typename?: 'Mixdown' } & FeedMixdownFragment>;
  };

export type FeedItemsByHandleQueryVariables = Exact<{
  handle: Scalars['String'];
  cursor?: Maybe<Scalars['String']>;
}>;

export type FeedItemsByHandleQuery = { __typename?: 'Query' } & {
  feedItems: Array<{ __typename?: 'FeedItem' } & Pick<FeedItem, 'id'>>;
};

export type MyFeedQueryVariables = Exact<{
  me?: Maybe<Scalars['String']>;
}>;

export type MyFeedQuery = { __typename?: 'Query' } & {
  feedItems: Array<{ __typename?: 'FeedItem' } & Pick<FeedItem, 'id'>>;
};

export type FeedItemByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type FeedItemByIdQuery = { __typename?: 'Query' } & {
  feedItem?: Maybe<{ __typename?: 'FeedItem' } & DisplayFeedItemFragment>;
};

export type MyLikesQueryVariables = Exact<{
  me?: Maybe<Scalars['String']>;
}>;

export type MyLikesQuery = { __typename?: 'Query' } & {
  feedItemLikes: Array<{ __typename?: 'FeedItemLike' } & Pick<FeedItemLike, 'feedItemId'>>;
};

export type CreateFeedItemMutationVariables = Exact<{
  text: Scalars['String'];
  mixdownId?: Maybe<Scalars['String']>;
  me?: Maybe<Scalars['String']>;
}>;

export type CreateFeedItemMutation = { __typename?: 'Mutation' } & {
  createFeedItem: { __typename?: 'FeedItem' } & Pick<
    FeedItem,
    'id' | 'likeCount' | 'commentCount' | 'createdAt' | 'updatedAt'
  >;
};

export type CreateTextFeedItemMutationVariables = Exact<{
  text: Scalars['String'];
  me?: Maybe<Scalars['String']>;
}>;

export type CreateTextFeedItemMutation = { __typename?: 'Mutation' } & {
  createFeedItem: { __typename?: 'FeedItem' } & Pick<
    FeedItem,
    'id' | 'likeCount' | 'commentCount' | 'createdAt' | 'updatedAt'
  > & { mixdown?: Maybe<{ __typename?: 'Mixdown' } & FeedMixdownFragment> };
};

export type LikeFeedItemMutationVariables = Exact<{
  feedItemId: Scalars['String'];
  me?: Maybe<Scalars['String']>;
}>;

export type LikeFeedItemMutation = { __typename?: 'Mutation' } & {
  createFeedItemLike: { __typename?: 'FeedItemLike' } & Pick<FeedItemLike, 'feedItemId'>;
};

export type UnlikeFeedItemMutationVariables = Exact<{
  feedItemId: Scalars['String'];
  me: Scalars['String'];
}>;

export type UnlikeFeedItemMutation = { __typename?: 'Mutation' } & {
  deleteFeedItemLike?: Maybe<{ __typename?: 'FeedItemLike' } & Pick<FeedItemLike, 'feedItemId'>>;
};

export type FeedMixdownFragment = { __typename?: 'Mixdown' } & Pick<Mixdown, 'id' | 'listens' | 'createdAt'> & {
    audio: { __typename?: 'AudioAsset' } & Pick<AudioAsset, 'location'>;
    project: { __typename?: 'Project' } & Pick<Project, 'id' | 'name' | 'isPrivate'>;
  };

export type PreviewMixdownFragment = { __typename?: 'Mixdown' } & Pick<
  Mixdown,
  'id' | 'version' | 'name' | 'createdAt' | 'listens'
> & { audio: { __typename?: 'AudioAsset' } & Pick<AudioAsset, 'id' | 'isPublic' | 'location'> };

export type MyMixdownsQueryVariables = Exact<{ [key: string]: never }>;

export type MyMixdownsQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & {
    ownsProjects?: Maybe<
      Array<
        { __typename?: 'Project' } & Pick<Project, 'id' | 'name' | 'isPrivate' | 'updatedAt'> & {
            mixdowns?: Maybe<Array<{ __typename?: 'Mixdown' } & PreviewMixdownFragment>>;
          }
      >
    >;
  };
};

export type MixdownQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type MixdownQuery = { __typename?: 'Query' } & {
  mixdown?: Maybe<
    { __typename?: 'Mixdown' } & Pick<Mixdown, 'id' | 'listens' | 'createdAt' | 'name' | 'version'> & {
        audio: { __typename?: 'AudioAsset' } & Pick<AudioAsset, 'id' | 'isPublic' | 'location'>;
        project: { __typename?: 'Project' } & Pick<Project, 'name'> & {
            owner: { __typename?: 'User' } & Pick<User, 'id' | 'avatar' | 'name'>;
          };
      }
  >;
};

export type SessionListDataFragment = { __typename?: 'Project' } & Pick<
  Project,
  'id' | 'createdAt' | 'name' | 'updatedAt'
>;

export type MyProjectsQueryVariables = Exact<{
  me?: Maybe<Scalars['String']>;
}>;

export type MyProjectsQuery = { __typename?: 'Query' } & {
  projects: Array<{ __typename?: 'Project' } & SessionListDataFragment>;
};

export type PublicProjectsByHandleQueryVariables = Exact<{
  handle: Scalars['String'];
}>;

export type PublicProjectsByHandleQuery = { __typename?: 'Query' } & {
  projects: Array<{ __typename?: 'Project' } & SessionListDataFragment>;
};

export type CreateProjectMutationVariables = Exact<{
  name?: Scalars['String'];
  me?: Maybe<Scalars['String']>;
}>;

export type CreateProjectMutation = { __typename?: 'Mutation' } & {
  createProject: { __typename?: 'Project' } & SessionListDataFragment;
};

export type UserLinkFragment = { __typename?: 'User' } & Pick<User, 'id' | 'handle' | 'name' | 'avatar'>;

export type FeedUserFragment = { __typename?: 'User' } & Pick<User, 'isMeFollowing'> & UserLinkFragment;

export type BaseProfileFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'email' | 'avatar' | 'bio' | 'website' | 'handle' | 'followedByCount' | 'followingCount' | 'isMyself'
> & {
    followedBy?: Maybe<Array<{ __typename?: 'User' } & UserLinkFragment>>;
    interests?: Maybe<Array<{ __typename?: 'Tag' } & Pick<Tag, 'value'>>>;
  };

export type ProfileFragment = { __typename?: 'User' } & Pick<User, 'isMeFollowing'> & BaseProfileFragment;

export type MeProfileFragment = { __typename?: 'User' } & BaseProfileFragment;

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & { me: { __typename?: 'User' } & MeProfileFragment };

export type UserProfileByHandleQueryVariables = Exact<{
  handle: Scalars['String'];
}>;

export type UserProfileByHandleQuery = { __typename?: 'Query' } & {
  user?: Maybe<{ __typename?: 'User' } & ProfileFragment>;
};

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type UserQuery = { __typename?: 'Query' } & {
  user?: Maybe<
    { __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email' | 'avatar' | 'followedByCount' | 'followingCount'>
  >;
};

export type MyFollowersQueryVariables = Exact<{ [key: string]: never }>;

export type MyFollowersQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & { followedBy?: Maybe<Array<{ __typename?: 'User' } & FeedUserFragment>> };
};

export type MeFollowingQueryVariables = Exact<{ [key: string]: never }>;

export type MeFollowingQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & { following?: Maybe<Array<{ __typename?: 'User' } & FeedUserFragment>> };
};

export type FollowRecommendationsQueryVariables = Exact<{ [key: string]: never }>;

export type FollowRecommendationsQuery = { __typename?: 'Query' } & {
  followRecommendations: Array<
    { __typename?: 'User' } & Pick<User, 'followingCount' | 'isMeFollowing'> & UserLinkFragment
  >;
};

export type SignUpUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  accessCode: Scalars['String'];
}>;

export type SignUpUserMutation = { __typename?: 'Mutation' } & {
  signUpUser: { __typename?: 'User' } & Pick<User, 'id' | 'name'>;
};

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
  me?: Maybe<Scalars['String']>;
}>;

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
};

export type FollowUserMutationVariables = Exact<{
  handle: Scalars['String'];
  me?: Maybe<Scalars['String']>;
}>;

export type FollowUserMutation = { __typename?: 'Mutation' } & {
  updateUser?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
};

export type UnfollowUserMutationVariables = Exact<{
  handle: Scalars['String'];
  me?: Maybe<Scalars['String']>;
}>;

export type UnfollowUserMutation = { __typename?: 'Mutation' } & {
  updateUser?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
};

export const BlockCommentFragmentDoc = gql`
  fragment BlockComment on Comment {
    author {
      avatar
      name
      handle
    }
    id
    text
    updatedAt
    likeCount
    isMeLiking
  }
`;
export const CreatedCommentFragmentDoc = gql`
  fragment CreatedComment on Comment {
    id
    likeCount
    updatedAt
  }
`;
export const UserLinkFragmentDoc = gql`
  fragment UserLink on User {
    id
    handle
    name
    avatar
  }
`;
export const FeedUserFragmentDoc = gql`
  fragment FeedUser on User {
    ...UserLink
    isMeFollowing
  }
  ${UserLinkFragmentDoc}
`;
export const FeedCommentFragmentDoc = gql`
  fragment FeedComment on Comment {
    id
    likeCount
    text
    updatedAt
    author {
      ...FeedUser
    }
  }
  ${FeedUserFragmentDoc}
`;
export const FeedMixdownFragmentDoc = gql`
  fragment FeedMixdown on Mixdown {
    id
    audio {
      location
    }
    listens
    createdAt
    project {
      id
      name
      isPrivate
    }
  }
`;
export const DisplayFeedItemFragmentDoc = gql`
  fragment DisplayFeedItem on FeedItem {
    id
    likeCount
    commentCount
    updatedAt
    text
    isMeLiking
    author {
      ...FeedUser
    }
    mixdown {
      ...FeedMixdown
    }
  }
  ${FeedUserFragmentDoc}
  ${FeedMixdownFragmentDoc}
`;
export const PreviewMixdownFragmentDoc = gql`
  fragment PreviewMixdown on Mixdown {
    id
    version
    name
    audio {
      id
      isPublic
      location
    }
    createdAt
    listens
  }
`;
export const SessionListDataFragmentDoc = gql`
  fragment SessionListData on Project {
    id
    createdAt
    name
    updatedAt
  }
`;
export const BaseProfileFragmentDoc = gql`
  fragment BaseProfile on User {
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
    followedBy(take: 3) {
      ...UserLink
    }
    interests {
      value
    }
  }
  ${UserLinkFragmentDoc}
`;
export const ProfileFragmentDoc = gql`
  fragment Profile on User {
    ...BaseProfile
    isMeFollowing
  }
  ${BaseProfileFragmentDoc}
`;
export const MeProfileFragmentDoc = gql`
  fragment MeProfile on User {
    ...BaseProfile
  }
  ${BaseProfileFragmentDoc}
`;
export const FirstLevelCommentsDocument = gql`
  query firstLevelComments($feedItemId: String!) {
    comments(where: { feedItemId: { equals: $feedItemId } }, take: 2, orderBy: [{ createdAt: desc }]) {
      ...BlockComment
      commentCount
    }
  }
  ${BlockCommentFragmentDoc}
`;

/**
 * __useFirstLevelCommentsQuery__
 *
 * To run a query within a React component, call `useFirstLevelCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstLevelCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstLevelCommentsQuery({
 *   variables: {
 *      feedItemId: // value for 'feedItemId'
 *   },
 * });
 */
export function useFirstLevelCommentsQuery(
  baseOptions?: Apollo.QueryHookOptions<FirstLevelCommentsQuery, FirstLevelCommentsQueryVariables>,
) {
  return Apollo.useQuery<FirstLevelCommentsQuery, FirstLevelCommentsQueryVariables>(
    FirstLevelCommentsDocument,
    baseOptions,
  );
}
export function useFirstLevelCommentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FirstLevelCommentsQuery, FirstLevelCommentsQueryVariables>,
) {
  return Apollo.useLazyQuery<FirstLevelCommentsQuery, FirstLevelCommentsQueryVariables>(
    FirstLevelCommentsDocument,
    baseOptions,
  );
}
export type FirstLevelCommentsQueryHookResult = ReturnType<typeof useFirstLevelCommentsQuery>;
export type FirstLevelCommentsLazyQueryHookResult = ReturnType<typeof useFirstLevelCommentsLazyQuery>;
export type FirstLevelCommentsQueryResult = Apollo.QueryResult<
  FirstLevelCommentsQuery,
  FirstLevelCommentsQueryVariables
>;
export const SecondLevelCommentsDocument = gql`
  query secondLevelComments($commentId: String!) {
    comments(where: { parentComment: { is: { id: { equals: $commentId } } } }, take: 2) {
      ...BlockComment
    }
  }
  ${BlockCommentFragmentDoc}
`;

/**
 * __useSecondLevelCommentsQuery__
 *
 * To run a query within a React component, call `useSecondLevelCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSecondLevelCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSecondLevelCommentsQuery({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useSecondLevelCommentsQuery(
  baseOptions?: Apollo.QueryHookOptions<SecondLevelCommentsQuery, SecondLevelCommentsQueryVariables>,
) {
  return Apollo.useQuery<SecondLevelCommentsQuery, SecondLevelCommentsQueryVariables>(
    SecondLevelCommentsDocument,
    baseOptions,
  );
}
export function useSecondLevelCommentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SecondLevelCommentsQuery, SecondLevelCommentsQueryVariables>,
) {
  return Apollo.useLazyQuery<SecondLevelCommentsQuery, SecondLevelCommentsQueryVariables>(
    SecondLevelCommentsDocument,
    baseOptions,
  );
}
export type SecondLevelCommentsQueryHookResult = ReturnType<typeof useSecondLevelCommentsQuery>;
export type SecondLevelCommentsLazyQueryHookResult = ReturnType<typeof useSecondLevelCommentsLazyQuery>;
export type SecondLevelCommentsQueryResult = Apollo.QueryResult<
  SecondLevelCommentsQuery,
  SecondLevelCommentsQueryVariables
>;
export const PostCommentToFeedItemDocument = gql`
  mutation postCommentToFeedItem($feedItemId: String!, $text: String!, $me: String) {
    createComment(data: { text: $text, feedItem: { connect: { id: $feedItemId } }, author: { connect: { id: $me } } }) {
      ...CreatedComment
      commentCount
    }
  }
  ${CreatedCommentFragmentDoc}
`;
export type PostCommentToFeedItemMutationFn = Apollo.MutationFunction<
  PostCommentToFeedItemMutation,
  PostCommentToFeedItemMutationVariables
>;

/**
 * __usePostCommentToFeedItemMutation__
 *
 * To run a mutation, you first call `usePostCommentToFeedItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCommentToFeedItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCommentToFeedItemMutation, { data, loading, error }] = usePostCommentToFeedItemMutation({
 *   variables: {
 *      feedItemId: // value for 'feedItemId'
 *      text: // value for 'text'
 *      me: // value for 'me'
 *   },
 * });
 */
export function usePostCommentToFeedItemMutation(
  baseOptions?: Apollo.MutationHookOptions<PostCommentToFeedItemMutation, PostCommentToFeedItemMutationVariables>,
) {
  return Apollo.useMutation<PostCommentToFeedItemMutation, PostCommentToFeedItemMutationVariables>(
    PostCommentToFeedItemDocument,
    baseOptions,
  );
}
export type PostCommentToFeedItemMutationHookResult = ReturnType<typeof usePostCommentToFeedItemMutation>;
export type PostCommentToFeedItemMutationResult = Apollo.MutationResult<PostCommentToFeedItemMutation>;
export type PostCommentToFeedItemMutationOptions = Apollo.BaseMutationOptions<
  PostCommentToFeedItemMutation,
  PostCommentToFeedItemMutationVariables
>;
export const PostCommentToCommentDocument = gql`
  mutation postCommentToComment($commentId: String!, $text: String!, $me: String) {
    createComment(
      data: { text: $text, parentComment: { connect: { id: $commentId } }, author: { connect: { id: $me } } }
    ) {
      ...CreatedComment
    }
  }
  ${CreatedCommentFragmentDoc}
`;
export type PostCommentToCommentMutationFn = Apollo.MutationFunction<
  PostCommentToCommentMutation,
  PostCommentToCommentMutationVariables
>;

/**
 * __usePostCommentToCommentMutation__
 *
 * To run a mutation, you first call `usePostCommentToCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCommentToCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCommentToCommentMutation, { data, loading, error }] = usePostCommentToCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      text: // value for 'text'
 *      me: // value for 'me'
 *   },
 * });
 */
export function usePostCommentToCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<PostCommentToCommentMutation, PostCommentToCommentMutationVariables>,
) {
  return Apollo.useMutation<PostCommentToCommentMutation, PostCommentToCommentMutationVariables>(
    PostCommentToCommentDocument,
    baseOptions,
  );
}
export type PostCommentToCommentMutationHookResult = ReturnType<typeof usePostCommentToCommentMutation>;
export type PostCommentToCommentMutationResult = Apollo.MutationResult<PostCommentToCommentMutation>;
export type PostCommentToCommentMutationOptions = Apollo.BaseMutationOptions<
  PostCommentToCommentMutation,
  PostCommentToCommentMutationVariables
>;
export const LikeCommentDocument = gql`
  mutation likeComment($commentId: String!, $me: String) {
    createCommentLike(data: { comment: { connect: { id: $commentId } }, user: { connect: { id: $me } } }) {
      commentId
    }
  }
`;
export type LikeCommentMutationFn = Apollo.MutationFunction<LikeCommentMutation, LikeCommentMutationVariables>;

/**
 * __useLikeCommentMutation__
 *
 * To run a mutation, you first call `useLikeCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeCommentMutation, { data, loading, error }] = useLikeCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useLikeCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<LikeCommentMutation, LikeCommentMutationVariables>,
) {
  return Apollo.useMutation<LikeCommentMutation, LikeCommentMutationVariables>(LikeCommentDocument, baseOptions);
}
export type LikeCommentMutationHookResult = ReturnType<typeof useLikeCommentMutation>;
export type LikeCommentMutationResult = Apollo.MutationResult<LikeCommentMutation>;
export type LikeCommentMutationOptions = Apollo.BaseMutationOptions<LikeCommentMutation, LikeCommentMutationVariables>;
export const UnlikeCommentDocument = gql`
  mutation unlikeComment($commentId: String!, $me: String!) {
    deleteCommentLike(where: { userId_commentId: { commentId: $commentId, userId: $me } }) {
      commentId
    }
  }
`;
export type UnlikeCommentMutationFn = Apollo.MutationFunction<UnlikeCommentMutation, UnlikeCommentMutationVariables>;

/**
 * __useUnlikeCommentMutation__
 *
 * To run a mutation, you first call `useUnlikeCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeCommentMutation, { data, loading, error }] = useUnlikeCommentMutation({
 *   variables: {
 *      commentId: // value for 'commentId'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useUnlikeCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<UnlikeCommentMutation, UnlikeCommentMutationVariables>,
) {
  return Apollo.useMutation<UnlikeCommentMutation, UnlikeCommentMutationVariables>(UnlikeCommentDocument, baseOptions);
}
export type UnlikeCommentMutationHookResult = ReturnType<typeof useUnlikeCommentMutation>;
export type UnlikeCommentMutationResult = Apollo.MutationResult<UnlikeCommentMutation>;
export type UnlikeCommentMutationOptions = Apollo.BaseMutationOptions<
  UnlikeCommentMutation,
  UnlikeCommentMutationVariables
>;
export const FeedItemsByHandleDocument = gql`
  query feedItemsByHandle($handle: String!, $cursor: String) {
    feedItems(
      where: { author: { is: { handle: { equals: $handle } } } }
      cursor: { id: $cursor }
      take: 8
      orderBy: [{ createdAt: desc }]
    ) {
      id
    }
  }
`;

/**
 * __useFeedItemsByHandleQuery__
 *
 * To run a query within a React component, call `useFeedItemsByHandleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedItemsByHandleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedItemsByHandleQuery({
 *   variables: {
 *      handle: // value for 'handle'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useFeedItemsByHandleQuery(
  baseOptions?: Apollo.QueryHookOptions<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>,
) {
  return Apollo.useQuery<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>(
    FeedItemsByHandleDocument,
    baseOptions,
  );
}
export function useFeedItemsByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>,
) {
  return Apollo.useLazyQuery<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>(
    FeedItemsByHandleDocument,
    baseOptions,
  );
}
export type FeedItemsByHandleQueryHookResult = ReturnType<typeof useFeedItemsByHandleQuery>;
export type FeedItemsByHandleLazyQueryHookResult = ReturnType<typeof useFeedItemsByHandleLazyQuery>;
export type FeedItemsByHandleQueryResult = Apollo.QueryResult<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>;
export const MyFeedDocument = gql`
  query myFeed($me: String) {
    feedItems(
      where: {
        OR: [
          { author: { is: { followedBy: { some: { id: { equals: $me } } } } } }
          { author: { is: { id: { equals: $me } } } }
        ]
      }
      orderBy: [{ createdAt: desc }]
      take: 5
    ) {
      id
    }
  }
`;

/**
 * __useMyFeedQuery__
 *
 * To run a query within a React component, call `useMyFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFeedQuery({
 *   variables: {
 *      me: // value for 'me'
 *   },
 * });
 */
export function useMyFeedQuery(baseOptions?: Apollo.QueryHookOptions<MyFeedQuery, MyFeedQueryVariables>) {
  return Apollo.useQuery<MyFeedQuery, MyFeedQueryVariables>(MyFeedDocument, baseOptions);
}
export function useMyFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyFeedQuery, MyFeedQueryVariables>) {
  return Apollo.useLazyQuery<MyFeedQuery, MyFeedQueryVariables>(MyFeedDocument, baseOptions);
}
export type MyFeedQueryHookResult = ReturnType<typeof useMyFeedQuery>;
export type MyFeedLazyQueryHookResult = ReturnType<typeof useMyFeedLazyQuery>;
export type MyFeedQueryResult = Apollo.QueryResult<MyFeedQuery, MyFeedQueryVariables>;
export const FeedItemByIdDocument = gql`
  query feedItemById($id: String!) {
    feedItem(where: { id: $id }) {
      ...DisplayFeedItem
    }
  }
  ${DisplayFeedItemFragmentDoc}
`;

/**
 * __useFeedItemByIdQuery__
 *
 * To run a query within a React component, call `useFeedItemByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedItemByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedItemByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFeedItemByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<FeedItemByIdQuery, FeedItemByIdQueryVariables>,
) {
  return Apollo.useQuery<FeedItemByIdQuery, FeedItemByIdQueryVariables>(FeedItemByIdDocument, baseOptions);
}
export function useFeedItemByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedItemByIdQuery, FeedItemByIdQueryVariables>,
) {
  return Apollo.useLazyQuery<FeedItemByIdQuery, FeedItemByIdQueryVariables>(FeedItemByIdDocument, baseOptions);
}
export type FeedItemByIdQueryHookResult = ReturnType<typeof useFeedItemByIdQuery>;
export type FeedItemByIdLazyQueryHookResult = ReturnType<typeof useFeedItemByIdLazyQuery>;
export type FeedItemByIdQueryResult = Apollo.QueryResult<FeedItemByIdQuery, FeedItemByIdQueryVariables>;
export const MyLikesDocument = gql`
  query myLikes($me: String) {
    feedItemLikes(where: { userId: { equals: $me } }, orderBy: [{ createdAt: desc }]) {
      feedItemId
    }
  }
`;

/**
 * __useMyLikesQuery__
 *
 * To run a query within a React component, call `useMyLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyLikesQuery({
 *   variables: {
 *      me: // value for 'me'
 *   },
 * });
 */
export function useMyLikesQuery(baseOptions?: Apollo.QueryHookOptions<MyLikesQuery, MyLikesQueryVariables>) {
  return Apollo.useQuery<MyLikesQuery, MyLikesQueryVariables>(MyLikesDocument, baseOptions);
}
export function useMyLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyLikesQuery, MyLikesQueryVariables>) {
  return Apollo.useLazyQuery<MyLikesQuery, MyLikesQueryVariables>(MyLikesDocument, baseOptions);
}
export type MyLikesQueryHookResult = ReturnType<typeof useMyLikesQuery>;
export type MyLikesLazyQueryHookResult = ReturnType<typeof useMyLikesLazyQuery>;
export type MyLikesQueryResult = Apollo.QueryResult<MyLikesQuery, MyLikesQueryVariables>;
export const CreateFeedItemDocument = gql`
  mutation createFeedItem($text: String!, $mixdownId: String, $me: String) {
    createFeedItem(data: { text: $text, mixdown: { connect: { id: $mixdownId } }, author: { connect: { id: $me } } }) {
      id
      likeCount
      commentCount
      createdAt
      updatedAt
    }
  }
`;
export type CreateFeedItemMutationFn = Apollo.MutationFunction<CreateFeedItemMutation, CreateFeedItemMutationVariables>;

/**
 * __useCreateFeedItemMutation__
 *
 * To run a mutation, you first call `useCreateFeedItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFeedItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFeedItemMutation, { data, loading, error }] = useCreateFeedItemMutation({
 *   variables: {
 *      text: // value for 'text'
 *      mixdownId: // value for 'mixdownId'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useCreateFeedItemMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateFeedItemMutation, CreateFeedItemMutationVariables>,
) {
  return Apollo.useMutation<CreateFeedItemMutation, CreateFeedItemMutationVariables>(
    CreateFeedItemDocument,
    baseOptions,
  );
}
export type CreateFeedItemMutationHookResult = ReturnType<typeof useCreateFeedItemMutation>;
export type CreateFeedItemMutationResult = Apollo.MutationResult<CreateFeedItemMutation>;
export type CreateFeedItemMutationOptions = Apollo.BaseMutationOptions<
  CreateFeedItemMutation,
  CreateFeedItemMutationVariables
>;
export const CreateTextFeedItemDocument = gql`
  mutation createTextFeedItem($text: String!, $me: String) {
    createFeedItem(data: { text: $text, author: { connect: { id: $me } } }) {
      id
      likeCount
      commentCount
      createdAt
      updatedAt
      mixdown {
        ...FeedMixdown
      }
    }
  }
  ${FeedMixdownFragmentDoc}
`;
export type CreateTextFeedItemMutationFn = Apollo.MutationFunction<
  CreateTextFeedItemMutation,
  CreateTextFeedItemMutationVariables
>;

/**
 * __useCreateTextFeedItemMutation__
 *
 * To run a mutation, you first call `useCreateTextFeedItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTextFeedItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTextFeedItemMutation, { data, loading, error }] = useCreateTextFeedItemMutation({
 *   variables: {
 *      text: // value for 'text'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useCreateTextFeedItemMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateTextFeedItemMutation, CreateTextFeedItemMutationVariables>,
) {
  return Apollo.useMutation<CreateTextFeedItemMutation, CreateTextFeedItemMutationVariables>(
    CreateTextFeedItemDocument,
    baseOptions,
  );
}
export type CreateTextFeedItemMutationHookResult = ReturnType<typeof useCreateTextFeedItemMutation>;
export type CreateTextFeedItemMutationResult = Apollo.MutationResult<CreateTextFeedItemMutation>;
export type CreateTextFeedItemMutationOptions = Apollo.BaseMutationOptions<
  CreateTextFeedItemMutation,
  CreateTextFeedItemMutationVariables
>;
export const LikeFeedItemDocument = gql`
  mutation likeFeedItem($feedItemId: String!, $me: String) {
    createFeedItemLike(data: { feedItem: { connect: { id: $feedItemId } }, user: { connect: { id: $me } } }) {
      feedItemId
    }
  }
`;
export type LikeFeedItemMutationFn = Apollo.MutationFunction<LikeFeedItemMutation, LikeFeedItemMutationVariables>;

/**
 * __useLikeFeedItemMutation__
 *
 * To run a mutation, you first call `useLikeFeedItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeFeedItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeFeedItemMutation, { data, loading, error }] = useLikeFeedItemMutation({
 *   variables: {
 *      feedItemId: // value for 'feedItemId'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useLikeFeedItemMutation(
  baseOptions?: Apollo.MutationHookOptions<LikeFeedItemMutation, LikeFeedItemMutationVariables>,
) {
  return Apollo.useMutation<LikeFeedItemMutation, LikeFeedItemMutationVariables>(LikeFeedItemDocument, baseOptions);
}
export type LikeFeedItemMutationHookResult = ReturnType<typeof useLikeFeedItemMutation>;
export type LikeFeedItemMutationResult = Apollo.MutationResult<LikeFeedItemMutation>;
export type LikeFeedItemMutationOptions = Apollo.BaseMutationOptions<
  LikeFeedItemMutation,
  LikeFeedItemMutationVariables
>;
export const UnlikeFeedItemDocument = gql`
  mutation unlikeFeedItem($feedItemId: String!, $me: String!) {
    deleteFeedItemLike(where: { userId_feedItemId: { feedItemId: $feedItemId, userId: $me } }) {
      feedItemId
    }
  }
`;
export type UnlikeFeedItemMutationFn = Apollo.MutationFunction<UnlikeFeedItemMutation, UnlikeFeedItemMutationVariables>;

/**
 * __useUnlikeFeedItemMutation__
 *
 * To run a mutation, you first call `useUnlikeFeedItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeFeedItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeFeedItemMutation, { data, loading, error }] = useUnlikeFeedItemMutation({
 *   variables: {
 *      feedItemId: // value for 'feedItemId'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useUnlikeFeedItemMutation(
  baseOptions?: Apollo.MutationHookOptions<UnlikeFeedItemMutation, UnlikeFeedItemMutationVariables>,
) {
  return Apollo.useMutation<UnlikeFeedItemMutation, UnlikeFeedItemMutationVariables>(
    UnlikeFeedItemDocument,
    baseOptions,
  );
}
export type UnlikeFeedItemMutationHookResult = ReturnType<typeof useUnlikeFeedItemMutation>;
export type UnlikeFeedItemMutationResult = Apollo.MutationResult<UnlikeFeedItemMutation>;
export type UnlikeFeedItemMutationOptions = Apollo.BaseMutationOptions<
  UnlikeFeedItemMutation,
  UnlikeFeedItemMutationVariables
>;
export const MyMixdownsDocument = gql`
  query myMixdowns {
    me {
      ownsProjects {
        id
        name
        isPrivate
        updatedAt
        mixdowns {
          ...PreviewMixdown
        }
      }
    }
  }
  ${PreviewMixdownFragmentDoc}
`;

/**
 * __useMyMixdownsQuery__
 *
 * To run a query within a React component, call `useMyMixdownsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyMixdownsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyMixdownsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyMixdownsQuery(baseOptions?: Apollo.QueryHookOptions<MyMixdownsQuery, MyMixdownsQueryVariables>) {
  return Apollo.useQuery<MyMixdownsQuery, MyMixdownsQueryVariables>(MyMixdownsDocument, baseOptions);
}
export function useMyMixdownsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyMixdownsQuery, MyMixdownsQueryVariables>,
) {
  return Apollo.useLazyQuery<MyMixdownsQuery, MyMixdownsQueryVariables>(MyMixdownsDocument, baseOptions);
}
export type MyMixdownsQueryHookResult = ReturnType<typeof useMyMixdownsQuery>;
export type MyMixdownsLazyQueryHookResult = ReturnType<typeof useMyMixdownsLazyQuery>;
export type MyMixdownsQueryResult = Apollo.QueryResult<MyMixdownsQuery, MyMixdownsQueryVariables>;
export const MixdownDocument = gql`
  query mixdown($id: String!) {
    mixdown(where: { id: $id }) {
      id
      audio {
        id
        isPublic
        location
      }
      listens
      createdAt
      name
      version
      project {
        name
        owner {
          id
          avatar
          name
        }
      }
    }
  }
`;

/**
 * __useMixdownQuery__
 *
 * To run a query within a React component, call `useMixdownQuery` and pass it any options that fit your needs.
 * When your component renders, `useMixdownQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMixdownQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMixdownQuery(baseOptions?: Apollo.QueryHookOptions<MixdownQuery, MixdownQueryVariables>) {
  return Apollo.useQuery<MixdownQuery, MixdownQueryVariables>(MixdownDocument, baseOptions);
}
export function useMixdownLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MixdownQuery, MixdownQueryVariables>) {
  return Apollo.useLazyQuery<MixdownQuery, MixdownQueryVariables>(MixdownDocument, baseOptions);
}
export type MixdownQueryHookResult = ReturnType<typeof useMixdownQuery>;
export type MixdownLazyQueryHookResult = ReturnType<typeof useMixdownLazyQuery>;
export type MixdownQueryResult = Apollo.QueryResult<MixdownQuery, MixdownQueryVariables>;
export const MyProjectsDocument = gql`
  query myProjects($me: String) {
    projects(where: { owner: { is: { id: { equals: $me } } } }) {
      ...SessionListData
    }
  }
  ${SessionListDataFragmentDoc}
`;

/**
 * __useMyProjectsQuery__
 *
 * To run a query within a React component, call `useMyProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyProjectsQuery({
 *   variables: {
 *      me: // value for 'me'
 *   },
 * });
 */
export function useMyProjectsQuery(baseOptions?: Apollo.QueryHookOptions<MyProjectsQuery, MyProjectsQueryVariables>) {
  return Apollo.useQuery<MyProjectsQuery, MyProjectsQueryVariables>(MyProjectsDocument, baseOptions);
}
export function useMyProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyProjectsQuery, MyProjectsQueryVariables>,
) {
  return Apollo.useLazyQuery<MyProjectsQuery, MyProjectsQueryVariables>(MyProjectsDocument, baseOptions);
}
export type MyProjectsQueryHookResult = ReturnType<typeof useMyProjectsQuery>;
export type MyProjectsLazyQueryHookResult = ReturnType<typeof useMyProjectsLazyQuery>;
export type MyProjectsQueryResult = Apollo.QueryResult<MyProjectsQuery, MyProjectsQueryVariables>;
export const PublicProjectsByHandleDocument = gql`
  query publicProjectsByHandle($handle: String!) {
    projects(where: { owner: { is: { handle: { equals: $handle } } }, isPrivate: { equals: false } }) {
      ...SessionListData
    }
  }
  ${SessionListDataFragmentDoc}
`;

/**
 * __usePublicProjectsByHandleQuery__
 *
 * To run a query within a React component, call `usePublicProjectsByHandleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicProjectsByHandleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicProjectsByHandleQuery({
 *   variables: {
 *      handle: // value for 'handle'
 *   },
 * });
 */
export function usePublicProjectsByHandleQuery(
  baseOptions?: Apollo.QueryHookOptions<PublicProjectsByHandleQuery, PublicProjectsByHandleQueryVariables>,
) {
  return Apollo.useQuery<PublicProjectsByHandleQuery, PublicProjectsByHandleQueryVariables>(
    PublicProjectsByHandleDocument,
    baseOptions,
  );
}
export function usePublicProjectsByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PublicProjectsByHandleQuery, PublicProjectsByHandleQueryVariables>,
) {
  return Apollo.useLazyQuery<PublicProjectsByHandleQuery, PublicProjectsByHandleQueryVariables>(
    PublicProjectsByHandleDocument,
    baseOptions,
  );
}
export type PublicProjectsByHandleQueryHookResult = ReturnType<typeof usePublicProjectsByHandleQuery>;
export type PublicProjectsByHandleLazyQueryHookResult = ReturnType<typeof usePublicProjectsByHandleLazyQuery>;
export type PublicProjectsByHandleQueryResult = Apollo.QueryResult<
  PublicProjectsByHandleQuery,
  PublicProjectsByHandleQueryVariables
>;
export const CreateProjectDocument = gql`
  mutation createProject($name: String! = "New Syra Project", $me: String) {
    createProject(data: { name: $name, isPrivate: false, owner: { connect: { id: $me } } }) {
      ...SessionListData
    }
  }
  ${SessionListDataFragmentDoc}
`;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      name: // value for 'name'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>,
) {
  return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, baseOptions);
}
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
export const MeDocument = gql`
  query me {
    me {
      ...MeProfile
    }
  }
  ${MeProfileFragmentDoc}
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
export const UserProfileByHandleDocument = gql`
  query userProfileByHandle($handle: String!) {
    user(where: { handle: $handle }) {
      ...Profile
    }
  }
  ${ProfileFragmentDoc}
`;

/**
 * __useUserProfileByHandleQuery__
 *
 * To run a query within a React component, call `useUserProfileByHandleQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileByHandleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileByHandleQuery({
 *   variables: {
 *      handle: // value for 'handle'
 *   },
 * });
 */
export function useUserProfileByHandleQuery(
  baseOptions?: Apollo.QueryHookOptions<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>,
) {
  return Apollo.useQuery<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>(
    UserProfileByHandleDocument,
    baseOptions,
  );
}
export function useUserProfileByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>,
) {
  return Apollo.useLazyQuery<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>(
    UserProfileByHandleDocument,
    baseOptions,
  );
}
export type UserProfileByHandleQueryHookResult = ReturnType<typeof useUserProfileByHandleQuery>;
export type UserProfileByHandleLazyQueryHookResult = ReturnType<typeof useUserProfileByHandleLazyQuery>;
export type UserProfileByHandleQueryResult = Apollo.QueryResult<
  UserProfileByHandleQuery,
  UserProfileByHandleQueryVariables
>;
export const UserDocument = gql`
  query user($id: String!) {
    user(where: { id: $id }) {
      id
      name
      email
      avatar
      followedByCount
      followingCount
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const MyFollowersDocument = gql`
  query myFollowers {
    me {
      followedBy {
        ...FeedUser
      }
    }
  }
  ${FeedUserFragmentDoc}
`;

/**
 * __useMyFollowersQuery__
 *
 * To run a query within a React component, call `useMyFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFollowersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFollowersQuery(
  baseOptions?: Apollo.QueryHookOptions<MyFollowersQuery, MyFollowersQueryVariables>,
) {
  return Apollo.useQuery<MyFollowersQuery, MyFollowersQueryVariables>(MyFollowersDocument, baseOptions);
}
export function useMyFollowersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyFollowersQuery, MyFollowersQueryVariables>,
) {
  return Apollo.useLazyQuery<MyFollowersQuery, MyFollowersQueryVariables>(MyFollowersDocument, baseOptions);
}
export type MyFollowersQueryHookResult = ReturnType<typeof useMyFollowersQuery>;
export type MyFollowersLazyQueryHookResult = ReturnType<typeof useMyFollowersLazyQuery>;
export type MyFollowersQueryResult = Apollo.QueryResult<MyFollowersQuery, MyFollowersQueryVariables>;
export const MeFollowingDocument = gql`
  query meFollowing {
    me {
      following {
        ...FeedUser
      }
    }
  }
  ${FeedUserFragmentDoc}
`;

/**
 * __useMeFollowingQuery__
 *
 * To run a query within a React component, call `useMeFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeFollowingQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeFollowingQuery(
  baseOptions?: Apollo.QueryHookOptions<MeFollowingQuery, MeFollowingQueryVariables>,
) {
  return Apollo.useQuery<MeFollowingQuery, MeFollowingQueryVariables>(MeFollowingDocument, baseOptions);
}
export function useMeFollowingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeFollowingQuery, MeFollowingQueryVariables>,
) {
  return Apollo.useLazyQuery<MeFollowingQuery, MeFollowingQueryVariables>(MeFollowingDocument, baseOptions);
}
export type MeFollowingQueryHookResult = ReturnType<typeof useMeFollowingQuery>;
export type MeFollowingLazyQueryHookResult = ReturnType<typeof useMeFollowingLazyQuery>;
export type MeFollowingQueryResult = Apollo.QueryResult<MeFollowingQuery, MeFollowingQueryVariables>;
export const FollowRecommendationsDocument = gql`
  query followRecommendations {
    followRecommendations {
      ...UserLink
      followingCount
      isMeFollowing
    }
  }
  ${UserLinkFragmentDoc}
`;

/**
 * __useFollowRecommendationsQuery__
 *
 * To run a query within a React component, call `useFollowRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowRecommendationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowRecommendationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFollowRecommendationsQuery(
  baseOptions?: Apollo.QueryHookOptions<FollowRecommendationsQuery, FollowRecommendationsQueryVariables>,
) {
  return Apollo.useQuery<FollowRecommendationsQuery, FollowRecommendationsQueryVariables>(
    FollowRecommendationsDocument,
    baseOptions,
  );
}
export function useFollowRecommendationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FollowRecommendationsQuery, FollowRecommendationsQueryVariables>,
) {
  return Apollo.useLazyQuery<FollowRecommendationsQuery, FollowRecommendationsQueryVariables>(
    FollowRecommendationsDocument,
    baseOptions,
  );
}
export type FollowRecommendationsQueryHookResult = ReturnType<typeof useFollowRecommendationsQuery>;
export type FollowRecommendationsLazyQueryHookResult = ReturnType<typeof useFollowRecommendationsLazyQuery>;
export type FollowRecommendationsQueryResult = Apollo.QueryResult<
  FollowRecommendationsQuery,
  FollowRecommendationsQueryVariables
>;
export const SignUpUserDocument = gql`
  mutation signUpUser($name: String!, $email: String!, $password: String!, $accessCode: String!) {
    signUpUser(data: { name: $name, email: $email, password: $password, accessCode: $accessCode }) {
      id
      name
    }
  }
`;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      accessCode: // value for 'accessCode'
 *   },
 * });
 */
export function useSignUpUserMutation(
  baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>,
) {
  return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, baseOptions);
}
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const UpdateUserDocument = gql`
  mutation updateUser($data: UserUpdateInput!, $me: String) {
    updateUser(where: { id: $me }, data: $data) {
      id
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>,
) {
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const FollowUserDocument = gql`
  mutation followUser($handle: String!, $me: String) {
    updateUser(where: { handle: $handle }, data: { followedBy: { connect: [{ id: $me }] } }) {
      id
    }
  }
`;
export type FollowUserMutationFn = Apollo.MutationFunction<FollowUserMutation, FollowUserMutationVariables>;

/**
 * __useFollowUserMutation__
 *
 * To run a mutation, you first call `useFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followUserMutation, { data, loading, error }] = useFollowUserMutation({
 *   variables: {
 *      handle: // value for 'handle'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useFollowUserMutation(
  baseOptions?: Apollo.MutationHookOptions<FollowUserMutation, FollowUserMutationVariables>,
) {
  return Apollo.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument, baseOptions);
}
export type FollowUserMutationHookResult = ReturnType<typeof useFollowUserMutation>;
export type FollowUserMutationResult = Apollo.MutationResult<FollowUserMutation>;
export type FollowUserMutationOptions = Apollo.BaseMutationOptions<FollowUserMutation, FollowUserMutationVariables>;
export const UnfollowUserDocument = gql`
  mutation unfollowUser($handle: String!, $me: String) {
    updateUser(where: { handle: $handle }, data: { followedBy: { disconnect: [{ id: $me }] } }) {
      id
    }
  }
`;
export type UnfollowUserMutationFn = Apollo.MutationFunction<UnfollowUserMutation, UnfollowUserMutationVariables>;

/**
 * __useUnfollowUserMutation__
 *
 * To run a mutation, you first call `useUnfollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowUserMutation, { data, loading, error }] = useUnfollowUserMutation({
 *   variables: {
 *      handle: // value for 'handle'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useUnfollowUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UnfollowUserMutation, UnfollowUserMutationVariables>,
) {
  return Apollo.useMutation<UnfollowUserMutation, UnfollowUserMutationVariables>(UnfollowUserDocument, baseOptions);
}
export type UnfollowUserMutationHookResult = ReturnType<typeof useUnfollowUserMutation>;
export type UnfollowUserMutationResult = Apollo.MutationResult<UnfollowUserMutation>;
export type UnfollowUserMutationOptions = Apollo.BaseMutationOptions<
  UnfollowUserMutation,
  UnfollowUserMutationVariables
>;
