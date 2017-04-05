import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie } from '../actions/movie.actions'
import {Tabs, Tab} from 'material-ui/Tabs';
import Movie from './Movie.jsx'
import LinearProgress from 'material-ui/LinearProgress';

const styles = {
          root: {
            backgroundColor:'#F5F5F5'
          },
          movies:{
             display:'flex',
             flexDirection:'row',
             flexWrap: 'wrap',
             justifyContent:'center',
             marginLeft: 20,
             marginRight: 20,
           }
}

@connect((store) => {
  return {
    user: store.user, // placed here to update collection on change
  }
})

export default class Movies extends React.Component {
  render() {
    const { movies, moviesFetching, moviesFetched} = this.props;
    return (
          <div style={styles.root}>
             { moviesFetching &&
               <div>
                 <LinearProgress mode="indeterminate" />
               </div>
             } {!moviesFetching && moviesFetched && movies.length != 0 &&
               <div style={styles.movies}>
                 {movies.results.map((movie) => {
                    return (<Movie key={movie.id} {...movie}/>);
                  })
                 }
             </div>
             }
         </div>
    );
  }
}
