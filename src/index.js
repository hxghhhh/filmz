import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App.jsx';
import store from './store';

import { inc, dec } from './actions'

store.subscribe(() => {
  console.log("store changed", store.getState());
})

// Basic actions to understand reducer and action comms
// store.dispatch(inc(5))
// store.dispatch(inc(1))
// store.dispatch(inc(2))
//
// store.dispatch(dec(2))
// store.dispatch(dec(1))
// store.dispatch(dec(5))

// Basic fetch operations to some api w/ thunk
// store.dispatch((dispatch) => {
//     dispatch({type:'FETCH_DATA'})
//     axios.get('https://rydeboard-dev.now.sh/api/rides')
//     .then((response) => {
//         dispatch({type:'FETCH_DATA_COMPLETE', payload:response})
//     })
//     .catch((err) => {
//         dispatch({type:'FETCH_DATA_ERROR', payload:err})
//     })
// })

//Basic fetch with promise middleware
// store.dispatch({
//   type:"FOO",
//   payload: axios.get('https://rydeboard-dev.now.sh/api/rides')
// })

/*
  PS: using promise-middleware forces you to fromat your reducers to matching
  'promise-middleware' conventions ('FOO_PENDING', 'FOO_FULLFILLED', 'FOO_REJECTED')
  instead of the nomenclature we have setup using 'thunk'.
  Thunk == More control
  Promise == Cleaner formatting set for you
*/


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));
