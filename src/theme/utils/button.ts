import { SystemStyleFunction } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

export const variantCyberButton: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  let background = 'button.red.base';
  let backgroundHover = 'button.red.hover';
  let backgroundActive = 'button.red.active';

  if (c === 'blue') {
    background = 'button.blue.base';
    backgroundHover = 'button.blue.hover';
    backgroundActive = 'button.blue.active';
  }

  if (c === 'pink') {
    background = 'button.pink.base';
    backgroundHover = 'button.pink.hover';
    backgroundActive = 'button.pink.active';
  }

  const styles = {
    // base size
    fontSize: 25,
    fontWeight: 700,
    height: '4rem',
    minW: '14rem',
    lineHeight: '4rem',
    // base size

    position: 'relative',

    color: `white`,
    background: 'transparent',
    outline: 'transparent',
    textTransform: 'uppercase',
    border: 'none',
    boxShadow: `shadow-primary`,
    textAlign: 'center',

    _before: {
      content: `""`,

      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      clipPath: 'var(--clip)',
      zIndex: -1,

      transform: `translate(var(--border), 0)`,
    },

    _after: {
      content: `""`,

      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      clipPath: 'var(--clip)',
      zIndex: -1,

      background,
    },

    _hover: {
      _after: {
        background: backgroundHover,
      },
    },

    _active: {
      _after: {
        background: backgroundActive,
      },
    },
  };

  return styles;
};

export const variantCyberGlitchEffect: SystemStyleFunction = props => {
  const { colorScheme: c } = props;

  let background = 'button.red.base';
  let backgroundHover = 'button.red.hover';
  let backgroundActive = 'button.red.active';

  if (c === 'blue') {
    background = 'button.blue.base';
    backgroundHover = 'button.blue.hover';
    backgroundActive = 'button.blue.active';
  }

  if (c === 'pink') {
    background = 'button.pink.base';
    backgroundHover = 'button.pink.hover';
    backgroundActive = 'button.pink.active';
  }

  return {
    display: 'none',

    position: 'absolute',
    top: `calc(var(--border) * -1)`,
    left: `calc(var(--border) * -1)`,
    right: `calc(var(--border) * -1)`,
    bottom: `calc(var(--border) * -1)`,
    background: 'shadow-primary',
    textShadow: `2px 2px var(--chakra-colors-shadow-primary), -2px -2px var(--chakra-colors-shadow-secondary)`,
    clipPath: `var(--clip)`,

    _groupHover: {
      display: 'block',

      _before: {
        background: backgroundHover,
      },
    },

    _groupActive: {
      _before: {
        background: backgroundActive,
      },
    },

    _before: {
      content: `""`,

      position: 'absolute',

      top: `calc(var(--border) * 1)`,
      right: `calc(var(--border) * 1)`,
      left: `calc(var(--border) * 1)`,
      bottom: `calc(var(--border) * 1)`,

      clipPath: `var(--clip)`,
      background,

      zIndex: -1,
    },
  };
};

export const variantCyberTag: SystemStyleFunction = (props) => {
  return {
    position: 'absolute',
    padding: `0px 4px`,
    letterSpacing: `1px`,
    lineHeight: 1,
    bottom: `-5%`,
    right: '5%',
    color: mode('#000', '#fff')(props),
    fontSize: `7px`,
    fontFamily: 'BlenderPro',
    fontWeight: 900,
  }
};
