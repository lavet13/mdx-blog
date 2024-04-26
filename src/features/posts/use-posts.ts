import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { graphql } from "../../gql";
import { PostsQuery } from "../../gql/graphql";
import { InitialDataOptions } from "../../utils/graphql/initial-data-options";
import client from "../../graphql-request/client";

type UsePostsProps = {
  take?: number;
  before?: number | null;
  after?: number | null;
  query?: string;
};

export const usePosts = (
  { take, after, before, query }: UsePostsProps,
  options?: InitialDataOptions<PostsQuery>
) => {
  const input: Record<string, any> = {};
  console.log({ before, after });

  if (after !== null && after !== undefined) {
    input.after = after;
  }
  if (before !== null && before !== undefined) {
    input.before = before;
  }
  if (take !== undefined && take !== null) {
    input.take = take;
  }
  if (query?.length !== 0) {
    input.query = query;
  }
  console.log({ input });

  const posts = graphql(`
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
  `);

  return useQuery<PostsQuery>({
    queryKey: [(posts.definitions[0] as any).name.value, { input }],
    queryFn: () => {
      return client.request(posts, { input });
    },
    placeholderData: keepPreviousData,
    ...options,
  });
};
