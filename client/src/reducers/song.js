import {SONG} from '../actions/song'
import config from '../config';

const initialState = {
  song: {},
  isloading: false,
  error: null
}

const songReducer = (state = initialState, action) => {
  const {response, type} = action
  switch (type) {
    case SONG.FETCH:
      return {
        ...state,
        isloading: true,
        error: null
      }
    case SONG.FETCH_SUCCESS:
      return {
        ...state,
        song: {...response.data, url: `${config.apiUrl}/${response.data.path}`},
        isloading: false,
        error: null
      }
    case SONG.FETCH_FAILURE:
      return {
        ...state,
        isloading: false,
        error: response
      }
    default:
      return state
  }
};
export default songReducer;