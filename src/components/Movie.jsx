import React from 'react';
import config from '../config';

var styles = {
  card: {
    padding:5,
    display: 'flex',
    height: 350
  }
}

export default class Movie extends React.Component {
  render() {
    const { original_title, id, poster_path} = this.props;
    return (
          <div style={styles.card}>
          <img src={config.posterPath+'/w500/'+poster_path}
            width={250}
          />
          </div>
    );
  }
}
