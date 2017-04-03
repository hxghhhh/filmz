import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie } from '../actions/movie.actions'
import {Tabs, Tab} from 'material-ui/Tabs';
import Movie from './Movie.jsx'

export default class Movies extends React.Component {
  render() {
    const { user, movies, userFetched, moviesFetching, moviesFetched} = this.props;
    return (
          <div>
             { moviesFetching &&
               <div>loading... </div>
             } {!moviesFetching && moviesFetched &&
               <div style={{display:'flex',
                          flexDirection:'row',
                          flexWrap: 'wrap',
                          justifyContent:'center'}}>
                 { movies.results.map((movie) => {
                    return (<Movie key={movie.id} {...movie}/>);
                  })
                 }
             </div>
             }
         </div>
    );
  }
}
