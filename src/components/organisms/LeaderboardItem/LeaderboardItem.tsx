import { Button, ComicText, View, useThemeColor } from '../../atoms';
import React from 'react';
import { LeaderboardItemProps } from './types';
import { Alert, Share, StyleSheet } from 'react-native';

const LeaderboardItem = (props: LeaderboardItemProps) => {
  const { style, lightColor, darkColor, text, score, ...otherProps } = props;

  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  const onPressSharing = async () => {
    try {
      await Share.share({
        message: `My score is ${score}`,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View
      style={[
        {
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: 60,
          borderWidth: 1,
          borderColor,
          flexDirection: 'row',
          paddingHorizontal: 20,
        },
        style,
      ]}
      {...otherProps}>
      <ComicText testID="leaderboard-item-text" style={styles.text}>
        {text}
      </ComicText>
      <Button
        testID="button-share"
        onPress={onPressSharing}
        style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
        <ComicText>Share</ComicText>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 20 },
});

export default React.memo(LeaderboardItem);
