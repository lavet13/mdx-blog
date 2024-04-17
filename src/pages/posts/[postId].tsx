import { FC } from 'react';
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { usePostById } from '../../features/postById/queries';
import { isGraphQLRequestError } from '../../utils/graphql/is-graphql-request-error';
import Section from '../../components/section';

type PostByIdRouteParams = {
  postId: string;
};

const PostById: FC = () => {
  const { postId } = useParams<
    PostByIdRouteParams
  >() as PostByIdRouteParams;
  const { data, error, isPending, isError } = usePostById(postId);

  console.log({ error });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    if (isGraphQLRequestError(error)) {
      const errorMessage = error.response.errors[0].message;
      return <span>Error: {errorMessage}</span>;
    }
    return <span>Error: {error.message}</span>;
  }

  if (data.postById === null) {
    return <Heading>No data!</Heading>;
  }

  const title = data.postById.title;
  const content = data.postById.content;

  return (
    <Section variant="both">
      <Container>
        <Center>
          <Heading>{title}</Heading>
        </Center>
        <Box>
          <Text>{content}</Text>
        </Box>
      </Container>
    </Section>
  );
};

export default PostById;
