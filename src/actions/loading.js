import * as CommonActions from '../constants/common';

export const startLoading = () => ({
  type: CommonActions.LOADING
});

export const finishLoading = () => ({
  type: CommonActions.LOADING_DONE
});

export const errorLoading = message => ({
  type: CommonActions.LOADING_ERROR,
  payload: message
});
