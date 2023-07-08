import {
  addCurrentScore,
  addScoreToLeaderboard,
  resetCurrentScore,
  mainReducer,
  addQuestionTracker,
  resetQuestionTracker,
  setSelectedCategory,
} from '../main';
import { InitialState } from '../types';

const initialState: InitialState = {
  leaderboards: [],
  currentScore: 0,
  questionTracker: 0,
  selectedCategory: 'test',
};

describe('main reducer', () => {
  test('addScoreToLeaderboard action is adding score leaderboards data', () => {
    expect(mainReducer.main(initialState, addScoreToLeaderboard(10))).toEqual({
      leaderboards: [10],
      currentScore: 0,
      questionTracker: 0,
      selectedCategory: 'test',
    });
  });

  test('addScoreToLeaderboard action is adding score leaderboards data and sorted', () => {
    const previousState: InitialState = {
      leaderboards: [10],
      currentScore: 0,
      questionTracker: 0,
      selectedCategory: 'test',
    };

    expect(mainReducer.main(previousState, addScoreToLeaderboard(20))).toEqual({
      leaderboards: [20, 10],
      currentScore: 0,
      questionTracker: 0,
      selectedCategory: 'test',
    });
  });

  test('addCurrentScore action is adding 1 to current currentScore value', () => {
    expect(mainReducer.main(initialState, addCurrentScore(10))).toEqual({
      leaderboards: [],
      currentScore: 10,
      questionTracker: 0,
      selectedCategory: 'test',
    });
  });

  test('resetCurrentScore action is resetting currentScore value', () => {
    const previousState: InitialState = {
      leaderboards: [],
      currentScore: 100,
      questionTracker: 0,
      selectedCategory: 'test',
    };
    expect(mainReducer.main(previousState, resetCurrentScore())).toEqual({
      leaderboards: [],
      currentScore: 0,
      questionTracker: 0,
      selectedCategory: 'test',
    });
  });

  test('addQuestionTracker action is adding 1 to current questionTracker value', () => {
    expect(mainReducer.main(initialState, addQuestionTracker())).toEqual({
      leaderboards: [],
      currentScore: 0,
      questionTracker: 1,
      selectedCategory: 'test',
    });
  });

  test('resetQuestionTracker action is resetting questionTracker value', () => {
    const previousState: InitialState = {
      leaderboards: [],
      currentScore: 0,
      questionTracker: 3,
      selectedCategory: 'test',
    };
    expect(mainReducer.main(previousState, resetQuestionTracker())).toEqual({
      leaderboards: [],
      currentScore: 0,
      questionTracker: 0,
      selectedCategory: 'test',
    });
  });

  test('setSelectedCategory action is saving correct value', () => {
    expect(mainReducer.main(initialState, setSelectedCategory('animals'))).toEqual({
      leaderboards: [],
      currentScore: 0,
      questionTracker: 0,
      selectedCategory: 'animals',
    });
  });
});
