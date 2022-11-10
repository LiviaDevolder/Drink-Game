import { Box, ColorModeScript, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Card from "../src/components/Card";
import Menu from "../src/components/Menu";
import useSWR from "swr";
import { ICard } from "../src";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Home() {
  const { data, error } = useSWR(`/api/all-drinks`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

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
      <ColorModeScript initialColorMode={"light"} />
      <Box px={"140px"} py={"32px"}>
        <Menu />
        <Box h={"100%"}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text fontFamily={"Raleway"} fontSize={"30px"} color={"#310E2B"}>
              Selecione um drink misterioso:
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            {data.map((item: ICard) => {
              return (
                <Box key={item.name}>
                  <Card name={item.name} ingredients={item.ingredients} steps={item.steps} />
                </Box>
              );
            })}
          </Flex>
        </Box>
        <Flex w={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Text
            my={"32px"}
            fontFamily={"Raleway"}
            fontSize={"24px"}
            color={"#310E2B"}
          >
            beba com moderação
          </Text>
        </Flex>
      </Box>
    </div>
  );
}
