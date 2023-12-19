import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const baseStyle = defineStyle((props) => ({
  container: { color: mode("gray.700", "white")(props) },
  icon: { color: "white" },
  control: {
    _checked: { bg: mode("brand.800", "brand.500")(props), borderColor: mode("brand.800", "brand.500")(props) },
  },
}));

const radioTheme = defineStyleConfig({ baseStyle });

export default radioTheme;
