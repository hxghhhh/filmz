import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie } from '../actions/movie.actions'
import {Tabs, Tab} from 'material-ui/Tabs';


/*
  connect(a,b)
  - a is for getting store values as prop (store >> props for this component)
  - b
*/
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    movies: store.movie.data.data,
    moviesFetching: store.movie.fetching,
    moviesFetched: store.movie.fetched
  }
})

export default class Movie extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchNowPlayingMovie())
    this.handleChange()
  }

  handleChange(value) {
    console.log('hello');
  }

  render() {
    const { user, movies, userFetched, moviesFetching, moviesFetched} = this.props;
    return (
          <div key={movie.id}>{movie.original_title}</div>
    );
  }
}
