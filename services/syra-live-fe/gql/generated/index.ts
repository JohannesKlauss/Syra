import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
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
  User: Array<User>;
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  state: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
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
  zip?: Maybe<Scalars['Float']>;
};

export type AddressCountAggregate = {
  __typename?: 'AddressCountAggregate';
  _all: Scalars['Int'];
  addressLine1: Scalars['Int'];
  addressLine2: Scalars['Int'];
  city: Scalars['Int'];
  country: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  state: Scalars['Int'];
  updatedAt: Scalars['Int'];
  zip: Scalars['Int'];
};

export type AddressCreateInput = {
  User?: Maybe<UserCreateNestedManyWithoutAddressInput>;
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

export type AddressCreateManyInput = {
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

export type AddressCreateNestedOneWithoutUserInput = {
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

export type AddressGroupBy = {
  __typename?: 'AddressGroupBy';
  _avg?: Maybe<AddressAvgAggregate>;
  _count?: Maybe<AddressCountAggregate>;
  _max?: Maybe<AddressMaxAggregate>;
  _min?: Maybe<AddressMinAggregate>;
  _sum?: Maybe<AddressSumAggregate>;
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
  state: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
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
  zip?: Maybe<Scalars['Int']>;
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
  zip?: Maybe<Scalars['Int']>;
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

export type AddressScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<AddressScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<AddressScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<AddressScalarWhereWithAggregatesInput>>;
  addressLine1?: Maybe<StringWithAggregatesFilter>;
  addressLine2?: Maybe<StringNullableWithAggregatesFilter>;
  city?: Maybe<StringWithAggregatesFilter>;
  country?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  state?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  zip?: Maybe<IntWithAggregatesFilter>;
};

export type AddressSumAggregate = {
  __typename?: 'AddressSumAggregate';
  zip?: Maybe<Scalars['Int']>;
};

export type AddressUpdateInput = {
  User?: Maybe<UserUpdateManyWithoutAddressInput>;
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
  AND?: Maybe<Array<AddressWhereInput>>;
  NOT?: Maybe<Array<AddressWhereInput>>;
  OR?: Maybe<Array<AddressWhereInput>>;
  User?: Maybe<UserListRelationFilter>;
  addressLine1?: Maybe<StringFilter>;
  addressLine2?: Maybe<StringNullableFilter>;
  city?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  state?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  zip?: Maybe<IntFilter>;
};

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAddress = {
  __typename?: 'AggregateAddress';
  _avg?: Maybe<AddressAvgAggregate>;
  _count?: Maybe<AddressCountAggregate>;
  _max?: Maybe<AddressMaxAggregate>;
  _min?: Maybe<AddressMinAggregate>;
  _sum?: Maybe<AddressSumAggregate>;
};

export type AggregateBand = {
  __typename?: 'AggregateBand';
  _count?: Maybe<BandCountAggregate>;
  _max?: Maybe<BandMaxAggregate>;
  _min?: Maybe<BandMinAggregate>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
};

export type AggregateCommentLike = {
  __typename?: 'AggregateCommentLike';
  _count?: Maybe<CommentLikeCountAggregate>;
  _max?: Maybe<CommentLikeMaxAggregate>;
  _min?: Maybe<CommentLikeMinAggregate>;
};

export type AggregateFeedItem = {
  __typename?: 'AggregateFeedItem';
  _count?: Maybe<FeedItemCountAggregate>;
  _max?: Maybe<FeedItemMaxAggregate>;
  _min?: Maybe<FeedItemMinAggregate>;
};

export type AggregateFeedItemLike = {
  __typename?: 'AggregateFeedItemLike';
  _count?: Maybe<FeedItemLikeCountAggregate>;
  _max?: Maybe<FeedItemLikeMaxAggregate>;
  _min?: Maybe<FeedItemLikeMinAggregate>;
};

export type AggregateFeedItemRevision = {
  __typename?: 'AggregateFeedItemRevision';
  _count?: Maybe<FeedItemRevisionCountAggregate>;
  _max?: Maybe<FeedItemRevisionMaxAggregate>;
  _min?: Maybe<FeedItemRevisionMinAggregate>;
};

export type AggregateIssue = {
  __typename?: 'AggregateIssue';
  _count?: Maybe<IssueCountAggregate>;
  _max?: Maybe<IssueMaxAggregate>;
  _min?: Maybe<IssueMinAggregate>;
};

export type AggregateMixdown = {
  __typename?: 'AggregateMixdown';
  _avg?: Maybe<MixdownAvgAggregate>;
  _count?: Maybe<MixdownCountAggregate>;
  _max?: Maybe<MixdownMaxAggregate>;
  _min?: Maybe<MixdownMinAggregate>;
  _sum?: Maybe<MixdownSumAggregate>;
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  _count?: Maybe<ProjectCountAggregate>;
  _max?: Maybe<ProjectMaxAggregate>;
  _min?: Maybe<ProjectMinAggregate>;
};

export type AggregateTag = {
  __typename?: 'AggregateTag';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateUsersOnProjects = {
  __typename?: 'AggregateUsersOnProjects';
  _count?: Maybe<UsersOnProjectsCountAggregate>;
  _max?: Maybe<UsersOnProjectsMaxAggregate>;
  _min?: Maybe<UsersOnProjectsMinAggregate>;
};

export type AggregateVersionInformation = {
  __typename?: 'AggregateVersionInformation';
  _count?: Maybe<VersionInformationCountAggregate>;
  _max?: Maybe<VersionInformationMaxAggregate>;
  _min?: Maybe<VersionInformationMinAggregate>;
};

export type Asset = {
  __typename?: 'Asset';
  Mixdown: Array<Mixdown>;
  id: Scalars['String'];
  isPublic?: Maybe<Scalars['Boolean']>;
  location: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  usedInProjects: Array<AssetsOnProjects>;
  userId?: Maybe<Scalars['String']>;
};

export type AssetMixdownArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownScalarFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type AssetUsedInProjectsArgs = {
  cursor?: Maybe<AssetsOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<AssetsOnProjectsScalarFieldEnum>>;
  orderBy?: Maybe<Array<AssetsOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetsOnProjectsWhereInput>;
};

export type AssetCreateManyOwnerInput = {
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  location: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
};

export type AssetCreateManyOwnerInputEnvelope = {
  data: Array<AssetCreateManyOwnerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AssetCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AssetCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<AssetCreateWithoutOwnerInput>>;
  createMany?: Maybe<AssetCreateManyOwnerInputEnvelope>;
};

export type AssetCreateNestedOneWithoutMixdownInput = {
  connect?: Maybe<AssetWhereUniqueInput>;
  connectOrCreate?: Maybe<AssetCreateOrConnectWithoutMixdownInput>;
  create?: Maybe<AssetCreateWithoutMixdownInput>;
};

export type AssetCreateNestedOneWithoutUsedInProjectsInput = {
  connect?: Maybe<AssetWhereUniqueInput>;
  connectOrCreate?: Maybe<AssetCreateOrConnectWithoutUsedInProjectsInput>;
  create?: Maybe<AssetCreateWithoutUsedInProjectsInput>;
};

export type AssetCreateOrConnectWithoutMixdownInput = {
  create: AssetCreateWithoutMixdownInput;
  where: AssetWhereUniqueInput;
};

export type AssetCreateOrConnectWithoutOwnerInput = {
  create: AssetCreateWithoutOwnerInput;
  where: AssetWhereUniqueInput;
};

export type AssetCreateOrConnectWithoutUsedInProjectsInput = {
  create: AssetCreateWithoutUsedInProjectsInput;
  where: AssetWhereUniqueInput;
};

export type AssetCreateWithoutMixdownInput = {
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  location: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutAssetInput>;
  usedInProjects?: Maybe<AssetsOnProjectsCreateNestedManyWithoutAssetInput>;
};

export type AssetCreateWithoutOwnerInput = {
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutAudioInput>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  location: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  usedInProjects?: Maybe<AssetsOnProjectsCreateNestedManyWithoutAssetInput>;
};

export type AssetCreateWithoutUsedInProjectsInput = {
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutAudioInput>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  location: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  owner?: Maybe<UserCreateNestedOneWithoutAssetInput>;
};

export type AssetListRelationFilter = {
  every?: Maybe<AssetWhereInput>;
  none?: Maybe<AssetWhereInput>;
  some?: Maybe<AssetWhereInput>;
};

export type AssetOrderByInput = {
  id?: Maybe<SortOrder>;
  isPublic?: Maybe<SortOrder>;
  location?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AssetRelationFilter = {
  is?: Maybe<AssetWhereInput>;
  isNot?: Maybe<AssetWhereInput>;
};

export enum AssetScalarFieldEnum {
  Id = 'id',
  IsPublic = 'isPublic',
  Location = 'location',
  MimeType = 'mimeType',
  Name = 'name',
  UserId = 'userId',
}

export type AssetScalarWhereInput = {
  AND?: Maybe<Array<AssetScalarWhereInput>>;
  NOT?: Maybe<Array<AssetScalarWhereInput>>;
  OR?: Maybe<Array<AssetScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  isPublic?: Maybe<BoolNullableFilter>;
  location?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
};

export type AssetUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  mimeType?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AssetUpdateManyWithWhereWithoutOwnerInput = {
  data: AssetUpdateManyMutationInput;
  where: AssetScalarWhereInput;
};

export type AssetUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AssetCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<AssetCreateWithoutOwnerInput>>;
  createMany?: Maybe<AssetCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AssetScalarWhereInput>>;
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  update?: Maybe<Array<AssetUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<AssetUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<AssetUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type AssetUpdateOneRequiredWithoutMixdownInput = {
  connect?: Maybe<AssetWhereUniqueInput>;
  connectOrCreate?: Maybe<AssetCreateOrConnectWithoutMixdownInput>;
  create?: Maybe<AssetCreateWithoutMixdownInput>;
  update?: Maybe<AssetUpdateWithoutMixdownInput>;
  upsert?: Maybe<AssetUpsertWithoutMixdownInput>;
};

export type AssetUpdateOneRequiredWithoutUsedInProjectsInput = {
  connect?: Maybe<AssetWhereUniqueInput>;
  connectOrCreate?: Maybe<AssetCreateOrConnectWithoutUsedInProjectsInput>;
  create?: Maybe<AssetCreateWithoutUsedInProjectsInput>;
  update?: Maybe<AssetUpdateWithoutUsedInProjectsInput>;
  upsert?: Maybe<AssetUpsertWithoutUsedInProjectsInput>;
};

export type AssetUpdateWithWhereUniqueWithoutOwnerInput = {
  data: AssetUpdateWithoutOwnerInput;
  where: AssetWhereUniqueInput;
};

export type AssetUpdateWithoutMixdownInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  mimeType?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutAssetInput>;
  usedInProjects?: Maybe<AssetsOnProjectsUpdateManyWithoutAssetInput>;
};

export type AssetUpdateWithoutOwnerInput = {
  Mixdown?: Maybe<MixdownUpdateManyWithoutAudioInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  mimeType?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  usedInProjects?: Maybe<AssetsOnProjectsUpdateManyWithoutAssetInput>;
};

export type AssetUpdateWithoutUsedInProjectsInput = {
  Mixdown?: Maybe<MixdownUpdateManyWithoutAudioInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPublic?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  location?: Maybe<StringFieldUpdateOperationsInput>;
  mimeType?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  owner?: Maybe<UserUpdateOneWithoutAssetInput>;
};

export type AssetUpsertWithWhereUniqueWithoutOwnerInput = {
  create: AssetCreateWithoutOwnerInput;
  update: AssetUpdateWithoutOwnerInput;
  where: AssetWhereUniqueInput;
};

export type AssetUpsertWithoutMixdownInput = {
  create: AssetCreateWithoutMixdownInput;
  update: AssetUpdateWithoutMixdownInput;
};

export type AssetUpsertWithoutUsedInProjectsInput = {
  create: AssetCreateWithoutUsedInProjectsInput;
  update: AssetUpdateWithoutUsedInProjectsInput;
};

export type AssetWhereInput = {
  AND?: Maybe<Array<AssetWhereInput>>;
  Mixdown?: Maybe<MixdownListRelationFilter>;
  NOT?: Maybe<Array<AssetWhereInput>>;
  OR?: Maybe<Array<AssetWhereInput>>;
  id?: Maybe<StringFilter>;
  isPublic?: Maybe<BoolNullableFilter>;
  location?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  owner?: Maybe<UserRelationFilter>;
  usedInProjects?: Maybe<AssetsOnProjectsListRelationFilter>;
  userId?: Maybe<StringNullableFilter>;
};

export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AssetsOnProjects = {
  __typename?: 'AssetsOnProjects';
  assetId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  projectId: Scalars['String'];
};

export type AssetsOnProjectsAssetIdProjectIdCompoundUniqueInput = {
  assetId: Scalars['String'];
  projectId: Scalars['String'];
};

export type AssetsOnProjectsCreateManyAssetInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  projectId: Scalars['String'];
};

export type AssetsOnProjectsCreateManyAssetInputEnvelope = {
  data: Array<AssetsOnProjectsCreateManyAssetInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AssetsOnProjectsCreateManyProjectInput = {
  assetId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export type AssetsOnProjectsCreateManyProjectInputEnvelope = {
  data: Array<AssetsOnProjectsCreateManyProjectInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AssetsOnProjectsCreateNestedManyWithoutAssetInput = {
  connect?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AssetsOnProjectsCreateOrConnectWithoutAssetInput>>;
  create?: Maybe<Array<AssetsOnProjectsCreateWithoutAssetInput>>;
  createMany?: Maybe<AssetsOnProjectsCreateManyAssetInputEnvelope>;
};

export type AssetsOnProjectsCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AssetsOnProjectsCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<AssetsOnProjectsCreateWithoutProjectInput>>;
  createMany?: Maybe<AssetsOnProjectsCreateManyProjectInputEnvelope>;
};

export type AssetsOnProjectsCreateOrConnectWithoutAssetInput = {
  create: AssetsOnProjectsCreateWithoutAssetInput;
  where: AssetsOnProjectsWhereUniqueInput;
};

export type AssetsOnProjectsCreateOrConnectWithoutProjectInput = {
  create: AssetsOnProjectsCreateWithoutProjectInput;
  where: AssetsOnProjectsWhereUniqueInput;
};

export type AssetsOnProjectsCreateWithoutAssetInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  project: ProjectCreateNestedOneWithoutAssetsInput;
};

export type AssetsOnProjectsCreateWithoutProjectInput = {
  asset: AssetCreateNestedOneWithoutUsedInProjectsInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export type AssetsOnProjectsListRelationFilter = {
  every?: Maybe<AssetsOnProjectsWhereInput>;
  none?: Maybe<AssetsOnProjectsWhereInput>;
  some?: Maybe<AssetsOnProjectsWhereInput>;
};

export type AssetsOnProjectsOrderByInput = {
  assetId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  projectId?: Maybe<SortOrder>;
};

export enum AssetsOnProjectsScalarFieldEnum {
  AssetId = 'assetId',
  CreatedAt = 'createdAt',
  ProjectId = 'projectId',
}

export type AssetsOnProjectsScalarWhereInput = {
  AND?: Maybe<Array<AssetsOnProjectsScalarWhereInput>>;
  NOT?: Maybe<Array<AssetsOnProjectsScalarWhereInput>>;
  OR?: Maybe<Array<AssetsOnProjectsScalarWhereInput>>;
  assetId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  projectId?: Maybe<StringFilter>;
};

export type AssetsOnProjectsUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssetsOnProjectsUpdateManyWithWhereWithoutAssetInput = {
  data: AssetsOnProjectsUpdateManyMutationInput;
  where: AssetsOnProjectsScalarWhereInput;
};

export type AssetsOnProjectsUpdateManyWithWhereWithoutProjectInput = {
  data: AssetsOnProjectsUpdateManyMutationInput;
  where: AssetsOnProjectsScalarWhereInput;
};

export type AssetsOnProjectsUpdateManyWithoutAssetInput = {
  connect?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AssetsOnProjectsCreateOrConnectWithoutAssetInput>>;
  create?: Maybe<Array<AssetsOnProjectsCreateWithoutAssetInput>>;
  createMany?: Maybe<AssetsOnProjectsCreateManyAssetInputEnvelope>;
  delete?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AssetsOnProjectsScalarWhereInput>>;
  disconnect?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  set?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  update?: Maybe<Array<AssetsOnProjectsUpdateWithWhereUniqueWithoutAssetInput>>;
  updateMany?: Maybe<Array<AssetsOnProjectsUpdateManyWithWhereWithoutAssetInput>>;
  upsert?: Maybe<Array<AssetsOnProjectsUpsertWithWhereUniqueWithoutAssetInput>>;
};

export type AssetsOnProjectsUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AssetsOnProjectsCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<AssetsOnProjectsCreateWithoutProjectInput>>;
  createMany?: Maybe<AssetsOnProjectsCreateManyProjectInputEnvelope>;
  delete?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AssetsOnProjectsScalarWhereInput>>;
  disconnect?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  set?: Maybe<Array<AssetsOnProjectsWhereUniqueInput>>;
  update?: Maybe<Array<AssetsOnProjectsUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: Maybe<Array<AssetsOnProjectsUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: Maybe<Array<AssetsOnProjectsUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type AssetsOnProjectsUpdateWithWhereUniqueWithoutAssetInput = {
  data: AssetsOnProjectsUpdateWithoutAssetInput;
  where: AssetsOnProjectsWhereUniqueInput;
};

export type AssetsOnProjectsUpdateWithWhereUniqueWithoutProjectInput = {
  data: AssetsOnProjectsUpdateWithoutProjectInput;
  where: AssetsOnProjectsWhereUniqueInput;
};

export type AssetsOnProjectsUpdateWithoutAssetInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutAssetsInput>;
};

export type AssetsOnProjectsUpdateWithoutProjectInput = {
  asset?: Maybe<AssetUpdateOneRequiredWithoutUsedInProjectsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssetsOnProjectsUpsertWithWhereUniqueWithoutAssetInput = {
  create: AssetsOnProjectsCreateWithoutAssetInput;
  update: AssetsOnProjectsUpdateWithoutAssetInput;
  where: AssetsOnProjectsWhereUniqueInput;
};

export type AssetsOnProjectsUpsertWithWhereUniqueWithoutProjectInput = {
  create: AssetsOnProjectsCreateWithoutProjectInput;
  update: AssetsOnProjectsUpdateWithoutProjectInput;
  where: AssetsOnProjectsWhereUniqueInput;
};

export type AssetsOnProjectsWhereInput = {
  AND?: Maybe<Array<AssetsOnProjectsWhereInput>>;
  NOT?: Maybe<Array<AssetsOnProjectsWhereInput>>;
  OR?: Maybe<Array<AssetsOnProjectsWhereInput>>;
  asset?: Maybe<AssetRelationFilter>;
  assetId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  project?: Maybe<ProjectRelationFilter>;
  projectId?: Maybe<StringFilter>;
};

export type AssetsOnProjectsWhereUniqueInput = {
  assetId_projectId?: Maybe<AssetsOnProjectsAssetIdProjectIdCompoundUniqueInput>;
};

export type Band = {
  __typename?: 'Band';
  createdAt: Scalars['Timestamp'];
  createdBy: User;
  id: Scalars['String'];
  isPublic: Scalars['Boolean'];
  members: Array<UsersOnBands>;
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
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isPublic: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BandCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  createdBy: UserCreateNestedOneWithoutOwnsBandsInput;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnBandsCreateNestedManyWithoutBandInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type BandCreateManyCreatedByInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type BandCreateManyCreatedByInputEnvelope = {
  data: Array<BandCreateManyCreatedByInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type BandCreateManyInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
};

export type BandCreateNestedManyWithoutCreatedByInput = {
  connect?: Maybe<Array<BandWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<BandCreateOrConnectWithoutCreatedByInput>>;
  create?: Maybe<Array<BandCreateWithoutCreatedByInput>>;
  createMany?: Maybe<BandCreateManyCreatedByInputEnvelope>;
};

export type BandCreateNestedOneWithoutMembersInput = {
  connect?: Maybe<BandWhereUniqueInput>;
  connectOrCreate?: Maybe<BandCreateOrConnectWithoutMembersInput>;
  create?: Maybe<BandCreateWithoutMembersInput>;
};

export type BandCreateOrConnectWithoutCreatedByInput = {
  create: BandCreateWithoutCreatedByInput;
  where: BandWhereUniqueInput;
};

export type BandCreateOrConnectWithoutMembersInput = {
  create: BandCreateWithoutMembersInput;
  where: BandWhereUniqueInput;
};

export type BandCreateWithoutCreatedByInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnBandsCreateNestedManyWithoutBandInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type BandCreateWithoutMembersInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  createdBy: UserCreateNestedOneWithoutOwnsBandsInput;
  id?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type BandGroupBy = {
  __typename?: 'BandGroupBy';
  _count?: Maybe<BandCountAggregate>;
  _max?: Maybe<BandMaxAggregate>;
  _min?: Maybe<BandMinAggregate>;
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
  userId: Scalars['String'];
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
  NOT?: Maybe<Array<BandScalarWhereInput>>;
  OR?: Maybe<Array<BandScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPublic?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type BandScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<BandScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<BandScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<BandScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  isPublic?: Maybe<BoolWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
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

export type BandUpdateManyWithWhereWithoutCreatedByInput = {
  data: BandUpdateManyMutationInput;
  where: BandScalarWhereInput;
};

export type BandUpdateManyWithoutCreatedByInput = {
  connect?: Maybe<Array<BandWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<BandCreateOrConnectWithoutCreatedByInput>>;
  create?: Maybe<Array<BandCreateWithoutCreatedByInput>>;
  createMany?: Maybe<BandCreateManyCreatedByInputEnvelope>;
  delete?: Maybe<Array<BandWhereUniqueInput>>;
  deleteMany?: Maybe<Array<BandScalarWhereInput>>;
  disconnect?: Maybe<Array<BandWhereUniqueInput>>;
  set?: Maybe<Array<BandWhereUniqueInput>>;
  update?: Maybe<Array<BandUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: Maybe<Array<BandUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: Maybe<Array<BandUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type BandUpdateOneRequiredWithoutMembersInput = {
  connect?: Maybe<BandWhereUniqueInput>;
  connectOrCreate?: Maybe<BandCreateOrConnectWithoutMembersInput>;
  create?: Maybe<BandCreateWithoutMembersInput>;
  update?: Maybe<BandUpdateWithoutMembersInput>;
  upsert?: Maybe<BandUpsertWithoutMembersInput>;
};

export type BandUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: BandUpdateWithoutCreatedByInput;
  where: BandWhereUniqueInput;
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

export type BandUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: BandCreateWithoutCreatedByInput;
  update: BandUpdateWithoutCreatedByInput;
  where: BandWhereUniqueInput;
};

export type BandUpsertWithoutMembersInput = {
  create: BandCreateWithoutMembersInput;
  update: BandUpdateWithoutMembersInput;
};

export type BandWhereInput = {
  AND?: Maybe<Array<BandWhereInput>>;
  NOT?: Maybe<Array<BandWhereInput>>;
  OR?: Maybe<Array<BandWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  createdBy?: Maybe<UserRelationFilter>;
  id?: Maybe<StringFilter>;
  isPublic?: Maybe<BoolFilter>;
  members?: Maybe<UsersOnBandsListRelationFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type BandWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
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

export type BoolNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedBoolNullableFilter>;
  _min?: Maybe<NestedBoolNullableFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
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
  likes: Array<CommentLike>;
  parentComment?: Maybe<Comment>;
  parentCommentId?: Maybe<Scalars['String']>;
  subComments: Array<Comment>;
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
  authorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  feedItemId: Scalars['Int'];
  id: Scalars['Int'];
  parentCommentId: Scalars['Int'];
  text: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CommentCreateInput = {
  author: UserCreateNestedOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateNestedOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateNestedManyWithoutCommentInput>;
  parentComment?: Maybe<CommentCreateNestedOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentCreateNestedManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateManyAuthorInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  parentCommentId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateManyAuthorInputEnvelope = {
  data: Array<CommentCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyFeedItemInput = {
  authorId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  parentCommentId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateManyFeedItemInputEnvelope = {
  data: Array<CommentCreateManyFeedItemInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateManyInput = {
  authorId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  parentCommentId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateManyParentCommentInput = {
  authorId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateManyParentCommentInputEnvelope = {
  data: Array<CommentCreateManyParentCommentInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: Maybe<CommentCreateManyAuthorInputEnvelope>;
};

export type CommentCreateNestedManyWithoutFeedItemInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutFeedItemInput>>;
  create?: Maybe<Array<CommentCreateWithoutFeedItemInput>>;
  createMany?: Maybe<CommentCreateManyFeedItemInputEnvelope>;
};

export type CommentCreateNestedManyWithoutParentCommentInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutParentCommentInput>>;
  create?: Maybe<Array<CommentCreateWithoutParentCommentInput>>;
  createMany?: Maybe<CommentCreateManyParentCommentInputEnvelope>;
};

export type CommentCreateNestedOneWithoutLikesInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutLikesInput>;
  create?: Maybe<CommentCreateWithoutLikesInput>;
};

export type CommentCreateNestedOneWithoutSubCommentsInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutSubCommentsInput>;
  create?: Maybe<CommentCreateWithoutSubCommentsInput>;
};

export type CommentCreateOrConnectWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutFeedItemInput = {
  create: CommentCreateWithoutFeedItemInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutLikesInput = {
  create: CommentCreateWithoutLikesInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutParentCommentInput = {
  create: CommentCreateWithoutParentCommentInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutSubCommentsInput = {
  create: CommentCreateWithoutSubCommentsInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutAuthorInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateNestedOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateNestedManyWithoutCommentInput>;
  parentComment?: Maybe<CommentCreateNestedOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentCreateNestedManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateWithoutFeedItemInput = {
  author: UserCreateNestedOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateNestedManyWithoutCommentInput>;
  parentComment?: Maybe<CommentCreateNestedOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentCreateNestedManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateWithoutLikesInput = {
  author: UserCreateNestedOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateNestedOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  parentComment?: Maybe<CommentCreateNestedOneWithoutSubCommentsInput>;
  subComments?: Maybe<CommentCreateNestedManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateWithoutParentCommentInput = {
  author: UserCreateNestedOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateNestedOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateNestedManyWithoutCommentInput>;
  subComments?: Maybe<CommentCreateNestedManyWithoutParentCommentInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentCreateWithoutSubCommentsInput = {
  author: UserCreateNestedOneWithoutCommentInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem?: Maybe<FeedItemCreateNestedOneWithoutCommentsInput>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<CommentLikeCreateNestedManyWithoutCommentInput>;
  parentComment?: Maybe<CommentCreateNestedOneWithoutSubCommentsInput>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  authorId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  feedItemId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  parentCommentId?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
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
  commentId: Scalars['Int'];
  createdAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CommentLikeCreateInput = {
  comment: CommentCreateNestedOneWithoutLikesInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateNestedOneWithoutCommentLikeInput;
};

export type CommentLikeCreateManyCommentInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
};

export type CommentLikeCreateManyCommentInputEnvelope = {
  data: Array<CommentLikeCreateManyCommentInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentLikeCreateManyInput = {
  commentId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
};

export type CommentLikeCreateManyUserInput = {
  commentId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentLikeCreateManyUserInputEnvelope = {
  data: Array<CommentLikeCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type CommentLikeCreateNestedManyWithoutCommentInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentLikeCreateOrConnectWithoutCommentInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutCommentInput>>;
  createMany?: Maybe<CommentLikeCreateManyCommentInputEnvelope>;
};

export type CommentLikeCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentLikeCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutUserInput>>;
  createMany?: Maybe<CommentLikeCreateManyUserInputEnvelope>;
};

export type CommentLikeCreateOrConnectWithoutCommentInput = {
  create: CommentLikeCreateWithoutCommentInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeCreateOrConnectWithoutUserInput = {
  create: CommentLikeCreateWithoutUserInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeCreateWithoutCommentInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateNestedOneWithoutCommentLikeInput;
};

export type CommentLikeCreateWithoutUserInput = {
  comment: CommentCreateNestedOneWithoutLikesInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentLikeGroupBy = {
  __typename?: 'CommentLikeGroupBy';
  _count?: Maybe<CommentLikeCountAggregate>;
  _max?: Maybe<CommentLikeMaxAggregate>;
  _min?: Maybe<CommentLikeMinAggregate>;
  commentId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  userId: Scalars['String'];
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
  NOT?: Maybe<Array<CommentLikeScalarWhereInput>>;
  OR?: Maybe<Array<CommentLikeScalarWhereInput>>;
  commentId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type CommentLikeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CommentLikeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CommentLikeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CommentLikeScalarWhereWithAggregatesInput>>;
  commentId?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type CommentLikeUpdateInput = {
  comment?: Maybe<CommentUpdateOneRequiredWithoutLikesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentLikeInput>;
};

export type CommentLikeUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentLikeUpdateManyWithWhereWithoutCommentInput = {
  data: CommentLikeUpdateManyMutationInput;
  where: CommentLikeScalarWhereInput;
};

export type CommentLikeUpdateManyWithWhereWithoutUserInput = {
  data: CommentLikeUpdateManyMutationInput;
  where: CommentLikeScalarWhereInput;
};

export type CommentLikeUpdateManyWithoutCommentInput = {
  connect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentLikeCreateOrConnectWithoutCommentInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutCommentInput>>;
  createMany?: Maybe<CommentLikeCreateManyCommentInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<CommentLikeCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<CommentLikeCreateWithoutUserInput>>;
  createMany?: Maybe<CommentLikeCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  set?: Maybe<Array<CommentLikeWhereUniqueInput>>;
  update?: Maybe<Array<CommentLikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CommentLikeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<CommentLikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentLikeUpdateWithWhereUniqueWithoutCommentInput = {
  data: CommentLikeUpdateWithoutCommentInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentLikeUpdateWithoutUserInput;
  where: CommentLikeWhereUniqueInput;
};

export type CommentLikeUpdateWithoutCommentInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutCommentLikeInput>;
};

export type CommentLikeUpdateWithoutUserInput = {
  comment?: Maybe<CommentUpdateOneRequiredWithoutLikesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  NOT?: Maybe<Array<CommentLikeWhereInput>>;
  OR?: Maybe<Array<CommentLikeWhereInput>>;
  comment?: Maybe<CommentRelationFilter>;
  commentId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
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
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  authorId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItemId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  parentCommentId?: Maybe<StringNullableFilter>;
  text?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<CommentScalarWhereWithAggregatesInput>>;
  authorId?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  feedItemId?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  parentCommentId?: Maybe<StringNullableWithAggregatesFilter>;
  text?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
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

export type CommentUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  createMany?: Maybe<CommentCreateManyAuthorInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutFeedItemInput>>;
  create?: Maybe<Array<CommentCreateWithoutFeedItemInput>>;
  createMany?: Maybe<CommentCreateManyFeedItemInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutParentCommentInput>>;
  create?: Maybe<Array<CommentCreateWithoutParentCommentInput>>;
  createMany?: Maybe<CommentCreateManyParentCommentInputEnvelope>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutParentCommentInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutParentCommentInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutParentCommentInput>>;
};

export type CommentUpdateOneRequiredWithoutLikesInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutLikesInput>;
  create?: Maybe<CommentCreateWithoutLikesInput>;
  update?: Maybe<CommentUpdateWithoutLikesInput>;
  upsert?: Maybe<CommentUpsertWithoutLikesInput>;
};

export type CommentUpdateOneWithoutSubCommentsInput = {
  connect?: Maybe<CommentWhereUniqueInput>;
  connectOrCreate?: Maybe<CommentCreateOrConnectWithoutSubCommentsInput>;
  create?: Maybe<CommentCreateWithoutSubCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CommentUpdateWithoutSubCommentsInput>;
  upsert?: Maybe<CommentUpsertWithoutSubCommentsInput>;
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

export type CommentUpsertWithoutLikesInput = {
  create: CommentCreateWithoutLikesInput;
  update: CommentUpdateWithoutLikesInput;
};

export type CommentUpsertWithoutSubCommentsInput = {
  create: CommentCreateWithoutSubCommentsInput;
  update: CommentUpdateWithoutSubCommentsInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItem?: Maybe<FeedItemRelationFilter>;
  feedItemId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  likes?: Maybe<CommentLikeListRelationFilter>;
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

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
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

export type EarlyAccessCodeCreateManyClaimedByInput = {
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isValid?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type EarlyAccessCodeCreateManyClaimedByInputEnvelope = {
  data: Array<EarlyAccessCodeCreateManyClaimedByInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type EarlyAccessCodeCreateNestedManyWithoutClaimedByInput = {
  connect?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<EarlyAccessCodeCreateOrConnectWithoutClaimedByInput>>;
  create?: Maybe<Array<EarlyAccessCodeCreateWithoutClaimedByInput>>;
  createMany?: Maybe<EarlyAccessCodeCreateManyClaimedByInputEnvelope>;
};

export type EarlyAccessCodeCreateOrConnectWithoutClaimedByInput = {
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
  NOT?: Maybe<Array<EarlyAccessCodeScalarWhereInput>>;
  OR?: Maybe<Array<EarlyAccessCodeScalarWhereInput>>;
  code?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isValid?: Maybe<BoolFilter>;
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

export type EarlyAccessCodeUpdateManyWithWhereWithoutClaimedByInput = {
  data: EarlyAccessCodeUpdateManyMutationInput;
  where: EarlyAccessCodeScalarWhereInput;
};

export type EarlyAccessCodeUpdateManyWithoutClaimedByInput = {
  connect?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<EarlyAccessCodeCreateOrConnectWithoutClaimedByInput>>;
  create?: Maybe<Array<EarlyAccessCodeCreateWithoutClaimedByInput>>;
  createMany?: Maybe<EarlyAccessCodeCreateManyClaimedByInputEnvelope>;
  delete?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EarlyAccessCodeScalarWhereInput>>;
  disconnect?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  set?: Maybe<Array<EarlyAccessCodeWhereUniqueInput>>;
  update?: Maybe<Array<EarlyAccessCodeUpdateWithWhereUniqueWithoutClaimedByInput>>;
  updateMany?: Maybe<Array<EarlyAccessCodeUpdateManyWithWhereWithoutClaimedByInput>>;
  upsert?: Maybe<Array<EarlyAccessCodeUpsertWithWhereUniqueWithoutClaimedByInput>>;
};

export type EarlyAccessCodeUpdateWithWhereUniqueWithoutClaimedByInput = {
  data: EarlyAccessCodeUpdateWithoutClaimedByInput;
  where: EarlyAccessCodeWhereUniqueInput;
};

export type EarlyAccessCodeUpdateWithoutClaimedByInput = {
  code?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isValid?: Maybe<BoolFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type EarlyAccessCodeUpsertWithWhereUniqueWithoutClaimedByInput = {
  create: EarlyAccessCodeCreateWithoutClaimedByInput;
  update: EarlyAccessCodeUpdateWithoutClaimedByInput;
  where: EarlyAccessCodeWhereUniqueInput;
};

export type EarlyAccessCodeWhereInput = {
  AND?: Maybe<Array<EarlyAccessCodeWhereInput>>;
  NOT?: Maybe<Array<EarlyAccessCodeWhereInput>>;
  OR?: Maybe<Array<EarlyAccessCodeWhereInput>>;
  claimedBy?: Maybe<UserRelationFilter>;
  code?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isValid?: Maybe<BoolFilter>;
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

export type EnumRoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumRoleFilter>;
  _min?: Maybe<NestedEnumRoleFilter>;
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  author: User;
  authorId: Scalars['String'];
  commentCount?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
  isMeLiking?: Maybe<Scalars['Boolean']>;
  isPublished: Scalars['Boolean'];
  likeCount?: Maybe<Scalars['Int']>;
  likes: Array<FeedItemLike>;
  mixdown?: Maybe<Mixdown>;
  mixdownId?: Maybe<Scalars['String']>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions: Array<FeedItemRevision>;
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
  authorId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isPublished: Scalars['Int'];
  mixdownId: Scalars['Int'];
  publishAt: Scalars['Int'];
  text: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FeedItemCreateInput = {
  author: UserCreateNestedOneWithoutFeedInput;
  comments?: Maybe<CommentCreateNestedManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateNestedManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownCreateNestedOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateNestedManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateManyAuthorInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  mixdownId?: Maybe<Scalars['String']>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateManyAuthorInputEnvelope = {
  data: Array<FeedItemCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FeedItemCreateManyInput = {
  authorId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  mixdownId?: Maybe<Scalars['String']>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateManyMixdownInput = {
  authorId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateManyMixdownInputEnvelope = {
  data: Array<FeedItemCreateManyMixdownInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FeedItemCreateNestedManyWithoutAuthorInput = {
  connect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutAuthorInput>>;
  createMany?: Maybe<FeedItemCreateManyAuthorInputEnvelope>;
};

export type FeedItemCreateNestedManyWithoutMixdownInput = {
  connect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemCreateOrConnectWithoutMixdownInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutMixdownInput>>;
  createMany?: Maybe<FeedItemCreateManyMixdownInputEnvelope>;
};

export type FeedItemCreateNestedOneWithoutCommentsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<FeedItemCreateWithoutCommentsInput>;
};

export type FeedItemCreateNestedOneWithoutLikesInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutLikesInput>;
  create?: Maybe<FeedItemCreateWithoutLikesInput>;
};

export type FeedItemCreateNestedOneWithoutRevisionsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutRevisionsInput>;
  create?: Maybe<FeedItemCreateWithoutRevisionsInput>;
};

export type FeedItemCreateOrConnectWithoutAuthorInput = {
  create: FeedItemCreateWithoutAuthorInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutCommentsInput = {
  create: FeedItemCreateWithoutCommentsInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutLikesInput = {
  create: FeedItemCreateWithoutLikesInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutMixdownInput = {
  create: FeedItemCreateWithoutMixdownInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateOrConnectWithoutRevisionsInput = {
  create: FeedItemCreateWithoutRevisionsInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemCreateWithoutAuthorInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateNestedManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownCreateNestedOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateNestedManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateWithoutCommentsInput = {
  author: UserCreateNestedOneWithoutFeedInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateNestedManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownCreateNestedOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateNestedManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateWithoutLikesInput = {
  author: UserCreateNestedOneWithoutFeedInput;
  comments?: Maybe<CommentCreateNestedManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  mixdown?: Maybe<MixdownCreateNestedOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateNestedManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateWithoutMixdownInput = {
  author: UserCreateNestedOneWithoutFeedInput;
  comments?: Maybe<CommentCreateNestedManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateNestedManyWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  revisions?: Maybe<FeedItemRevisionCreateNestedManyWithoutParentItemInput>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemCreateWithoutRevisionsInput = {
  author: UserCreateNestedOneWithoutFeedInput;
  comments?: Maybe<CommentCreateNestedManyWithoutFeedItemInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<FeedItemLikeCreateNestedManyWithoutFeedItemInput>;
  mixdown?: Maybe<MixdownCreateNestedOneWithoutFeedItemInput>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  text?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemGroupBy = {
  __typename?: 'FeedItemGroupBy';
  _count?: Maybe<FeedItemCountAggregate>;
  _max?: Maybe<FeedItemMaxAggregate>;
  _min?: Maybe<FeedItemMinAggregate>;
  authorId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
  isPublished: Scalars['Boolean'];
  mixdownId?: Maybe<Scalars['String']>;
  publishAt?: Maybe<Scalars['Timestamp']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Timestamp'];
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
  createdAt: Scalars['Int'];
  feedItemId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type FeedItemLikeCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem: FeedItemCreateNestedOneWithoutLikesInput;
  user: UserCreateNestedOneWithoutFeedItemLikeInput;
};

export type FeedItemLikeCreateManyFeedItemInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
};

export type FeedItemLikeCreateManyFeedItemInputEnvelope = {
  data: Array<FeedItemLikeCreateManyFeedItemInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FeedItemLikeCreateManyInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId: Scalars['String'];
  userId: Scalars['String'];
};

export type FeedItemLikeCreateManyUserInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId: Scalars['String'];
};

export type FeedItemLikeCreateManyUserInputEnvelope = {
  data: Array<FeedItemLikeCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FeedItemLikeCreateNestedManyWithoutFeedItemInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemLikeCreateOrConnectWithoutFeedItemInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutFeedItemInput>>;
  createMany?: Maybe<FeedItemLikeCreateManyFeedItemInputEnvelope>;
};

export type FeedItemLikeCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemLikeCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutUserInput>>;
  createMany?: Maybe<FeedItemLikeCreateManyUserInputEnvelope>;
};

export type FeedItemLikeCreateOrConnectWithoutFeedItemInput = {
  create: FeedItemLikeCreateWithoutFeedItemInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeCreateOrConnectWithoutUserInput = {
  create: FeedItemLikeCreateWithoutUserInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeCreateWithoutFeedItemInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateNestedOneWithoutFeedItemLikeInput;
};

export type FeedItemLikeCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItem: FeedItemCreateNestedOneWithoutLikesInput;
};

export type FeedItemLikeGroupBy = {
  __typename?: 'FeedItemLikeGroupBy';
  _count?: Maybe<FeedItemLikeCountAggregate>;
  _max?: Maybe<FeedItemLikeMaxAggregate>;
  _min?: Maybe<FeedItemLikeMinAggregate>;
  createdAt: Scalars['Timestamp'];
  feedItemId: Scalars['String'];
  userId: Scalars['String'];
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
  NOT?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  OR?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItemId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type FeedItemLikeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<FeedItemLikeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<FeedItemLikeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<FeedItemLikeScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  feedItemId?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type FeedItemLikeUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneRequiredWithoutLikesInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutFeedItemLikeInput>;
};

export type FeedItemLikeUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemLikeUpdateManyWithWhereWithoutFeedItemInput = {
  data: FeedItemLikeUpdateManyMutationInput;
  where: FeedItemLikeScalarWhereInput;
};

export type FeedItemLikeUpdateManyWithWhereWithoutUserInput = {
  data: FeedItemLikeUpdateManyMutationInput;
  where: FeedItemLikeScalarWhereInput;
};

export type FeedItemLikeUpdateManyWithoutFeedItemInput = {
  connect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemLikeCreateOrConnectWithoutFeedItemInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutFeedItemInput>>;
  createMany?: Maybe<FeedItemLikeCreateManyFeedItemInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<FeedItemLikeCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<FeedItemLikeCreateWithoutUserInput>>;
  createMany?: Maybe<FeedItemLikeCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemLikeScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemLikeWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemLikeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<FeedItemLikeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<FeedItemLikeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type FeedItemLikeUpdateWithWhereUniqueWithoutFeedItemInput = {
  data: FeedItemLikeUpdateWithoutFeedItemInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: FeedItemLikeUpdateWithoutUserInput;
  where: FeedItemLikeWhereUniqueInput;
};

export type FeedItemLikeUpdateWithoutFeedItemInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutFeedItemLikeInput>;
};

export type FeedItemLikeUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  feedItem?: Maybe<FeedItemUpdateOneRequiredWithoutLikesInput>;
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
  NOT?: Maybe<Array<FeedItemLikeWhereInput>>;
  OR?: Maybe<Array<FeedItemLikeWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItem?: Maybe<FeedItemRelationFilter>;
  feedItemId?: Maybe<StringFilter>;
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
  createdAt: Scalars['Int'];
  feedItemId: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type FeedItemRevisionCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  parentItem: FeedItemCreateNestedOneWithoutRevisionsInput;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemRevisionCreateManyInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  feedItemId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemRevisionCreateManyParentItemInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemRevisionCreateManyParentItemInputEnvelope = {
  data: Array<FeedItemRevisionCreateManyParentItemInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type FeedItemRevisionCreateNestedManyWithoutParentItemInput = {
  connect?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemRevisionCreateOrConnectWithoutParentItemInput>>;
  create?: Maybe<Array<FeedItemRevisionCreateWithoutParentItemInput>>;
  createMany?: Maybe<FeedItemRevisionCreateManyParentItemInputEnvelope>;
};

export type FeedItemRevisionCreateOrConnectWithoutParentItemInput = {
  create: FeedItemRevisionCreateWithoutParentItemInput;
  where: FeedItemRevisionWhereUniqueInput;
};

export type FeedItemRevisionCreateWithoutParentItemInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeedItemRevisionGroupBy = {
  __typename?: 'FeedItemRevisionGroupBy';
  _count?: Maybe<FeedItemRevisionCountAggregate>;
  _max?: Maybe<FeedItemRevisionMaxAggregate>;
  _min?: Maybe<FeedItemRevisionMinAggregate>;
  createdAt: Scalars['Timestamp'];
  feedItemId: Scalars['String'];
  id: Scalars['String'];
  text: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
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
  NOT?: Maybe<Array<FeedItemRevisionScalarWhereInput>>;
  OR?: Maybe<Array<FeedItemRevisionScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItemId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  text?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FeedItemRevisionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<FeedItemRevisionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<FeedItemRevisionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<FeedItemRevisionScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  feedItemId?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  text?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
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

export type FeedItemRevisionUpdateManyWithWhereWithoutParentItemInput = {
  data: FeedItemRevisionUpdateManyMutationInput;
  where: FeedItemRevisionScalarWhereInput;
};

export type FeedItemRevisionUpdateManyWithoutParentItemInput = {
  connect?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemRevisionCreateOrConnectWithoutParentItemInput>>;
  create?: Maybe<Array<FeedItemRevisionCreateWithoutParentItemInput>>;
  createMany?: Maybe<FeedItemRevisionCreateManyParentItemInputEnvelope>;
  delete?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemRevisionScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemRevisionWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemRevisionUpdateWithWhereUniqueWithoutParentItemInput>>;
  updateMany?: Maybe<Array<FeedItemRevisionUpdateManyWithWhereWithoutParentItemInput>>;
  upsert?: Maybe<Array<FeedItemRevisionUpsertWithWhereUniqueWithoutParentItemInput>>;
};

export type FeedItemRevisionUpdateWithWhereUniqueWithoutParentItemInput = {
  data: FeedItemRevisionUpdateWithoutParentItemInput;
  where: FeedItemRevisionWhereUniqueInput;
};

export type FeedItemRevisionUpdateWithoutParentItemInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  text?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type FeedItemRevisionUpsertWithWhereUniqueWithoutParentItemInput = {
  create: FeedItemRevisionCreateWithoutParentItemInput;
  update: FeedItemRevisionUpdateWithoutParentItemInput;
  where: FeedItemRevisionWhereUniqueInput;
};

export type FeedItemRevisionWhereInput = {
  AND?: Maybe<Array<FeedItemRevisionWhereInput>>;
  NOT?: Maybe<Array<FeedItemRevisionWhereInput>>;
  OR?: Maybe<Array<FeedItemRevisionWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  feedItemId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
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
  NOT?: Maybe<Array<FeedItemScalarWhereInput>>;
  OR?: Maybe<Array<FeedItemScalarWhereInput>>;
  authorId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPublished?: Maybe<BoolFilter>;
  mixdownId?: Maybe<StringNullableFilter>;
  publishAt?: Maybe<DateTimeNullableFilter>;
  text?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type FeedItemScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<FeedItemScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<FeedItemScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<FeedItemScalarWhereWithAggregatesInput>>;
  authorId?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  isPublished?: Maybe<BoolWithAggregatesFilter>;
  mixdownId?: Maybe<StringNullableWithAggregatesFilter>;
  publishAt?: Maybe<DateTimeNullableWithAggregatesFilter>;
  text?: Maybe<StringNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
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

export type FeedItemUpdateManyWithWhereWithoutAuthorInput = {
  data: FeedItemUpdateManyMutationInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateManyWithWhereWithoutMixdownInput = {
  data: FeedItemUpdateManyMutationInput;
  where: FeedItemScalarWhereInput;
};

export type FeedItemUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<FeedItemCreateOrConnectWithoutAuthorInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutAuthorInput>>;
  createMany?: Maybe<FeedItemCreateManyAuthorInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<FeedItemCreateOrConnectWithoutMixdownInput>>;
  create?: Maybe<Array<FeedItemCreateWithoutMixdownInput>>;
  createMany?: Maybe<FeedItemCreateManyMixdownInputEnvelope>;
  delete?: Maybe<Array<FeedItemWhereUniqueInput>>;
  deleteMany?: Maybe<Array<FeedItemScalarWhereInput>>;
  disconnect?: Maybe<Array<FeedItemWhereUniqueInput>>;
  set?: Maybe<Array<FeedItemWhereUniqueInput>>;
  update?: Maybe<Array<FeedItemUpdateWithWhereUniqueWithoutMixdownInput>>;
  updateMany?: Maybe<Array<FeedItemUpdateManyWithWhereWithoutMixdownInput>>;
  upsert?: Maybe<Array<FeedItemUpsertWithWhereUniqueWithoutMixdownInput>>;
};

export type FeedItemUpdateOneRequiredWithoutLikesInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutLikesInput>;
  create?: Maybe<FeedItemCreateWithoutLikesInput>;
  update?: Maybe<FeedItemUpdateWithoutLikesInput>;
  upsert?: Maybe<FeedItemUpsertWithoutLikesInput>;
};

export type FeedItemUpdateOneRequiredWithoutRevisionsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutRevisionsInput>;
  create?: Maybe<FeedItemCreateWithoutRevisionsInput>;
  update?: Maybe<FeedItemUpdateWithoutRevisionsInput>;
  upsert?: Maybe<FeedItemUpsertWithoutRevisionsInput>;
};

export type FeedItemUpdateOneWithoutCommentsInput = {
  connect?: Maybe<FeedItemWhereUniqueInput>;
  connectOrCreate?: Maybe<FeedItemCreateOrConnectWithoutCommentsInput>;
  create?: Maybe<FeedItemCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<FeedItemUpdateWithoutCommentsInput>;
  upsert?: Maybe<FeedItemUpsertWithoutCommentsInput>;
};

export type FeedItemUpdateWithWhereUniqueWithoutAuthorInput = {
  data: FeedItemUpdateWithoutAuthorInput;
  where: FeedItemWhereUniqueInput;
};

export type FeedItemUpdateWithWhereUniqueWithoutMixdownInput = {
  data: FeedItemUpdateWithoutMixdownInput;
  where: FeedItemWhereUniqueInput;
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

export type FeedItemWhereInput = {
  AND?: Maybe<Array<FeedItemWhereInput>>;
  NOT?: Maybe<Array<FeedItemWhereInput>>;
  OR?: Maybe<Array<FeedItemWhereInput>>;
  author?: Maybe<UserRelationFilter>;
  authorId?: Maybe<StringFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPublished?: Maybe<BoolFilter>;
  likes?: Maybe<FeedItemLikeListRelationFilter>;
  mixdown?: Maybe<MixdownRelationFilter>;
  mixdownId?: Maybe<StringNullableFilter>;
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

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Issue = {
  __typename?: 'Issue';
  createdAt: Scalars['Timestamp'];
  description: Scalars['String'];
  id: Scalars['String'];
  resolved: Scalars['Boolean'];
  screenshotIds: Array<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type IssueCountAggregate = {
  __typename?: 'IssueCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  resolved: Scalars['Int'];
  screenshotIds: Scalars['Int'];
  userId: Scalars['Int'];
};

export type IssueCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  createdBy?: Maybe<UserCreateNestedOneWithoutIssueInput>;
  description: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  resolved?: Maybe<Scalars['Boolean']>;
  screenshotIds?: Maybe<IssueCreatescreenshotIdsInput>;
};

export type IssueCreateManyCreatedByInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  resolved?: Maybe<Scalars['Boolean']>;
  screenshotIds?: Maybe<IssueCreateManyscreenshotIdsInput>;
};

export type IssueCreateManyCreatedByInputEnvelope = {
  data: Array<IssueCreateManyCreatedByInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type IssueCreateManyInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  resolved?: Maybe<Scalars['Boolean']>;
  screenshotIds?: Maybe<IssueCreateManyscreenshotIdsInput>;
  userId?: Maybe<Scalars['String']>;
};

export type IssueCreateManyscreenshotIdsInput = {
  set: Array<Scalars['String']>;
};

export type IssueCreateNestedManyWithoutCreatedByInput = {
  connect?: Maybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IssueCreateOrConnectWithoutCreatedByInput>>;
  create?: Maybe<Array<IssueCreateWithoutCreatedByInput>>;
  createMany?: Maybe<IssueCreateManyCreatedByInputEnvelope>;
};

export type IssueCreateOrConnectWithoutCreatedByInput = {
  create: IssueCreateWithoutCreatedByInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateWithoutCreatedByInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  resolved?: Maybe<Scalars['Boolean']>;
  screenshotIds?: Maybe<IssueCreatescreenshotIdsInput>;
};

export type IssueCreatescreenshotIdsInput = {
  set: Array<Scalars['String']>;
};

export type IssueGroupBy = {
  __typename?: 'IssueGroupBy';
  _count?: Maybe<IssueCountAggregate>;
  _max?: Maybe<IssueMaxAggregate>;
  _min?: Maybe<IssueMinAggregate>;
  createdAt: Scalars['Timestamp'];
  description: Scalars['String'];
  id: Scalars['String'];
  resolved: Scalars['Boolean'];
  screenshotIds?: Maybe<Array<Scalars['String']>>;
  userId?: Maybe<Scalars['String']>;
};

export type IssueListRelationFilter = {
  every?: Maybe<IssueWhereInput>;
  none?: Maybe<IssueWhereInput>;
  some?: Maybe<IssueWhereInput>;
};

export type IssueMaxAggregate = {
  __typename?: 'IssueMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  resolved?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['String']>;
};

export type IssueMinAggregate = {
  __typename?: 'IssueMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  resolved?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['String']>;
};

export type IssueOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  resolved?: Maybe<SortOrder>;
  screenshotIds?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export enum IssueScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Resolved = 'resolved',
  ScreenshotIds = 'screenshotIds',
  UserId = 'userId',
}

export type IssueScalarWhereInput = {
  AND?: Maybe<Array<IssueScalarWhereInput>>;
  NOT?: Maybe<Array<IssueScalarWhereInput>>;
  OR?: Maybe<Array<IssueScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  resolved?: Maybe<BoolFilter>;
  screenshotIds?: Maybe<StringNullableListFilter>;
  userId?: Maybe<StringNullableFilter>;
};

export type IssueScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<IssueScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<IssueScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<IssueScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  resolved?: Maybe<BoolWithAggregatesFilter>;
  screenshotIds?: Maybe<StringNullableListFilter>;
  userId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type IssueUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdBy?: Maybe<UserUpdateOneWithoutIssueInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  resolved?: Maybe<BoolFieldUpdateOperationsInput>;
  screenshotIds?: Maybe<IssueUpdatescreenshotIdsInput>;
};

export type IssueUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  resolved?: Maybe<BoolFieldUpdateOperationsInput>;
  screenshotIds?: Maybe<IssueUpdatescreenshotIdsInput>;
};

export type IssueUpdateManyWithWhereWithoutCreatedByInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithoutCreatedByInput = {
  connect?: Maybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<IssueCreateOrConnectWithoutCreatedByInput>>;
  create?: Maybe<Array<IssueCreateWithoutCreatedByInput>>;
  createMany?: Maybe<IssueCreateManyCreatedByInputEnvelope>;
  delete?: Maybe<Array<IssueWhereUniqueInput>>;
  deleteMany?: Maybe<Array<IssueScalarWhereInput>>;
  disconnect?: Maybe<Array<IssueWhereUniqueInput>>;
  set?: Maybe<Array<IssueWhereUniqueInput>>;
  update?: Maybe<Array<IssueUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: Maybe<Array<IssueUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: Maybe<Array<IssueUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type IssueUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: IssueUpdateWithoutCreatedByInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithoutCreatedByInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  resolved?: Maybe<BoolFieldUpdateOperationsInput>;
  screenshotIds?: Maybe<IssueUpdatescreenshotIdsInput>;
};

export type IssueUpdatescreenshotIdsInput = {
  push?: Maybe<Array<Scalars['String']>>;
  set?: Maybe<Array<Scalars['String']>>;
};

export type IssueUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: IssueCreateWithoutCreatedByInput;
  update: IssueUpdateWithoutCreatedByInput;
  where: IssueWhereUniqueInput;
};

export type IssueWhereInput = {
  AND?: Maybe<Array<IssueWhereInput>>;
  NOT?: Maybe<Array<IssueWhereInput>>;
  OR?: Maybe<Array<IssueWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  createdBy?: Maybe<UserRelationFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  resolved?: Maybe<BoolFilter>;
  screenshotIds?: Maybe<StringNullableListFilter>;
  userId?: Maybe<StringNullableFilter>;
};

export type IssueWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type JsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type JsonWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedJsonFilter>;
  _min?: Maybe<NestedJsonFilter>;
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type Mixdown = {
  __typename?: 'Mixdown';
  FeedItem: Array<FeedItem>;
  assetId: Scalars['String'];
  audio: Asset;
  createdAt: Scalars['Timestamp'];
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
  listens?: Maybe<Scalars['Float']>;
  version?: Maybe<Scalars['Float']>;
};

export type MixdownCountAggregate = {
  __typename?: 'MixdownCountAggregate';
  _all: Scalars['Int'];
  assetId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isPusblished: Scalars['Int'];
  listens: Scalars['Int'];
  name: Scalars['Int'];
  projectId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
  version: Scalars['Int'];
};

export type MixdownCreateInput = {
  FeedItem?: Maybe<FeedItemCreateNestedManyWithoutMixdownInput>;
  audio: AssetCreateNestedOneWithoutMixdownInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutMixdownsInput;
  triggerdBy: UserCreateNestedOneWithoutMixdownInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownCreateManyAudioInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
  version: Scalars['Int'];
};

export type MixdownCreateManyAudioInputEnvelope = {
  data: Array<MixdownCreateManyAudioInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MixdownCreateManyInput = {
  assetId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
  version: Scalars['Int'];
};

export type MixdownCreateManyProjectInput = {
  assetId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
  version: Scalars['Int'];
};

export type MixdownCreateManyProjectInputEnvelope = {
  data: Array<MixdownCreateManyProjectInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MixdownCreateManyTriggerdByInput = {
  assetId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownCreateManyTriggerdByInputEnvelope = {
  data: Array<MixdownCreateManyTriggerdByInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MixdownCreateNestedManyWithoutAudioInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutAudioInput>>;
  create?: Maybe<Array<MixdownCreateWithoutAudioInput>>;
  createMany?: Maybe<MixdownCreateManyAudioInputEnvelope>;
};

export type MixdownCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<MixdownCreateWithoutProjectInput>>;
  createMany?: Maybe<MixdownCreateManyProjectInputEnvelope>;
};

export type MixdownCreateNestedManyWithoutTriggerdByInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutTriggerdByInput>>;
  create?: Maybe<Array<MixdownCreateWithoutTriggerdByInput>>;
  createMany?: Maybe<MixdownCreateManyTriggerdByInputEnvelope>;
};

export type MixdownCreateNestedOneWithoutFeedItemInput = {
  connect?: Maybe<MixdownWhereUniqueInput>;
  connectOrCreate?: Maybe<MixdownCreateOrConnectWithoutFeedItemInput>;
  create?: Maybe<MixdownCreateWithoutFeedItemInput>;
};

export type MixdownCreateOrConnectWithoutAudioInput = {
  create: MixdownCreateWithoutAudioInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownCreateOrConnectWithoutFeedItemInput = {
  create: MixdownCreateWithoutFeedItemInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownCreateOrConnectWithoutProjectInput = {
  create: MixdownCreateWithoutProjectInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownCreateOrConnectWithoutTriggerdByInput = {
  create: MixdownCreateWithoutTriggerdByInput;
  where: MixdownWhereUniqueInput;
};

export type MixdownCreateWithoutAudioInput = {
  FeedItem?: Maybe<FeedItemCreateNestedManyWithoutMixdownInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutMixdownsInput;
  triggerdBy: UserCreateNestedOneWithoutMixdownInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownCreateWithoutFeedItemInput = {
  audio: AssetCreateNestedOneWithoutMixdownInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutMixdownsInput;
  triggerdBy: UserCreateNestedOneWithoutMixdownInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownCreateWithoutProjectInput = {
  FeedItem?: Maybe<FeedItemCreateNestedManyWithoutMixdownInput>;
  audio: AssetCreateNestedOneWithoutMixdownInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  triggerdBy: UserCreateNestedOneWithoutMixdownInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownCreateWithoutTriggerdByInput = {
  FeedItem?: Maybe<FeedItemCreateNestedManyWithoutMixdownInput>;
  audio: AssetCreateNestedOneWithoutMixdownInput;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutMixdownsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  version: Scalars['Int'];
};

export type MixdownGroupBy = {
  __typename?: 'MixdownGroupBy';
  _avg?: Maybe<MixdownAvgAggregate>;
  _count?: Maybe<MixdownCountAggregate>;
  _max?: Maybe<MixdownMaxAggregate>;
  _min?: Maybe<MixdownMinAggregate>;
  _sum?: Maybe<MixdownSumAggregate>;
  assetId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  projectId: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
  userId: Scalars['String'];
  version: Scalars['Int'];
};

export type MixdownListRelationFilter = {
  every?: Maybe<MixdownWhereInput>;
  none?: Maybe<MixdownWhereInput>;
  some?: Maybe<MixdownWhereInput>;
};

export type MixdownMaxAggregate = {
  __typename?: 'MixdownMaxAggregate';
  assetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type MixdownMinAggregate = {
  __typename?: 'MixdownMinAggregate';
  assetId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isPusblished?: Maybe<Scalars['Boolean']>;
  listens?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  userId?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export type MixdownOrderByInput = {
  assetId?: Maybe<SortOrder>;
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
  AssetId = 'assetId',
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
  NOT?: Maybe<Array<MixdownScalarWhereInput>>;
  OR?: Maybe<Array<MixdownScalarWhereInput>>;
  assetId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPusblished?: Maybe<BoolNullableFilter>;
  listens?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
  projectId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  version?: Maybe<IntFilter>;
};

export type MixdownScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<MixdownScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<MixdownScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<MixdownScalarWhereWithAggregatesInput>>;
  assetId?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  isPusblished?: Maybe<BoolNullableWithAggregatesFilter>;
  listens?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  projectId?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
  version?: Maybe<IntWithAggregatesFilter>;
};

export type MixdownSumAggregate = {
  __typename?: 'MixdownSumAggregate';
  listens?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['Int']>;
};

export type MixdownUpdateInput = {
  FeedItem?: Maybe<FeedItemUpdateManyWithoutMixdownInput>;
  audio?: Maybe<AssetUpdateOneRequiredWithoutMixdownInput>;
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

export type MixdownUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
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

export type MixdownUpdateManyWithoutAudioInput = {
  connect?: Maybe<Array<MixdownWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutAudioInput>>;
  create?: Maybe<Array<MixdownCreateWithoutAudioInput>>;
  createMany?: Maybe<MixdownCreateManyAudioInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<MixdownCreateWithoutProjectInput>>;
  createMany?: Maybe<MixdownCreateManyProjectInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<MixdownCreateOrConnectWithoutTriggerdByInput>>;
  create?: Maybe<Array<MixdownCreateWithoutTriggerdByInput>>;
  createMany?: Maybe<MixdownCreateManyTriggerdByInputEnvelope>;
  delete?: Maybe<Array<MixdownWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MixdownScalarWhereInput>>;
  disconnect?: Maybe<Array<MixdownWhereUniqueInput>>;
  set?: Maybe<Array<MixdownWhereUniqueInput>>;
  update?: Maybe<Array<MixdownUpdateWithWhereUniqueWithoutTriggerdByInput>>;
  updateMany?: Maybe<Array<MixdownUpdateManyWithWhereWithoutTriggerdByInput>>;
  upsert?: Maybe<Array<MixdownUpsertWithWhereUniqueWithoutTriggerdByInput>>;
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

export type MixdownUpdateWithoutAudioInput = {
  FeedItem?: Maybe<FeedItemUpdateManyWithoutMixdownInput>;
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

export type MixdownUpdateWithoutFeedItemInput = {
  audio?: Maybe<AssetUpdateOneRequiredWithoutMixdownInput>;
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
  FeedItem?: Maybe<FeedItemUpdateManyWithoutMixdownInput>;
  audio?: Maybe<AssetUpdateOneRequiredWithoutMixdownInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  triggerdBy?: Maybe<UserUpdateOneRequiredWithoutMixdownInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MixdownUpdateWithoutTriggerdByInput = {
  FeedItem?: Maybe<FeedItemUpdateManyWithoutMixdownInput>;
  audio?: Maybe<AssetUpdateOneRequiredWithoutMixdownInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  isPusblished?: Maybe<NullableBoolFieldUpdateOperationsInput>;
  listens?: Maybe<IntFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMixdownsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  version?: Maybe<IntFieldUpdateOperationsInput>;
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

export type MixdownUpsertWithoutFeedItemInput = {
  create: MixdownCreateWithoutFeedItemInput;
  update: MixdownUpdateWithoutFeedItemInput;
};

export type MixdownWhereInput = {
  AND?: Maybe<Array<MixdownWhereInput>>;
  FeedItem?: Maybe<FeedItemListRelationFilter>;
  NOT?: Maybe<Array<MixdownWhereInput>>;
  OR?: Maybe<Array<MixdownWhereInput>>;
  assetId?: Maybe<StringFilter>;
  audio?: Maybe<AssetRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isPusblished?: Maybe<BoolNullableFilter>;
  listens?: Maybe<IntFilter>;
  name?: Maybe<StringNullableFilter>;
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
  createIssue: Issue;
  createManyAddress: AffectedRowsOutput;
  createManyBand: AffectedRowsOutput;
  createManyComment: AffectedRowsOutput;
  createManyCommentLike: AffectedRowsOutput;
  createManyFeedItem: AffectedRowsOutput;
  createManyFeedItemLike: AffectedRowsOutput;
  createManyFeedItemRevision: AffectedRowsOutput;
  createManyIssue: AffectedRowsOutput;
  createManyMixdown: AffectedRowsOutput;
  createManyProject: AffectedRowsOutput;
  createManyTag: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUsersOnProjects: AffectedRowsOutput;
  createManyVersionInformation: AffectedRowsOutput;
  createMixdown: Mixdown;
  createProject: Project;
  createTag: Tag;
  createUser: User;
  createUsersOnProjects: UsersOnProjects;
  createVersionInformation: VersionInformation;
  deleteAddress?: Maybe<Address>;
  deleteBand?: Maybe<Band>;
  deleteComment?: Maybe<Comment>;
  deleteCommentLike?: Maybe<CommentLike>;
  deleteFeedItem?: Maybe<FeedItem>;
  deleteFeedItemLike?: Maybe<FeedItemLike>;
  deleteFeedItemRevision?: Maybe<FeedItemRevision>;
  deleteIssue?: Maybe<Issue>;
  deleteManyAddress: AffectedRowsOutput;
  deleteManyBand: AffectedRowsOutput;
  deleteManyComment: AffectedRowsOutput;
  deleteManyCommentLike: AffectedRowsOutput;
  deleteManyFeedItem: AffectedRowsOutput;
  deleteManyFeedItemLike: AffectedRowsOutput;
  deleteManyFeedItemRevision: AffectedRowsOutput;
  deleteManyIssue: AffectedRowsOutput;
  deleteManyMixdown: AffectedRowsOutput;
  deleteManyProject: AffectedRowsOutput;
  deleteManyTag: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUsersOnProjects: AffectedRowsOutput;
  deleteManyVersionInformation: AffectedRowsOutput;
  deleteMixdown?: Maybe<Mixdown>;
  deleteProject?: Maybe<Project>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  deleteUsersOnProjects?: Maybe<UsersOnProjects>;
  deleteVersionInformation?: Maybe<VersionInformation>;
  publishChange: PublishProjectChangesArgs;
  signUpUser: User;
  updateAddress?: Maybe<Address>;
  updateBand?: Maybe<Band>;
  updateComment?: Maybe<Comment>;
  updateCommentLike?: Maybe<CommentLike>;
  updateFeedItem?: Maybe<FeedItem>;
  updateFeedItemLike?: Maybe<FeedItemLike>;
  updateFeedItemRevision?: Maybe<FeedItemRevision>;
  updateIssue?: Maybe<Issue>;
  updateManyAddress: AffectedRowsOutput;
  updateManyBand: AffectedRowsOutput;
  updateManyComment: AffectedRowsOutput;
  updateManyCommentLike: AffectedRowsOutput;
  updateManyFeedItem: AffectedRowsOutput;
  updateManyFeedItemLike: AffectedRowsOutput;
  updateManyFeedItemRevision: AffectedRowsOutput;
  updateManyIssue: AffectedRowsOutput;
  updateManyMixdown: AffectedRowsOutput;
  updateManyProject: AffectedRowsOutput;
  updateManyTag: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUsersOnProjects: AffectedRowsOutput;
  updateManyVersionInformation: AffectedRowsOutput;
  updateMixdown?: Maybe<Mixdown>;
  updateProject?: Maybe<Project>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  updateUsersOnProjects?: Maybe<UsersOnProjects>;
  updateVersionInformation?: Maybe<VersionInformation>;
  upsertAddress: Address;
  upsertBand: Band;
  upsertComment: Comment;
  upsertCommentLike: CommentLike;
  upsertFeedItem: FeedItem;
  upsertFeedItemLike: FeedItemLike;
  upsertFeedItemRevision: FeedItemRevision;
  upsertIssue: Issue;
  upsertMixdown: Mixdown;
  upsertProject: Project;
  upsertTag: Tag;
  upsertUser: User;
  upsertUsersOnProjects: UsersOnProjects;
  upsertVersionInformation: VersionInformation;
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

export type MutationCreateIssueArgs = {
  data: IssueCreateInput;
};

export type MutationCreateManyAddressArgs = {
  data: Array<AddressCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyBandArgs = {
  data: Array<BandCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyCommentArgs = {
  data: Array<CommentCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyCommentLikeArgs = {
  data: Array<CommentLikeCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyFeedItemArgs = {
  data: Array<FeedItemCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyFeedItemLikeArgs = {
  data: Array<FeedItemLikeCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyFeedItemRevisionArgs = {
  data: Array<FeedItemRevisionCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyIssueArgs = {
  data: Array<IssueCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyMixdownArgs = {
  data: Array<MixdownCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyProjectArgs = {
  data: Array<ProjectCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyTagArgs = {
  data: Array<TagCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyUsersOnProjectsArgs = {
  data: Array<UsersOnProjectsCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateManyVersionInformationArgs = {
  data: Array<VersionInformationCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
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

export type MutationCreateVersionInformationArgs = {
  data: VersionInformationCreateInput;
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

export type MutationDeleteIssueArgs = {
  where: IssueWhereUniqueInput;
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

export type MutationDeleteManyIssueArgs = {
  where?: Maybe<IssueWhereInput>;
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

export type MutationDeleteManyVersionInformationArgs = {
  where?: Maybe<VersionInformationWhereInput>;
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

export type MutationDeleteVersionInformationArgs = {
  where: VersionInformationWhereUniqueInput;
};

export type MutationPublishChangeArgs = {
  authorId?: Maybe<Scalars['String']>;
  changes: Scalars['JSONObject'];
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

export type MutationUpdateIssueArgs = {
  data: IssueUpdateInput;
  where: IssueWhereUniqueInput;
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

export type MutationUpdateManyIssueArgs = {
  data: IssueUpdateManyMutationInput;
  where?: Maybe<IssueWhereInput>;
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

export type MutationUpdateManyVersionInformationArgs = {
  data: VersionInformationUpdateManyMutationInput;
  where?: Maybe<VersionInformationWhereInput>;
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

export type MutationUpdateVersionInformationArgs = {
  data: VersionInformationUpdateInput;
  where: VersionInformationWhereUniqueInput;
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

export type MutationUpsertIssueArgs = {
  create: IssueCreateInput;
  update: IssueUpdateInput;
  where: IssueWhereUniqueInput;
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

export type MutationUpsertVersionInformationArgs = {
  create: VersionInformationCreateInput;
  update: VersionInformationUpdateInput;
  where: VersionInformationWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedBoolNullableFilter>;
  _min?: Maybe<NestedBoolNullableFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedBoolFilter>;
  _min?: Maybe<NestedBoolFilter>;
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
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

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumRoleFilter>;
  _min?: Maybe<NestedEnumRoleFilter>;
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
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

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedJsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
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

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
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
  assets: Array<AssetsOnProjects>;
  content: Scalars['JSON'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
  isInitialized: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  members: Array<UsersOnProjects>;
  mixdowns: Array<Mixdown>;
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type ProjectAssetsArgs = {
  cursor?: Maybe<AssetsOnProjectsWhereUniqueInput>;
  distinct?: Maybe<Array<AssetsOnProjectsScalarFieldEnum>>;
  orderBy?: Maybe<Array<AssetsOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetsOnProjectsWhereInput>;
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
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isInitialized: Scalars['Int'];
  isPrivate: Scalars['Int'];
  name: Scalars['Int'];
  ownerId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProjectCreateInput = {
  assets?: Maybe<AssetsOnProjectsCreateNestedManyWithoutProjectInput>;
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateNestedManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownCreateNestedManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateManyInput = {
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  ownerId: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateManyOwnerInput = {
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateManyOwnerInputEnvelope = {
  data: Array<ProjectCreateManyOwnerInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ProjectCreateNestedManyWithoutOwnerInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ProjectCreateWithoutOwnerInput>>;
  createMany?: Maybe<ProjectCreateManyOwnerInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutAssetsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutAssetsInput>;
  create?: Maybe<ProjectCreateWithoutAssetsInput>;
};

export type ProjectCreateNestedOneWithoutMembersInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutMembersInput>;
  create?: Maybe<ProjectCreateWithoutMembersInput>;
};

export type ProjectCreateNestedOneWithoutMixdownsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutMixdownsInput>;
  create?: Maybe<ProjectCreateWithoutMixdownsInput>;
};

export type ProjectCreateOrConnectWithoutAssetsInput = {
  create: ProjectCreateWithoutAssetsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutMembersInput = {
  create: ProjectCreateWithoutMembersInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutMixdownsInput = {
  create: ProjectCreateWithoutMixdownsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutOwnerInput = {
  create: ProjectCreateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutAssetsInput = {
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateNestedManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownCreateNestedManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateWithoutMembersInput = {
  assets?: Maybe<AssetsOnProjectsCreateNestedManyWithoutProjectInput>;
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  mixdowns?: Maybe<MixdownCreateNestedManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateWithoutMixdownsInput = {
  assets?: Maybe<AssetsOnProjectsCreateNestedManyWithoutProjectInput>;
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateNestedManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateNestedOneWithoutOwnsProjectsInput;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectCreateWithoutOwnerInput = {
  assets?: Maybe<AssetsOnProjectsCreateNestedManyWithoutProjectInput>;
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  id?: Maybe<Scalars['String']>;
  isInitialized?: Maybe<Scalars['Boolean']>;
  isPrivate?: Maybe<Scalars['Boolean']>;
  members?: Maybe<UsersOnProjectsCreateNestedManyWithoutProjectInput>;
  mixdowns?: Maybe<MixdownCreateNestedManyWithoutProjectInput>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  _count?: Maybe<ProjectCountAggregate>;
  _max?: Maybe<ProjectMaxAggregate>;
  _min?: Maybe<ProjectMinAggregate>;
  content: Scalars['JSON'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['String'];
  isInitialized: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  ownerId: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};

export type ProjectListRelationFilter = {
  every?: Maybe<ProjectWhereInput>;
  none?: Maybe<ProjectWhereInput>;
  some?: Maybe<ProjectWhereInput>;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
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
  NOT?: Maybe<Array<ProjectScalarWhereInput>>;
  OR?: Maybe<Array<ProjectScalarWhereInput>>;
  content?: Maybe<JsonFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isInitialized?: Maybe<BoolFilter>;
  isPrivate?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  content?: Maybe<JsonWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  isInitialized?: Maybe<BoolWithAggregatesFilter>;
  isPrivate?: Maybe<BoolWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  ownerId?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ProjectUpdateInput = {
  assets?: Maybe<AssetsOnProjectsUpdateManyWithoutProjectInput>;
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

export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ProjectCreateOrConnectWithoutOwnerInput>>;
  create?: Maybe<Array<ProjectCreateWithoutOwnerInput>>;
  createMany?: Maybe<ProjectCreateManyOwnerInputEnvelope>;
  delete?: Maybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
  disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
  set?: Maybe<Array<ProjectWhereUniqueInput>>;
  update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<ProjectUpdateManyWithWhereWithoutOwnerInput>>;
  upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type ProjectUpdateOneRequiredWithoutAssetsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutAssetsInput>;
  create?: Maybe<ProjectCreateWithoutAssetsInput>;
  update?: Maybe<ProjectUpdateWithoutAssetsInput>;
  upsert?: Maybe<ProjectUpsertWithoutAssetsInput>;
};

export type ProjectUpdateOneRequiredWithoutMembersInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutMembersInput>;
  create?: Maybe<ProjectCreateWithoutMembersInput>;
  update?: Maybe<ProjectUpdateWithoutMembersInput>;
  upsert?: Maybe<ProjectUpsertWithoutMembersInput>;
};

export type ProjectUpdateOneRequiredWithoutMixdownsInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutMixdownsInput>;
  create?: Maybe<ProjectCreateWithoutMixdownsInput>;
  update?: Maybe<ProjectUpdateWithoutMixdownsInput>;
  upsert?: Maybe<ProjectUpsertWithoutMixdownsInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ProjectUpdateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutAssetsInput = {
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

export type ProjectUpdateWithoutMembersInput = {
  assets?: Maybe<AssetsOnProjectsUpdateManyWithoutProjectInput>;
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
  assets?: Maybe<AssetsOnProjectsUpdateManyWithoutProjectInput>;
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
  assets?: Maybe<AssetsOnProjectsUpdateManyWithoutProjectInput>;
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

export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ProjectCreateWithoutOwnerInput;
  update: ProjectUpdateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutAssetsInput = {
  create: ProjectCreateWithoutAssetsInput;
  update: ProjectUpdateWithoutAssetsInput;
};

export type ProjectUpsertWithoutMembersInput = {
  create: ProjectCreateWithoutMembersInput;
  update: ProjectUpdateWithoutMembersInput;
};

export type ProjectUpsertWithoutMixdownsInput = {
  create: ProjectCreateWithoutMixdownsInput;
  update: ProjectUpdateWithoutMixdownsInput;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  NOT?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  assets?: Maybe<AssetsOnProjectsListRelationFilter>;
  content?: Maybe<JsonFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  isInitialized?: Maybe<BoolFilter>;
  isPrivate?: Maybe<BoolFilter>;
  members?: Maybe<UsersOnProjectsListRelationFilter>;
  mixdowns?: Maybe<MixdownListRelationFilter>;
  name?: Maybe<StringFilter>;
  owner?: Maybe<UserRelationFilter>;
  ownerId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PublishAssetArgs = {
  __typename?: 'PublishAssetArgs';
  id: Scalars['String'];
  jobId: Scalars['String'];
  mimeType: Scalars['String'];
  projectId: Scalars['String'];
};

export type PublishProjectChangesArgs = {
  __typename?: 'PublishProjectChangesArgs';
  authorId?: Maybe<Scalars['String']>;
  changes: Scalars['JSONObject'];
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
  aggregateIssue: AggregateIssue;
  aggregateMixdown: AggregateMixdown;
  aggregateProject: AggregateProject;
  aggregateTag: AggregateTag;
  aggregateUser: AggregateUser;
  aggregateUsersOnProjects: AggregateUsersOnProjects;
  aggregateVersionInformation: AggregateVersionInformation;
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
  findFirstIssue?: Maybe<Issue>;
  findFirstMixdown?: Maybe<Mixdown>;
  findFirstProject?: Maybe<Project>;
  findFirstTag?: Maybe<Tag>;
  findFirstUser?: Maybe<User>;
  findFirstUsersOnProjects?: Maybe<UsersOnProjects>;
  findFirstVersionInformation?: Maybe<VersionInformation>;
  findManyUsersOnProjects: Array<UsersOnProjects>;
  findUniqueUsersOnProjects?: Maybe<UsersOnProjects>;
  followRecommendations: Array<User>;
  groupByAddress: Array<AddressGroupBy>;
  groupByBand: Array<BandGroupBy>;
  groupByComment: Array<CommentGroupBy>;
  groupByCommentLike: Array<CommentLikeGroupBy>;
  groupByFeedItem: Array<FeedItemGroupBy>;
  groupByFeedItemLike: Array<FeedItemLikeGroupBy>;
  groupByFeedItemRevision: Array<FeedItemRevisionGroupBy>;
  groupByIssue: Array<IssueGroupBy>;
  groupByMixdown: Array<MixdownGroupBy>;
  groupByProject: Array<ProjectGroupBy>;
  groupByTag: Array<TagGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUsersOnProjects: Array<UsersOnProjectsGroupBy>;
  groupByVersionInformation: Array<VersionInformationGroupBy>;
  issue?: Maybe<Issue>;
  issues: Array<Issue>;
  me: User;
  mixdown?: Maybe<Mixdown>;
  mixdowns: Array<Mixdown>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  user?: Maybe<User>;
  users: Array<User>;
  versionInformation?: Maybe<VersionInformation>;
  versionInformations: Array<VersionInformation>;
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

export type QueryAggregateIssueArgs = {
  cursor?: Maybe<IssueWhereUniqueInput>;
  orderBy?: Maybe<Array<IssueOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IssueWhereInput>;
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

export type QueryAggregateVersionInformationArgs = {
  cursor?: Maybe<VersionInformationWhereUniqueInput>;
  orderBy?: Maybe<Array<VersionInformationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VersionInformationWhereInput>;
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

export type QueryFindFirstIssueArgs = {
  cursor?: Maybe<IssueWhereUniqueInput>;
  distinct?: Maybe<Array<IssueScalarFieldEnum>>;
  orderBy?: Maybe<Array<IssueOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IssueWhereInput>;
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

export type QueryFindFirstVersionInformationArgs = {
  cursor?: Maybe<VersionInformationWhereUniqueInput>;
  distinct?: Maybe<Array<VersionInformationScalarFieldEnum>>;
  orderBy?: Maybe<Array<VersionInformationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VersionInformationWhereInput>;
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

export type QueryGroupByAddressArgs = {
  by: Array<AddressScalarFieldEnum>;
  having?: Maybe<AddressScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<AddressOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};

export type QueryGroupByBandArgs = {
  by: Array<BandScalarFieldEnum>;
  having?: Maybe<BandScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<BandOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<BandWhereInput>;
};

export type QueryGroupByCommentArgs = {
  by: Array<CommentScalarFieldEnum>;
  having?: Maybe<CommentScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type QueryGroupByCommentLikeArgs = {
  by: Array<CommentLikeScalarFieldEnum>;
  having?: Maybe<CommentLikeScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<CommentLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentLikeWhereInput>;
};

export type QueryGroupByFeedItemArgs = {
  by: Array<FeedItemScalarFieldEnum>;
  having?: Maybe<FeedItemScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
};

export type QueryGroupByFeedItemLikeArgs = {
  by: Array<FeedItemLikeScalarFieldEnum>;
  having?: Maybe<FeedItemLikeScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type QueryGroupByFeedItemRevisionArgs = {
  by: Array<FeedItemRevisionScalarFieldEnum>;
  having?: Maybe<FeedItemRevisionScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<FeedItemRevisionOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemRevisionWhereInput>;
};

export type QueryGroupByIssueArgs = {
  by: Array<IssueScalarFieldEnum>;
  having?: Maybe<IssueScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<IssueOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IssueWhereInput>;
};

export type QueryGroupByMixdownArgs = {
  by: Array<MixdownScalarFieldEnum>;
  having?: Maybe<MixdownScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type QueryGroupByProjectArgs = {
  by: Array<ProjectScalarFieldEnum>;
  having?: Maybe<ProjectScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ProjectOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProjectWhereInput>;
};

export type QueryGroupByTagArgs = {
  by: Array<TagScalarFieldEnum>;
  having?: Maybe<TagScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<TagOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
};

export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type QueryGroupByUsersOnProjectsArgs = {
  by: Array<UsersOnProjectsScalarFieldEnum>;
  having?: Maybe<UsersOnProjectsScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UsersOnProjectsOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UsersOnProjectsWhereInput>;
};

export type QueryGroupByVersionInformationArgs = {
  by: Array<VersionInformationScalarFieldEnum>;
  having?: Maybe<VersionInformationScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<VersionInformationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VersionInformationWhereInput>;
};

export type QueryIssueArgs = {
  where: IssueWhereUniqueInput;
};

export type QueryIssuesArgs = {
  cursor?: Maybe<IssueWhereUniqueInput>;
  distinct?: Maybe<Array<IssueScalarFieldEnum>>;
  orderBy?: Maybe<Array<IssueOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IssueWhereInput>;
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

export type QueryVersionInformationArgs = {
  where: VersionInformationWhereUniqueInput;
};

export type QueryVersionInformationsArgs = {
  cursor?: Maybe<VersionInformationWhereUniqueInput>;
  distinct?: Maybe<Array<VersionInformationScalarFieldEnum>>;
  orderBy?: Maybe<Array<VersionInformationOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VersionInformationWhereInput>;
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

export type StringNullableListFilter = {
  equals?: Maybe<Array<Scalars['String']>>;
  has?: Maybe<Scalars['String']>;
  hasEvery?: Maybe<Array<Scalars['String']>>;
  hasSome?: Maybe<Array<Scalars['String']>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  assetAvailable: PublishAssetArgs;
  changes: PublishProjectChangesArgs;
  newComment: Comment;
  onlineStatus: Scalars['Boolean'];
};

export type SubscriptionAssetAvailableArgs = {
  jobId: Scalars['String'];
  projectId: Scalars['String'];
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
  id: Scalars['Int'];
  userId: Scalars['Int'];
  value: Scalars['Int'];
};

export type TagCreateInput = {
  User?: Maybe<UserCreateNestedOneWithoutInterestsInput>;
  id?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type TagCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type TagCreateManyUserInput = {
  id?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type TagCreateManyUserInputEnvelope = {
  data: Array<TagCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type TagCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<TagCreateWithoutUserInput>>;
  createMany?: Maybe<TagCreateManyUserInputEnvelope>;
};

export type TagCreateOrConnectWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type TagGroupBy = {
  __typename?: 'TagGroupBy';
  _count?: Maybe<TagCountAggregate>;
  _max?: Maybe<TagMaxAggregate>;
  _min?: Maybe<TagMinAggregate>;
  id: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
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
  NOT?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
  value?: Maybe<StringFilter>;
};

export type TagScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TagScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TagScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TagScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringNullableWithAggregatesFilter>;
  value?: Maybe<StringWithAggregatesFilter>;
};

export type TagUpdateInput = {
  User?: Maybe<UserUpdateOneWithoutInterestsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyWithWhereWithoutUserInput = {
  data: TagUpdateManyMutationInput;
  where: TagScalarWhereInput;
};

export type TagUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<TagCreateWithoutUserInput>>;
  createMany?: Maybe<TagCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TagUpdateWithWhereUniqueWithoutUserInput = {
  data: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateWithoutUserInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpsertWithWhereUniqueWithoutUserInput = {
  create: TagCreateWithoutUserInput;
  update: TagUpdateWithoutUserInput;
  where: TagWhereUniqueInput;
};

export type TagWhereInput = {
  AND?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  User?: Maybe<UserRelationFilter>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringNullableFilter>;
  value?: Maybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Asset: Array<Asset>;
  Comment: Array<Comment>;
  CommentLike: Array<CommentLike>;
  EarlyAccessCode: Array<EarlyAccessCode>;
  FeedItemLike: Array<FeedItemLike>;
  Issue: Array<Issue>;
  Mixdown: Array<Mixdown>;
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  email: Scalars['String'];
  feed: Array<FeedItem>;
  followedBy: Array<User>;
  followedByCount?: Maybe<Scalars['Int']>;
  following: Array<User>;
  followingCount?: Maybe<Scalars['Int']>;
  friends?: Maybe<Array<User>>;
  handle: Scalars['String'];
  id: Scalars['String'];
  interests: Array<Tag>;
  isMeFollowing?: Maybe<Scalars['Boolean']>;
  isMyself?: Maybe<Scalars['Boolean']>;
  isOnline: Scalars['Boolean'];
  memberOfBands: Array<UsersOnBands>;
  memberOfProjects: Array<UsersOnProjects>;
  name: Scalars['String'];
  ownsBands: Array<Band>;
  ownsProjects: Array<Project>;
  role: Role;
  sessionCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['Timestamp'];
  website?: Maybe<Scalars['String']>;
};

export type UserAssetArgs = {
  cursor?: Maybe<AssetWhereUniqueInput>;
  distinct?: Maybe<Array<AssetScalarFieldEnum>>;
  orderBy?: Maybe<Array<AssetOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetWhereInput>;
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

export type UserFeedItemLikeArgs = {
  cursor?: Maybe<FeedItemLikeWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemLikeScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemLikeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemLikeWhereInput>;
};

export type UserIssueArgs = {
  cursor?: Maybe<IssueWhereUniqueInput>;
  distinct?: Maybe<Array<IssueScalarFieldEnum>>;
  orderBy?: Maybe<Array<IssueOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<IssueWhereInput>;
};

export type UserMixdownArgs = {
  cursor?: Maybe<MixdownWhereUniqueInput>;
  distinct?: Maybe<Array<MixdownScalarFieldEnum>>;
  orderBy?: Maybe<Array<MixdownOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MixdownWhereInput>;
};

export type UserFeedArgs = {
  cursor?: Maybe<FeedItemWhereUniqueInput>;
  distinct?: Maybe<Array<FeedItemScalarFieldEnum>>;
  orderBy?: Maybe<Array<FeedItemOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<FeedItemWhereInput>;
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
  addressId: Scalars['Int'];
  avatar: Scalars['Int'];
  bio: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  handle: Scalars['Int'];
  id: Scalars['Int'];
  isOnline: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
  website: Scalars['Int'];
};

export type UserCreateInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateManyAddressInput = {
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateManyAddressInputEnvelope = {
  data: Array<UserCreateManyAddressInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UserCreateManyInput = {
  addressId?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateNestedManyWithoutAddressInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutAddressInput>>;
  create?: Maybe<Array<UserCreateWithoutAddressInput>>;
  createMany?: Maybe<UserCreateManyAddressInputEnvelope>;
};

export type UserCreateNestedManyWithoutFollowedByInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowedByInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowedByInput>>;
};

export type UserCreateNestedManyWithoutFollowingInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
};

export type UserCreateNestedOneWithoutAssetInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAssetInput>;
  create?: Maybe<UserCreateWithoutAssetInput>;
};

export type UserCreateNestedOneWithoutCommentInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentInput>;
  create?: Maybe<UserCreateWithoutCommentInput>;
};

export type UserCreateNestedOneWithoutCommentLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCommentLikeInput>;
  create?: Maybe<UserCreateWithoutCommentLikeInput>;
};

export type UserCreateNestedOneWithoutFeedInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFeedInput>;
  create?: Maybe<UserCreateWithoutFeedInput>;
};

export type UserCreateNestedOneWithoutFeedItemLikeInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFeedItemLikeInput>;
  create?: Maybe<UserCreateWithoutFeedItemLikeInput>;
};

export type UserCreateNestedOneWithoutInterestsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutInterestsInput>;
  create?: Maybe<UserCreateWithoutInterestsInput>;
};

export type UserCreateNestedOneWithoutIssueInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIssueInput>;
  create?: Maybe<UserCreateWithoutIssueInput>;
};

export type UserCreateNestedOneWithoutMemberOfBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMemberOfBandsInput>;
  create?: Maybe<UserCreateWithoutMemberOfBandsInput>;
};

export type UserCreateNestedOneWithoutMemberOfProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMemberOfProjectsInput>;
  create?: Maybe<UserCreateWithoutMemberOfProjectsInput>;
};

export type UserCreateNestedOneWithoutMixdownInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMixdownInput>;
  create?: Maybe<UserCreateWithoutMixdownInput>;
};

export type UserCreateNestedOneWithoutOwnsBandsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOwnsBandsInput>;
  create?: Maybe<UserCreateWithoutOwnsBandsInput>;
};

export type UserCreateNestedOneWithoutOwnsProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOwnsProjectsInput>;
  create?: Maybe<UserCreateWithoutOwnsProjectsInput>;
};

export type UserCreateOrConnectWithoutAddressInput = {
  create: UserCreateWithoutAddressInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAssetInput = {
  create: UserCreateWithoutAssetInput;
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

export type UserCreateOrConnectWithoutFeedInput = {
  create: UserCreateWithoutFeedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFeedItemLikeInput = {
  create: UserCreateWithoutFeedItemLikeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowedByInput = {
  create: UserCreateWithoutFollowedByInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFollowingInput = {
  create: UserCreateWithoutFollowingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutInterestsInput = {
  create: UserCreateWithoutInterestsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutIssueInput = {
  create: UserCreateWithoutIssueInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMemberOfBandsInput = {
  create: UserCreateWithoutMemberOfBandsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMemberOfProjectsInput = {
  create: UserCreateWithoutMemberOfProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMixdownInput = {
  create: UserCreateWithoutMixdownInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOwnsBandsInput = {
  create: UserCreateWithoutOwnsBandsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOwnsProjectsInput = {
  create: UserCreateWithoutOwnsProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAddressInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutAssetInput = {
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutCommentInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutCommentLikeInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutFeedInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutFeedItemLikeInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutFollowedByInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutFollowingInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutInterestsInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutIssueInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutMemberOfBandsInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutMemberOfProjectsInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutMixdownInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutOwnsBandsInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsProjects?: Maybe<ProjectCreateNestedManyWithoutOwnerInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutOwnsProjectsInput = {
  Asset?: Maybe<AssetCreateNestedManyWithoutOwnerInput>;
  Comment?: Maybe<CommentCreateNestedManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeCreateNestedManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeCreateNestedManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeCreateNestedManyWithoutUserInput>;
  Issue?: Maybe<IssueCreateNestedManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownCreateNestedManyWithoutTriggerdByInput>;
  address?: Maybe<AddressCreateNestedOneWithoutUserInput>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  feed?: Maybe<FeedItemCreateNestedManyWithoutAuthorInput>;
  followedBy?: Maybe<UserCreateNestedManyWithoutFollowingInput>;
  following?: Maybe<UserCreateNestedManyWithoutFollowedByInput>;
  handle: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  interests?: Maybe<TagCreateNestedManyWithoutUserInput>;
  isOnline?: Maybe<Scalars['Boolean']>;
  memberOfBands?: Maybe<UsersOnBandsCreateNestedManyWithoutUserInput>;
  memberOfProjects?: Maybe<UsersOnProjectsCreateNestedManyWithoutUserInput>;
  name: Scalars['String'];
  ownsBands?: Maybe<BandCreateNestedManyWithoutCreatedByInput>;
  password: Scalars['String'];
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  website?: Maybe<Scalars['String']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  addressId?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  email: Scalars['String'];
  handle: Scalars['String'];
  id: Scalars['String'];
  isOnline: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  updatedAt: Scalars['Timestamp'];
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
  AND?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  addressId?: Maybe<StringNullableFilter>;
  avatar?: Maybe<StringNullableFilter>;
  bio?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  handle?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  isOnline?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  role?: Maybe<EnumRoleFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  website?: Maybe<StringNullableFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  addressId?: Maybe<StringNullableWithAggregatesFilter>;
  avatar?: Maybe<StringNullableWithAggregatesFilter>;
  bio?: Maybe<StringNullableWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  handle?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  isOnline?: Maybe<BoolWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
  role?: Maybe<EnumRoleWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  website?: Maybe<StringNullableWithAggregatesFilter>;
};

export type UserSignUpInput = {
  accessCode: Scalars['String'];
  email: Scalars['String'];
  handle: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserUpdateInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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

export type UserUpdateManyWithoutAddressInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutAddressInput>>;
  create?: Maybe<Array<UserCreateWithoutAddressInput>>;
  createMany?: Maybe<UserCreateManyAddressInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowedByInput>>;
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
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutFollowingInput>>;
  create?: Maybe<Array<UserCreateWithoutFollowingInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutFollowingInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutFollowingInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutFollowingInput>>;
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
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutFeedInput>;
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
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMemberOfBandsInput>;
  create?: Maybe<UserCreateWithoutMemberOfBandsInput>;
  update?: Maybe<UserUpdateWithoutMemberOfBandsInput>;
  upsert?: Maybe<UserUpsertWithoutMemberOfBandsInput>;
};

export type UserUpdateOneRequiredWithoutMemberOfProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutMemberOfProjectsInput>;
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
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOwnsBandsInput>;
  create?: Maybe<UserCreateWithoutOwnsBandsInput>;
  update?: Maybe<UserUpdateWithoutOwnsBandsInput>;
  upsert?: Maybe<UserUpsertWithoutOwnsBandsInput>;
};

export type UserUpdateOneRequiredWithoutOwnsProjectsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutOwnsProjectsInput>;
  create?: Maybe<UserCreateWithoutOwnsProjectsInput>;
  update?: Maybe<UserUpdateWithoutOwnsProjectsInput>;
  upsert?: Maybe<UserUpsertWithoutOwnsProjectsInput>;
};

export type UserUpdateOneWithoutAssetInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAssetInput>;
  create?: Maybe<UserCreateWithoutAssetInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutAssetInput>;
  upsert?: Maybe<UserUpsertWithoutAssetInput>;
};

export type UserUpdateOneWithoutInterestsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutInterestsInput>;
  create?: Maybe<UserCreateWithoutInterestsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutInterestsInput>;
  upsert?: Maybe<UserUpsertWithoutInterestsInput>;
};

export type UserUpdateOneWithoutIssueInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutIssueInput>;
  create?: Maybe<UserCreateWithoutIssueInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutIssueInput>;
  upsert?: Maybe<UserUpsertWithoutIssueInput>;
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

export type UserUpdateWithoutAddressInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAssetInput = {
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentLikeInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFeedInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
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

export type UserUpdateWithoutFeedItemLikeInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFollowedByInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
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

export type UserUpdateWithoutFollowingInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
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

export type UserUpdateWithoutInterestsInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
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

export type UserUpdateWithoutIssueInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMemberOfBandsInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfProjects?: Maybe<UsersOnProjectsUpdateManyWithoutUserInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMemberOfProjectsInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  feed?: Maybe<FeedItemUpdateManyWithoutAuthorInput>;
  followedBy?: Maybe<UserUpdateManyWithoutFollowingInput>;
  following?: Maybe<UserUpdateManyWithoutFollowedByInput>;
  handle?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  interests?: Maybe<TagUpdateManyWithoutUserInput>;
  isOnline?: Maybe<BoolFieldUpdateOperationsInput>;
  memberOfBands?: Maybe<UsersOnBandsUpdateManyWithoutUserInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMixdownInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOwnsBandsInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsProjects?: Maybe<ProjectUpdateManyWithoutOwnerInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOwnsProjectsInput = {
  Asset?: Maybe<AssetUpdateManyWithoutOwnerInput>;
  Comment?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  CommentLike?: Maybe<CommentLikeUpdateManyWithoutUserInput>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeUpdateManyWithoutClaimedByInput>;
  FeedItemLike?: Maybe<FeedItemLikeUpdateManyWithoutUserInput>;
  Issue?: Maybe<IssueUpdateManyWithoutCreatedByInput>;
  Mixdown?: Maybe<MixdownUpdateManyWithoutTriggerdByInput>;
  address?: Maybe<AddressUpdateOneWithoutUserInput>;
  avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bio?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  name?: Maybe<StringFieldUpdateOperationsInput>;
  ownsBands?: Maybe<BandUpdateManyWithoutCreatedByInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  website?: Maybe<NullableStringFieldUpdateOperationsInput>;
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

export type UserUpsertWithoutAssetInput = {
  create: UserCreateWithoutAssetInput;
  update: UserUpdateWithoutAssetInput;
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

export type UserUpsertWithoutIssueInput = {
  create: UserCreateWithoutIssueInput;
  update: UserUpdateWithoutIssueInput;
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

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  Asset?: Maybe<AssetListRelationFilter>;
  Comment?: Maybe<CommentListRelationFilter>;
  CommentLike?: Maybe<CommentLikeListRelationFilter>;
  EarlyAccessCode?: Maybe<EarlyAccessCodeListRelationFilter>;
  FeedItemLike?: Maybe<FeedItemLikeListRelationFilter>;
  Issue?: Maybe<IssueListRelationFilter>;
  Mixdown?: Maybe<MixdownListRelationFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  address?: Maybe<AddressRelationFilter>;
  addressId?: Maybe<StringNullableFilter>;
  avatar?: Maybe<StringNullableFilter>;
  bio?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  feed?: Maybe<FeedItemListRelationFilter>;
  followedBy?: Maybe<UserListRelationFilter>;
  following?: Maybe<UserListRelationFilter>;
  handle?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  interests?: Maybe<TagListRelationFilter>;
  isOnline?: Maybe<BoolFilter>;
  memberOfBands?: Maybe<UsersOnBandsListRelationFilter>;
  memberOfProjects?: Maybe<UsersOnProjectsListRelationFilter>;
  name?: Maybe<StringFilter>;
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

export type UsersOnBands = {
  __typename?: 'UsersOnBands';
  bandId: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  userId: Scalars['String'];
};

export type UsersOnBandsCreateManyBandInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
};

export type UsersOnBandsCreateManyBandInputEnvelope = {
  data: Array<UsersOnBandsCreateManyBandInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UsersOnBandsCreateManyUserInput = {
  bandId: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export type UsersOnBandsCreateManyUserInputEnvelope = {
  data: Array<UsersOnBandsCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UsersOnBandsCreateNestedManyWithoutBandInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnBandsCreateOrConnectWithoutBandInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutBandInput>>;
  createMany?: Maybe<UsersOnBandsCreateManyBandInputEnvelope>;
};

export type UsersOnBandsCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnBandsCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutUserInput>>;
  createMany?: Maybe<UsersOnBandsCreateManyUserInputEnvelope>;
};

export type UsersOnBandsCreateOrConnectWithoutBandInput = {
  create: UsersOnBandsCreateWithoutBandInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsCreateOrConnectWithoutUserInput = {
  create: UsersOnBandsCreateWithoutUserInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsCreateWithoutBandInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateNestedOneWithoutMemberOfBandsInput;
};

export type UsersOnBandsCreateWithoutUserInput = {
  band: BandCreateNestedOneWithoutMembersInput;
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
  NOT?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  OR?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  bandId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
};

export type UsersOnBandsUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersOnBandsUpdateManyWithWhereWithoutBandInput = {
  data: UsersOnBandsUpdateManyMutationInput;
  where: UsersOnBandsScalarWhereInput;
};

export type UsersOnBandsUpdateManyWithWhereWithoutUserInput = {
  data: UsersOnBandsUpdateManyMutationInput;
  where: UsersOnBandsScalarWhereInput;
};

export type UsersOnBandsUpdateManyWithoutBandInput = {
  connect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnBandsCreateOrConnectWithoutBandInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutBandInput>>;
  createMany?: Maybe<UsersOnBandsCreateManyBandInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<UsersOnBandsCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<UsersOnBandsCreateWithoutUserInput>>;
  createMany?: Maybe<UsersOnBandsCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnBandsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnBandsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnBandsUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UsersOnBandsUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<UsersOnBandsUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UsersOnBandsUpdateWithWhereUniqueWithoutBandInput = {
  data: UsersOnBandsUpdateWithoutBandInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsUpdateWithWhereUniqueWithoutUserInput = {
  data: UsersOnBandsUpdateWithoutUserInput;
  where: UsersOnBandsWhereUniqueInput;
};

export type UsersOnBandsUpdateWithoutBandInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutMemberOfBandsInput>;
};

export type UsersOnBandsUpdateWithoutUserInput = {
  band?: Maybe<BandUpdateOneRequiredWithoutMembersInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
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
  NOT?: Maybe<Array<UsersOnBandsWhereInput>>;
  OR?: Maybe<Array<UsersOnBandsWhereInput>>;
  band?: Maybe<BandRelationFilter>;
  bandId?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
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
  createdAt: Scalars['Int'];
  projectId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UsersOnProjectsCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  project: ProjectCreateNestedOneWithoutMembersInput;
  user: UserCreateNestedOneWithoutMemberOfProjectsInput;
};

export type UsersOnProjectsCreateManyInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  projectId: Scalars['String'];
  userId: Scalars['String'];
};

export type UsersOnProjectsCreateManyProjectInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  userId: Scalars['String'];
};

export type UsersOnProjectsCreateManyProjectInputEnvelope = {
  data: Array<UsersOnProjectsCreateManyProjectInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UsersOnProjectsCreateManyUserInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  projectId: Scalars['String'];
};

export type UsersOnProjectsCreateManyUserInputEnvelope = {
  data: Array<UsersOnProjectsCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type UsersOnProjectsCreateNestedManyWithoutProjectInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnProjectsCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutProjectInput>>;
  createMany?: Maybe<UsersOnProjectsCreateManyProjectInputEnvelope>;
};

export type UsersOnProjectsCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnProjectsCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutUserInput>>;
  createMany?: Maybe<UsersOnProjectsCreateManyUserInputEnvelope>;
};

export type UsersOnProjectsCreateOrConnectWithoutProjectInput = {
  create: UsersOnProjectsCreateWithoutProjectInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsCreateOrConnectWithoutUserInput = {
  create: UsersOnProjectsCreateWithoutUserInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsCreateWithoutProjectInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  user: UserCreateNestedOneWithoutMemberOfProjectsInput;
};

export type UsersOnProjectsCreateWithoutUserInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  project: ProjectCreateNestedOneWithoutMembersInput;
};

export type UsersOnProjectsGroupBy = {
  __typename?: 'UsersOnProjectsGroupBy';
  _count?: Maybe<UsersOnProjectsCountAggregate>;
  _max?: Maybe<UsersOnProjectsMaxAggregate>;
  _min?: Maybe<UsersOnProjectsMinAggregate>;
  createdAt: Scalars['Timestamp'];
  projectId: Scalars['String'];
  userId: Scalars['String'];
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
  NOT?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  OR?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  projectId?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type UsersOnProjectsScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UsersOnProjectsScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UsersOnProjectsScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UsersOnProjectsScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  projectId?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type UsersOnProjectsUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMembersInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutMemberOfProjectsInput>;
};

export type UsersOnProjectsUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UsersOnProjectsUpdateManyWithWhereWithoutProjectInput = {
  data: UsersOnProjectsUpdateManyMutationInput;
  where: UsersOnProjectsScalarWhereInput;
};

export type UsersOnProjectsUpdateManyWithWhereWithoutUserInput = {
  data: UsersOnProjectsUpdateManyMutationInput;
  where: UsersOnProjectsScalarWhereInput;
};

export type UsersOnProjectsUpdateManyWithoutProjectInput = {
  connect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<UsersOnProjectsCreateOrConnectWithoutProjectInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutProjectInput>>;
  createMany?: Maybe<UsersOnProjectsCreateManyProjectInputEnvelope>;
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
  connectOrCreate?: Maybe<Array<UsersOnProjectsCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<UsersOnProjectsCreateWithoutUserInput>>;
  createMany?: Maybe<UsersOnProjectsCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UsersOnProjectsScalarWhereInput>>;
  disconnect?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  set?: Maybe<Array<UsersOnProjectsWhereUniqueInput>>;
  update?: Maybe<Array<UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<UsersOnProjectsUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<UsersOnProjectsUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UsersOnProjectsUpdateWithWhereUniqueWithoutProjectInput = {
  data: UsersOnProjectsUpdateWithoutProjectInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpdateWithWhereUniqueWithoutUserInput = {
  data: UsersOnProjectsUpdateWithoutUserInput;
  where: UsersOnProjectsWhereUniqueInput;
};

export type UsersOnProjectsUpdateWithoutProjectInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutMemberOfProjectsInput>;
};

export type UsersOnProjectsUpdateWithoutUserInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutMembersInput>;
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
  NOT?: Maybe<Array<UsersOnProjectsWhereInput>>;
  OR?: Maybe<Array<UsersOnProjectsWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  project?: Maybe<ProjectRelationFilter>;
  projectId?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type UsersOnProjectsWhereUniqueInput = {
  userId_projectId?: Maybe<UsersOnProjectsUserIdProjectIdCompoundUniqueInput>;
};

export type VersionInformation = {
  __typename?: 'VersionInformation';
  createdAt: Scalars['Timestamp'];
  description: Scalars['String'];
  id: Scalars['String'];
};

export type VersionInformationCountAggregate = {
  __typename?: 'VersionInformationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
};

export type VersionInformationCreateInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['String']>;
};

export type VersionInformationCreateManyInput = {
  createdAt?: Maybe<Scalars['Timestamp']>;
  description: Scalars['String'];
  id?: Maybe<Scalars['String']>;
};

export type VersionInformationGroupBy = {
  __typename?: 'VersionInformationGroupBy';
  _count?: Maybe<VersionInformationCountAggregate>;
  _max?: Maybe<VersionInformationMaxAggregate>;
  _min?: Maybe<VersionInformationMinAggregate>;
  createdAt: Scalars['Timestamp'];
  description: Scalars['String'];
  id: Scalars['String'];
};

export type VersionInformationMaxAggregate = {
  __typename?: 'VersionInformationMaxAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type VersionInformationMinAggregate = {
  __typename?: 'VersionInformationMinAggregate';
  createdAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type VersionInformationOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
};

export enum VersionInformationScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
}

export type VersionInformationScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<VersionInformationScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<VersionInformationScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<VersionInformationScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
};

export type VersionInformationUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
};

export type VersionInformationUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
};

export type VersionInformationWhereInput = {
  AND?: Maybe<Array<VersionInformationWhereInput>>;
  NOT?: Maybe<Array<VersionInformationWhereInput>>;
  OR?: Maybe<Array<VersionInformationWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
};

export type VersionInformationWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BlockCommentFragment = { __typename?: 'Comment' } & Pick<
  Comment,
  'id' | 'text' | 'updatedAt' | 'likeCount' | 'isMeLiking'
> & { author: { __typename?: 'User' } & UserLinkFragment };

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

export type NewCommentSubscriptionVariables = Exact<{
  feedItemId: Scalars['String'];
}>;

export type NewCommentSubscription = { __typename?: 'Subscription' } & {
  newComment: { __typename?: 'Comment' } & BlockCommentFragment;
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
    audio: { __typename?: 'Asset' } & Pick<Asset, 'location'>;
    project: { __typename?: 'Project' } & Pick<Project, 'id' | 'name' | 'isPrivate'>;
  };

export type PreviewMixdownFragment = { __typename?: 'Mixdown' } & Pick<
  Mixdown,
  'id' | 'version' | 'name' | 'createdAt' | 'listens'
> & { audio: { __typename?: 'Asset' } & Pick<Asset, 'id' | 'isPublic' | 'location'> };

export type MyMixdownsQueryVariables = Exact<{ [key: string]: never }>;

export type MyMixdownsQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<User, 'id'> & {
      ownsProjects: Array<
        { __typename?: 'Project' } & Pick<Project, 'id' | 'name' | 'isPrivate' | 'updatedAt'> & {
            mixdowns: Array<{ __typename?: 'Mixdown' } & PreviewMixdownFragment>;
          }
      >;
    };
};

export type MixdownQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type MixdownQuery = { __typename?: 'Query' } & {
  mixdown?: Maybe<
    { __typename?: 'Mixdown' } & Pick<Mixdown, 'id' | 'listens' | 'createdAt' | 'name' | 'version'> & {
        audio: { __typename?: 'Asset' } & Pick<Asset, 'id' | 'isPublic' | 'location'>;
        project: { __typename?: 'Project' } & Pick<Project, 'name'> & {
            owner: { __typename?: 'User' } & Pick<User, 'id' | 'avatar' | 'name'>;
          };
      }
  >;
};

export type SessionListDataFragment = { __typename?: 'Project' } & Pick<
  Project,
  'id' | 'createdAt' | 'name' | 'updatedAt'
> & { members: Array<{ __typename?: 'UsersOnProjects' } & { user: { __typename?: 'User' } & UserLinkFragment }> };

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

export type UserLinkFragment = { __typename?: 'User' } & Pick<User, 'id' | 'handle' | 'name' | 'avatar' | 'isOnline'>;

export type FeedUserFragment = { __typename?: 'User' } & Pick<User, 'isMeFollowing'> & UserLinkFragment;

export type BaseProfileFragment = { __typename?: 'User' } & Pick<
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
  | 'sessionCount'
  | 'isMyself'
> & {
    followedBy: Array<{ __typename?: 'User' } & UserLinkFragment>;
    interests: Array<{ __typename?: 'Tag' } & Pick<Tag, 'value'>>;
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
  me: { __typename?: 'User' } & Pick<User, 'id'> & { followedBy: Array<{ __typename?: 'User' } & FeedUserFragment> };
};

export type MeFollowingQueryVariables = Exact<{ [key: string]: never }>;

export type MeFollowingQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<User, 'id'> & { following: Array<{ __typename?: 'User' } & FeedUserFragment> };
};

export type MyFriendsQueryVariables = Exact<{ [key: string]: never }>;

export type MyFriendsQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<User, 'id'> & {
      friends?: Maybe<Array<{ __typename?: 'User' } & UserLinkFragment>>;
    };
};

export type FollowRecommendationsQueryVariables = Exact<{ [key: string]: never }>;

export type FollowRecommendationsQuery = { __typename?: 'Query' } & {
  followRecommendations: Array<
    { __typename?: 'User' } & Pick<User, 'followedByCount' | 'isMeFollowing'> & UserLinkFragment
  >;
};

export type SearchQueryVariables = Exact<{
  searchString: Scalars['String'];
  me?: Maybe<Scalars['String']>;
}>;

export type SearchQuery = { __typename?: 'Query' } & {
  users: Array<{ __typename?: 'User' } & FeedUserFragment>;
  projects: Array<{ __typename?: 'Project' } & SessionListDataFragment>;
};

export type SignUpUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  accessCode: Scalars['String'];
  handle: Scalars['String'];
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

export type OnlineStatusSubscriptionVariables = Exact<{
  userId: Scalars['String'];
}>;

export type OnlineStatusSubscription = { __typename?: 'Subscription' } & Pick<Subscription, 'onlineStatus'>;

export const UserLinkFragmentDoc = gql`
  fragment UserLink on User {
    id
    handle
    name
    avatar
    isOnline
  }
`;
export const BlockCommentFragmentDoc = gql`
  fragment BlockComment on Comment {
    author {
      ...UserLink
    }
    id
    text
    updatedAt
    likeCount
    isMeLiking
  }
  ${UserLinkFragmentDoc}
`;
export const CreatedCommentFragmentDoc = gql`
  fragment CreatedComment on Comment {
    id
    likeCount
    updatedAt
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
    members {
      user {
        ...UserLink
      }
    }
  }
  ${UserLinkFragmentDoc}
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
    sessionCount
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
    comments(where: { feedItemId: { equals: $feedItemId } }, take: 5, orderBy: [{ createdAt: desc }]) {
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
  baseOptions: Apollo.QueryHookOptions<FirstLevelCommentsQuery, FirstLevelCommentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FirstLevelCommentsQuery, FirstLevelCommentsQueryVariables>(
    FirstLevelCommentsDocument,
    options,
  );
}
export function useFirstLevelCommentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FirstLevelCommentsQuery, FirstLevelCommentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FirstLevelCommentsQuery, FirstLevelCommentsQueryVariables>(
    FirstLevelCommentsDocument,
    options,
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
    comments(where: { parentComment: { is: { id: { equals: $commentId } } } }, take: 5) {
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
  baseOptions: Apollo.QueryHookOptions<SecondLevelCommentsQuery, SecondLevelCommentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SecondLevelCommentsQuery, SecondLevelCommentsQueryVariables>(
    SecondLevelCommentsDocument,
    options,
  );
}
export function useSecondLevelCommentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SecondLevelCommentsQuery, SecondLevelCommentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SecondLevelCommentsQuery, SecondLevelCommentsQueryVariables>(
    SecondLevelCommentsDocument,
    options,
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PostCommentToFeedItemMutation, PostCommentToFeedItemMutationVariables>(
    PostCommentToFeedItemDocument,
    options,
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PostCommentToCommentMutation, PostCommentToCommentMutationVariables>(
    PostCommentToCommentDocument,
    options,
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LikeCommentMutation, LikeCommentMutationVariables>(LikeCommentDocument, options);
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UnlikeCommentMutation, UnlikeCommentMutationVariables>(UnlikeCommentDocument, options);
}
export type UnlikeCommentMutationHookResult = ReturnType<typeof useUnlikeCommentMutation>;
export type UnlikeCommentMutationResult = Apollo.MutationResult<UnlikeCommentMutation>;
export type UnlikeCommentMutationOptions = Apollo.BaseMutationOptions<
  UnlikeCommentMutation,
  UnlikeCommentMutationVariables
>;
export const NewCommentDocument = gql`
  subscription newComment($feedItemId: String!) {
    newComment(feedItemId: $feedItemId) {
      ...BlockComment
    }
  }
  ${BlockCommentFragmentDoc}
`;

/**
 * __useNewCommentSubscription__
 *
 * To run a query within a React component, call `useNewCommentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewCommentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewCommentSubscription({
 *   variables: {
 *      feedItemId: // value for 'feedItemId'
 *   },
 * });
 */
export function useNewCommentSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<NewCommentSubscription, NewCommentSubscriptionVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<NewCommentSubscription, NewCommentSubscriptionVariables>(NewCommentDocument, options);
}
export type NewCommentSubscriptionHookResult = ReturnType<typeof useNewCommentSubscription>;
export type NewCommentSubscriptionResult = Apollo.SubscriptionResult<NewCommentSubscription>;
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
  baseOptions: Apollo.QueryHookOptions<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>(FeedItemsByHandleDocument, options);
}
export function useFeedItemsByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FeedItemsByHandleQuery, FeedItemsByHandleQueryVariables>(
    FeedItemsByHandleDocument,
    options,
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyFeedQuery, MyFeedQueryVariables>(MyFeedDocument, options);
}
export function useMyFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyFeedQuery, MyFeedQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyFeedQuery, MyFeedQueryVariables>(MyFeedDocument, options);
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
  baseOptions: Apollo.QueryHookOptions<FeedItemByIdQuery, FeedItemByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FeedItemByIdQuery, FeedItemByIdQueryVariables>(FeedItemByIdDocument, options);
}
export function useFeedItemByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FeedItemByIdQuery, FeedItemByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FeedItemByIdQuery, FeedItemByIdQueryVariables>(FeedItemByIdDocument, options);
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyLikesQuery, MyLikesQueryVariables>(MyLikesDocument, options);
}
export function useMyLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyLikesQuery, MyLikesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyLikesQuery, MyLikesQueryVariables>(MyLikesDocument, options);
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateFeedItemMutation, CreateFeedItemMutationVariables>(CreateFeedItemDocument, options);
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTextFeedItemMutation, CreateTextFeedItemMutationVariables>(
    CreateTextFeedItemDocument,
    options,
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LikeFeedItemMutation, LikeFeedItemMutationVariables>(LikeFeedItemDocument, options);
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UnlikeFeedItemMutation, UnlikeFeedItemMutationVariables>(UnlikeFeedItemDocument, options);
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
      id
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyMixdownsQuery, MyMixdownsQueryVariables>(MyMixdownsDocument, options);
}
export function useMyMixdownsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyMixdownsQuery, MyMixdownsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyMixdownsQuery, MyMixdownsQueryVariables>(MyMixdownsDocument, options);
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
export function useMixdownQuery(baseOptions: Apollo.QueryHookOptions<MixdownQuery, MixdownQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MixdownQuery, MixdownQueryVariables>(MixdownDocument, options);
}
export function useMixdownLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MixdownQuery, MixdownQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MixdownQuery, MixdownQueryVariables>(MixdownDocument, options);
}
export type MixdownQueryHookResult = ReturnType<typeof useMixdownQuery>;
export type MixdownLazyQueryHookResult = ReturnType<typeof useMixdownLazyQuery>;
export type MixdownQueryResult = Apollo.QueryResult<MixdownQuery, MixdownQueryVariables>;
export const MyProjectsDocument = gql`
  query myProjects($me: String) {
    projects(
      where: { OR: [{ owner: { is: { id: { equals: $me } } } }, { members: { some: { userId: { equals: $me } } } }] }
      orderBy: [{ updatedAt: desc }]
    ) {
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyProjectsQuery, MyProjectsQueryVariables>(MyProjectsDocument, options);
}
export function useMyProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyProjectsQuery, MyProjectsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyProjectsQuery, MyProjectsQueryVariables>(MyProjectsDocument, options);
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
  baseOptions: Apollo.QueryHookOptions<PublicProjectsByHandleQuery, PublicProjectsByHandleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PublicProjectsByHandleQuery, PublicProjectsByHandleQueryVariables>(
    PublicProjectsByHandleDocument,
    options,
  );
}
export function usePublicProjectsByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PublicProjectsByHandleQuery, PublicProjectsByHandleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PublicProjectsByHandleQuery, PublicProjectsByHandleQueryVariables>(
    PublicProjectsByHandleDocument,
    options,
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
    createProject(
      data: {
        name: $name
        isPrivate: false
        content: {}
        members: { create: [{ user: { connect: { id: $me } } }] }
        owner: { connect: { id: $me } }
      }
    ) {
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
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
  baseOptions: Apollo.QueryHookOptions<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>(
    UserProfileByHandleDocument,
    options,
  );
}
export function useUserProfileByHandleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserProfileByHandleQuery, UserProfileByHandleQueryVariables>(
    UserProfileByHandleDocument,
    options,
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
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const MyFollowersDocument = gql`
  query myFollowers {
    me {
      id
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyFollowersQuery, MyFollowersQueryVariables>(MyFollowersDocument, options);
}
export function useMyFollowersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyFollowersQuery, MyFollowersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyFollowersQuery, MyFollowersQueryVariables>(MyFollowersDocument, options);
}
export type MyFollowersQueryHookResult = ReturnType<typeof useMyFollowersQuery>;
export type MyFollowersLazyQueryHookResult = ReturnType<typeof useMyFollowersLazyQuery>;
export type MyFollowersQueryResult = Apollo.QueryResult<MyFollowersQuery, MyFollowersQueryVariables>;
export const MeFollowingDocument = gql`
  query meFollowing {
    me {
      id
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeFollowingQuery, MeFollowingQueryVariables>(MeFollowingDocument, options);
}
export function useMeFollowingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeFollowingQuery, MeFollowingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeFollowingQuery, MeFollowingQueryVariables>(MeFollowingDocument, options);
}
export type MeFollowingQueryHookResult = ReturnType<typeof useMeFollowingQuery>;
export type MeFollowingLazyQueryHookResult = ReturnType<typeof useMeFollowingLazyQuery>;
export type MeFollowingQueryResult = Apollo.QueryResult<MeFollowingQuery, MeFollowingQueryVariables>;
export const MyFriendsDocument = gql`
  query myFriends {
    me {
      id
      friends {
        ...UserLink
      }
    }
  }
  ${UserLinkFragmentDoc}
`;

/**
 * __useMyFriendsQuery__
 *
 * To run a query within a React component, call `useMyFriendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFriendsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFriendsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFriendsQuery(baseOptions?: Apollo.QueryHookOptions<MyFriendsQuery, MyFriendsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyFriendsQuery, MyFriendsQueryVariables>(MyFriendsDocument, options);
}
export function useMyFriendsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyFriendsQuery, MyFriendsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyFriendsQuery, MyFriendsQueryVariables>(MyFriendsDocument, options);
}
export type MyFriendsQueryHookResult = ReturnType<typeof useMyFriendsQuery>;
export type MyFriendsLazyQueryHookResult = ReturnType<typeof useMyFriendsLazyQuery>;
export type MyFriendsQueryResult = Apollo.QueryResult<MyFriendsQuery, MyFriendsQueryVariables>;
export const FollowRecommendationsDocument = gql`
  query followRecommendations {
    followRecommendations {
      ...UserLink
      followedByCount
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FollowRecommendationsQuery, FollowRecommendationsQueryVariables>(
    FollowRecommendationsDocument,
    options,
  );
}
export function useFollowRecommendationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FollowRecommendationsQuery, FollowRecommendationsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FollowRecommendationsQuery, FollowRecommendationsQueryVariables>(
    FollowRecommendationsDocument,
    options,
  );
}
export type FollowRecommendationsQueryHookResult = ReturnType<typeof useFollowRecommendationsQuery>;
export type FollowRecommendationsLazyQueryHookResult = ReturnType<typeof useFollowRecommendationsLazyQuery>;
export type FollowRecommendationsQueryResult = Apollo.QueryResult<
  FollowRecommendationsQuery,
  FollowRecommendationsQueryVariables
>;
export const SearchDocument = gql`
  query search($searchString: String!, $me: String) {
    users(
      where: {
        OR: [
          { name: { contains: $searchString, mode: insensitive } }
          { handle: { contains: $searchString, mode: insensitive } }
        ]
      }
    ) {
      ...FeedUser
    }
    projects(
      where: {
        name: { contains: $searchString, mode: insensitive }
        OR: [{ ownerId: { equals: $me }, members: { some: { userId: { equals: $me } } } }]
      }
    ) {
      ...SessionListData
    }
  }
  ${FeedUserFragmentDoc}
  ${SessionListDataFragmentDoc}
`;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      searchString: // value for 'searchString'
 *      me: // value for 'me'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
}
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
}
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
export const SignUpUserDocument = gql`
  mutation signUpUser($name: String!, $email: String!, $password: String!, $accessCode: String!, $handle: String!) {
    signUpUser(data: { name: $name, email: $email, password: $password, accessCode: $accessCode, handle: $handle }) {
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
 *      handle: // value for 'handle'
 *   },
 * });
 */
export function useSignUpUserMutation(
  baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument, options);
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
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UnfollowUserMutation, UnfollowUserMutationVariables>(UnfollowUserDocument, options);
}
export type UnfollowUserMutationHookResult = ReturnType<typeof useUnfollowUserMutation>;
export type UnfollowUserMutationResult = Apollo.MutationResult<UnfollowUserMutation>;
export type UnfollowUserMutationOptions = Apollo.BaseMutationOptions<
  UnfollowUserMutation,
  UnfollowUserMutationVariables
>;
export const OnlineStatusDocument = gql`
  subscription onlineStatus($userId: String!) {
    onlineStatus(userId: $userId)
  }
`;

/**
 * __useOnlineStatusSubscription__
 *
 * To run a query within a React component, call `useOnlineStatusSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnlineStatusSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnlineStatusSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOnlineStatusSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<OnlineStatusSubscription, OnlineStatusSubscriptionVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<OnlineStatusSubscription, OnlineStatusSubscriptionVariables>(
    OnlineStatusDocument,
    options,
  );
}
export type OnlineStatusSubscriptionHookResult = ReturnType<typeof useOnlineStatusSubscription>;
export type OnlineStatusSubscriptionResult = Apollo.SubscriptionResult<OnlineStatusSubscription>;
