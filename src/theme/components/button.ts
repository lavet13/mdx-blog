import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import {
  variantCyberButton,
  variantCyberGlitchEffect,
  variantCyberTag,
} from '../utils/button';

const helpers = createMultiStyleConfigHelpers(['outer', 'glitch', 'tag']);

const baseStyle = defineStyle(props => ({
  outer: variantCyberButton(props),
  glitch: variantCyberGlitchEffect(props),
  tag: variantCyberTag(props),
}));

const Button = helpers.defineMultiStyleConfig({
  baseStyle,
  sizes: {
    lg: {
      outer: {
        fontSize: 25,
        fontWeight: 700,
        height: '4rem',
        minW: '14rem',
        lineHeight: '4rem',
      },
      tag: {
        fontSize: '7px',
      },
    },

    sm: {
      outer: {
        fontSize: 20,
        fontWeight: 700,
        height: '3rem',
        minW: '13rem',
        lineHeight: '3rem',
      },

      tag: {
        fontSize: '7px',
        fontFamily: 'Refinery',
      },
    },
  },

  variants: {
    cyber: {
      outer: {},
    },
  },

  defaultProps: {
    size: 'lg',
    colorScheme: 'red',
  },
});

export default Button;
