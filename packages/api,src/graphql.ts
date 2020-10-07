
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum order_by {
    asc = "asc",
    asc_nulls_first = "asc_nulls_first",
    asc_nulls_last = "asc_nulls_last",
    desc = "desc",
    desc_nulls_first = "desc_nulls_first",
    desc_nulls_last = "desc_nulls_last"
}

export enum project_constraint {
    project_pkey = "project_pkey"
}

export enum project_select_column {
    created_at = "created_at",
    id = "id",
    name = "name",
    owner_id = "owner_id",
    updated_at = "updated_at"
}

export enum project_update_column {
    created_at = "created_at",
    id = "id",
    name = "name",
    owner_id = "owner_id",
    updated_at = "updated_at"
}

export enum user_constraint {
    user_email_key = "user_email_key",
    user_pkey = "user_pkey"
}

export enum user_select_column {
    avatar = "avatar",
    created_at = "created_at",
    email = "email",
    id = "id",
    last_online = "last_online",
    name = "name",
    social_login_token = "social_login_token",
    social_login_type = "social_login_type"
}

export enum user_update_column {
    avatar = "avatar",
    created_at = "created_at",
    email = "email",
    id = "id",
    last_online = "last_online",
    name = "name",
    social_login_token = "social_login_token",
    social_login_type = "social_login_type"
}

export interface Int_comparison_exp {
    _eq?: number;
    _gt?: number;
    _gte?: number;
    _in?: number[];
    _is_null?: boolean;
    _lt?: number;
    _lte?: number;
    _neq?: number;
    _nin?: number[];
}

export interface String_comparison_exp {
    _eq?: string;
    _gt?: string;
    _gte?: string;
    _ilike?: string;
    _in?: string[];
    _is_null?: boolean;
    _like?: string;
    _lt?: string;
    _lte?: string;
    _neq?: string;
    _nilike?: string;
    _nin?: string[];
    _nlike?: string;
    _nsimilar?: string;
    _similar?: string;
}

export interface Bigint_comparison_exp {
    _eq?: bigint;
    _gt?: bigint;
    _gte?: bigint;
    _in?: bigint[];
    _is_null?: boolean;
    _lt?: bigint;
    _lte?: bigint;
    _neq?: bigint;
    _nin?: bigint[];
}

export interface Project_aggregate_order_by {
    avg?: project_avg_order_by;
    count?: order_by;
    max?: project_max_order_by;
    min?: project_min_order_by;
    stddev?: project_stddev_order_by;
    stddev_pop?: project_stddev_pop_order_by;
    stddev_samp?: project_stddev_samp_order_by;
    sum?: project_sum_order_by;
    var_pop?: project_var_pop_order_by;
    var_samp?: project_var_samp_order_by;
    variance?: project_variance_order_by;
}

export interface Project_arr_rel_insert_input {
    data: project_insert_input[];
    on_conflict?: project_on_conflict;
}

export interface Project_avg_order_by {
    id?: order_by;
    owner_id?: order_by;
}

export interface Project_bool_exp {
    _and?: project_bool_exp[];
    _not?: project_bool_exp;
    _or?: project_bool_exp[];
    created_at?: timestamptz_comparison_exp;
    id?: bigint_comparison_exp;
    name?: String_comparison_exp;
    owner_id?: bigint_comparison_exp;
    updated_at?: timestamptz_comparison_exp;
}

export interface Project_inc_input {
    id?: bigint;
    owner_id?: bigint;
}

export interface Project_insert_input {
    created_at?: timestamptz;
    id?: bigint;
    name?: string;
    owner_id?: bigint;
    updated_at?: timestamptz;
}

export interface Project_max_order_by {
    created_at?: order_by;
    id?: order_by;
    name?: order_by;
    owner_id?: order_by;
    updated_at?: order_by;
}

export interface Project_min_order_by {
    created_at?: order_by;
    id?: order_by;
    name?: order_by;
    owner_id?: order_by;
    updated_at?: order_by;
}

export interface Project_obj_rel_insert_input {
    data: project_insert_input;
    on_conflict?: project_on_conflict;
}

export interface Project_on_conflict {
    constraint: project_constraint;
    update_columns: project_update_column[];
    where?: project_bool_exp;
}

export interface Project_order_by {
    created_at?: order_by;
    id?: order_by;
    name?: order_by;
    owner_id?: order_by;
    updated_at?: order_by;
}

export interface Project_pk_columns_input {
    id: bigint;
}

export interface Project_set_input {
    created_at?: timestamptz;
    id?: bigint;
    name?: string;
    owner_id?: bigint;
    updated_at?: timestamptz;
}

export interface Project_stddev_order_by {
    id?: order_by;
    owner_id?: order_by;
}

