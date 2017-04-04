import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie, fetchFilteredMovie } from '../actions/movie.actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Movies from './Movies.jsx';
import Filter from './Filter.jsx';

/*
  connect(a,b)
  - a = is for getting store values as prop (store >> props for this component)
  - b = ?
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

export default class App extends React.Component {
  constructor(props){
    super(props);
    injectTapEventPlugin();
  }

  componentWillMount() {
    //this.props.dispatch(fetchNowPlayingMovie())
    this.props.dispatch(fetchFilteredMovie('popularity.desc','',2016))
  }

  render() {
    const { user, movies, userFetched, moviesFetching, moviesFetched} = this.props;
    return (
      <MuiThemeProvider>
        <Tabs inkBarStyle={{background: 'blue'}} tabItemContainerStyle={{backgroundColor:'white'}}>
          <Tab label="Now Playing" style={styles.tab}>
            <Filter/>
            <Movies {...this.props}/>
          </Tab>
          <Tab label="Favorites" style={styles.tab}>
            <Movies {...this.props}/>
          </Tab>
      </Tabs>
    </MuiThemeProvider>
    );
  }
}

var styles = {
  tab: {backgroundColor:'transparent', color:'black'}
}
