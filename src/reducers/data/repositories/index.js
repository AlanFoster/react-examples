import * as github from 'api/github';

const initialState = {
  items: []
};

export const GET_REPOSITORIES_PENDING = 'GET_REPOSITORIES_PENDING';
export const GET_REPOSITORIES_SUCCESS = 'GET_REPOSITORIES_SUCCESS';
export const GET_REPOSITORIES_FAILURE = 'GET_REPOSITORIES_FAILURE';

export const getRepositoriesPending = function() {
  return {
    type: GET_REPOSITORIES_PENDING
  };
};

export const getRepositoriesSuccess = function({ repositories }) {
  return {
    type: GET_REPOSITORIES_SUCCESS,
    payload: {
      repositories
    }
  };
};

export const getRepositoriesFailure = function() {
  return {
    type: GET_REPOSITORIES_FAILURE
  };
};

export const getTopJavaScriptRepositories = function() {
  return async function(dispatch) {
    dispatch(getRepositoriesPending());

    let repositories;
    try {
      repositories = await github.fetchTopJavaScriptRepositories();
    } catch (e) {
      dispatch(getRepositoriesFailure());
      return;
    }

    dispatch(getRepositoriesSuccess({ repositories }));
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        items: action.payload.repositories
      };

    default:
      return state;
  }
}
