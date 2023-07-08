import {
  TouchableOpacityProps as DefaultTouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { ThemeProps, useThemeColor } from '../Themed/Themed';

export type TouchableOpacityProps = ThemeProps & DefaultTouchableOpacityProps;

const Button = (props: TouchableOpacityProps) => {
  const { style, lightColor, darkColor, disabled, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'buttonBackground');
  const backgroundColorDisabled = useThemeColor(
    { light: lightColor, dark: darkColor },
    'buttonDisabledBackground'
  );

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: disabled ? backgroundColorDisabled : backgroundColor,
          borderRadius: 20,
          paddingVertical: '5%',
          paddingHorizontal: '15%',
          alignItems: 'center',
        },
        style,
      ]}
      disabled={disabled}
      {...otherProps}>
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
