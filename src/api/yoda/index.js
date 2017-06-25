import client from './client';

const mapYodaResponse = response => ({ translation: response.data });

export const translate = function({ sentence }) {
  return client
    .get('/yoda', {
      params: {
        sentence
      }
    })
    .then(mapYodaResponse);
};
