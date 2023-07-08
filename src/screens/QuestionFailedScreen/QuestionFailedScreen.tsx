import { StyleSheet } from 'react-native';

import { Button, ComicText, View } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProps } from '../../navigation';
import { useReduxDispatch, useReduxSelector } from '../../redux';
import { addScoreToLeaderboard, resetCurrentScore, resetQuestionTracker } from '../../redux/main';

const QuestionFailedScreen = () => {
  const dispatch = useReduxDispatch();
  const { questionTracker, currentScore } = useReduxSelector((s) => s.main);

  const { replace } = useNavigation<RootStackNavigationProps<'QuestionFailedScreen'>>();

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
      <ComicText style={styles.title}>Sorry but your answer is incorrect!</ComicText>
      <Button testID={`button-next`} style={styles.button} onPress={onPressNext}>
        <ComicText>Next</ComicText>
      </Button>
    </View>
  );
};

export default QuestionFailedScreen;

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
