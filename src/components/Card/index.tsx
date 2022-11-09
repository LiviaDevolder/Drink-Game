import { Flex } from "@chakra-ui/react";
import MoscowMule from "../../../public/MoscowMule";

export default function Card() {
  return (
    <Flex
      w="220px"
      h="220px"
      border={"2px solid #310E2B"}
      borderRadius="10px"
      p={'30px'}
      justifyContent="center"
      alignItems={"center"}
      cursor={"pointer"}
    >
      <MoscowMule />
    </Flex>
  );
}
