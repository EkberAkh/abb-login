import { extendTheme } from '@chakra-ui/react';

import components from './components';
import colors from './foundations/colors';
import typography from './foundations/typography';
import styles from './styles';

const overrides = {
    components,
    styles,
    colors,
    typography,
};

export const theme = extendTheme(overrides);


export default theme;
