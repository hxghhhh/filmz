import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App.jsx';
import store from './store';
import 'react-select/dist/react-select.css';
import { fetchFilteredMovie } from './actions/movie.actions'

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));
