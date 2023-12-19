import { mode, StyleConfig, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const textVariants = {
  h1: () => ({
    fontSize: "56px",
    fontStyle: "normal",
    lineHeight: "64px",
  }),
  h2: () => ({
    fontSize: "48px",
    fontStyle: "normal",
    lineHeight: "56px",
  }),
  h3: () => ({
    fontSize: "40px",
    fontStyle: "normal",
    lineHeight: "48px",
  }),
  h4: () => ({
    fontSize: "32px",
    fontStyle: "normal",
    lineHeight: "40px",
  }),
  h5: () => ({
    fontSize: "24px",
    fontStyle: "normal",
    lineHeight: "32px",
  }),
  h6: () => ({
    fontSize: "20px",
    fontStyle: "normal",
    lineHeight: "28px",
  }),
  subtitle1: () => ({
    fontSize: "24px",
    fontStyle: "normal",
    lineHeight: "32px",
  }),
  subtitle2: () => ({
    fontSize: "20px",
    fontStyle: "normal",
    lineHeight: "28px",
  }),
  subtitle3: () => ({
    fontSize: "18px",
    fontStyle: "normal",
    lineHeight: "24px",
  }),
  subtitle4: () => ({
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "24px",
  }),
  body1: () => ({
    fontSize: "20px",
    fontStyle: "normal",
    lineHeight: "28px",
  }),
  body2: () => ({
    fontSize: "18px",
    fontStyle: "normal",
    lineHeight: "28px",
  }),
  body3: () => ({
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "24px",
  }),
  body4: () => ({
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "20px",
  }),
  caption1: () => ({
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "20px",
  }),
  caption2: () => ({
    fontSize: "13px",
    fontStyle: "normal",
    lineHeight: "16px",
  }),
  caption3: () => ({
    fontSize: "12px",
    fontStyle: "normal",
    lineHeight: "16px",
  }),
  overline: () => ({
    fontSize: "10px",
    fontStyle: "normal",
    lineHeight: "16px",
  }),
  buttonLarge: () => ({
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "28px",
  }),
  buttonMedium: () => ({
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
  }),
  buttonSmall: () => ({
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  dangerous: (props: StyleFunctionProps) => ({
    color: mode('red.500', 'red.500')(props)
  }),
  label: (props: StyleFunctionProps) => ({
    color: mode('gray.500', 'gray.400')(props)
  }),
  labelValue: (props: StyleFunctionProps) => ({
    color: mode('gray.700', 'white')(props)
  })
} as const;

const TextStyle: StyleConfig = {
  variants: textVariants 
} ;

export default TextStyle;
