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

        <Box
          width={["100%", "", "80%"]}
          height={"500px"}>
          <Carousel animation='zoom'
            autoplay
          // renderCenterLeftControls={}
          >
            <Img src='../../../src/assets/carouselImgs/1.png' />
            <Img src='../../../src/assets/carouselImgs/2.png' />
            <Img src='../../../src/assets/carouselImgs/3.png' />
            <Img src='../../../src/assets/carouselImgs/4.png' />
            <Img src='../../../src/assets/carouselImgs/5.png' />
            <Img src='../../../src/assets/carouselImgs/6.png' />
            <Img src='../../../src/assets/carouselImgs/7.png' />
            <Img src='../../../src/assets/carouselImgs/8.png' />
          </Carousel>
        </Box>
      </Flex>
    </Section>
  );
};

export default House;
