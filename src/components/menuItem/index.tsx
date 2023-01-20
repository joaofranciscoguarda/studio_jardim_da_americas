import {
  Link,
  LinkProps,
  Text,
  TextProps,
} from "@chakra-ui/react";

interface IMenuItem extends TextProps {
  children: JSX.Element | string;
  isLast?: boolean;
  to: string;
}

const MenuItem = ({
  children,
  isLast,
  to = "/",
  ...rest
}: IMenuItem) => {
  return (
    <Link href={to}>
      <Text display={"block"} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
