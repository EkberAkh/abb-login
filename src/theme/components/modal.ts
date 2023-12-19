import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const baseStyle = defineStyle((props) => ({
  dialog: {
    bg: mode("white", "gray.800")(props),
    color: mode("gray.700", "white")(props),
  },
  footer: {
    borderTop: mode("transparent", "whiteAlpha.300")(props),
    borderTopWidth: "1px",
    boxShadow: mode("0px -8px 15px -5px rgba(0, 0, 0, 0.05), 0px -4px 5px -5px rgba(0, 0, 0, 0.02)", "none")(props),
  },
}));

const modalTheme = defineStyleConfig({ baseStyle });

export default modalTheme;
