import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState } from './types';

const initialState: InitialState = {
  leaderboards: [],
  currentScore: 0,
  selectedCategory: '',
  questionTracker: 0,
};

const reducerName = 'main';

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setSelectedCategory(state: InitialState, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;
    },
    addQuestionTracker(state: InitialState) {
      state.questionTracker = state.questionTracker + 1;
    },
    resetQuestionTracker(state: InitialState) {
      state.questionTracker = initialState.questionTracker;
    },
    addScoreToLeaderboard(state: InitialState, action: PayloadAction<number>) {
      const temp = [...state.leaderboards, action.payload];
      state.leaderboards = temp.sort().reverse();
    },
    addCurrentScore(state: InitialState, action: PayloadAction<number>) {
      state.currentScore = state.currentScore + action.payload;
    },
    resetCurrentScore(state: InitialState) {
      state.currentScore = initialState.currentScore;
    },
  },
});

export const mainReducer = { [reducerName]: slice.reducer };

export const {
  setSelectedCategory,
  addScoreToLeaderboard,
  addCurrentScore,
  resetCurrentScore,
  addQuestionTracker,
  resetQuestionTracker,
} = slice.actions;
