import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const warningStyle = defineStyle({
  icon: { color: "white" },
  control: {
    _checked: {
      bg: "orange.500",
      borderColor: "orange.500",
      _hover: { bg: "orange.600", borderColor: "orange.600" },
    },
  },
});
const errorStyle = defineStyle({
  icon: { color: "white" },
  control: {
    _checked: { bg: "red.500", borderColor: "red.500", _hover: { bg: "red.600", borderColor: "red.600" } },
  },
});

const baseStyle = defineStyle((props) => ({
  container: { color: mode("gray.700", "white")(props) },
  icon: { color: props.iconColor ?? "white" },
  control: { _checked: { bg: "brand.500", borderColor: "brand.500" } },
}));

const variants = {
  warning: warningStyle,
  error: errorStyle,
};

const checkboxTheme = defineStyleConfig({ variants, baseStyle });

export default checkboxTheme;
