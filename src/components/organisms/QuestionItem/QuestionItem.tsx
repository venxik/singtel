import { StyleSheet, TouchableOpacity } from 'react-native';
import { ComicText, useThemeColor } from '../../atoms';
import { QuestionItemProps } from './types';
import React from 'react';

const QuestionItem = (props: QuestionItemProps) => {
  const { style, lightColor, darkColor, isSelected, disabled, text, ...otherProps } = props;

  const backgroundColorSelected = useThemeColor(
    { light: lightColor, dark: darkColor },
    'categorySelected'
  );

  const backgroundColorDisabled = useThemeColor(
    { light: lightColor, dark: darkColor },
    'buttonDisabledBackground'
  );

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: disabled ? backgroundColorDisabled : backgroundColorSelected,
          borderRadius: 6,
          justifyContent: 'center',
          width: 50,
          height: 50,
          margin: 4,
        },
        style,
      ]}
      disabled={disabled}
      {...otherProps}>
      <ComicText testID="question-item-text" style={styles.text}>
        {isSelected ? '' : text}
      </ComicText>
    </TouchableOpacity>
  );
};

export default React.memo(QuestionItem);

const styles = StyleSheet.create({
  text: { textAlign: 'center' },
});
