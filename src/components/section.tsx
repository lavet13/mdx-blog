import { ThemeTypings, BoxProps, useStyleConfig, Box } from '@chakra-ui/react';
import { FC } from 'react';

type SectionProps = BoxProps & {
  variant?: ThemeTypings['components']['Section']['variants'];
  size?: ThemeTypings['components']['Section']['sizes'];
  children?: React.ReactNode;
};

const Section: FC<SectionProps> = ({ variant, size, ...props }) => {
  const styles = useStyleConfig('Section', { variant, size });

  return <Box __css={styles} {...props} />;
};

export default Section;
