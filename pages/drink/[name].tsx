import { Checkbox, Flex, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Card from "../../src/components/Card";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Drink() {
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/${query.name}`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Flex px={"100px"} paddingTop={"48px"} flexDir={"column"} gap={"20px"}>
      <Text fontFamily={"Raleway"} fontSize={"38px"}>
        {data.name}
      </Text>
      <Flex gap={"20px"}>
        <Card name={data.name} ingredients={[]} steps={[]} />
        <Flex flexDir={"column"}>
          <Text fontFamily={"Raleway"} fontSize={"30px"}>
            Ingredientes
          </Text>
          {data.ingredients.map((ingredient: string, index: number) => {
            return (
              <Checkbox colorScheme={"white"} size={"lg"} key={index}>
                {ingredient}
              </Checkbox>
            );
          })}
        </Flex>
      </Flex>
      <Flex flexDir={"column"}>
        <Text fontFamily={"Raleway"} fontSize={"30px"}>
          Preparo
        </Text>
        <OrderedList marginLeft={"22px"}>
          {data.steps.map((step: string, index: number) => {
            return (
              <ListItem fontSize={"18px"} key={index}>
                {step}
              </ListItem>
            );
          })}
        </OrderedList>
      </Flex>
    </Flex>
  );
}
