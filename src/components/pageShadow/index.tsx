import {
  Flex,
  FlexProps,
} from "@chakra-ui/react";

interface IPageShadowProps extends FlexProps {
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
  width: string;
  height: string;
}

export const PageShadow = ({
  bottom,
  left,
  right,
  top,
  width,
  height,
  ...rest
}: IPageShadowProps) => {
  return (
    <Flex
      position={"absolute"}
      bottom={bottom ? bottom : undefined}
      left={left ? left : undefined}
      top={top ? top : undefined}
      right={right ? right : undefined}
      w={width ? width : undefined}
      h={height ? height : undefined}
      {...rest}
      background={`linear-gradient(0deg, rgba(27,27,27,1) 21%,
     rgba(27,27,27,0.9) 33%,
      rgba(27,27,27,0.8) 45%,
       rgba(27,27,27,0.7) 57%,
        rgba(27,27,27,0.6) 69%,
         rgba(255,255,255,0) 100%)`}></Flex>
  );
};
