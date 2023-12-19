import { mode } from '@chakra-ui/theme-tools';
import { StyleConfig } from '@chakra-ui/theme-tools';

const Heading: StyleConfig = {
  sizes: {
    lg: {
      marginBottom: '24px',
      marginTop: '24px'
    },
    xl: {
      marginBottom: '32px',
      marginTop: '32px'
    },
    '3xl': {
      marginBottom: '32px',
      marginTop: '32px'
    }
  },
  variants: {
    pageHeading: (props) => ({
      color: mode('gray.800', 'white')(props)
    })
  }
};

export default Heading;


