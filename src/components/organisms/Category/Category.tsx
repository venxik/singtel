import { StyleSheet, TouchableOpacity } from 'react-native';
import { ComicText, useThemeColor } from '../../atoms';
import { CategoryProps } from './types';

export const Category = (props: CategoryProps) => {
  const { style, lightColor, darkColor, isSelected, text, ...otherProps } = props;

  const backgroundColorSelected = useThemeColor(
    { light: lightColor, dark: darkColor },
    'categorySelected'
  );
  const backgroundColorNotSelected = useThemeColor(
    { light: lightColor, dark: darkColor },
    'categoryNotSelected'
  );
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: isSelected ? backgroundColorSelected : backgroundColorNotSelected,
          borderRadius: 20,
          paddingVertical: '5%',
          paddingHorizontal: '15%',
          borderWidth: 1,
          borderColor,
        },
        style,
      ]}
      {...otherProps}>
      <ComicText testID="category-text" style={styles.text}>
        {text}
      </ComicText>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  text: { textAlign: 'center' },
});
