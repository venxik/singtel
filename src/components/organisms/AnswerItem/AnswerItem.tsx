import { StyleSheet, TouchableOpacity } from 'react-native';
import { ComicText, useThemeColor } from '../../atoms';
import { AnswerItemProps } from './types';
import React from 'react';

const AnswerItem = (props: AnswerItemProps) => {
  const { style, lightColor, darkColor, text, disabled, ...otherProps } = props;

  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 6,
          justifyContent: 'center',
          width: 60,
          height: 60,
          borderWidth: 1,
          borderColor,
          margin: 4,
        },
        style,
      ]}
      disabled={disabled}
      {...otherProps}>
      <ComicText testID="answer-item-text" style={styles.text}>
        {text}
      </ComicText>
    </TouchableOpacity>
  );
};

export default React.memo(AnswerItem);

const styles = StyleSheet.create({
  text: { textAlign: 'center', fontSize: 20 },
});
