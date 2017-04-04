import { combineReducers } from 'redux'
import filter from './filter.reducer';
import user from './user.reducer';
import movie from './movie.reducer';

export default combineReducers({
  filter,
  user,
  movie
});
