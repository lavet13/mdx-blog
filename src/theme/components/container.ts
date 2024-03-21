import { defineStyleConfig, theme as base } from '@chakra-ui/react';

const Container = defineStyleConfig({
  baseStyle: {
    ...base.components['Container'],
    px: [0, 2],
  },
});

export default Container;
