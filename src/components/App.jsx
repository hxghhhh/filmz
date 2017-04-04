import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie, fetchFilteredMovie } from '../actions/movie.actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Tabs, Tab } from 'material-ui/Tabs';
import Movies from './Movies.jsx';
import Filter from './Filter.jsx';

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    movies: store.movie.data.data,
    moviesFetching: store.movie.fetching,
    moviesFetched: store.movie.fetched,
    filter: store.filter
  }
})

export default class App extends React.Component {
  constructor(props){
    super(props);
    injectTapEventPlugin();
  }

  componentWillMount() {
    const {sort_by, genre, year} = this.props.filter
    this.props.dispatch(fetchFilteredMovie(sort_by, genre, year))
  }

  componentDidUpdate(prevProps){
    console.log('Updating...')
    if (this.props.filter !== prevProps.filter) {
        const {sort_by, genre, year} = this.props.filter
        this.props.dispatch(fetchFilteredMovie(sort_by, genre, year))
      }
    }

  render() {
    const { user, movies, userFetched, moviesFetching, moviesFetched} = this.props;
    return (
      <MuiThemeProvider>
        <Tabs inkBarStyle={{background: 'blue'}} tabItemContainerStyle={{backgroundColor:'white'}}>
          <Tab label="Discover" style={styles.tab}>
            <Filter {...this.props}/>
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
