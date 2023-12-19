import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const outlineStyle = defineStyle((props) => ({
  field: {
    borderColor: mode("gray.200", "whiteAlpha.600")(props),
    color: mode("gray.700", "white")(props),
    boxSizing: "border-box",
    _hover: { borderColor: mode("gray.200", "whiteAlpha.700")(props) },
  },
  addon: {
    borderColor: mode("gray.200", "whiteAlpha.600")(props),
    color: mode("gray.700", "white")(props),
  },
}));

const variants = {
  outline: outlineStyle,
};

const inputTheme = defineStyleConfig({ variants });

export default inputTheme;
