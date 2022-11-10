import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import CaipirinhadeYakult from "../../../public/CaipirinhadeYakult";
import GinTropical from "../../../public/GinTropical";
import GlitterDrink from "../../../public/GlitterDrink";
import MoscowMule from "../../../public/MoscowMule";
import { ICard } from "../../interfaces";

export default function Card({ name, steps, ingredients }: ICard) {
  return (
    <Link href="/drink/[name]" as={`/drink/${name.split(" ").join("-")}`}>
      <Flex
        w="220px"
        h="220px"
        border={"2px solid #310E2B"}
        borderRadius="10px"
        p={"30px"}
        justifyContent="center"
        alignItems={"center"}
        cursor={"pointer"}
      >
        {(() => {
          switch (name) {
            case "Moscow Mule":
              return <MoscowMule />;
            case "Caipirinha de Yakult":
              return <CaipirinhadeYakult />;
            case "Glitter Drink":
              return <GlitterDrink />;
            case "Gin Tropical":
              return <GinTropical />;
            default:
              return null;
          }
        })()}
      </Flex>
    </Link>
  );
}
