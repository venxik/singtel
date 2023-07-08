import { combineReducers } from 'redux';
import { mainReducer } from './main/main';

const rootReducer = combineReducers({
  ...mainReducer,
});

export { rootReducer };
