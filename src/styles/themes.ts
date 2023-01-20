import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    background: "rgba(27,27,27,1 )",
    orange: "#FF9505",
    white: "#FFFBFB",
  },
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "background",
        color: "white",
        boxSizing: "border-box",
        fontFamily: "body",
        scrollBehavior: "smooth",
        transition: "all .5s ease",
      },
      span: {
        color: "orange",
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        variant: "primary",
      },
      variants: {
        primary: {
          bg: "white",
          borderRadius: "8px",
          h: { base: "38px", md: "48px" },
          border: "none",
          color: "background",
          fontSize: { base: "14px", md: "16px" },
          fontWeight: "600",
          _hover: {
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
});
