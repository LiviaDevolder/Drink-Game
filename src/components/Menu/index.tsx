import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Lemon from "../../../public/Lemon";

export default function Menu() {
  return (
    <Flex
      w={"100%"}
      justifyContent="center"
      gap={"52px"}
      alignItems={"center"}
      lineHeight="56px"
      pb={"20px"}
      borderBottom="2px solid #310E2B"
    >
      <Link href="/">
        <Text
          cursor={"pointer"}
          fontFamily={"Raleway"}
          fontSize={"40px"}
          color={"#310E2B"}
        >
          Receitas
        </Text>
      </Link>
      <Lemon />
      <Link href="/roleta">
        <Text
          cursor={"pointer"}
          fontFamily={"Raleway"}
          fontSize={"40px"}
          color={"#310E2B"}
        >
          Roleta
        </Text>
      </Link>
    </Flex>
  );
}
