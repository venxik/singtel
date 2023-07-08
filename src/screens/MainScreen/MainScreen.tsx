import { ScrollView, StyleSheet } from 'react-native';

import { Button, Category, ComicText, View } from '../../components';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProps } from '../../navigation';
import { useReduxDispatch } from '../../redux';
import { setSelectedCategory } from '../../redux/main';
import { categories } from '../../constants/data';

const MainScreen = () => {
  const [selectCategory, setSelectCategory] = useState('');
  const dispatch = useReduxDispatch();

  const { navigate } = useNavigation<RootStackNavigationProps<'MainScreen'>>();

  const onPressStart = () => {
    dispatch(setSelectedCategory(selectCategory));
    navigate('QuestionScreen');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <ComicText style={styles.title}>Words Puzzle</ComicText>
        <ComicText>Please choose a theme </ComicText>
        <View style={{ height: '50%', justifyContent: 'space-evenly' }}>
          {categories.map((item) => {
            return (
              <Category
                testID={`category-${item}`}
                key={item}
                isSelected={item == selectCategory}
                text={item}
                onPress={() => setSelectCategory(item)}
              />
            );
          })}
        </View>
        <Button
          testID={`button-continue`}
          style={styles.button}
          disabled={selectCategory === ''}
          onPress={onPressStart}>
          <ComicText>Start</ComicText>
        </Button>
        <Button
          testID={`button-leaderboard`}
          style={styles.button}
          onPress={() => navigate('LeaderboardScreen')}>
          <ComicText>Leaderboards</ComicText>
        </Button>
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: { fontSize: 30, marginVertical: '20%' },
  button: {
    width: '90%',
    marginBottom: 10,
  },
});
