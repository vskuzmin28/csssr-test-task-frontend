import * as IssuesActions from '../constants/issues';
import * as CommonActions from '../constants/common';

const initState = {
  repoName: 'csssr-project-template',
  repoUser: 'CSSSR',
  isLoading: false,
  errMessage: ''
};

const uiDataReducer = (state = initState, action) => {
  switch (action.type) {
    // error cleaning
    case IssuesActions.HANDLE_PREV_PAGE_CLICK:
    case IssuesActions.HANDLE_NEXT_PAGE_CLICK:
    case IssuesActions.HANDLE_PAGESIZE_CHANGE:
      return {
        ...state,
        errMessage: ''
      };

    case IssuesActions.HANDLE_REPO_NAME_CHANGE:
      return { ...state, repoName: action.payload };

    case IssuesActions.HANDLE_USER_NAME_CHANGE:
      return { ...state, repoUser: action.payload };

    case IssuesActions.CLEAN_INPUTS:
      return {
        ...state,
        repoName: '',
        repoUser: ''
      };

    case CommonActions.LOADING:
      return {
        ...state,
        errMessage: '',
        isLoading: true
      };

    case CommonActions.LOADING_DONE:
      return {
        ...state,
        errMessage: '',
        isLoading: false
      };

    case CommonActions.LOADING_ERROR:
      return {
        ...state,
        errMessage: action.payload
      };

    default:
      return {
        ...state
      };
  }
};

export default uiDataReducer;