export interface Project_stddev_pop_order_by {
    id?: order_by;
    owner_id?: order_by;
}

export interface Project_stddev_samp_order_by {
    id?: order_by;
    owner_id?: order_by;
}

export interface Project_sum_order_by {
    id?: order_by;
    owner_id?: order_by;
}

export interface Project_var_pop_order_by {
    id?: order_by;
    owner_id?: order_by;
}

export interface Project_var_samp_order_by {
    id?: order_by;
    owner_id?: order_by;
}

export interface Project_variance_order_by {
    id?: order_by;
    owner_id?: order_by;
}

export interface Timestamptz_comparison_exp {
    _eq?: timestamptz;
    _gt?: timestamptz;
    _gte?: timestamptz;
    _in?: timestamptz[];
    _is_null?: boolean;
    _lt?: timestamptz;
    _lte?: timestamptz;
    _neq?: timestamptz;
    _nin?: timestamptz[];
}

export interface User_aggregate_order_by {
    avg?: user_avg_order_by;
    count?: order_by;
    max?: user_max_order_by;
    min?: user_min_order_by;
    stddev?: user_stddev_order_by;
    stddev_pop?: user_stddev_pop_order_by;
    stddev_samp?: user_stddev_samp_order_by;
    sum?: user_sum_order_by;
    var_pop?: user_var_pop_order_by;
    var_samp?: user_var_samp_order_by;
    variance?: user_variance_order_by;
}

export interface User_arr_rel_insert_input {
    data: user_insert_input[];
    on_conflict?: user_on_conflict;
}

export interface User_avg_order_by {
    id?: order_by;
    social_login_type?: order_by;
}

export interface User_bool_exp {
    _and?: user_bool_exp[];
    _not?: user_bool_exp;
    _or?: user_bool_exp[];
    avatar?: String_comparison_exp;
    created_at?: timestamptz_comparison_exp;
    email?: String_comparison_exp;
    id?: bigint_comparison_exp;
    last_online?: timestamptz_comparison_exp;
    name?: String_comparison_exp;
    social_login_token?: String_comparison_exp;
    social_login_type?: Int_comparison_exp;
}

export interface User_inc_input {
    id?: bigint;
    social_login_type?: number;
}

export interface User_insert_input {
    avatar?: string;
    created_at?: timestamptz;
    email?: string;
    id?: bigint;
    last_online?: timestamptz;
    name?: string;
    social_login_token?: string;
    social_login_type?: number;
}

export interface User_max_order_by {
    avatar?: order_by;
    created_at?: order_by;
    email?: order_by;
    id?: order_by;
    last_online?: order_by;
    name?: order_by;
    social_login_token?: order_by;
    social_login_type?: order_by;
}

export interface User_min_order_by {
    avatar?: order_by;
    created_at?: order_by;
    email?: order_by;
    id?: order_by;
    last_online?: order_by;
    name?: order_by;
    social_login_token?: order_by;
    social_login_type?: order_by;
}

export interface User_obj_rel_insert_input {
    data: user_insert_input;
    on_conflict?: user_on_conflict;
}

export interface User_on_conflict {
    constraint: user_constraint;
    update_columns: user_update_column[];
    where?: user_bool_exp;
}

export interface User_order_by {
    avatar?: order_by;
    created_at?: order_by;
    email?: order_by;
    id?: order_by;
    last_online?: order_by;
    name?: order_by;
    social_login_token?: order_by;
    social_login_type?: order_by;
}

export interface User_pk_columns_input {
    id: bigint;
}

export interface User_set_input {
    avatar?: string;
    created_at?: timestamptz;
    email?: string;
    id?: bigint;
    last_online?: timestamptz;
    name?: string;
    social_login_token?: string;
    social_login_type?: number;
}

export interface User_stddev_order_by {
    id?: order_by;
    social_login_type?: order_by;
}

export interface User_stddev_pop_order_by {
    id?: order_by;
    social_login_type?: order_by;
}

export interface User_stddev_samp_order_by {
    id?: order_by;
    social_login_type?: order_by;
}

export interface User_sum_order_by {
    id?: order_by;
    social_login_type?: order_by;
}

export interface User_var_pop_order_by {
    id?: order_by;
    social_login_type?: order_by;
}

export interface User_var_samp_order_by {
    id?: order_by;
    social_login_type?: order_by;
}

export interface User_variance_order_by {
    id?: order_by;
    social_login_type?: order_by;
}

export interface Mutation_root {
    delete_project?: project_mutation_response;
    delete_project_by_pk?: project;
    delete_user?: user_mutation_response;
    delete_user_by_pk?: user;
    insert_project?: project_mutation_response;
    insert_project_one?: project;
    insert_user?: user_mutation_response;
    insert_user_one?: user;
    update_project?: project_mutation_response;
    update_project_by_pk?: project;
    update_user?: user_mutation_response;
    update_user_by_pk?: user;
}

