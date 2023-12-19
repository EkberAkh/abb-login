import { Theme } from '@chakra-ui/react';

type Typography = Partial<
    Pick<Theme, 'letterSpacings' | 'lineHeights' | 'fontWeights' | 'fonts' | 'fontSizes'>
>;

const typography: Typography = {
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `'Inter', sans-serif`,
    mono: `'Inter', sans-serif`,
  },
  // fontSizes: {
  //   "3xs": "6px",
  //   "2xs": "8px",
  //   xs: "10px",
  //   sm: "12px",
  //   md: "13px",
  //   lg: "14px",
  //   xl: "16px",
  //   "2xl": "18px",
  //   "3xl": "20px",
  //   "4xl": "20px",
  //   "5xl": "24px",
  //   "6xl": "32px",
  //   "7xl": "40px",
  //   "8xl": "48px",
  //   "9xl": "56px",
  // }
};

export default typography;
