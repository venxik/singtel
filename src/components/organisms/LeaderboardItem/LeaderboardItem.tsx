import { ComicText, View, useThemeColor } from '../../atoms';
import React from 'react';
import { LeaderboardItemProps } from './types';
import { StyleSheet } from 'react-native';

const LeaderboardItem = (props: LeaderboardItemProps) => {
  const { style, lightColor, darkColor, text, ...otherProps } = props;

  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <View
      style={[
        {
          borderRadius: 6,
          justifyContent: 'center',
          width: '100%',
          height: 60,
          borderWidth: 1,
          borderColor,
        },
        style,
      ]}
      {...otherProps}>
      <ComicText testID="leaderboard-item-text" style={styles.text}>
        {text}
      </ComicText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 20, marginLeft: 20 },
});

export default React.memo(LeaderboardItem);
