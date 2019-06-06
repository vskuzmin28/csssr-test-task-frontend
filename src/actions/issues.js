import axios from 'axios';
import { API_URL } from '../constants/common';
import * as IssuesActions from '../constants/issues';
import { startLoading, finishLoading, errorLoading } from './loading';

export const handleRepoNameChange = repoName => ({
  type: IssuesActions.HANDLE_REPO_NAME_CHANGE,
  payload: repoName
});

export const handleUserNameChange = userName => ({
  type: IssuesActions.HANDLE_USER_NAME_CHANGE,
  payload: userName
});

export const handlePagesizeChange = perPage => ({
  type: IssuesActions.HANDLE_PAGESIZE_CHANGE,
  payload: perPage
});

const updateIssues = issues => ({
  type: IssuesActions.UPDATE_ISSUES,
  payload: issues
});

export const handleSearchButtonClick = (repoUser, repoName) => {
  const URL = `${API_URL}/repos/${repoUser}/${repoName}/issues`;

  return (dispatch, getState) => {
    // dispatch({ type: IssuesActions.CLEAN_INPUTS });
    dispatch(startLoading());

    const {
      issues: { perPage, page }
    } = getState();

    axios
      .get(URL, { params: { page, per_page: perPage } })
      .then(resp => {
        dispatch(finishLoading());
        dispatch(updateIssues(resp.data));
      })
      .catch(err => {
        dispatch(finishLoading());
        dispatch(errorLoading(err.message));
      });
  };
};

export const handleNextPageClick = () => ({
  type: IssuesActions.HANDLE_NEXT_PAGE_CLICK
});

export const handlePrevPageClick = () => ({
  type: IssuesActions.HANDLE_PREV_PAGE_CLICK
});
