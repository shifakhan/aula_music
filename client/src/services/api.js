import axios from 'axios';
import config from '../config';

axios.defaults.baseURL = config.apiUrl;

const _response = request => (
  request
    .then(response => (response.data))
    .catch(error => error.message)
);

const callGet = (path, params) => (
  _response(axios.get(path, params))
);

export default {
  callGet
};
