import api from './api';

const getSongs = (params) => {
  return api.callGet('/songs', {params: params})
};

const getSong = (id) => {
  return api.callGet(`/songs/${id}`)
};

export default {
  getSongs,
  getSong
}