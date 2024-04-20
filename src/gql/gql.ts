/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query Me {\n      me {\n        id\n        email\n        name\n        role\n      }\n    }\n  ": types.MeDocument,
    "\n    mutation Login($loginInput: LoginInput!) {\n      login(loginInput: $loginInput) {\n        token\n      }\n    }\n  ": types.LoginDocument,
    "\n    query PostById($postId: ID!) {\n      postById(postId: $postId) {\n        id\n        title\n        content\n        categories {\n          id\n          name\n        }\n      }\n    }\n  ": types.PostByIdDocument,
    "\n    query Posts($input: PostsInput!) {\n      posts(input: $input) {\n        edges {\n          id\n          title\n          preview(size: MEDIUM)\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n\n          startCursor\n          hasPreviousPage\n        }\n      }\n    }\n  ": types.PostsDocument,
    "\n    mutation Logout {\n      logout\n    }\n  ": types.LogoutDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Me {\n      me {\n        id\n        email\n        name\n        role\n      }\n    }\n  "): (typeof documents)["\n    query Me {\n      me {\n        id\n        email\n        name\n        role\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation Login($loginInput: LoginInput!) {\n      login(loginInput: $loginInput) {\n        token\n      }\n    }\n  "): (typeof documents)["\n    mutation Login($loginInput: LoginInput!) {\n      login(loginInput: $loginInput) {\n        token\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query PostById($postId: ID!) {\n      postById(postId: $postId) {\n        id\n        title\n        content\n        categories {\n          id\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    query PostById($postId: ID!) {\n      postById(postId: $postId) {\n        id\n        title\n        content\n        categories {\n          id\n          name\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Posts($input: PostsInput!) {\n      posts(input: $input) {\n        edges {\n          id\n          title\n          preview(size: MEDIUM)\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n\n          startCursor\n          hasPreviousPage\n        }\n      }\n    }\n  "): (typeof documents)["\n    query Posts($input: PostsInput!) {\n      posts(input: $input) {\n        edges {\n          id\n          title\n          preview(size: MEDIUM)\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n\n          startCursor\n          hasPreviousPage\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation Logout {\n      logout\n    }\n  "): (typeof documents)["\n    mutation Logout {\n      logout\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;