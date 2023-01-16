import { Section } from "../section";
import HeroImgEnhanced from "../../assets/HeroImgEnhanced.jpg";
import {
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Section
      id='hero'
      bgImg={HeroImgEnhanced}
      bgRepeat='no-repeat'
      bgSize={"cover"}
      bgPos={"center"}>
      <Flex
        minW={"100%"}
        minH={"100%"}
        justifyContent='center'
        flexDirection={"column"}>
        <Text
          fontSize={["38px", "51px", "64px"]}
          textShadow={
            "0px 6px 6px rgba(0,0,0,0.7)"
          }
          fontWeight='bold'
          lineHeight={"140%"}
          maxW={["100%", "70%"]}>
          Encontre sua{" "}
          <span>Kitnet mobiliada</span> próximo a
          @UFPR
        </Text>
        <Button
          maxW={["50%", "35%", "20%"]}
          marginTop='20px'>
          Ver Fotos
        </Button>
      </Flex>
    </Section>
  );
};
