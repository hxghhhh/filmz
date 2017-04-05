export function saveMovie(movie) {
  return {
    type: 'SAVE_MOVIE',
    payload: movie,
  };
}

export function removeMovie(id) {
  return {
    type: 'REMOVE_MOVIE',
    payload: id,
  };
}
