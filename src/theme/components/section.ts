import { defineStyleConfig } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/react';

const $clipPathOne = cssVar('section-clip-path-one');
const $clipPathTwo = cssVar('section-clip-path-two');
const $clipPathThree = cssVar('section-clip-path-three');
const $clipPathFour = cssVar('section-clip-path-four');

const Section = defineStyleConfig({
  baseStyle: {
    position: 'relative',
    my: '-1px',
    bg: 'section.bg',
    color: 'section.text',
    padding: ['20px 50px 35px 50px', '60px 60px'],

    _before: {
      content: '" "',

      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      w: 'full',
      height: '30px',
      bg: 'section.text',
      clipPath: $clipPathOne.reference,
    },

    _after: {
      content: '" "',
      display: 'block',

      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 'full',
      height: '30px',
      bg: 'section.text',
      clipPath: $clipPathTwo.reference,
    },

    _even: {
      _after: {
        transform: `scaleX(-1)`,
      },
    },
    _odd: {
      _before: {
        transform: `scaleX(-1)`,
      },
    },
  },

  variants: {
    bothBlack: {
      bg: 'section.text',
      color: 'section.bg',
      _before: {
        height: 'full',
        clipPath: $clipPathThree.reference,
        bg: 'section.bg',
        // transform: `scaleX(-1)`,
      },
      _after: {
        height: 'full',
        clipPath: $clipPathFour.reference,
        bg: 'section.bg',
      },
    },
    both: {
      _before: {
        height: 'full',
        clipPath: $clipPathThree.reference,
      },
      _after: {
        height: 'full',
        clipPath: $clipPathFour.reference,
      },
    },
    black: {
      bg: 'section.text',
      color: 'section.bg',
      _before: {
        bg: 'section.bg',
        // transform: `scaleX(-1)`,
      },
      _after: {
        bg: 'section.bg',
      },
    },
  },
});

export default Section;
