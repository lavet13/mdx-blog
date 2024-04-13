import { Styles } from '@chakra-ui/theme-tools';

import { cssVar } from '@chakra-ui/react';

const $chakraColorsScrollbarBorderColor = cssVar(
  'chakra-colors-scrollbar-border-color'
);

const styles: Styles = {
  global: _ => ({
    html: { fontSize: { base: 'lg', sm: 'xl' } },
    ':root': {
      '--shimmy-distance': '5',
      '--border': '4px',
      '--clip':
        'polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%)',
      '--clip-one':
        'polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%)',
      '--clip-two':
        'polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%)',
      '--clip-three':
        'polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%)',
      '--clip-four':
        'polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0)',
      '--clip-five':
        'polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0)',
      '--clip-six':
        'polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%)',
      '--clip-seven':
        'polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%)',
    },
    '*::-webkit-scrollbar': {
      bg: 'scrollbar-bg',
    },
    '::-webkit-scrollbar-button': {
      display: 'none',
    },
    '::-webkit-scrollbar-track': {
      display: 'none',
    },

    '::-webkit-scrollbar-track-piece': {
      display: 'none',
    },
    '::-webkit-scrollbar-thumb': {
      bg: 'scrollbar-thumb-bg',
      borderBottom: `0.01em solid ${$chakraColorsScrollbarBorderColor.reference}`,
      borderRight: `0.01em solid ${$chakraColorsScrollbarBorderColor.reference}`,
      transition: `background 0.9s`,
    },
    '::-webkit-scrollbar-thumb:hover': {
      bg: 'scrollbar-thumb-hover-bg',
    },
    '::-webkit-scrollbar-corner': {
      display: 'none',
    },
    '::-webkit-resizer': {
      display: 'none',
    },
  }),
};

export default styles;
