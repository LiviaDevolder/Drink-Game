import { Box, ColorModeScript, Flex, Text } from "@chakra-ui/react";
import Card from "../src/components/Card";
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
    <Flex flexDir={'column'} py={'44px'}>
      <Flex flexDir={'column'} gap={'20px'}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Text fontFamily={"Raleway"} fontSize={"30px"}>
            Selecione um drink misterioso:
          </Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          {data.map((item: ICard) => {
            return (
              <Box key={item.name}>
                <Card
                  name={item.name}
                  ingredients={item.ingredients}
                  steps={item.steps}
                />
              </Box>
            );
          })}
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Text fontFamily={"Raleway"} fontSize={"30px"}>
            ou clique aqui e escolha aleatoriamente
          </Text>
        </Flex>
      </Flex>
    </Flex >
  );
}
