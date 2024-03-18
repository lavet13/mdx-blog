import { Box, BoxProps, ThemeTypings, useStyleConfig } from '@chakra-ui/react';
import { FC } from 'react';

type PostProps = BoxProps & {
  variant?: ThemeTypings['components']['Blockquote']['variants'];
  size?: ThemeTypings['components']['Blockquote']['sizes'];
  children?: React.ReactNode;
};

const Blockquote: FC<PostProps> = ({ variant, size, ...props }) => {
  const styles = useStyleConfig('Blockquote', { variant, size });

  return <Box __css={styles} {...props} />;
};

export default Blockquote;
