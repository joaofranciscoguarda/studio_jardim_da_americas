import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Img,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import useScrollDirection from "../../utils/ScrollDirection";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import MenuToggle from "../menuToggle";
import { NavBarButtons } from "../navBarButtons";

export const Header = () => {
  const scrollDirection = useScrollDirection();

  const { isOpen, onOpen, onClose, onToggle } =
    useDisclosure();
  const firstField =
    useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState(
    window.innerWidth
  );

  const headerInfoButtons = [
    {
      text: "Kitnets",
      to: "/#hero",
      isLast: false,
    },
    {
      text: "Sobre nós",
      to: "/#hero",
      isLast: false,
    },
    {
      text: "Entre em Contato",
      to: "/#hero",
      isLast: true,
    },
  ];

  const headerBreakPoint = 560;

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setQuery(newWidth);
      console.log("updating width");
    };

    window.addEventListener(
      "resize",
      updateWindowDimensions
    );
    updateWindowDimensions();

    return () => {
      console.log(window.innerWidth);
      removeEventListener(
        "resize",
        updateWindowDimensions
      );
    };
  }, [window.innerWidth]);

  return (
    <Flex
      position={"fixed"}
      top={
        scrollDirection === "up" ? "0px" : "-6rem"
      }
      background={
        "linear-gradient(180deg, rgba(27,27,27,1) 10%, rgba(27,27,27,0.53) 50%, rgba(27,27,27,0.33) 70%, rgba(27,27,27,0.13) 90%, rgba(27,27,27,0.01) 100%)"
      }
      minH={["100px"]}
      minW={"100%"}
      transitionProperty={"all"}
      transitionTimingFunction={
        "cubic-bezier(0.4,0,0.2,1)"
      }
      zIndex='1'
      transitionDuration='500ms'
      alignContent={"center"}
      justifyContent={"space-between"}
      paddingX={"5%"}>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}>
        <Img
          alt='Studio Jardim'
          src='../../../src/assets/icon.svg'
          width={"3em"}
        />
        <Text
          fontSize={"1.1em"}
          textAlign={"center"}
          fontFamily={"Wellfleet, sans-serif"}>
          Studio Jardim
        </Text>
      </Flex>
      {query > headerBreakPoint ? (
        <NavBarButtons
          direction={"row"}
          width={["0%", "60%", "50%", "40%"]}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          buttons={
            headerInfoButtons
          }></NavBarButtons>
      ) : (
        <MenuToggle
          onClick={onOpen}
          size={"2.4rem"}
          isOpen={isOpen}></MenuToggle>
      )}

      <Drawer
        isOpen={isOpen}
        placement='right'
        finalFocusRef={firstField}
        onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={"background"}>
          <DrawerCloseButton
            size={"2.4rem"}
            top='1.5rem'
            right={"1.5rem"}
          />
          <DrawerHeader borderBottomWidth='1px'>
            <Text
              fontFamily={
                "Wellfleet, sans-serif"
              }>
              Studio Jardim
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <NavBarButtons
              direction={"column-reverse"}
              alignItems={"center"}
              height={"30%"}
              justifyContent={"space-evenly"}
              onClose={onClose}
              buttons={
                headerInfoButtons
              }></NavBarButtons>
          </DrawerBody>

          <DrawerFooter borderTopWidth='1px'>
            <Text
              fontFamily={"Wellfleet, sans-serif"}
              fontSize={"12px"}
              color={"gray.600"}>
              Criado por João Francisco
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
