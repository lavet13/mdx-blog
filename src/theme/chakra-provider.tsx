import { FC, PropsWithChildren } from "react";
import { ChakraProvider as Provider } from "@chakra-ui/react";

import theme from '.';

export const ChakraProvider: FC<PropsWithChildren> = ({ children }) => {

  return (
    <Provider theme={theme}>{children}</Provider>
  );
};
