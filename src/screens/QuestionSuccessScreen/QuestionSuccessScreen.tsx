import { StyleSheet } from 'react-native';

import { Button, ComicText, View } from '../../components';
import { useEffect } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackNavigationProps, RootStackParamList } from '../../navigation';
import { useReduxDispatch, useReduxSelector } from '../../redux';
import {
  addCurrentScore,
  addScoreToLeaderboard,
  resetCurrentScore,
  resetQuestionTracker,
} from '../../redux/main';

type QuestionSuccessScreenRouteProp = RouteProp<RootStackParamList, 'QuestionSuccessScreen'>;

const QuestionSuccessScreen = () => {
  const dispatch = useReduxDispatch();
  const { questionTracker, currentScore } = useReduxSelector((s) => s.main);

  const { replace } = useNavigation<RootStackNavigationProps<'QuestionSuccessScreen'>>();
  const route = useRoute<QuestionSuccessScreenRouteProp>();

  const { points } = route.params;

  useEffect(() => {
    dispatch(addCurrentScore(points));
  }, []);

  const onPressNext = () => {
    if (questionTracker === 3) {
      dispatch(addScoreToLeaderboard(currentScore));
      dispatch(resetCurrentScore());
      dispatch(resetQuestionTracker());
      replace('LeaderBoardScreen');
      return;
    }
    replace('QuestionScreen');
  };

  return (
    <View style={styles.container}>
      <ComicText
        style={styles.title}>{`Correct! Congratulations You Earn ${points} Points`}</ComicText>
      <Button testID={`button-next`} style={styles.button} onPress={onPressNext}>
        <ComicText>Next</ComicText>
      </Button>
    </View>
  );
};

export default QuestionSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 30, marginVertical: '20%', textAlign: 'center', paddingHorizontal: 40 },
  button: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
});
