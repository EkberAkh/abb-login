import { mode } from '@chakra-ui/theme-tools';
import { StyleConfig } from '@chakra-ui/theme-tools';

 const FormLabelStyle :StyleConfig = {
  baseStyle: (props) => ({ color: mode('gray.700', 'white')(props) })
};


export default FormLabelStyle;
