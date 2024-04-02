import { defineStyle } from '@chakra-ui/react';

const semanticTokens = defineStyle({
  colors: {
    button: {
      red: {
        base: {
          default: 'red.500',
        },
        hover: {
          default: 'red.300',
        },
        active: {
          default: 'red.100',
        },
      },
      blue: {
        base: {
          default: 'blue.500',
        },
        hover: {
          default: 'blue.300',
        },
        active: {
          default: 'blue.100',
        },
      },
      pink: {
        base: {
          default: 'pink.500',
        },
        hover: {
          default: 'pink.300',
        },
        active: {
          default: 'pink.100',
        },
      },
      'shadow-primary': `cyan.500`,
      'shadow-secondary': `yellow.500`,
    },

    section: {
      bg: {
        default: 'yellow.500',
        _dark: 'cyan.500',
      },
      text: {
        default: 'dark-blue.100',
      },
    },

    borders: {
      glitch: {
        default: 'neon-green.500',
        _dark: '#FFD700',
      },
    },

    'scrollbar-bg': {
      _light: 'yellow.500',
      _dark: 'cyan.500',
    },

    'scrollbar-thumb-bg': {
      _light: '#ff003c',
      _dark: '#800080',
    },

    'scrollbar-thumb-hover-bg': {
      _light: '#ff9800',
      _dark: '#cc00cc',
    },

    'scrollbar-border-color': {
      _light: '#8ae66e',
      _dark: '#FFD700',
    },

    'chakra-body-text': {
      _light: '#f5ed00',
      _dark: 'cyan.500',
    },

    'chakra-body-bg': {
      _light: `dark-blue.100`,
      _dark: `dark-blue.100`,
    },
  },

  shadows: {
    'cyber-btn-box-shadow': `inset -3px 0 0 hsl(180, 90%, 50%)`,
    'cyber-btn-text-shadow': `
      2px 2px var(--chakra-colors-button-shadow-primary),
      -2px -2px var(--chakra-colors-button-shadow-secondary)
    `,
  },
  borders: {
    'border-30': `30px solid`,
  },
});

export default semanticTokens;
