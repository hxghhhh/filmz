import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie, fetchFilteredMovie } from '../actions/movie.actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home';
import Movies from './Movies.jsx';
import Filter from './Filter.jsx';

@connect((store) => {
  return {
    user: store.user.user,
    savedMovies: store.user.savedMovies,
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
    console.log(this.props.savedMovies)
    if (this.props.filter !== prevProps.filter) {
        const {sort_by, genre, year} = this.props.filter
        this.props.dispatch(fetchFilteredMovie(sort_by, genre, year))
      }
    }

  render() {
    const { user, movies, moviesFetching, moviesFetched} = this.props;
    return (
      <MuiThemeProvider>
        <Tabs inkBarStyle={{background: 'blue'}} tabItemContainerStyle={{backgroundColor:'white'}}>
          <Tab label="Discover" style={styles.tab}>
            <Filter {...this.props}/>
            <Movies
              movies={this.props.movies}
              moviesFetching = {moviesFetching}
              moviesFetched = {moviesFetched}
            />
          </Tab>
          <Tab label="Favorites" style={styles.tab}>
            <Movies
              movies={{results:this.props.savedMovies}}
              moviesFetching = {false}
              moviesFetched = {true}
            />
          </Tab>
      </Tabs>
    </MuiThemeProvider>
    );
  }
}

var styles = {
  tab: {backgroundColor:'transparent', color:'black'}
}
