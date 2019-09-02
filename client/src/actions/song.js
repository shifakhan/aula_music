export const SONG = {
  FETCH: 'SONG/FETCH',
  FETCH_SUCCESS: 'SONG/FETCH_SUCCESS',
  FETCH_FAILURE: 'SONG/FETCH_FAILURE'
};

export const fetchSong = (id) => {
  return { type: SONG.FETCH, id: id }
}

export const fetchSongSuccess = (response) => {
  return {
    type: SONG.FETCH_SUCCESS,
    response: response
  };
};

export const fetchSongFailure = () => {
  return { type: SONG.FETCH_FAILURE }
};
