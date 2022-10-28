import React from "react";
import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";

import theme from "../../themes";

function DrinkProvider(props: ChakraProviderProps) {
  const { children } = props;

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export { DrinkProvider };
