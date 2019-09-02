import api from './api';

const getSongs = (params) => {
  return api.callGet('/songs', {params: params})
};

export default {
  getSongs
}