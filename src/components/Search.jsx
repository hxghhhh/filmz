import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';

export default class Movies extends React.Component {
  render() {
    const { user, movies, userFetched, moviesFetching, moviesFetched} = this.props;
    return (
          <div>
            <TextField
                hintText="Seat"
                fullWidth={true}
            />
         </div>
    );
  }
}
