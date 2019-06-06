import axios from 'axios';
import { API_URL } from '../constants/common';
import { UPDATE_USER_REPOS } from '../constants/repos';

const updateRepos = (user, repos) => ({
  type: UPDATE_USER_REPOS,
  payload: { user, repos }
});

export const getUserRepos = (user, page = 1) => {
  const URL = `${API_URL}/users/${user}/repos`;

  return (dispatch, getState) => {
    axios
      .get(URL, { params: { page, per_page: 100 } })
      .then(resp => {
        dispatch(updateRepos(user, resp.data));

        const { UIData: { repoUser } } = getState();

        if (repoUser === user && resp.data.length) return getUserRepos(user, page + 1)(dispatch, getState);
      })
      .catch(() => {});
  };
};
