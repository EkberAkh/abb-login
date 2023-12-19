import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const simpleStyle = defineStyle((props) => ({
  table: {
    bg: mode("white", "gray.800")(props),
    color: mode("gray.900", "white")(props),
  },
  tbody: {
    tr: {
      _hover: { backgroundColor: mode("gray.50", "whiteAlpha.100")(props) },
    },
  },
  thead: {
    tr: {
      _hover: { backgroundColor: "none" },
    },
  },
}));

const secondryStyle = defineStyle((props) => ({
  table: {
    bg: mode(props.theme.colors.gray[50], props.theme.colors.whiteAlpha[50])(props),
    borderRadius: "12px",
    overflow: "hidden",
  },
  tbody: {
    th: {
      borderRightWidth: "1px",
      borderBottomWidth: "1px",
    },
    td: {
      borderBottomWidth: "1px",
    },
  },
}));

const variants = {
  simple: simpleStyle,
  secondry: secondryStyle,
};

const tableTheme = defineStyleConfig({ variants });
export default tableTheme;
