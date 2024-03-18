import { cssVar, defineStyleConfig } from '@chakra-ui/react';
import { keyframes } from '@chakra-ui/react';

const $bordersGlitch = cssVar('chakra-colors-borders-glitch');
const $sectionText = cssVar('chakra-colors-section-text');
const $sectionBg = cssVar('chakra-colors-section-bg');
const $postClipPathOne = cssVar('post-clip-path-one');
const $postClipPathTwo = cssVar('post-clip-path-two');

const animationKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const animation = `${animationKeyframes} 0.9s infinite linear`;

const Blockquote = defineStyleConfig({
  baseStyle: {
    position: 'relative',
    border: `30px solid ${$sectionText.reference}`,
    borderRight: `5px solid ${$sectionText.reference}`,
    borderLeft: `5px solid ${$sectionText.reference}`,
    borderBottom: `24px solid ${$sectionText.reference}`,
    p: '5px',
    clipPath: $postClipPathOne.reference,

    _before: {
      content: '"P-14"',
      display: 'block',
      position: 'absolute',
      bottom: '-12px',
      right: '25px',
      p: '2px 2px 0 2px',
      fontSize: 7,
      lineHeight: 1,
      bg: 'section.bg',
      color: 'section.text',
      borderLeft: `2px solid ${$bordersGlitch.reference}`,
    },

    _after: {
      content: '"_"',
      animation,
    },
  },

  variants: {
    outline: {
      '::selection': {
        bg: 'section.bg',
        color: 'section.text',
      },
      border: 'none',
      borderLeft: 'none',
      borderBottom: 'none',
      p: '40px 15px 30px',
      bg: 'section.text',
      color: 'section.bg',
      borderRight: `3px solid ${$bordersGlitch.reference}`,
      clipPath: $postClipPathTwo.reference,
      _before: {
        content: '"T-71"',
        right: '5%',
        bottom: '10%',
      },
    },

    filled: {
      '::selection': {
        bg: 'section.text',
        color: 'section.bg',
      },
      border: 'none',
      borderLeft: 'none',
      borderBottom: 'none',
      p: '40px 15px 30px',
      bg: 'section.bg',
      color: 'section.text',
      borderRight: `3px solid ${$bordersGlitch.reference}`,
      clipPath: $postClipPathTwo.reference,
      _before: {
        content: '"T-71"',
        right: '5%',
        bottom: '10%',
        bg: 'section.text',
        color: 'section.bg',
      },
    },

    'outline-inverse': {
      border: `30px solid ${$sectionBg.reference}`,
      borderRight: `5px solid ${$sectionBg.reference}`,
      borderLeft: `5px solid ${$sectionBg.reference}`,
      borderBottom: `24px solid ${$sectionBg.reference}`,
      _before: {
        content: '"P-14"',
        display: 'block',
        position: 'absolute',
        bottom: '-12px',
        right: '25px',
        p: '2px 2px 0 2px',
        fontSize: 7,
        lineHeight: 1,
        bg: 'section.text',
        color: 'section.bg',
        borderLeft: `2px solid ${$bordersGlitch.reference}`,
      },
    },

    dotted: {
      '::selection': {
        bg: 'section.text',
        color: 'section.bg',
      },
      border: 'none',
      borderLeft: 'none',
      borderBottom: 'none',
      p: '40px 15px 30px',
      bg: 'section.bg',
      color: 'section.text',
      borderRight: `3px solid ${$bordersGlitch.reference}`,
      clipPath: $postClipPathTwo.reference,
      backgroundImage: 'radial-gradient(#0000001c 1px, transparent 0)',
      backgroundSize: '5px 5px',
      backgroundPosition: '-13px -3px',
      _before: {
        content: '"T-71"',
        right: '5%',
        bottom: '10%',
        bg: 'section.text',
        color: 'section.bg',
      },
    },
  },
});

export default Blockquote;
