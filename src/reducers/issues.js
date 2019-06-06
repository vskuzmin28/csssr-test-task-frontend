import * as IssuesActions from '../constants/issues';

const initState = {
  issues: {},
  perPage: 5,
  page: 1
};

const issuesReducer = (state = initState, action) => {
  switch (action.type) {
    case IssuesActions.UPDATE_ISSUES:
      return {
        ...state,
        issues: {
          ...state.issues,
          [state.page]: action.payload
        }
      };

    case IssuesActions.HANDLE_PAGESIZE_CHANGE:
      return {
        ...state,
        issues: initState.issues,
        perPage: action.payload
      };

    case IssuesActions.HANDLE_NEXT_PAGE_CLICK:
      return { ...state, page: state.page + 1 };

    case IssuesActions.HANDLE_PREV_PAGE_CLICK:
      return { ...state, page: state.page - 1 };

    default:
      return state;
  }
};

export default issuesReducer;
