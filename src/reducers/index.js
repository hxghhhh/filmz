import { combineReducers } from 'redux'
import count from './count.reducer';
import fetch from './fetch.reducer';
import user from './user.reducer';
import movie from './movie.reducer';

export default combineReducers({
  count,
  fetch,
  user,
  movie
});
