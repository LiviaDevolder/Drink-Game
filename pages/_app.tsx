import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DrinkProvider } from "../src/providers/Chakra";
import Menu from "../src/components/Menu";
import { Box, ColorModeScript, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DrinkProvider>
      <Head>
        <title>Drink Game</title>
        <meta name="description" content="Beba e se divirta com seus amigos" />
        <link rel="icon" href="/favicon.ico" key="icon" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          key="base-googlefonts"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
          key="base-googlestatic"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;600;700&display=swap"
          rel="stylesheet"
          key="fonts"
        />
      </Head>
      <ColorModeScript initialColorMode={"light"} />
      <Box px={"140px"} py={"32px"}>
        <Menu />
        <Component {...pageProps} />
      </Box>
      <Flex
        bottom={"0"}
        left={"0"}
        right={"0"}
        justifyContent={"center"}
      >
        <Text
          my={"32px"}
          fontFamily={"Raleway"}
          fontSize={"24px"}
        >
          beba com moderação
        </Text>
      </Flex>
    </DrinkProvider>
  );
}
