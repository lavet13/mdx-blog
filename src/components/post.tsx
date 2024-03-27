import {
  Heading,
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  Text,
  ThemeTypings,
  useStyleConfig,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PostsQuery } from '../gql/graphql';

type PostProps = LinkBoxProps & {
  variant?: ThemeTypings['components']['Post']['variants'];
  size?: ThemeTypings['components']['Post']['sizes'];
  children?: React.ReactNode;
  post: NonNullable<PostsQuery['posts']['edges']>[number];
};

const Post: FC<PostProps> = ({ variant, size, post, children, ...props }) => {
  const styles = useStyleConfig('Post', { variant, size });

  return (
    <LinkBox as='article' sx={styles} {...props}>
      <Heading size='md' my='0'>
        <LinkOverlay as={Link} to={`post/${post.id}`}>
          {post.title}
        </LinkOverlay>
      </Heading>
      <Text>{post.preview}</Text>
    </LinkBox>
  );
};

export default Post;
