import * as service from '../';
import mockClient from '../client';
import getTopJavaScriptRepositoriesSuccess from './get-top-javascript-repositories-success.json';

jest.mock('../client', function() {
  return {
    get: jest.genMockFunction()
  };
});

describe('github-api', function() {
  beforeEach(function() {
    mockClient.get.mockClear();
  });

  describe('fetchTopJavaScriptRepositories', function() {
    beforeEach(function() {
      mockClient.get.mockImplementation(function() {
        return Promise.resolve({
          data: getTopJavaScriptRepositoriesSuccess,
          status: 200
        });
      });
    });

    it('calls the client correctly', function() {
      expect.assertions(1);
      service.fetchTopJavaScriptRepositories();

      expect(mockClient.get).toHaveBeenCalledWith('/search/repositories', {
        params: {
          sort: 'stars',
          q: 'javascript',
          per_page: 10,
          page: 1
        }
      });
    });

    it('maps the response correctly', function() {
      expect.assertions(1);

      expect(service.fetchTopJavaScriptRepositories()).resolves.toEqual([
        {
          id: 28457823,
          fullName: 'freeCodeCamp/freeCodeCamp',
          description:
            'The https://freeCodeCamp.com open source codebase and curriculum. Learn to code and help nonprofits.',
          htmlUrl: 'https://github.com/freeCodeCamp/freeCodeCamp'
        },
        {
          id: 2126244,
          fullName: 'twbs/bootstrap',
          description:
            'The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.',
          htmlUrl: 'https://github.com/twbs/bootstrap'
        }
      ]);
    });
  });
});
