import { ScrollView, StyleSheet } from 'react-native';

import { Button, ComicText, QuestionItem, View, AnswerItem } from '../../components';
import { useEffect, useMemo, useState } from 'react';
import { useReduxDispatch, useReduxSelector } from '../../redux';
import { animalsQuestions, citiesQuestions, foodsQuestions } from '../../constants/data';
import { convertQuestion, shuffleArray } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProps } from '../../navigation';
import {
  addQuestionTracker,
  addScoreToLeaderboard,
  resetCurrentScore,
  resetQuestionTracker,
} from '../../redux/main';

const QuestionScreen = () => {
  const { setOptions, replace } = useNavigation<RootStackNavigationProps<'QuestionScreen'>>();

  const dispatch = useReduxDispatch();
  const { selectedCategory, questionTracker, currentScore } = useReduxSelector((s) => s.main);
  const [answer, setAnswer] = useState<{ word: string; index: number }[]>([]);
  const [question, setQuestion] = useState<
    {
      word: string;
      isSelected: boolean;
    }[]
  >([]);

  const questionItem = useMemo(() => {
    switch (selectedCategory) {
      case 'cities':
        return citiesQuestions[questionTracker];
      case 'foods':
        return foodsQuestions[questionTracker];
      case 'animals':
        return animalsQuestions[questionTracker];
      default:
        return citiesQuestions[0];
    }
  }, []);

  const finalAnswer = useMemo(() => {
    let answerTemp = '';
    for (let i = 0; i < answer.length; i++) {
      answerTemp = answerTemp.concat(answer[i].word);
    }
    return answerTemp;
  }, [answer, question]);

  useEffect(() => {
    setOptions({ title: `Question ${questionTracker + 1} of 3` });
    let answer: { word: string; index: number }[] = [];
    const question = shuffleArray(convertQuestion(questionItem.answer));
    question.map((_, index) => {
      answer.push({ word: '', index });
    });
    if (question) {
      setQuestion(question);
      setAnswer(answer);
    }
  }, []);

  const onPressAnswerItem = (answerIndex: number) => {
    setAnswer((prev) => {
      const temp = [...prev];
      temp[answerIndex].word = '';
      return temp;
    });
    setQuestion((prev) => {
      const temp = [...prev];
      const answerIndexTemp = answer[answerIndex].index;
      temp[answerIndexTemp].isSelected = false;
      return temp;
    });
  };

  const onPressQuestionItem = (questionIndex: number, word: string) => {
    setQuestion((prev) => {
      const temp = [...prev];
      temp[questionIndex].isSelected = !temp[questionIndex].isSelected;
      return temp;
    });
    setAnswer((prev) => {
      const temp = prev;
      temp[checkLatestIndex()] = { index: questionIndex, word: word };
      return temp;
    });
  };

  const checkLatestIndex = () => {
    let latestIndex = 0;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i].word === '') {
        latestIndex = i;
        break;
      }
    }
    return latestIndex;
  };

  const checkSkip = () => {
    if (questionTracker === 2) {
      dispatch(addScoreToLeaderboard(currentScore));
      dispatch(resetCurrentScore());
      dispatch(resetQuestionTracker());
      replace('LeaderboardScreen');
      return;
    }
    replace('QuestionScreen');
  };

  const onPressNext = () => {
    dispatch(addQuestionTracker());
    if (finalAnswer.length > 0) {
      if (finalAnswer === questionItem.answer) {
        replace('QuestionSuccessScreen', { points: finalAnswer.length });
        return;
      } else {
        replace('QuestionFailedScreen');
        return;
      }
    }
    checkSkip();
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingHorizontal: 20 }}>
      <View style={styles.container}>
        <View style={styles.answerContainer}>
          {answer?.map((item, answerIndex) => (
            <AnswerItem
              testID={`answer-item`}
              key={answerIndex}
              text={item.word}
              disabled={item.word === ''}
              onPress={() => {
                onPressAnswerItem(answerIndex);
              }}
            />
          ))}
        </View>
        <ComicText style={styles.hintText}>{`HINT: ${questionItem.hint}`}</ComicText>
        <View style={styles.questionContainer}>
          {question?.map((item, questionIndex) => (
            <QuestionItem
              testID={`question-item-${item.word}`}
              key={questionIndex}
              isSelected={item.isSelected}
              text={item.word}
              disabled={item.isSelected}
              onPress={() => {
                onPressQuestionItem(questionIndex, item.word);
              }}
            />
          ))}
        </View>
      </View>
      <Button testID={`button-next`} style={styles.button} onPress={onPressNext}>
        <ComicText>{finalAnswer.length > 0 ? 'Next' : 'Skip'}</ComicText>
      </Button>
    </ScrollView>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  hintText: { fontSize: 20, textAlign: 'center' },
  button: {
    width: '100%',
    marginBottom: 10,
  },
  answerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  questionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100,
  },
});
