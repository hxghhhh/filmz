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

export default class Movies extends React.Component {
  render() {
    const { user, movies, userFetched, moviesFetching, moviesFetched} = this.props;
    return (
          <div style={{textAlign: 'center'}}>
            <h1>Hello</h1>
            <h3>Current User</h3>
            <div>{JSON.stringify(user)}</div>
             { moviesFetching &&
               <div>loading... </div>
             } {!moviesFetching && moviesFetched &&
               <div>
                 <h3>Movies</h3>

                 <div>
                   {
                     movies.results.map((movie) => {
                       return (<div key={movie.id}>{movie.original_title}</div>);
                     })
                   }
                 </div>
               </div>
             }
         </div>
    );
  }
}
