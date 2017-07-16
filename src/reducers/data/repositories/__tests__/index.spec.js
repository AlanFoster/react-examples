import reducer, * as actionCreators from '../';

describe('repositories reducer', function() {
  it('returns an initial state', function() {
    expect(reducer(undefined, {})).toEqual({
      items: []
    });
  });

  it('merges the available top repositories on success', function() {
    const initialState = {
      items: []
    };

    const action = actionCreators.getRepositoriesSuccess({
      repositories: [
        {
          id: 1,
          fullName: 'full-name',
          description: 'description',
          htmlUrl: 'html-url'
        }
      ]
    });

    expect(reducer(initialState, action)).toEqual({
      items: [
        {
          id: 1,
          fullName: 'full-name',
          description: 'description',
          htmlUrl: 'html-url'
        }
      ]
    });
  });
});
