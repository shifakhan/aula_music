export const SONGS = {
  FETCH: 'SONGS/FETCH',
  FETCH_SUCCESS: 'SONGS/FETCH_SUCCESS',
  FETCH_FAILURE: 'SONGS/FETCH_FAILURE'
};

export const fetchSongs = (params) => {
  return {
    type: SONGS.FETCH,
    params
  }
}

export const fetchSongsSuccess = (response) => {
  return {
    type: SONGS.FETCH_SUCCESS,
    response: response
  };
};

export const fetchSongsFailure = () => {
  return { type: SONGS.FETCH_FAILURE }
};
