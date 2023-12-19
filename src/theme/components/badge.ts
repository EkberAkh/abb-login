import { mode, StyleConfig,StyleFunctionProps } from '@chakra-ui/theme-tools';

 const BadgeStyle: StyleConfig = {
  variants: {
    default: (props: StyleFunctionProps) => ({
      bg: mode(props.theme.colors.gray[100], props.theme.colors.gray[500])(props),
      color: mode(props.theme.colors.gray[800], props.theme.colors.white)(props)
    }),
    sendToBank: (props: StyleFunctionProps) => ({
      bg: mode(props.theme.colors.blue[50], props.theme.colors.blue[500])(props),
      color: mode(props.theme.colors.blue[500], props.theme.colors.white)(props)
    }),
    failed: (props: StyleFunctionProps) => ({
      bg: mode(props.theme.colors.red[100], props.theme.colors.red[500])(props),
      color: mode(props.theme.colors.red[700], props.theme.colors.white)(props)
    }),
    completed: (props: StyleFunctionProps) => ({
      bg: mode(props.theme.colors.green[100], props.theme.colors.green[500])(props),
      color: mode(props.theme.colors.green[700], props.theme.colors.white)(props)
    }),
    validating: (props: StyleFunctionProps) => ({
      bg: mode(props.theme.colors.yellow[100], props.theme.colors.yellow[500])(props),
      color: mode(props.theme.colors.yellow[700], props.theme.colors.white)(props)
    }),
    validated: (props: StyleFunctionProps) => ({
      bg: mode(props.theme.colors.orange[100], props.theme.colors.orange[500])(props),
      color: mode(props.theme.colors.orange[700], props.theme.colors.white)(props)
    })
  }
};

export default BadgeStyle;
