import { FC } from "react";
import { Heading } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import { usePostById } from "../../features/postById/queries";

type PostByIdRouteParams = {
  postId: string;
};

const PostById: FC = () => {
  const { postId } = useParams<keyof PostByIdRouteParams>() as PostByIdRouteParams;
  const { data, error, isLoading, isPending, isError } = usePostById(postId);

  console.log({ error });

  if(isPending) {
    return <span>Loading...</span>
  }

  if(isError) {
    return <span>Error: {error.response.errors[0].message}</span>
  }

  if(data.postById === null) {
    return <Heading>No data!</Heading>
  }

  return <Heading>Hello, my path: {`post/${data.postById.id}`}</Heading>
};

export default PostById;
