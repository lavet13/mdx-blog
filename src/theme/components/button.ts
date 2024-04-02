import {
  createMultiStyleConfigHelpers,
  cssVar,
  keyframes,
} from '@chakra-ui/react';
import {
  variantCyberButton,
  variantCyberGlitchEffect,
  variantCyberTag,
} from '../variants/button';
import { alpha } from '../utils/alpha';
import { hexToRGB } from '../utils/hex-to-rgb';

const helpers = createMultiStyleConfigHelpers(['outer', 'glitch', 'tag']);

const $sectionText = cssVar('chakra-colors-section-text');
const $sectionBg = cssVar('chakra-colors-section-bg');

const Button = helpers.defineMultiStyleConfig({
  baseStyle: _ => {
    const transparentBgHover = alpha(`section.text`, 0.9);
    const transparentBgActive = alpha(`section.text`, 1);
    const transparentBgDisabled = alpha(`section.text`, 0.1);
    const transparentTextHover = alpha(`section.bg`, 0.9);
    const transparentTextDisabled = alpha(`section.text`, 0.7);
    const flickerBgHex = getComputedStyle(
      document.documentElement
    ).getPropertyValue($sectionText.variable);

    const flickerAnimation = keyframes`
      0% {
        background: ${hexToRGB(flickerBgHex, 0.2)};
      }

      50% {
        background: ${hexToRGB(flickerBgHex, 0.1)};
      }

      100% {
        background: ${hexToRGB(flickerBgHex, 0.2)};
      }
    `;

    return {
      outer: {
        px: 5,
        pt: 0.5,
        pb: 1,
        lineHeight: 1,
        bg: 'section.bg',
        color: 'section.text',
        fontWeight: '700',
        position: 'relative',
        overflow: 'visible',
        appearance: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        outline: 'none',

        _hover: {
          bg: transparentBgHover,
          color: transparentTextHover,
          _active: {
            outline: `1px solid ${alpha(`section.text`, 0.9)}`,
            bg: transparentBgActive,
          },
        },
        _active: {
          bg: transparentBgHover,
          color: transparentTextHover,
        },
        _loading: {
          animation: `${flickerAnimation} 2s cubic-bezier(0.15, 1.05, 0.76, 0.99) forwards infinite`,
        },
        _disabled: {
          cursor: 'not-allowed',
          bg: transparentBgDisabled,
          color: transparentTextDisabled,
          _hover: {
            outline: 'none',
          },
          _active: {
            bg: transparentBgDisabled,
          },
        },
      },
    };
  },

  variants: {
    cyber: props => ({
      outer: variantCyberButton(props),
      glitch: variantCyberGlitchEffect(props),
      tag: variantCyberTag(props),
    }),
    black: _ => {
    // const transparentBgHover = alpha(`section.text`, 0.9);
    // const transparentBgActive = alpha(`section.text`, 1);
    // const transparentBgDisabled = alpha(`section.text`, 0.1);
    // const transparentTextHover = alpha(`section.bg`, 0.9);
    // const transparentTextDisabled = alpha(`section.text`, 0.7);
      const transparentBgHover = alpha(`section.bg`, 0.9);
      const transparentBgActive = alpha(`section.bg`, 1);
      const transparentBgDisabled = alpha(`section.bg`, 0.1);
      const transparentTextHover = alpha(`section.text`, 1);
      const transparentTextDisabled = alpha(`section.bg`, 0.9);

      const flickerBgHex = getComputedStyle(
        document.documentElement
      ).getPropertyValue($sectionBg.variable);

      const flickerAnimation = keyframes`
        0% {
          background: ${hexToRGB(flickerBgHex, 0.2)};
        }

        50% {
          background: ${hexToRGB(flickerBgHex, 0.1)};
        }

        100% {
          background: ${hexToRGB(flickerBgHex, 0.2)};
        }
      `;

      return {
        outer: {
          bg: 'section.text',
          color: 'section.bg',

          _hover: {
            bg: transparentBgHover,
            color: transparentTextHover,
            _active: {
              outline: `1px solid ${alpha(`section.bg`, 1)}`,
              bg: transparentBgActive,
            },
          },
          _active: {
            bg: transparentBgHover,
            color: transparentTextHover,
          },
          _loading: {
            animation: `${flickerAnimation} 2s cubic-bezier(0.15, 1.05, 0.76, 0.99) forwards infinite`,
          },
          _disabled: {
            cursor: 'not-allowed',
            bg: transparentBgDisabled,
            color: transparentTextDisabled,
            _hover: {
              outline: 'none',
            },
            _active: {
              bg: transparentBgDisabled,
            },
          },
        },
      };
    },
  },

  defaultProps: {
    size: 'md',
    colorScheme: 'red',
  },
});

export default Button;
