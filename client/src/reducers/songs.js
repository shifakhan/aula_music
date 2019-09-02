import {SONGS} from '../actions/songs'
import config from '../config';

const initialState = {
  songs: [],
  page: 1,
  totalEntries: 0,
  totalPages: 0,
  isloading: false,
  error: null
}

const formatSongs = (songs) => {
  return songs.map((song) => {
    return { ...song, url: `${config.apiUrl}/${song.path}`}
  })
}

const songsReducer = (state = initialState, action) => {
  const {response, type} = action
  switch (type) {
    case SONGS.FETCH:
      return {
        ...state,
        isloading: true,
        error: null
      }
    case SONGS.FETCH_SUCCESS:
      return {
        ...state,
        songs: formatSongs(response.data),
        page: response.page,
        totalEntries: response.totalEntries,
        totalPages: response.totalPages,
        isloading: false,
        error: null
      }
    case SONGS.FETCH_FAILURE:
      return {
        ...state,
        isloading: false,
        error: response
      }
    default:
      return state
  }
};
export default songsReducer;