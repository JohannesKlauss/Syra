import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Timestamp: number;
};
export declare type AggregateProject = {
    __typename?: 'AggregateProject';
    avg?: Maybe<ProjectAvgAggregateOutputType>;
    count: Scalars['Int'];
    max?: Maybe<ProjectMaxAggregateOutputType>;
    min?: Maybe<ProjectMinAggregateOutputType>;
    sum?: Maybe<ProjectSumAggregateOutputType>;
};
export declare type AggregateUser = {
    __typename?: 'AggregateUser';
    avg?: Maybe<UserAvgAggregateOutputType>;
    count: Scalars['Int'];
    max?: Maybe<UserMaxAggregateOutputType>;
    min?: Maybe<UserMinAggregateOutputType>;
    sum?: Maybe<UserSumAggregateOutputType>;
};
export declare type BatchPayload = {
    __typename?: 'BatchPayload';
    count: Scalars['Int'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    createLocalUser?: Maybe<User>;
    createProject: Project;
    createUser: User;
    deleteManyProject: BatchPayload;
    deleteManyUser: BatchPayload;
    deleteProject?: Maybe<Project>;
    deleteUser?: Maybe<User>;
    updateManyProject: BatchPayload;
    updateManyUser: BatchPayload;
    updateProject?: Maybe<Project>;
    updateUser?: Maybe<User>;
    upsertProject: Project;
    upsertUser: User;
};
export declare type MutationCreateLocalUserArgs = {
    data: SignUpUserLocalInput;
};
export declare type MutationCreateProjectArgs = {
    data: ProjectCreateInput;
};
export declare type MutationCreateUserArgs = {
    data: UserCreateInput;
};
export declare type MutationDeleteManyProjectArgs = {
    where?: Maybe<ProjectWhereInput>;
};
export declare type MutationDeleteManyUserArgs = {
    where?: Maybe<UserWhereInput>;
};
export declare type MutationDeleteProjectArgs = {
    where: ProjectWhereUniqueInput;
};
export declare type MutationDeleteUserArgs = {
    where: UserWhereUniqueInput;
};
export declare type MutationUpdateManyProjectArgs = {
    data: ProjectUpdateManyMutationInput;
    where?: Maybe<ProjectWhereInput>;
};
export declare type MutationUpdateManyUserArgs = {
    data: UserUpdateManyMutationInput;
    where?: Maybe<UserWhereInput>;
};
export declare type MutationUpdateProjectArgs = {
    data: ProjectUpdateInput;
    where: ProjectWhereUniqueInput;
};
export declare type MutationUpdateUserArgs = {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
};
export declare type MutationUpsertProjectArgs = {
    create: ProjectCreateInput;
    update: ProjectUpdateInput;
    where: ProjectWhereUniqueInput;
};
export declare type MutationUpsertUserArgs = {
    create: UserCreateInput;
    update: UserUpdateInput;
    where: UserWhereUniqueInput;
};
export declare type Project = {
    __typename?: 'Project';
    User: User;
    createdAt: Scalars['Timestamp'];
    id: Scalars['Int'];
    name: Scalars['String'];
    ownerId: Scalars['Int'];
    updatedAt: Scalars['Timestamp'];
};
export declare type ProjectAvgAggregateOutputType = {
    __typename?: 'ProjectAvgAggregateOutputType';
    id: Scalars['Float'];
    ownerId: Scalars['Float'];
};
export declare type ProjectMaxAggregateOutputType = {
    __typename?: 'ProjectMaxAggregateOutputType';
    id: Scalars['Int'];
    ownerId: Scalars['Int'];
};
export declare type ProjectMinAggregateOutputType = {
    __typename?: 'ProjectMinAggregateOutputType';
    id: Scalars['Int'];
    ownerId: Scalars['Int'];
};
export declare type ProjectSumAggregateOutputType = {
    __typename?: 'ProjectSumAggregateOutputType';
    id: Scalars['Int'];
    ownerId: Scalars['Int'];
};
export declare type Query = {
    __typename?: 'Query';
    aggregateProject: AggregateProject;
    aggregateUser: AggregateUser;
    findFirstProject?: Maybe<Project>;
    findFirstUser?: Maybe<User>;
    project?: Maybe<Project>;
    projects: Array<Project>;
    user?: Maybe<User>;
    users: Array<User>;
};
export declare type QueryAggregateProjectArgs = {
    cursor?: Maybe<ProjectWhereUniqueInput>;
    distinct?: Maybe<Array<ProjectDistinctFieldEnum>>;
    orderBy?: Maybe<Array<ProjectOrderByInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectWhereInput>;
};
export declare type QueryAggregateUserArgs = {
    cursor?: Maybe<UserWhereUniqueInput>;
    distinct?: Maybe<Array<UserDistinctFieldEnum>>;
    orderBy?: Maybe<Array<UserOrderByInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<UserWhereInput>;
};
export declare type QueryFindFirstProjectArgs = {
    cursor?: Maybe<ProjectWhereUniqueInput>;
    distinct?: Maybe<Array<ProjectDistinctFieldEnum>>;
    orderBy?: Maybe<Array<ProjectOrderByInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectWhereInput>;
};
export declare type QueryFindFirstUserArgs = {
    cursor?: Maybe<UserWhereUniqueInput>;
    distinct?: Maybe<Array<UserDistinctFieldEnum>>;
    orderBy?: Maybe<Array<UserOrderByInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<UserWhereInput>;
};
export declare type QueryProjectArgs = {
    where: ProjectWhereUniqueInput;
};
export declare type QueryProjectsArgs = {
    cursor?: Maybe<ProjectWhereUniqueInput>;
    distinct?: Maybe<Array<ProjectDistinctFieldEnum>>;
    orderBy?: Maybe<Array<ProjectOrderByInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectWhereInput>;
};
export declare type QueryUserArgs = {
    where: UserWhereUniqueInput;
};
export declare type QueryUsersArgs = {
    cursor?: Maybe<UserWhereUniqueInput>;
    distinct?: Maybe<Array<UserDistinctFieldEnum>>;
    orderBy?: Maybe<Array<UserOrderByInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<UserWhereInput>;
};
export declare type User = {
    __typename?: 'User';
    Project?: Maybe<Array<Project>>;
    avatar?: Maybe<Scalars['String']>;
    createdAt: Scalars['Timestamp'];
    email: Scalars['String'];
    id: Scalars['Int'];
    lastOnline: Scalars['Timestamp'];
    name: Scalars['String'];
    tier: Scalars['Int'];
};
export declare type UserProjectArgs = {
    cursor?: Maybe<ProjectWhereUniqueInput>;
    distinct?: Maybe<Array<ProjectDistinctFieldEnum>>;
    orderBy?: Maybe<Array<ProjectOrderByInput>>;
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    where?: Maybe<ProjectWhereInput>;
};
export declare type UserAvgAggregateOutputType = {
    __typename?: 'UserAvgAggregateOutputType';
    id: Scalars['Float'];
    socialLoginType?: Maybe<Scalars['Float']>;
    tier: Scalars['Float'];
};
export declare type UserMaxAggregateOutputType = {
    __typename?: 'UserMaxAggregateOutputType';
    id: Scalars['Int'];
    socialLoginType?: Maybe<Scalars['Int']>;
    tier: Scalars['Int'];
};
export declare type UserMinAggregateOutputType = {
    __typename?: 'UserMinAggregateOutputType';
    id: Scalars['Int'];
    socialLoginType?: Maybe<Scalars['Int']>;
    tier: Scalars['Int'];
};
export declare type UserSumAggregateOutputType = {
    __typename?: 'UserSumAggregateOutputType';
    id: Scalars['Int'];
    socialLoginType?: Maybe<Scalars['Int']>;
    tier: Scalars['Int'];
};
export declare enum ProjectDistinctFieldEnum {
    CreatedAt = "createdAt",
    Id = "id",
    Name = "name",
    OwnerId = "ownerId",
    UpdatedAt = "updatedAt"
}
export declare enum QueryMode {
    Default = "default",
    Insensitive = "insensitive"
}
export declare enum SortOrder {
    Asc = "asc",
    Desc = "desc"
}
export declare enum UserDistinctFieldEnum {
    Avatar = "avatar",
    CreatedAt = "createdAt",
    Email = "email",
    Id = "id",
    LastOnline = "lastOnline",
    Name = "name",
    Password = "password",
    SocialLoginToken = "socialLoginToken",
    SocialLoginType = "socialLoginType",
    Tier = "tier"
}
export declare type DateTimeFieldUpdateOperationsInput = {
    set?: Maybe<Scalars['Timestamp']>;
};
export declare type DateTimeFilter = {
    equals?: Maybe<Scalars['Timestamp']>;
    gt?: Maybe<Scalars['Timestamp']>;
    gte?: Maybe<Scalars['Timestamp']>;
    in?: Maybe<Array<Scalars['Timestamp']>>;
    lt?: Maybe<Scalars['Timestamp']>;
    lte?: Maybe<Scalars['Timestamp']>;
    not?: Maybe<NestedDateTimeFilter>;
    notIn?: Maybe<Array<Scalars['Timestamp']>>;
};
export declare type IntFieldUpdateOperationsInput = {
    set?: Maybe<Scalars['Int']>;
};
export declare type IntFilter = {
    equals?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Scalars['Int']>>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    not?: Maybe<NestedIntFilter>;
    notIn?: Maybe<Array<Scalars['Int']>>;
};
export declare type IntNullableFilter = {
    equals?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Scalars['Int']>>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    not?: Maybe<NestedIntNullableFilter>;
    notIn?: Maybe<Array<Scalars['Int']>>;
};
export declare type NestedDateTimeFilter = {
    equals?: Maybe<Scalars['Timestamp']>;
    gt?: Maybe<Scalars['Timestamp']>;
    gte?: Maybe<Scalars['Timestamp']>;
    in?: Maybe<Array<Scalars['Timestamp']>>;
    lt?: Maybe<Scalars['Timestamp']>;
    lte?: Maybe<Scalars['Timestamp']>;
    not?: Maybe<NestedDateTimeFilter>;
    notIn?: Maybe<Array<Scalars['Timestamp']>>;
};
export declare type NestedIntFilter = {
    equals?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Scalars['Int']>>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    not?: Maybe<NestedIntFilter>;
    notIn?: Maybe<Array<Scalars['Int']>>;
};
export declare type NestedIntNullableFilter = {
    equals?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Scalars['Int']>>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    not?: Maybe<NestedIntNullableFilter>;
    notIn?: Maybe<Array<Scalars['Int']>>;
};
export declare type NestedStringFilter = {
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
export declare type NestedStringNullableFilter = {
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
export declare type NullableIntFieldUpdateOperationsInput = {
    set?: Maybe<Scalars['Int']>;
};
export declare type NullableStringFieldUpdateOperationsInput = {
    set?: Maybe<Scalars['String']>;
};
export declare type ProjectCreateInput = {
    User: UserCreateOneWithoutProjectInput;
    createdAt?: Maybe<Scalars['Timestamp']>;
    name: Scalars['String'];
    updatedAt?: Maybe<Scalars['Timestamp']>;
};
export declare type ProjectCreateManyWithoutUserInput = {
    connect?: Maybe<Array<ProjectWhereUniqueInput>>;
    create?: Maybe<Array<ProjectCreateWithoutUserInput>>;
};
export declare type ProjectCreateWithoutUserInput = {
    createdAt?: Maybe<Scalars['Timestamp']>;
    name: Scalars['String'];
    updatedAt?: Maybe<Scalars['Timestamp']>;
};
export declare type ProjectListRelationFilter = {
    every?: Maybe<ProjectWhereInput>;
    none?: Maybe<ProjectWhereInput>;
    some?: Maybe<ProjectWhereInput>;
};
export declare type ProjectOrderByInput = {
    createdAt?: Maybe<SortOrder>;
    id?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    ownerId?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
};
export declare type ProjectScalarWhereInput = {
    AND?: Maybe<Array<ProjectScalarWhereInput>>;
    NOT?: Maybe<Array<ProjectScalarWhereInput>>;
    OR?: Maybe<Array<ProjectScalarWhereInput>>;
    createdAt?: Maybe<DateTimeFilter>;
    id?: Maybe<IntFilter>;
    name?: Maybe<StringFilter>;
    ownerId?: Maybe<IntFilter>;
    updatedAt?: Maybe<DateTimeFilter>;
};
export declare type ProjectUpdateInput = {
    User?: Maybe<UserUpdateOneRequiredWithoutProjectInput>;
    createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};
export declare type ProjectUpdateManyDataInput = {
    createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};
export declare type ProjectUpdateManyMutationInput = {
    createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};
export declare type ProjectUpdateManyWithWhereNestedInput = {
    data: ProjectUpdateManyDataInput;
    where: ProjectScalarWhereInput;
};
export declare type ProjectUpdateManyWithoutUserInput = {
    connect?: Maybe<Array<ProjectWhereUniqueInput>>;
    create?: Maybe<Array<ProjectCreateWithoutUserInput>>;
    delete?: Maybe<Array<ProjectWhereUniqueInput>>;
    deleteMany?: Maybe<Array<ProjectScalarWhereInput>>;
    disconnect?: Maybe<Array<ProjectWhereUniqueInput>>;
    set?: Maybe<Array<ProjectWhereUniqueInput>>;
    update?: Maybe<Array<ProjectUpdateWithWhereUniqueWithoutUserInput>>;
    updateMany?: Maybe<Array<ProjectUpdateManyWithWhereNestedInput>>;
    upsert?: Maybe<Array<ProjectUpsertWithWhereUniqueWithoutUserInput>>;
};
export declare type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    data: ProjectUpdateWithoutUserDataInput;
    where: ProjectWhereUniqueInput;
};
export declare type ProjectUpdateWithoutUserDataInput = {
    createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};
export declare type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    create: ProjectCreateWithoutUserInput;
    update: ProjectUpdateWithoutUserDataInput;
    where: ProjectWhereUniqueInput;
};
export declare type ProjectWhereInput = {
    AND?: Maybe<Array<ProjectWhereInput>>;
    NOT?: Maybe<Array<ProjectWhereInput>>;
    OR?: Maybe<Array<ProjectWhereInput>>;
    User?: Maybe<UserRelationFilter>;
    createdAt?: Maybe<DateTimeFilter>;
    id?: Maybe<IntFilter>;
    name?: Maybe<StringFilter>;
    ownerId?: Maybe<IntFilter>;
    updatedAt?: Maybe<DateTimeFilter>;
};
export declare type ProjectWhereUniqueInput = {
    id?: Maybe<Scalars['Int']>;
};
export declare type SignUpUserLocalInput = {
    email: Scalars['String'];
    name: Scalars['String'];
    password: Scalars['String'];
};
export declare type StringFieldUpdateOperationsInput = {
    set?: Maybe<Scalars['String']>;
};
export declare type StringFilter = {
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
export declare type StringNullableFilter = {
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
export declare type UserCreateInput = {
    Project?: Maybe<ProjectCreateManyWithoutUserInput>;
    avatar?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['Timestamp']>;
    email: Scalars['String'];
    lastOnline?: Maybe<Scalars['Timestamp']>;
    name: Scalars['String'];
    password?: Maybe<Scalars['String']>;
    socialLoginToken?: Maybe<Scalars['String']>;
    socialLoginType?: Maybe<Scalars['Int']>;
    tier?: Maybe<Scalars['Int']>;
};
export declare type UserCreateOneWithoutProjectInput = {
    connect?: Maybe<UserWhereUniqueInput>;
    create?: Maybe<UserCreateWithoutProjectInput>;
};
export declare type UserCreateWithoutProjectInput = {
    avatar?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['Timestamp']>;
    email: Scalars['String'];
    lastOnline?: Maybe<Scalars['Timestamp']>;
    name: Scalars['String'];
    password?: Maybe<Scalars['String']>;
    socialLoginToken?: Maybe<Scalars['String']>;
    socialLoginType?: Maybe<Scalars['Int']>;
    tier?: Maybe<Scalars['Int']>;
};
export declare type UserOrderByInput = {
    avatar?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    email?: Maybe<SortOrder>;
    id?: Maybe<SortOrder>;
    lastOnline?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    password?: Maybe<SortOrder>;
    socialLoginToken?: Maybe<SortOrder>;
    socialLoginType?: Maybe<SortOrder>;
    tier?: Maybe<SortOrder>;
};
export declare type UserRelationFilter = {
    is?: Maybe<UserWhereInput>;
    isNot?: Maybe<UserWhereInput>;
};
export declare type UserUpdateInput = {
    Project?: Maybe<ProjectUpdateManyWithoutUserInput>;
    avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
    email?: Maybe<StringFieldUpdateOperationsInput>;
    lastOnline?: Maybe<DateTimeFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    password?: Maybe<NullableStringFieldUpdateOperationsInput>;
    socialLoginToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
    socialLoginType?: Maybe<NullableIntFieldUpdateOperationsInput>;
    tier?: Maybe<IntFieldUpdateOperationsInput>;
};
export declare type UserUpdateManyMutationInput = {
    avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
    email?: Maybe<StringFieldUpdateOperationsInput>;
    lastOnline?: Maybe<DateTimeFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    password?: Maybe<NullableStringFieldUpdateOperationsInput>;
    socialLoginToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
    socialLoginType?: Maybe<NullableIntFieldUpdateOperationsInput>;
    tier?: Maybe<IntFieldUpdateOperationsInput>;
};
export declare type UserUpdateOneRequiredWithoutProjectInput = {
    connect?: Maybe<UserWhereUniqueInput>;
    create?: Maybe<UserCreateWithoutProjectInput>;
    update?: Maybe<UserUpdateWithoutProjectDataInput>;
    upsert?: Maybe<UserUpsertWithoutProjectInput>;
};
export declare type UserUpdateWithoutProjectDataInput = {
    avatar?: Maybe<NullableStringFieldUpdateOperationsInput>;
    createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
    email?: Maybe<StringFieldUpdateOperationsInput>;
    lastOnline?: Maybe<DateTimeFieldUpdateOperationsInput>;
    name?: Maybe<StringFieldUpdateOperationsInput>;
    password?: Maybe<NullableStringFieldUpdateOperationsInput>;
    socialLoginToken?: Maybe<NullableStringFieldUpdateOperationsInput>;
    socialLoginType?: Maybe<NullableIntFieldUpdateOperationsInput>;
    tier?: Maybe<IntFieldUpdateOperationsInput>;
};
export declare type UserUpsertWithoutProjectInput = {
    create: UserCreateWithoutProjectInput;
    update: UserUpdateWithoutProjectDataInput;
};
export declare type UserWhereInput = {
    AND?: Maybe<Array<UserWhereInput>>;
    NOT?: Maybe<Array<UserWhereInput>>;
    OR?: Maybe<Array<UserWhereInput>>;
    Project?: Maybe<ProjectListRelationFilter>;
    avatar?: Maybe<StringNullableFilter>;
    createdAt?: Maybe<DateTimeFilter>;
    email?: Maybe<StringFilter>;
    id?: Maybe<IntFilter>;
    lastOnline?: Maybe<DateTimeFilter>;
    name?: Maybe<StringFilter>;
    password?: Maybe<StringNullableFilter>;
    socialLoginToken?: Maybe<StringNullableFilter>;
    socialLoginType?: Maybe<IntNullableFilter>;
    tier?: Maybe<IntFilter>;
};
export declare type UserWhereUniqueInput = {
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
};
export declare type CreateNewUserMutationVariables = Exact<{
    name: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
}>;
export declare type CreateNewUserMutation = {
    __typename?: 'Mutation';
} & {
    createLocalUser?: Maybe<{
        __typename?: 'User';
    } & Pick<User, 'id'>>;
};
export declare type UserQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type UserQuery = {
    __typename?: 'Query';
} & {
    user?: Maybe<{
        __typename?: 'User';
    } & Pick<User, 'id' | 'name' | 'lastOnline' | 'email' | 'avatar'>>;
};
export declare const CreateNewUserDocument: Apollo.DocumentNode;
export declare type CreateNewUserMutationFn = Apollo.MutationFunction<CreateNewUserMutation, CreateNewUserMutationVariables>;
export declare function useCreateNewUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewUserMutation, CreateNewUserMutationVariables>): Apollo.MutationTuple<CreateNewUserMutation, Exact<{
    name: string;
    email: string;
    password: string;
}>>;
export declare type CreateNewUserMutationHookResult = ReturnType<typeof useCreateNewUserMutation>;
export declare type CreateNewUserMutationResult = Apollo.MutationResult<CreateNewUserMutation>;
export declare type CreateNewUserMutationOptions = Apollo.BaseMutationOptions<CreateNewUserMutation, CreateNewUserMutationVariables>;
export declare const UserDocument: Apollo.DocumentNode;
export declare function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>): Apollo.QueryResult<UserQuery, Exact<{
    id: number;
}>>;
export declare function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>): Apollo.QueryTuple<UserQuery, Exact<{
    id: number;
}>>;
export declare type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export declare type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export declare type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
