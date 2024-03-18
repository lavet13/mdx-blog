import { Box, BoxProps, ThemeTypings, useStyleConfig } from '@chakra-ui/react';
import { FC } from 'react';

type PostProps = BoxProps & {
  variant?: ThemeTypings['components']['Post']['variants'];
  size?: ThemeTypings['components']['Post']['sizes'];
  children?: React.ReactNode;
};

const Post: FC<PostProps> = ({ variant, size, ...props }) => {
  const styles = useStyleConfig('Post', { variant, size });

  return <Box __css={styles} {...props} />;
};

export default Post;
