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
    },

    'shadow-primary': `hsl(180, 90%, 50%)`,
    'shadow-secondary': `hsl(60, 90%, 60%)`,

    'scrollbar-bg': {
      _light: '#f9f002',
      _dark: '#001F3F',
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
      _light: 'black',
      _dark: 'white',
    },

    'chakra-body-bg': {
      _light: `linear-gradient(90deg, #f5ed00 70%, #e6de00 70%)`,
      _dark: `linear-gradient(90deg, #192a56 70%, #14244b 70%)`,
    },
  },

  shadows: {
    'shadow-primary': `inset -3px 0 0 hsl(180, 90%, 50%)`,
    'shadow-secondary': `hsl(60, 90%, 60%)`,
  },
});

export default semanticTokens;
