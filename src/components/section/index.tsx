import {
  ChakraProps,
  Flex,
} from "@chakra-ui/react";

interface ISectionProps extends ChakraProps {
  id: string;
  children: JSX.Element[] | JSX.Element;
}

export const Section = ({
  id,
  children,
  ...rest
}: ISectionProps) => {
  return (
    <Flex
      id={id}
      as='section'
      minWidth={["100vw"]}
      minHeight={["100vh"]}
      paddingX={["5%", "10%"]}
      paddingY={["5%"]}
      {...rest}
      position={"relative"}>
      {children}
    </Flex>
  );
};
