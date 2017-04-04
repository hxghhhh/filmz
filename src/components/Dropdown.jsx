import React from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { inc } from '../actions';
import Select from 'react-select';
import {fetchFilteredMovie } from '../actions/movie.actions'

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
    filter: store.filter
  }
})

export default class Dropdown extends React.Component {
  handleChange(value) {
    if (this.props.name === 'Year') {
      this.props.dispatch({type:'SET_YEAR', payload: value})
    } else if (this.props.name === 'Genre') {
      this.props.dispatch({type:'SET_GENRE', payload: value})
    } else if (this.props.name === 'Sort By') {
      this.props.dispatch({type:'SET_SORT_BY', payload: value})
    }
  }

  render() {
    const { options, name, value } = this.props
    return (
          <div style={styles.card}>
              <span>{name}</span>
              <div style={{width: this.props.width}}>
              <Select
                value={value}
                options={options}
                onChange={(newValue) => {this.handleChange(newValue.value)}}
                clearable={false}
                addLabelText={name}
              />
            </div>
          </div>
    );
  }
}
