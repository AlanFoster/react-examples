import axios from 'axios';
import environment from 'environment';
const { endpoint, key } = environment.yoda;

export default axios.create({
  baseURL: endpoint,
  headers: {
    'X-Mashape-Key': key,
    Accept: 'text/plain'
  }
});
