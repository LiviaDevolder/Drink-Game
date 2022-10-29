import { Flex, Text } from "@chakra-ui/react";
import Lemon from "../../../public/Lemon";

export default function Menu() {
  return (
    <Flex w={'100%'} justifyContent="center" gap={'52px'} alignItems={'center'} lineHeight="56px" pb={'20px'} borderBottom="2px solid #310E2B">
      <Text fontFamily={"Raleway"} fontSize={"40px"} color={"#310E2B"}>
        Receitas
      </Text>
      <Lemon />
      <Text fontFamily={"Raleway"} fontSize={"40px"} color={"#310E2B"}>
        Roleta
      </Text>
    </Flex>
  );
}
