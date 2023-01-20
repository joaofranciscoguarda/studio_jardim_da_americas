import {
  Button,
  Flex,
  FlexProps,
} from "@chakra-ui/react";
import MenuItem from "../menuItem";

interface ButtonsTextProps {
  text: string;
  to: string;
  isLast: boolean;
}

interface INavBarButtons extends FlexProps {
  buttons: ButtonsTextProps[];
  onClose?: () => void;
}

export const NavBarButtons = ({
  buttons,
  onClose,
  ...rest
}: INavBarButtons) => {
  return (
    <Flex {...rest}>
      {buttons &&
        buttons.map((item, index) => {
          if (item.isLast) {
            return (
              <MenuItem
                key={index}
                to={item.to}
                onClick={onClose}>
                <Button>{item.text}</Button>
              </MenuItem>
            );
          }
          return (
            <MenuItem
              key={index}
              to={item.to}
              onClick={onClose}>
              {item.text}
            </MenuItem>
          );
        })}
    </Flex>
  );
};
