import { extendTheme, type ThemeConfig, theme as base } from '@chakra-ui/react';

import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';

import styles from './styles';
import semanticTokens from './semantic-tokens';

import Button from './components/button';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  breakpoints,
  colors,
  components: { Button },
  fonts: {
    body: `"Refinery", "BlenderPro", ${base.fonts?.body}`,
    heading: `"Refinery", "BlenderPro", ${base.fonts?.heading}`,
    mono: `"Refinery", "BlenderPro", ${base.fonts?.mono}`,
  },
  semanticTokens,
  styles,
});

export default theme;
