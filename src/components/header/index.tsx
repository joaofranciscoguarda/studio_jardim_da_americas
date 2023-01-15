import {
  Container,
  Flex,
} from "@chakra-ui/react";
import useScrollDirection from "../../utils/ScrollDirection";


export const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <Flex
      position={"fixed"}
      top={
        scrollDirection === "up" ? "0px" : "-6rem"
      }
      background={
        // "transparent"
        "linear-gradient(180deg, rgba(27,27,27,1) 10%, rgba(27,27,27,0.53) 50%, rgba(27,27,27,0.25) 70%, rgba(27,27,27,0.18) 90%, rgba(27,27,27,0) 100%)"
      }
      minH={["75px"]}
      minW={"100%"}
      transitionProperty={"all"}
      transitionTimingFunction={
        "cubic-bezier(0.4,0,0.2,1)"
      }
      zIndex='1'
      transitionDuration='500ms'
      alignContent={"center"}
    
    >
      
      <img
        src='../../../src/assets/icon.svg'
        alt=''
      />
    </Flex>
  );
};
