import React from 'react';
import config from '../config';

export default class Movie extends React.Component {
  componentWillMount() {
    //this.props.dispatch(fetchPoster(this.props.))
  }

  render() {
    console.log(this.props)
    const { original_title, id, poster_path} = this.props;
    return (
          <div>
          <img src={config.posterPath+'/w500/'+poster_path}
            width={250}
          />
          </div>
    );
  }
}
