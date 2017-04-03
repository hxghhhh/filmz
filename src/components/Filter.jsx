import React from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { inc } from '../actions';
import Select from 'react-select';

var styles = {
  card: {
    padding:5,
  }
}

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

@connect((store) => {
  return {
    filter: store.movie.filter,
    count: store.count.count
  }
})

export default class Filter extends React.Component {
  componentWillMount() {
    //this.props.dispatch(fetchPoster(this.props.))
    this.props.dispatch(inc(2))
  }

  handleChange(){
    console.log('hello')
  }

  render() {
    console.log(this.props)
    return (
          <div style={styles.card}>
            <Select
            name="form-field-name"
            value="one"
            options={options}
            onChange={this.handleChange}
            />
          </div>
    );
  }
}
