import React from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from '../actions'

/*
  connect(a,b)
  - a is for getting store values as prop (store >> props for this component)
  - b
*/
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    movies: store.movie.data.data
  }
})

export default class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchMovie())
  }

  render() {
    const { user, movies} = this.props
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello</h1>
        <h3>Current User</h3>
        <div>{JSON.stringify(user)}</div>
        <h3>Movies</h3>
        <div>{JSON.stringify(movies, null, 3)}</div>
    </div>
    );
  }
}
