import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: Array<Post>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  text: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum ContentLimit {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export type LoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory: Category;
  addComment: Comment;
  createPost: Post;
  login: AuthPayload;
  logout: Scalars['Boolean']['output'];
  signup: AuthPayload;
  updateComment: Comment;
  upsertProfile: Profile;
};


export type MutationAddCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationAddCommentArgs = {
  postId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  categoryId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationSignupArgs = {
  signupInput: SignupInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};


export type MutationUpsertProfileArgs = {
  profileInput: ProfileInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Int']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['Int']['output']>;
};

export type Post = {
  __typename?: 'Post';
  author: User;
  categories: Array<Category>;
  comments: Array<Comment>;
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  preview: Scalars['String']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};


export type PostPreviewArgs = {
  size?: InputMaybe<ContentLimit>;
};

export type PostsInput = {
  after?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PostsResponse = {
  __typename?: 'PostsResponse';
  edges: Array<Post>;
  pageInfo: PageInfo;
};

export type Profile = {
  __typename?: 'Profile';
  bio: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  user: User;
};

export type ProfileInput = {
  bio: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  authorById?: Maybe<User>;
  authorComments: Array<Maybe<Comment>>;
  me?: Maybe<User>;
  postById: Post;
  postComments: Array<Comment>;
  posts: PostsResponse;
  searchPA: Array<Maybe<SearchResultPa>>;
};


export type QueryAuthorByIdArgs = {
  authorId: Scalars['ID']['input'];
};


export type QueryAuthorCommentsArgs = {
  authorId: Scalars['ID']['input'];
};


export type QueryPostByIdArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryPostCommentsArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryPostsArgs = {
  input: PostsInput;
};


export type QuerySearchPaArgs = {
  query: Scalars['String']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SearchResultPa = Post | User;

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: Array<Post>;
  profile?: Maybe<Profile>;
  role: Role;
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, name: string, role: Role } | null };

export type PostByIdQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type PostByIdQuery = { __typename?: 'Query', postById: { __typename?: 'Post', id: string, title: string, content: string, categories: Array<{ __typename?: 'Category', id: string, name: string }> } };

export type PostsQueryVariables = Exact<{
  input: PostsInput;
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'PostsResponse', edges: Array<{ __typename?: 'Post', id: string, title: string, preview: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: number | null, hasNextPage: boolean, startCursor?: number | null, hasPreviousPage: boolean } } };



export const LoginDocument = `
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    token
  }
}
    `;

export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) => {

    return useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(client, LoginDocument, variables, headers)(),
      options
    )};

export const MeDocument = `
    query Me {
  me {
    id
    email
    name
    role
  }
}
    `;

export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: MeQueryVariables,
      options?: UseQueryOptions<MeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {

    return useQuery<MeQuery, TError, TData>(
      variables === undefined ? ['Me'] : ['Me', variables],
      fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
      options
    )};

export const PostByIdDocument = `
    query PostById($postId: ID!) {
  postById(postId: $postId) {
    id
    title
    content
    categories {
      id
      name
    }
  }
}
    `;

export const usePostByIdQuery = <
      TData = PostByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: PostByIdQueryVariables,
      options?: UseQueryOptions<PostByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {

    return useQuery<PostByIdQuery, TError, TData>(
      ['PostById', variables],
      fetcher<PostByIdQuery, PostByIdQueryVariables>(client, PostByIdDocument, variables, headers),
      options
    )};

export const PostsDocument = `
    query Posts($input: PostsInput!) {
  posts(input: $input) {
    edges {
      id
      title
      preview(size: MEDIUM)
    }
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
  }
}
    `;

export const usePostsQuery = <
      TData = PostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: PostsQueryVariables,
      options?: UseQueryOptions<PostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) => {

    return useQuery<PostsQuery, TError, TData>(
      ['Posts', variables],
      fetcher<PostsQuery, PostsQueryVariables>(client, PostsDocument, variables, headers),
      options
    )};
