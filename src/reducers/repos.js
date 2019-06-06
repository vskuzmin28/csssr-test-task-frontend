import * as RepoActions from '../constants/repos';

const initState = {
  repos: {}
};

const reposReducer = (state = initState, action) => {
  switch (action.type) {
    case RepoActions.UPDATE_USER_REPOS:
      return {
        ...state,
        repos: {
          ...state.repos,
          [action.payload.user]: [
            ...(state.repos[action.payload.user] ? state.repos[action.payload.user] : []),
            ...action.payload.repos
          ]
        }
      };

    default:
      return state;
  }
};

export default reposReducer;
