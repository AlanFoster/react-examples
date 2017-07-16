import axios from 'axios';
import environment from 'environment';
const { endpoint } = environment.github;

export default axios.create({
  baseURL: endpoint
});
