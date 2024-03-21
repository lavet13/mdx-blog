import { cssVar, defineStyleConfig } from '@chakra-ui/react';

const $postClipPathThree = cssVar('post-clip-path-three');

const Post = defineStyleConfig({
  baseStyle: {
    position: 'relative',
    bg: 'section.text',
    color: 'section.bg',
    p: '30px',
    px: '5px',
    pb: '15px',
    clipPath: $postClipPathThree.reference,
  },
});

export default Post;
