import { Box, BoxProps } from "@chakra-ui/react";
import { GoThreeBars, GoX } from "react-icons/go";

interface IMenuToggleProps extends BoxProps {
  onClick: () => void;
  isOpen: boolean;
  size: string
}

const MenuToggle = ({
  onClick,
  isOpen,
  size,
  ...rest
}: IMenuToggleProps) => {
  return (
    <Box
      display={["flex", "flex", "none"]}
      onClick={onClick}
      alignItems={"center"}
      {...rest}>
      {!isOpen && <GoThreeBars size={size} />}
    </Box>
  );
};

export default MenuToggle;
