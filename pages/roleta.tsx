import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "Beba um shot" },
  { option: "Beba dois shots" },
  { option: "Beba três shots" },
  { option: "Dobro de shots" },
  { option: "Todos bebem" },
  { option: "Conte uma fofoca" },
  { option: "Prestar continencia" },
  { option: "Defina uma regra" },
  { option: "Nada" },
  { option: "Escolha quem bebe" },
];

export default function Roleta() {
  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);
  const [selected, setSelected] = useState<string>("Gire a roleta");

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleSpinStop = () => {
    setSelected(data[prizeNumber].option);
    setMustSpin(false);
  };

  return (
    <Flex alignItems={'center'} justifyContent={'space-around'} mt={'48px'}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#FC8644"]}
        textColors={["#ffffff"]}
        outerBorderWidth={10}
        outerBorderColor={"#310E2B"}
        innerBorderColor={"#310E2B"}
        innerBorderWidth={5}
        radiusLineColor={"#310E2B"}
        fontSize={16}
        onStopSpinning={handleSpinStop}
      />
      <Flex gap={'24px'} flexDir={"column"} alignItems={"center"}>
        <Flex
          fontSize={"30px"}
          w={"400px"}
          bgColor={"#FC8644"}
          border={"2px solid #310E2B"}
          borderRadius={"10px"}
          py={'16px'}
          justifyContent={'center'}
        >
          <Text>{selected}</Text>
        </Flex>

        <Button
          backgroundColor={"#310E2B"}
          color={"#FC8644"}
          p={'24px'}
          onClick={handleSpinClick}
          fontSize={"20px"}
        >
          RODAR
        </Button>
      </Flex>
    </Flex>
  );
}
