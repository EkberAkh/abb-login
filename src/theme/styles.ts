import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props: GlobalStyleProps) => ({
        body: {
            fontFamily: 'body',
            color: mode('gray.900', 'whiteAlpha.900')(props),
            bg: mode('whiteAlpha.900', 'gray.900')(props),
            transitionProperty: 'background-color',
            transitionDuration: 'normal',
            lineHeight: 'base',
        }
    }),
};

export default styles;
