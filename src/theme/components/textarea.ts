import { mode, StyleConfig } from '@chakra-ui/theme-tools';

const TextareaStyle :StyleConfig = {
  variants: {
    outline: (props) => {
      return {
        borderColor: mode('gray.200', 'whiteAlpha.600')(props),
        color: mode('gray.700', 'white')(props),
        boxSizing: 'border-box',
        _hover: { borderColor: mode('gray.200', 'whiteAlpha.700')(props) }
      };
    }
  }
};

export default TextareaStyle;
