import {
  Box,
  Flex,
  Img,
  Text,
} from "@chakra-ui/react";
import Carousel from "nuka-carousel/lib/carousel";

import { Section } from "../section";

const House = () => {
  return (
    <Section id='house'>
      <Flex
        direction={"column"}
        alignItems={"center"}>
        <Text alignSelf={"flex-start"}>
          Fotos - Condomínio e Kitnet Mobiliada
        </Text>

        <Box width={"100%"} height={"500px"}>
          <Carousel>
            <Img src='../../../src/assets/carouselImgs/studio-jardim-foto1-kitnet-mobiliada-ufpr-puc-estudante-centro-politecnico.jpeg' />
            <Img src='../../../src/assets/carouselImgs/studio-jardim-foto12-kitnet-mobiliada-ufpr-puc-estudante-centro-politecnico-1024x576.jpeg' />
            <Img src='../../../src/assets/carouselImgs/studio-jardim-foto13-kitnet-mobiliada-ufpr-puc-estudante-centro-politecnico-720x405.jpeg' />
            <Img src='../../../src/assets/carouselImgs/studio-jardim-foto17-kitnet-mobiliada-ufpr-puc-estudante-centro-politecnico.jpeg' />
            <Img src='../../../src/assets/carouselImgs/studio-jardim-foto7-kitnet-mobiliada-ufpr-puc-estudante-centro-politecnico.jpeg' />
            <Img src='../../../src/assets/carouselImgs/WhatsApp-Image-2021-06-14-at-16.39.58-1024x576.jpeg' />
            <Img src='../../../src/assets/carouselImgs/WhatsApp-Image-2021-10-09-at-08.06.46-4.jpeg' />
          </Carousel>
        </Box>
      </Flex>
    </Section>
  );
};

export default House;
