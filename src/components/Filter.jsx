import React from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import { inc } from '../actions';
import Select from 'react-select';
import Dropdown from './Dropdown.jsx'

var styles = {
  card: {
    padding:5,
    display: 'flex'
  }
}

var options = [
  { value: 2016, label: 2016 },
  { value: 'two', label: 'Two' }
];

var filter = {
  year: [],
  genre: [
    { value: 28, label: "Action"},
    { value: 12, label: "Adventure"},
    { value: 16, label: "Animation"},
    { value: 35, label: "Comedy"},
    { value: 80, label: "Crime"},
    { value: 99, label: "Documentary"},
    { value: 18, label: "Drama"},
    { value: 10751, label: "Family"},
    { value: 14, label: "Fantasy"},
    { value: 36, label: "History"},
    { value: 27, label: "Horror"},
    { value: 10402, label: "Music"},
    { value: 9648, label: "Mystery"},
    { value: 10749, label: "Romance"},
    { value: 878, label: "Science Fiction"},
    { value: 10770, label: "TV Movie"},
    { value: 53, label: "Thriller"},
    { value: 10752, label: "War"},
    { value: 37, label: "Western"}
  ],
  sort_by: [
    {value:'pop_desc', label: 'Popularity Descending'},
    {value:'pop_asc', label: 'Popularity Ascending'},
    {value:'rate_desc', label: 'Rating Descending'},
    {value:'rate_asc', label: 'Rating Ascending'},
  ]
}

@connect((store) => {
  return {
    filter: store.movie.filter,
    count: store.count.count
  }
})

export default class Filter extends React.Component {
  componentWillMount() {
    this.getYears()
  }

  getYears(){
    for(var i = 2016; i >= 1900; i--){
      filter.year.push({value:i, label:String(i)})
    }
  }

  handleChange(){
    console.log('hello')
  }

  render() {
    return (
          <div style={styles.card}>
          <Dropdown
            width={100}
            name={'Year'}
            options={filter.year}/>
          <Dropdown
            width={200}
            name={'Sort By'}
            options={filter.sort_by}/>
          <Dropdown
            width={300}  
            name={'Genre'}
            options={filter.genre}/>
          </div>
    );
  }
}
