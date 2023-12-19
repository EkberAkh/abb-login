import { mode, StyleConfig } from '@chakra-ui/theme-tools';

const TooltipStyle : StyleConfig = {
  variants: {
    solid: (props) => ({
      bg: mode('gray.900', 'gray.700')(props),
      color: 'white',
      ['--tooltip-bg']: mode('colors.gray.900', 'colors.gray.700')(props),
      borderRadius: '4px',
      padding: '6px 12px'
    }),
    danger: {
      bg: 'red.500',
      color: 'white',
      ['--tooltip-bg']: 'colors.red.500',
      borderRadius: '4px',
      padding: '6px 12px'
    }
  }
};

export default TooltipStyle;
