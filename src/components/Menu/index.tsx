import { Flex, Text } from "@chakra-ui/react";
import Lemon from "../../../public/Lemon";

export default function Menu() {
  return (
    <Flex background={"transparent"}>
      <Text fontFamily={"Raleway"} fontSize={"48px"} color={"#310E2B"}>
        Receitas
      </Text>
      <Lemon />
      <Text fontFamily={"Raleway"} fontSize={"48px"} color={"#310E2B"}>
        Roleta
      </Text>
    </Flex>
  );
}
