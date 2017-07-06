import client from './client';
import _ from 'lodash';

const mapRepositoriesResponse = function(response) {
  const repositories = response.data.items;
  return _.map(repositories, function(repository) {
    return {
      id: repository.id,
      fullName: repository.full_name,
      description: repository.description,
      htmlUrl: repository.html_url
    };
  });
};

export const fetchTopJavaScriptRepositories = function() {
  return client
    .get('/search/repositories', {
      params: {
        sort: 'stars',
        q: 'javascript',
        per_page: 10,
        page: 1
      }
    })
    .then(mapRepositoriesResponse);
};
