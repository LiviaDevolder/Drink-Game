import { Box, ColorModeScript } from "@chakra-ui/react";
import Head from "next/head";
import Menu from "../src/components/Menu";

export default function Home() {
  return (
    <div>
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
      <ColorModeScript initialColorMode={'light'} />
      <Box px={'140px'} py={'32px'}>
        <Menu />
      </Box>
    </div>
  );
}
