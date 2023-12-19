import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { darken, mode } from "@chakra-ui/theme-tools";


const commonFontStyle = (size: "xs"| "sm" | "md" | "lg")=> {
  if(size === 'xs' || size === 'sm') {
    return {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
    }
  }else if(size === "lg") {
    return {
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "28px",
    }
  }else{
    return {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
    }
  }
}

const createStyle = defineStyle((props) => ({
  ...commonFontStyle(props.size),
  bg: props.theme.colors.brand[500],
  color: props.theme.colors.white,
}));

const solidStyle = defineStyle((props) => {
  let c = props.colorScheme;

  if (c == "gray") c = "brand";

  return {
    ...commonFontStyle(props.size),
    color: props.theme.colors.white,
    bg: mode(props.theme.colors[c][800], props.theme.colors[c][500])(props),
    // _disabled: { opacity: 0.4, cursor: 'not-allowed', bg: mode('gray.100', 'whiteAlpha.100')(props) },
    _hover: {
      bg: darken(props.theme.colors[c][600], 5)(props),
      // _disabled: { opacity: 0.4, cursor: 'not-allowed', bg: mode('gray.100', 'whiteAlpha.100')(props) }
    },
  };
});

const outlineStyle = defineStyle((props) => ({
  ...commonFontStyle(props.size),
  color: mode(props.theme.colors.gray[800], props.theme.colors.whiteAlpha[900])(props),
  borderColor: mode(props.theme.colors.gray[200], props.theme.colors.whiteAlpha[900])(props),
  bg: props.theme.colors.transparent,
}));

const grayStyle = defineStyle((props) => ({
  ...commonFontStyle(props.size),
  color: mode(props.theme.colors.gray[800], props.theme.colors.white)(props),
  bg: mode(props.theme.colors.gray[100], props.theme.colors.gray[600])(props),
  _disabled: { opacity: 0.4, cursor: "not-allowed", bg: mode("gray.100", "gray.700")(props) },
  _hover: {
    bg: mode("gray.200", "gray.500")(props),
    _disabled: { bg: mode("gray.100", "gray.700")(props) },
  },
}));

const variants = {
  create: createStyle,
  solid: solidStyle,
  outline: outlineStyle,
  gray: grayStyle,
};

const buttonTheme = defineStyleConfig({ variants });

export default buttonTheme;
