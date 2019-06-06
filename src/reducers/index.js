import { combineReducers } from 'redux';
import issuesReducer from './issues';
import uiData from './uidata';
import reposReducer from './repos';

const rootReducer = combineReducers({
  issues: issuesReducer,
  UIData: uiData,
  repos: reposReducer
});

export default rootReducer;
