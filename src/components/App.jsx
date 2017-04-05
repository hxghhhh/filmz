import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie, fetchFilteredMovie } from '../actions/movie.actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Tabs, Tab } from 'material-ui/Tabs';
import DiscoverMovie from 'material-ui/svg-icons/action/search';
import ActionHeartFilled from 'material-ui/svg-icons/action/favorite';
import { red500 } from 'material-ui/styles/colors';
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
    if (this.props.filter !== prevProps.filter) {
        const {sort_by, genre, year} = this.props.filter
        this.props.dispatch(fetchFilteredMovie(sort_by, genre, year))
      }
    }

  render() {
    const { user, movies, moviesFetching, moviesFetched} = this.props;
    return (
      <MuiThemeProvider> 
        <Tabs inkBarStyle={{background: '#EF5B5B'}} tabItemContainerStyle={{backgroundColor:'#20A39E'}}>
          <Tab style={styles.tab} icon={<DiscoverMovie color={red500}/>}>
            <Filter {...this.props}/>
            <Movies
              movies={this.props.movies}
              moviesFetching = {moviesFetching}
              moviesFetched = {moviesFetched}
            />
          </Tab>
          <Tab style={styles.tab} icon={<ActionHeartFilled color={red500} />}>
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