export interface Project {
    created_at: timestamptz;
    id: bigint;
    name: string;
    owner_id: bigint;
    updated_at: timestamptz;
}

export interface Project_aggregate {
    aggregate?: project_aggregate_fields;
    nodes: project[];
}

export interface Project_aggregate_fields {
    avg?: project_avg_fields;
    count?: number;
    max?: project_max_fields;
    min?: project_min_fields;
    stddev?: project_stddev_fields;
    stddev_pop?: project_stddev_pop_fields;
    stddev_samp?: project_stddev_samp_fields;
    sum?: project_sum_fields;
    var_pop?: project_var_pop_fields;
    var_samp?: project_var_samp_fields;
    variance?: project_variance_fields;
}

export interface Project_avg_fields {
    id?: number;
    owner_id?: number;
}

export interface Project_max_fields {
    created_at?: timestamptz;
    id?: bigint;
    name?: string;
    owner_id?: bigint;
    updated_at?: timestamptz;
}

export interface Project_min_fields {
    created_at?: timestamptz;
    id?: bigint;
    name?: string;
    owner_id?: bigint;
    updated_at?: timestamptz;
}

export interface Project_mutation_response {
    affected_rows: number;
    returning: project[];
}

export interface Project_stddev_fields {
    id?: number;
    owner_id?: number;
}

export interface Project_stddev_pop_fields {
    id?: number;
    owner_id?: number;
}

export interface Project_stddev_samp_fields {
    id?: number;
    owner_id?: number;
}

export interface Project_sum_fields {
    id?: bigint;
    owner_id?: bigint;
}

export interface Project_var_pop_fields {
    id?: number;
    owner_id?: number;
}

export interface Project_var_samp_fields {
    id?: number;
    owner_id?: number;
}

export interface Project_variance_fields {
    id?: number;
    owner_id?: number;
}

export interface Query_root {
    project: project[];
    project_aggregate: project_aggregate;
    project_by_pk?: project;
    user: user[];
    user_aggregate: user_aggregate;
    user_by_pk?: user;
}

export interface Subscription_root {
    project: project[];
    project_aggregate: project_aggregate;
    project_by_pk?: project;
    user: user[];
    user_aggregate: user_aggregate;
    user_by_pk?: user;
}

export interface User {
    avatar: string;
    created_at: timestamptz;
    email: string;
    id: bigint;
    last_online: timestamptz;
    name: string;
    social_login_token?: string;
    social_login_type?: number;
}

export interface User_aggregate {
    aggregate?: user_aggregate_fields;
    nodes: user[];
}

export interface User_aggregate_fields {
    avg?: user_avg_fields;
    count?: number;
    max?: user_max_fields;
    min?: user_min_fields;
    stddev?: user_stddev_fields;
    stddev_pop?: user_stddev_pop_fields;
    stddev_samp?: user_stddev_samp_fields;
    sum?: user_sum_fields;
    var_pop?: user_var_pop_fields;
    var_samp?: user_var_samp_fields;
    variance?: user_variance_fields;
}

export interface User_avg_fields {
    id?: number;
    social_login_type?: number;
}

export interface User_max_fields {
    avatar?: string;
    created_at?: timestamptz;
    email?: string;
    id?: bigint;
    last_online?: timestamptz;
    name?: string;
    social_login_token?: string;
    social_login_type?: number;
}

export interface User_min_fields {
    avatar?: string;
    created_at?: timestamptz;
    email?: string;
    id?: bigint;
    last_online?: timestamptz;
    name?: string;
    social_login_token?: string;
    social_login_type?: number;
}

export interface User_mutation_response {
    affected_rows: number;
    returning: user[];
}

export interface User_stddev_fields {
    id?: number;
    social_login_type?: number;
}

export interface User_stddev_pop_fields {
    id?: number;
    social_login_type?: number;
}

export interface User_stddev_samp_fields {
    id?: number;
    social_login_type?: number;
}

export interface User_sum_fields {
    id?: bigint;
    social_login_type?: number;
}

export interface User_var_pop_fields {
    id?: number;
    social_login_type?: number;
}

export interface User_var_samp_fields {
    id?: number;
    social_login_type?: number;
}

export interface User_variance_fields {
    id?: number;
    social_login_type?: number;
}

export type bigint = any;
export type timestamptz = any;

export interface ISchema {
    query_root: Query_root;
    mutation_root: Mutation_root;
    subscription_root: Subscription_root;
}

export interface Query_root {
}

export interface Mutation_root {
}

export interface Subscription_root {
}
