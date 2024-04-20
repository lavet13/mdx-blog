/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Custom `Date` scalar type */
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

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, name: string, role: Role } | null };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string } };

export type PostByIdQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type PostByIdQuery = { __typename?: 'Query', postById: { __typename?: 'Post', id: string, title: string, content: string, categories: Array<{ __typename?: 'Category', id: string, name: string }> } };

export type PostsQueryVariables = Exact<{
  input: PostsInput;
}>;


export type PostsQuery = { __typename?: 'Query', posts: { __typename?: 'PostsResponse', edges: Array<{ __typename?: 'Post', id: string, title: string, preview: string }>, pageInfo: { __typename?: 'PageInfo', endCursor?: number | null, hasNextPage: boolean, startCursor?: number | null, hasPreviousPage: boolean } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };


export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const PostByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<PostByIdQuery, PostByIdQueryVariables>;
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"preview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"EnumValue","value":"MEDIUM"}}]}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]}}]} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;