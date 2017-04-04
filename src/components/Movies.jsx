import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie } from '../actions/movie.actions'
import {Tabs, Tab} from 'material-ui/Tabs';
import Movie from './Movie.jsx'
import LinearProgress from 'material-ui/LinearProgress';

export default class Movies extends React.Component {
  render() {
    const { movies, moviesFetching, moviesFetched} = this.props;
    console.log(movies)
    return (
          <div style={{backgroundColor:'#F5F5F5'}}>
             { moviesFetching &&
               <div>
                 <LinearProgress mode="indeterminate" />
               </div>
             } {!moviesFetching && moviesFetched && movies.length != 0 &&
               <div style={{display:'flex',
                          flexDirection:'row',
                          flexWrap: 'wrap',
                          justifyContent:'center',
                          marginLeft: 20,
                          marginRight: 20,
                        }}>
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
