import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Menu from "../../src/components/Menu";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Drink() {
  const { query } = useRouter()
  const { data, error } = useSWR(`/api/${query.name}`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Box px={"140px"} py={"32px"}>
        <Menu />
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
