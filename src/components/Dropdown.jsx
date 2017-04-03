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
  },
  dropdown: {
    width:100
  }
}

@connect((store) => {
  return {
    filter: store.movie.filter,
    count: store.count.count
  }
})

export default class Dropdown extends React.Component {
  componentWillMount() {
    //this.props.dispatch(fetchPoster(this.props.))
    this.props.dispatch(inc(2))
  }

  handleChange(){
    console.log('hello')
  }

  render() {
    const { options, name } = this.props
    return (
          <div style={styles.card}>
              <span>{name}</span>
              <div style={{width: this.props.width}}>
              <Select
              value="one"
              options={options}
              onChange={this.handleChange}
              clearable={false}
              />
            </div>
          </div>
    );
  }
}
